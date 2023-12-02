## 準備
[Azure PowerShell を使用して Windows に Terraform をインストールする | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/developer/terraform/get-started-windows-powershell?tabs=bash)

[Install | Terraform | HashiCorp Developer](https://developer.hashicorp.com/terraform/downloads)

### Path を通す
```
C:\Users\nobukoyamada>terraform -version
Terraform v1.5.5
on windows_386
```


## 本題

[クイック スタート: Terraform を使用して Azure リソース グループを作成する | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/developer/terraform/create-resource-group?tabs=azure-cli)

### ファイルを用意

```providers.tf

terraform {
  required_version = ">=0.12"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>2.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~>3.0"
    }
  }
}

provider "azurerm" {
  features {}
}
```

```main.tf
resource "random_pet" "rg_name" {
  prefix = var.resource_group_name_prefix
}

resource "azurerm_resource_group" "rg" {
  location = var.resource_group_location
  name     = random_pet.rg_name.id
}
```

```variables.tf
variable "resource_group_location" {
  default     = "eastus"
  description = "Location of the resource group."
}

variable "resource_group_name_prefix" {
  default     = "rg"
  description = "Prefix of the resource group name that's combined with a random ID so name is unique in your Azure subscription."
}
```

```outputs.tf
output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}
```


`terraform init -upgrade`

`terraform apply main.tfplan`


## 完成
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/96e64041-052e-0014-6d49-94036a114bad.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2f121d8d-8da6-2da7-4cb9-fcec0122aee2.png)

## 後片付け

`terraform plan -destroy -out main.destroy.tfplan`

`terraform apply main.destroy.tfplan`

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c72d6ef9-3558-e104-5b27-fc95356a0a86.png)



以上を踏まえ、[クイック スタート: Terraform を使用して Linux VM を作成する - Azure Virtual Machines | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/virtual-machines/linux/quick-create-terraform) を行えば VM 作成から削除までよろしくできる

はずだが、小細工しないと動かなかった。

[クイックスタート: Terraform を使用して Azure で Linux VM クラスターを作成する - Azure Virtual Machines | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/virtual-machines/linux/quick-cluster-create-terraform?tabs=azure-cli)

のほか

[TerraformでVM作成（Azure） - Qiita](https://qiita.com/Asano_san/items/90aa39d726f3558b3051) を踏まえ、以下に完成

[Terraform で Linux VM 作成して SSH するまで - Qiita](https://qiita.com/e99h2121/items/00781afec389a8b8e85e)

以上です～
