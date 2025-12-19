# 🚗 Ride Backend - API NestJS
## Generation Brasil NestJS

API REST de alto desempenho para gerenciamento de caronas desenvolvida com NestJS

![Node Version](https://img.shields.io/badge/Node-%3E%3D%2018-brightgreen) ![NestJS](https://img.shields.io/badge/NestJS-11-red) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue) ![License](https://img.shields.io/badge/License-UNLICENSED-inactive)

---

## 📖 Sobre o Projeto

API backend robusta desenvolvida durante o bootcamp da Generation Brasil para consolidar conhecimentos em NestJS, TypeORM, autenticação JWT e arquitetura de software. O projeto implementa um sistema completo de gerenciamento de caronas com sistema de usuários e categorias/destinos.

---

## ✨ Funcionalidades

### ✅ Implementado
- ✅ CRUD completo de produtos/caronas, usuários e categorias
- ✅ Autenticação com JWT e Passport
- ✅ Validação robusta de dados com class-validator
- ✅ Integração com MySQL/MariaDB via TypeORM
- ✅ Arquitetura modular e escalável
- ✅ Bcrypt para hash seguro de senhas
- ✅ Guards de autenticação (JWT e Local)
- ✅ Serviços de dados para desenvolvimento e testes
- ✅ Testes E2E com Jest e Supertest

### 🔄 Em Desenvolvimento
- 🔄 Documentação interativa com Swagger
- 🔄 Paginação avançada
- 🔄 Sistema de avaliações de caronas

---

## 🛠️ Tecnologias

### Core Framework
- **NestJS v11.0.1** - Framework Node.js progressivo
- **TypeScript v5.7** - Superset JavaScript tipado
- **Node.js >= 18** - Runtime JavaScript

### Banco de Dados e ORM
- **TypeORM v0.3.28** - ORM para TypeScript
- **MySQL2 v3.16.0** - Driver MySQL
- **PostgreSQL** - Suporte opcional (driver pg incluído)
- **SQLite3** - Suporte opcional para testes

### Autenticação e Segurança
- **Passport.js v0.7.0** - Middleware de autenticação
- **JWT (@nestjs/jwt v11.0.2)** - Autenticação sem estado
- **Bcrypt v6.0.0** - Hash de senhas

### Validação e Transformação
- **class-validator v0.14.3** - Validação de dados
- **class-transformer v0.5.1** - Transformação de dados

### Documentação e Ferramentas
- **Swagger/OpenAPI (@nestjs/swagger v11.2.3)** - Documentação interativa
- **ESLint v9.18.0** - Linter JavaScript/TypeScript
- **Prettier v3.4.2** - Formatador de código

### Testes
- **Jest v30.0.0** - Framework de testes
- **Supertest v7.0.0** - Testes HTTP
- **ts-jest v29.2.5** - Suporte TypeScript em Jest

---

## 🚀 Começando

### Pré-requisitos
- Node.js >= 18.0.0
- npm >= 9.0.0 ou yarn >= 3.0.0
- MySQL >= 5.7 ou MariaDB >= 10.3
- Git (para clonar o repositório)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/ride-backend.git
cd ride-backend

# 2. Instale as dependências
npm install

# 3. Configure o arquivo .env
cp .env.example .env

# Edite o .env com suas credenciais do banco
# Exemplo:
# DB_HOST=localhost
# DB_PORT=3306
# DB_USERNAME=root
# DB_PASSWORD=sua_senha
# DB_NAME=ride_backend
# JWT_SECRET=sua_chave_secreta_aqui
```

### Configuração do Banco de Dados

```bash
# 1. Acesse o MySQL/MariaDB
mysql -u root -p

# 2. Crie o banco de dados
CREATE DATABASE ride_backend CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# 3. Saia do MySQL
EXIT;

# 4. (Opcional) Execute migrations
npm run migration:run
```

### Executando a Aplicação

```bash
# Modo desenvolvimento (com hot reload)
npm run start:dev

# Modo desenvolvimento com arquivo .env
npm run start:env

# Modo debug
npm run start:debug

# Modo produção (build + start)
npm run build
npm run start:prod
```

O servidor estará disponível em **http://localhost:3000**

---

## 📚 Endpoints da API

### Autenticação
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/auth/login` | Autenticar usuário (login) |
| POST | `/auth/register` | Registrar novo usuário |

### Usuários
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/usuarios` | Lista todos os usuários |
| GET | `/usuarios/:id` | Busca usuário por ID |
| POST | `/usuarios` | Cria novo usuário |
| PUT | `/usuarios/:id` | Atualiza usuário |
| DELETE | `/usuarios/:id` | Remove usuário |

### Produtos/Caronas
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/produtos` | Lista todos os produtos/caronas |
| GET | `/produtos/:id` | Busca produto por ID |
| GET | `/produtos/titulo/:titulo` | Busca produtos por título |
| POST | `/produtos` | Cria novo produto |
| PUT | `/produtos/:id` | Atualiza produto |
| DELETE | `/produtos/:id` | Remove produto |

### Categorias
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/categorias` | Lista todas as categorias |
| GET | `/categorias/:id` | Busca categoria por ID |
| GET | `/categorias/descricao/:descricao` | Busca categorias por descrição |
| POST | `/categorias` | Cria nova categoria |
| PUT | `/categorias/:id` | Atualiza categoria |
| DELETE | `/categorias/:id` | Remove categoria |

---

## 📋 Exemplos de Requisição

### Login
```bash
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@example.com",
  "senha": "senha123"
}
```

### Criar Produto/Carona
```bash
POST /produtos
Content-Type: application/json
Authorization: Bearer <seu_token_jwt>

{
  "titulo": "Carona para São Paulo",
  "descricao": "Saindo do Rio para São Paulo",
  "preco": 150.00,
  "categoriaId": 1,
  "usuarioId": 1
}
```

### Buscar Produtos
```bash
GET /produtos
Authorization: Bearer <seu_token_jwt>
```

---

## 📁 Estrutura do Projeto

```
ride-backend/
├── src/
│   ├── main.ts                          # Entry point da aplicação
│   ├── app.module.ts                    # Módulo raiz
│   ├── app.controller.ts                # Controller global
│   │
│   ├── auth/                            # 🔐 Módulo de Autenticação
│   │   ├── auth.module.ts               # Módulo de autenticação
│   │   ├── auth.service.ts              # Serviço de autenticação
│   │   ├── constants/
│   │   │   └── constants.ts             # Constantes JWT
│   │   ├── controllers/
│   │   │   └── auth.controller.ts       # Endpoints de auth
│   │   ├── entities/
│   │   │   └── usuariologin.entity.ts   # Entidade de login
│   │   ├── guard/
│   │   │   ├── jwt-auth.guard.ts        # Guard JWT
│   │   │   └── local-auth.guard.ts      # Guard Local (email/senha)
│   │   ├── bcrypt/
│   │   │   └── bcrypt.ts                # Utilidades de hash
│   │   └── strategy/
│   │       ├── jwt.strategy.ts          # Estratégia JWT
│   │       └── local.strategy.ts        # Estratégia Local
│   │
│   ├── usuario/                         # 👤 Módulo de Usuários
│   │   ├── usuario.module.ts            # Módulo de usuários
│   │   ├── usuario.service.ts           # Serviço de usuários
│   │   ├── controllers/
│   │   │   └── usuario.controller.ts    # Endpoints de usuários
│   │   └── entities/
│   │       └── usuario.entity.ts        # Entidade Usuario
│   │
│   ├── produto/                         # 🚗 Módulo de Produtos/Caronas
│   │   ├── produto.module.ts            # Módulo de produtos
│   │   ├── produto.service.ts           # Serviço de produtos
│   │   ├── controllers/
│   │   │   └── produto.controller.ts    # Endpoints de produtos
│   │   └── entities/
│   │       └── produto.entity.ts        # Entidade Produto
│   │
│   ├── categoria/                       # 🏷️ Módulo de Categorias
│   │   ├── categoria.module.ts          # Módulo de categorias
│   │   ├── categoria.service.ts         # Serviço de categorias
│   │   ├── controllers/
│   │   │   └── categoria.controller.ts  # Endpoints de categorias
│   │   └── entities/
│   │       └── categoria.entity.ts      # Entidade Categoria
│   │
│   └── data/                            # 📊 Serviços de Dados
│       └── services/
│           ├── dev.service.ts           # Serviço de desenvolvimento
│           └── prod.service.ts          # Serviço CRUD genérico
│
├── test/
│   ├── jest-e2e.json                    # Configuração Jest E2E
│   └── app.e2e-spec.ts                  # Testes E2E
│
├── eslint.config.mjs                    # Configuração ESLint
├── nest-cli.json                        # Configuração NestJS CLI
├── tsconfig.json                        # Configuração TypeScript
├── tsconfig.build.json                  # Configuração TypeScript (build)
├── package.json                         # Dependências do projeto
├── .env.example                         # Exemplo de variáveis de ambiente
├── .gitignore                           # Arquivos ignorados pelo Git
└── README.md                            # Este arquivo
```

---

## 📖 Descrição dos Módulos

### 🔐 Auth Module
Responsável pela autenticação, autorização e segurança da aplicação.

- **JWT Strategy**: Valida tokens JWT nas requisições protegidas
- **Local Strategy**: Autentica usuários por email/senha
- **Bcrypt**: Hash seguro de senhas

### 👤 Usuario Module
Gerencia dados e operações de usuários do sistema.

- CRUD completo de usuários
- Integração com módulo de autenticação
- Validação de dados de entrada

### 🚗 Produto Module
Gerencia produtos/caronas do sistema.

- CRUD completo de produtos
- Relacionamento com usuários e categorias
- Filtros e buscas avançadas

### 🏷️ Categoria Module
Gerencia categorias/destinos.

- CRUD completo de categorias
- Organização de conteúdo
- Validação de dados

### 📊 Data Module
Serviços utilitários para desenvolvimento e testes.

- Geração de dados de teste
- Operações CRUD genéricas

---

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev           # Inicia em modo desenvolvimento com hot reload
npm run start:env           # Inicia com suporte a arquivo .env
npm run start:debug         # Inicia em modo debug

# Produção
npm run build              # Compila o projeto para JavaScript
npm run start:prod         # Inicia o servidor compilado

# Código
npm run format             # Formata código com Prettier
npm run lint               # Verifica e corrige lint com ESLint

# Testes
npm run test               # Executa todos os testes
npm run test:watch         # Executa testes em modo watch
npm run test:cov           # Executa testes com cobertura
npm run test:debug         # Executa testes em modo debug
npm run test:e2e           # Executa testes end-to-end
```

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 🐛 Reportando Bugs

Se encontrar um bug, abra uma Issue descrevendo:

- Comportamento esperado
- Comportamento atual
- Passos para reproduzir
- Screenshots (se aplicável)

---

## 📋 Roadmap

- [ ] Implementar paginação avançada
- [ ] Adicionar documentação Swagger completa
- [ ] Implementar sistema de avaliações
- [ ] Criar dashboard de administração
- [ ] Implementar sistema de notificações
- [ ] Adicionar testes de integração
- [ ] Melhorar performance com caching

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [Documentação NestJS](https://docs.nestjs.com)
- [TypeORM Docs](https://typeorm.io)
- [Passport.js Strategies](http://www.passportjs.org)
- [JWT Introduction](https://jwt.io/introduction)

### Artigos Úteis
- Building a REST API with NestJS
- TypeORM Relations
- NestJS Security Best Practices

---

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique a documentação oficial do NestJS
2. Procure por issues existentes no repositório
3. Abra uma nova issue com detalhes completos
4. Entre em contato pelo Discord da Generation Brasil

---

**Desenvolvido com ❤️ durante o bootcamp Generation Brasil**
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
