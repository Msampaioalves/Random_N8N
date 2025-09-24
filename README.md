# Random n8n Custom Node

Este projeto implementa um conector personalizado para o n8n chamado **Random**, que gera um número aleatório usando a API do Random.org.

## Funcionalidades
- Operação: **True Random Number Generator**
- Inputs: `Min` e `Max` (ambos inteiros, inclusivos)
- Integração com [random.org](https://www.random.org/)

## Estrutura do Projeto
- `docker-compose.yml`: Sobe n8n + Postgres localmente
- `.n8n/custom/nodes/Random`: Código do custom node

## Como rodar localmente

### 1. Instale as dependências do custom node
```bash
cd .n8n/custom/nodes/Random
npm install
npm run build
```

### 2. Suba a infraestrutura
```bash
docker compose up -d
```
Acesse o n8n em: http://localhost:5678 (usuário: admin, senha: admin)

### 3. Ative o custom node
O n8n carrega automaticamente nodes em `.n8n/custom/nodes`.

## Configuração de ambiente
- As variáveis já estão definidas no `docker-compose.yml`.
- Banco: Postgres (usuário/senha: n8n)

## Testes
- Crie um workflow no n8n usando o node **Random**.
- Defina os valores de `Min` e `Max` e execute.

## Observações
- Node.js 22 LTS recomendado para build do custom node.
- Siga as melhores práticas da [documentação oficial do n8n](https://docs.n8n.io/).

---

**Autor:** Seu Nome
