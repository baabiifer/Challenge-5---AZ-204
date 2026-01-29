# cpf-validator (Azure Functions)

Microsserviço serverless em Node.js para validação de CPF usando **Azure Functions (HTTP Trigger)**.

## Endpoint

**POST** `/api/validate`

### Corpo da requisição
```json
{
  "cpf": "529.982.247-25"
}
```

### Resposta
```json
{
  "cpf": "529.982.247-25",
  "valido": true,
  "message": "CPF válido"
}
```

## Pré-requisitos

- Node.js 18+
- Conta Azure
- Azure CLI
- Azure Functions Core Tools

## 1. Instalar Azure Functions Core Tools

```bash
npm install -g azure-functions-core-tools@4 --unsafe-perm true
```

## 2. Login no Azure

```bash
az login
```

## 3. Instalar dependências

```bash
npm install
```

## 4. Executar localmente

```bash
npm start
```

Endpoint local:
```
http://localhost:7071/api/validate
```

## 5. Testar com cURL

```bash
curl -X POST http://localhost:7071/api/validate \
  -H "Content-Type: application/json" \
  -d '{ "cpf": "529.982.247-25" }'
```

## 6. Deploy para Azure

```bash
func azure functionapp publish <NOME_DA_FUNCTION_APP>
```

## Observações

- Retorna HTTP 400 quando CPF não é informado ou corpo inválido
- Implementa algoritmo oficial de validação de CPF
