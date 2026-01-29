# Azure API na Prática

Projeto demonstrando **Deploy de uma API na Nuvem na prática usando Azure Functions**.

## Endpoints disponíveis

### GET /api/status
Retorna o status da API.

Resposta:
```json
{
  "service": "azure-api-pratica",
  "status": "online",
  "timestamp": "2026-01-01T12:00:00.000Z"
}
```

### POST /api/echo
Retorna o corpo enviado na requisição.

Exemplo:
```json
{
  "name": "Azure",
  "env": "cloud"
}
```

---

## Pré-requisitos

- Node.js 18+
- Conta Azure
- Azure CLI
- Azure Functions Core Tools v4

Instalação:
```bash
npm install -g azure-functions-core-tools@4 --unsafe-perm true
```

---

## Executar localmente

```bash
npm install
npm start
```

API local:
- http://localhost:7071/api/status
- http://localhost:7071/api/echo

---

## Testar com cURL

### Status
```bash
curl http://localhost:7071/api/status
```

### Echo
```bash
curl -X POST http://localhost:7071/api/echo   -H "Content-Type: application/json"   -d '{ "mensagem": "Olá Azure" }'
```

---

## Deploy no Azure

1. Login:
```bash
az login
```

2. Publicar:
```bash
func azure functionapp publish <NOME_DA_FUNCTION_APP>
```

---

## Objetivo educacional

Este projeto serve como base didática para:
- Entender Azure Functions
- Criar APIs serverless
- Testar localmente
- Fazer deploy na nuvem Azure
