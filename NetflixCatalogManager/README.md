# Criando um Gerenciador de Catálogos da Netflix com Azure Functions e Banco de Dados

## 🚀 Tecnologias
- Azure Functions (C#)
- Azure SQL Database
- .NET Core

## ▶️ Como rodar
1. Configure o `local.settings.json` com sua connection string:
```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet",
    "SqlConnectionString": "Server=...;Database=...;User Id=...;Password=...;"
  }
}
