その日試していたことを書いていたらアドベントカレンダー 25 日が溶けている。

変数は以下で試した。
```
AKS_CLUSTER_GROUP_NAME="noyclustergroup"
AKS_NAME="noyclustergroup-aks"
RESOURCE_LOCATION="eastus" 
GROUP_NAME="noyclustergroup"
CLUSTER_NAME="noyclustergroup-cluster"
EXTENSION_NAME="noy-appservice-ext"
NAMESPACE="noy-appservice-ns"
KUBE_ENVIRONMENT_NAME="noykube" 
```


## セットアップ

https://learn.microsoft.com/ja-jp/azure/app-service/manage-create-arc-environment?tabs=bash



### Azure CLI に拡張機能追加
```bash:bash
az extension add --upgrade --yes --name connectedk8s
az extension add --upgrade --yes --name k8s-extension
az extension add --upgrade --yes --name customlocation
az provider register --namespace Microsoft.ExtendedLocation --wait
az provider register --namespace Microsoft.Web --wait
az provider register --namespace Microsoft.KubernetesConfiguration --wait
az extension remove --name appservice-kube
az extension add --upgrade --yes --name appservice-kube
``` 

### Kubectl まで
``` bash:bash
# 変数
AKS_CLUSTER_GROUP_NAME="noyclustergroup"
AKS_NAME="noyclustergroup-aks"
RESOURCE_LOCATION="eastus" 

# リソース グループ作成
az group create -g $AKS_CLUSTER_GROUP_NAME -l $RESOURCE_LOCATION
az aks create --resource-group $AKS_CLUSTER_GROUP_NAME --name $AKS_NAME --enable-aad --generate-ssh-keys
az aks get-credentials --resource-group $AKS_CLUSTER_GROUP_NAME --name $AKS_NAME --admin

kubectl get ns
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2dd98f56-bdbd-baab-cd1f-ad4c3ddf5a6c.png)

### 接続

```bash:bash
GROUP_NAME="noyclustergroup"
CLUSTER_NAME="noyclustergroup-cluster"
az connectedk8s connect --resource-group $GROUP_NAME --name $CLUSTER_NAME
az connectedk8s show --resource-group $GROUP_NAME --name $CLUSTER_NAME
```

### Log Analytics 用変数設定

```bash:bash
WORKSPACE_NAME="$GROUP_NAME-workspace" # Name of the Log Analytics workspace
az monitor log-analytics workspace create --resource-group $GROUP_NAME --workspace-name $WORKSPACE_NAME

LOG_ANALYTICS_WORKSPACE_ID=$(az monitor log-analytics workspace show --resource-group GROUP_NAME --workspace-name $WORKSPACE_NAME --query customerId --output tsv)
LOG_ANALYTICS_WORKSPACE_ID_ENC=$(printf %s $LOG_ANALYTICS_WORKSPACE_ID | base64 -w0) 
LOG_ANALYTICS_KEY=$(az monitor log-analytics workspace get-shared-keys --resource-group GROUP_NAME --workspace-name $WORKSPACE_NAME --query primarySharedKey --output tsv)
LOG_ANALYTICS_KEY_ENC=$(printf %s $LOG_ANALYTICS_KEY | base64 -w0) # Needed for the next step
```


### 拡張機能インストール

```bash:bash
EXTENSION_NAME="noy-appservice-ext"
NAMESPACE="noy-appservice-ns"
KUBE_ENVIRONMENT_NAME="noykube" 

az k8s-extension create --resource-group $GROUP_NAME --name $EXTENSION_NAME --cluster-type connectedClusters --cluster-name $CLUSTER_NAME --extension-type 'Microsoft.Web.Appservice' --release-train stable --auto-upgrade-minor-version true --scope cluster --release-namespace $NAMESPACE --configuration-settings "Microsoft.CustomLocation.ServiceAccount=default" --configuration-settings "appsNamespace=${NAMESPACE}" --configuration-settings "clusterName=${KUBE_ENVIRONMENT_NAME}" --configuration-settings "keda.enabled=true" --configuration-settings "buildService.storageClassName=default" --configuration-settings "buildService.storageAccessMode=ReadWriteOnce" --configuration-settings "customConfigMap=${NAMESPACE}/kube-environment-config" --configuration-settings "envoy.annotations.service.beta.kubernetes.io/azure-load-balancer-resource-group=${aksClusterGroupName}" --configuration-settings "logProcessor.appLogs.destination=log-analytics" --config-protected-settings "logProcessor.appLogs.logAnalyticsConfig.customerId=${LOG_ANALYTICS_WORKSPACE_ID_ENC}" --config-protected-settings "logProcessor.appLogs.logAnalyticsConfig.sharedKey=${LOG_ANALYTICS_KEY_ENC}"
```

### ID を取っておく

```bash:bash
EXTENSION_ID=$(az k8s-extension show --cluster-type connectedClusters --cluster-name $CLUSTER_NAME --resource-group $GROUP_NAME --name $EXTENSION_NAME --query id --output tsv)

az resource wait --ids $EXTENSION_ID --custom "properties.installState!='Pending'" --api-version "2020-07-01-preview"

kubectl get pods -n $NAMESPACE
```

一旦この段階で以下となることを確認

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c151cd4f-a345-114e-48ef-9613496a053a.png)



### カスタムの場所を作成

```bash:bash
CUSTOM_LOCATION_NAME="noy-custom-location" 

CONNECTED_CLUSTER_ID=$(az connectedk8s show --resource-group $GROUP_NAME --name $CLUSTER_NAME --query id --output tsv)

EXTENSION_ID=$(az k8s-extension show \
    --cluster-type connectedClusters \
    --cluster-name $CLUSTER_NAME \
    --resource-group $GROUP_NAME \
    --name $EXTENSION_NAME \
    --query id \
    --output tsv)


az customlocation create --resource-group $GROUP_NAME --name $CUSTOM_LOCATION_NAME --host-resource-id $CONNECTED_CLUSTER_ID --namespace $NAMESPACE --cluster-extension-ids $EXTENSION_ID


az customlocation show --resource-group $GROUP_NAME --name $CUSTOM_LOCATION_NAME
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5492fcea-30a7-fec7-9609-10ed74e9be5e.png)


### 場所確認

```bash:bash
CUSTOM_LOCATION_ID=$(az customlocation show --resource-group $GROUP_NAME --name $CUSTOM_LOCATION_NAME --query id --output tsv)
```

### App Service Kubernetes 環境を作成する
```bash:bash
az appservice kube create \
    --resource-group $GROUP_NAME \
    --name $KUBE_ENVIRONMENT_NAME \
    --custom-location $CUSTOM_LOCATION_ID 

az appservice kube show --resource-group $GROUP_NAME --name $KUBE_ENVIRONMENT_NAME
```

ここまで来た段階でようやく次


## Logic Apps 作成

https://learn.microsoft.com/ja-jp/azure/logic-apps/azure-arc-enabled-logic-apps-create-deploy-workflows?tabs=visual-studio-code#deploy-logic-app


### Azure CLI に拡張機能追加
```bash:bash
az extension add --yes --source "https://aka.ms/logicapp-latest-py2.py3-none-any.whl"
```

ここからは通常の Logic Apps デプロイ

```bash:bash
az logicapp create --name AKSLogicApps --resource-group $GROUP_NAME --subscription <SubscriptionID> --storage-account '<Storage Account Resouce ID>' --custom-location $CUSTOM_LOCATION_ID
```

できた。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/e1b57d9c-6758-b771-a54f-229ecfef46de.png)

めっちゃエラーが出ている

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a23fc586-c5e2-8e7b-95a3-7fbec96508b0.png)

OS は Linux

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2b45d905-fd51-cb25-9990-d471b49ed68f.png)

Zip デプロイ

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/42c2390c-28ff-982d-9642-2eb49857f4e5.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ac09a89d-115c-6f05-0314-d2a24a5e6228.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/914d8935-c986-1a16-fbc1-9cf1a94a82f1.png)

以上です～

つづく。
