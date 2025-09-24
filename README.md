# Random n8n Custom Node – Random
> Gere números aleatórios verdadeiros no n8n usando a API do Random.org.
---
## Visão Geral
Este projeto entrega um **custom node** para a plataforma n8n, chamado **Random**, que gera um número aleatório real (true random) a partir de um intervalo definido pelo usuário, utilizando a API pública do [Random.org](https://www.random.org/).
---
## Funcionalidades
- **Nome do node:** Random
- **Operação:** True Random Number Generator
- **Inputs obrigatórios:**
	- `Min` (número inteiro, valor mínimo inclusivo)
	- `Max` (número inteiro, valor máximo inclusivo)
- **Integração:** Consome o endpoint GET do Random.org para garantir aleatoriedade real
- **Output:** Um número aleatório entre Min e Max
- **Interface amigável:** Inputs e descrições claras
- **Ícone SVG personalizado**
---
## Estrutura do Projeto

```
RandomN8N/
├── docker-compose.yml         # Infraestrutura n8n + Postgres
├── .n8n/
│   └── custom/
│       └── nodes/
│           └── Random/
│               ├── src/      # Código-fonte do custom node
│               ├── package.json
│               └── ...
├── README.md
└── ...
```
---
## Como rodar localmente (passo a passo funcional)
### 1. Instale as dependências do custom node
Abra o terminal na raiz do projeto e execute:
```bash
cd .n8n/custom/nodes/Random
npm install
### 2. Instale as dependências de desenvolvimento (para evitar erros de importação de tipos)
```bash
npm install --save-dev n8n-workflow n8n-core
### 3. Faça o build do custom node
```bash
cd C:\Users\Pichau\Documents\RandomN8N\.n8n\custom\nodes\Random
npm run build
```
### 4. Suba a infraestrutura n8n + Postgres
Volte para a raiz do projeto e execute:
```bash
cd C:\Users\Pichau\Documents\RandomN8N
docker compose up -d
```
### 5. Acesse o n8n
Acesse: http://localhost:5678

Na primeira vez, preencha os campos de cadastro (pode inventar e-mail, nome e senha).
### 6. Ativação do custom node
O n8n carrega automaticamente nodes presentes em `.n8n/custom/nodes`.
---
## Testando o conector
1. No n8n, crie um novo workflow
2. Adicione o node **Random**
3. Preencha os campos `Min` e `Max` com inteiros
4. Execute o workflow: o output será um número aleatório real do Random.org
---
## Configuração de ambiente
- Todas as variáveis necessárias já estão definidas no `docker-compose.yml`.
- Banco de dados: Postgres (usuário: n8n, senha: n8n)
- Node.js 22 LTS recomendado para build do custom node
---
## Referências e melhores práticas
- [Documentação oficial n8n – Custom Nodes](https://docs.n8n.io/creating-nodes/create-node/)
- [Random.org API](https://www.random.org/clients/http/)
---

**Autor:** Miguel Sampaio Alves



