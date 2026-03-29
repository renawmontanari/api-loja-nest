# API Loja - Documentação

Uma API RESTful construída com **NestJS** para gerenciar usuários e produtos de uma loja online. A aplicação oferece autenticação de usuários e operações completas de CRUD para gerenciar o catálogo de produtos.

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Como Executar](#-como-executar)
- [Endpoints](#-endpoints)
- [Exemplos de Uso](#-exemplos-de-uso)
- [Estrutura de Dados](#-estrutura-de-dados)
- [Validações](#-validações)

## 🛠️ Tecnologias

- **Runtime**: Node.js
- **Framework**: NestJS 11.0+
- **Linguagem**: TypeScript
- **Validação**: class-validator
- **Transformação**: class-transformer
- **UUID**: v13.0.0
- **Testes**: Jest, Supertest
- **Linting**: ESLint, Prettier

## 📦 Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Acesse o diretório do projeto
cd api-loja-nest

# Instale as dependências
npm install
```

## 🚀 Como Executar

### Desenvolvimento

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`

### Produção

```bash
# Build do projeto
npm run build

# Inicie em produção
npm run start:prod
```

### Debug

```bash
npm run start:debug
```

## 📡 Endpoints

### Usuários

#### Criar Usuário

```http
POST /usuarios
```

**Body:**

```json
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "senha123"
}
```

**Resposta (201):**

```json
{
  "usuario": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "nome": "João Silva"
  },
  "message": "Usuário criado com sucesso!"
}
```

---

#### Listar Todos os Usuários

```http
GET /usuarios
```

**Resposta (200):**

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "nome": "João Silva"
  },
  {
    "id": "650e8400-e29b-41d4-a716-446655440001",
    "nome": "Maria Santos"
  }
]
```

---

#### Atualizar Usuário

```http
PUT /usuarios/:id
```

**Body:**

```json
{
  "nome": "João Silva Atualizado",
  "email": "joao.novo@example.com",
  "senha": "novaSenha123"
}
```

**Resposta (200):**

```json
{
  "usuario": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "nome": "João Silva Atualizado",
    "email": "joao.novo@example.com",
    "senha": "novaSenha123"
  },
  "message": "Usuário atualizado com sucesso!"
}
```

---

#### Deletar Usuário

```http
DELETE /usuarios/:id
```

**Resposta (200):**

```json
{
  "usuario": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "nome": "João Silva",
    "email": "joao@example.com",
    "senha": "senha123"
  },
  "message": "Usuário deletado com sucesso!"
}
```

---

### Produtos

#### Criar Produto

```http
POST /produtos
```

**Body:**

```json
{
  "nome": "Notebook Dell",
  "usuarioId": "550e8400-e29b-41d4-a716-446655440000",
  "valor": 3500.0,
  "quantidade": 10,
  "descricao": "Notebook de alta performance",
  "categoria": "Eletrônicos",
  "caracteristicas": [
    {
      "nome": "Processador",
      "descricao": "Intel Core i7"
    },
    {
      "nome": "Memória",
      "descricao": "16GB RAM"
    }
  ],
  "imagens": [
    {
      "url": "https://example.com/image1.jpg",
      "descricao": "Vista frontal do notebook"
    }
  ]
}
```

**Resposta (201):**

```json
{
  "id": "750e8400-e29b-41d4-a716-446655440002",
  "nome": "Notebook Dell",
  "usuarioId": "550e8400-e29b-41d4-a716-446655440000",
  "valor": 3500.0,
  "quantidade": 10,
  "descricao": "Notebook de alta performance",
  "categoria": "Eletrônicos",
  "caracteristicas": [
    {
      "nome": "Processador",
      "descricao": "Intel Core i7"
    },
    {
      "nome": "Memória",
      "descricao": "16GB RAM"
    }
  ],
  "imagens": [
    {
      "url": "https://example.com/image1.jpg",
      "descricao": "Vista frontal do notebook"
    }
  ]
}
```

---

#### Listar Todos os Produtos

```http
GET /produtos
```

**Resposta (200):**

```json
[
  {
    "id": "750e8400-e29b-41d4-a716-446655440002",
    "nome": "Notebook Dell",
    "usuarioId": "550e8400-e29b-41d4-a716-446655440000",
    "valor": 3500.00,
    "quantidade": 10,
    "descricao": "Notebook de alta performance",
    "categoria": "Eletrônicos",
    "caracteristicas": [...],
    "imagens": [...]
  }
]
```

---

#### Atualizar Produto

```http
PUT /produtos/:id
```

**Body:**

```json
{
  "nome": "Notebook Dell Atualizado",
  "valor": 3200.0,
  "quantidade": 15
}
```

**Resposta (200):**

```json
{
  "mensagem": "produto atualizado com sucesso",
  "produto": {
    "id": "750e8400-e29b-41d4-a716-446655440002",
    "nome": "Notebook Dell Atualizado",
    "valor": 3200.00,
    "quantidade": 15,
    ...
  }
}
```

---

#### Deletar Produto

```http
DELETE /produtos/:id
```

**Resposta (200):**

```json
{
  "mensagem": "produto removido com sucesso",
  "produto": {
    "id": "750e8400-e29b-41d4-a716-446655440002",
    "nome": "Notebook Dell",
    ...
  }
}
```

---

## 📝 Exemplos de Uso

### Usando cURL

**Criar um usuário:**

```bash
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@example.com",
    "senha": "senha123"
  }'
```

**Listar usuários:**

```bash
curl http://localhost:3000/usuarios
```

**Criar um produto:**

```bash
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Notebook Dell",
    "usuarioId": "550e8400-e29b-41d4-a716-446655440000",
    "valor": 3500.00,
    "quantidade": 10,
    "descricao": "Notebook de alta performance",
    "categoria": "Eletrônicos",
    "caracteristicas": [
      {
        "nome": "Processador",
        "descricao": "Intel Core i7"
      }
    ],
    "imagens": [
      {
        "url": "https://example.com/image1.jpg",
        "descricao": "Vista frontal"
      }
    ]
  }'
```

## 🏗️ Estrutura de Dados

### Usuário

| Campo   | Tipo   | Obrigatório | Descrição                              |
| ------- | ------ | ----------- | -------------------------------------- |
| `id`    | UUID   | Sim         | Identificador único do usuário         |
| `nome`  | string | Sim         | Nome completo do usuário               |
| `email` | string | Sim         | Email único do usuário                 |
| `senha` | string | Sim         | Senha do usuário (mínimo 6 caracteres) |

### Produto

| Campo             | Tipo   | Obrigatório | Descrição                             |
| ----------------- | ------ | ----------- | ------------------------------------- |
| `id`              | UUID   | Sim         | Identificador único do produto        |
| `nome`            | string | Sim         | Nome do produto                       |
| `usuarioId`       | UUID   | Sim         | ID do usuário que cadastrou o produto |
| `valor`           | number | Sim         | Preço do produto                      |
| `quantidade`      | number | Sim         | Quantidade em estoque                 |
| `descricao`       | string | Sim         | Descrição do produto                  |
| `categoria`       | string | Sim         | Categoria do produto                  |
| `caracteristicas` | array  | Não         | Array de características do produto   |
| `imagens`         | array  | Não         | Array de URLs das imagens do produto  |

### Característica do Produto

| Campo       | Tipo   | Obrigatório | Descrição                   |
| ----------- | ------ | ----------- | --------------------------- |
| `nome`      | string | Sim         | Nome da característica      |
| `descricao` | string | Sim         | Descrição da característica |

### Imagem do Produto

| Campo       | Tipo   | Obrigatório | Descrição            |
| ----------- | ------ | ----------- | -------------------- |
| `url`       | string | Sim         | URL válida da imagem |
| `descricao` | string | Não         | Descrição da imagem  |

## ✅ Validações

### Usuário

- ✓ Nome é obrigatório
- ✓ Email deve ser válido
- ✓ Email deve ser único (não pode ser duplicado)
- ✓ Senha deve ter no mínimo 6 caracteres

### Produto

- ✓ Nome é obrigatório
- ✓ Usuário ID deve ser um UUID válido
- ✓ Valor deve ser um número
- ✓ Quantidade deve ser um número positivo
- ✓ Descrição é obrigatória
- ✓ Categoria é obrigatória
- ✓ URLs das imagens devem ser válidas
- ✓ Características devem ter nome e descrição

## 📋 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev      # Inicia em modo watch
npm run start:debug    # Inicia com debugger

# Build
npm run build          # Compila para produção
npm start              # Inicia versão compilada

# Testes
npm test               # Executa testes unitários
npm run test:watch    # Executa testes em modo watch
npm run test:cov      # Executa testes com cobertura
npm run test:e2e      # Executa testes end-to-end

# Qualidade de código
npm run lint          # Lint e fix com ESLint
npm run format        # Formata código com Prettier
```

## 🔒 Segurança

- Validação de entrada em todos os endpoints
- Transformação automática de tipos com class-transformer
- Whitelist de propriedades para evitar injeção de dados
- Emails únicos para usuários

## 📄 Licença

UNLICENSED

## 👨‍💻 Autor

**Renan Montanari**

---

**Desenvolvido usando NestJS**
