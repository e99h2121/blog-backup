## The Cat API

https://thecatapi.com/

お試しにちょうどいいのでたまに使う。

## Swagger.json 

その Swagger.json を作りたかったので作ったもの。

```JSON
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "The Cat API",
    "description": "An API for accessing cat images and data"
  },
  "host": "api.thecatapi.com",
  "basePath": "/v1",
  "schemes": [
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/images/search": {
      "get": {
        "summary": "Search cat images",
        "description": "Returns a list of cat images based on search criteria",
        "parameters": [
          {
            "name": "limit",
            "in": "query",
            "description": "The maximum number of results to return",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "page",
            "in": "query",
            "description": "The page number of results to return",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "breed_id",
            "in": "query",
            "description": "The ID of the breed to search for",
            "required": false,
            "type": "string"
          },
          {
            "name": "size",
            "in": "query",
            "description": "The size of the image to return (full or medium)",
            "required": false,
            "type": "string",
            "enum": [
              "full",
              "medium"
            ]
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Image"
              }
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Image": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "The ID of the image"
        },
        "url": {
          "type": "string",
          "description": "The URL of the image"
        },
        "breeds": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Breed"
          },
          "description": "The list of breeds associated with the image"
        }
      }
    },
    "Breed": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "The ID of the breed"
        },
        "name": {
          "type": "string",
          "description": "The name of the breed"
        },
        "description": {
          "type": "string",
          "description": "The description of the breed"
        }
      }
    }
  }
}

```

## Swagger のためのツール

https://zenn.dev/nekoniki/articles/acd946cc349d1e

あと Chat GPT。


## カスタム コネクタ

https://learn.microsoft.com/ja-jp/connectors/custom-connectors/create-logic-apps-connector

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c39fc918-a115-9149-7395-49d110ac707c.png)

## 完成
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ba4489a8-2eab-536c-df4f-9e9a55d2cc3d.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/fad35d8e-54ab-d378-0cdb-f7f29b6308cc.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ed2f61b9-45bb-ce00-d3ea-b2e941688f36.png)

以上
