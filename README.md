# 🚗 Ride Backend API : Velo

> API REST para gerenciamento de caronas — usuários, viagens e categorias com autenticação JWT.

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)

---

## 📌 Descrição

API REST desenvolvida com **NestJS** para gerenciamento de caronas, permitindo cadastro de usuários, criação de viagens e organização por categorias.

Construída com foco em boas práticas de arquitetura, segurança e escalabilidade — incluindo autenticação com JWT, validação de dados e testes automatizados.

---

## 🚀 Tecnologias

| Tecnologia | Função |
|---|---|
| NestJS (Node.js) | Framework principal |
| TypeScript | Tipagem estática |
| TypeORM | ORM para banco de dados |
| MySQL | Banco de dados relacional |
| Passport.js + JWT | Autenticação |
| Bcrypt | Hash de senhas |
| Jest + Supertest | Testes E2E |
| class-validator / class-transformer | Validação de dados |

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/Grupo-4-Turma-JavaScript-10/ride-backend.git

# Acesse a pasta
cd ride-backend

# Instale as dependências
npm install

# Inicie o servidor em modo desenvolvimento
npm run start:dev
```

> API disponível em: **http://localhost:3000**

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_NAME=ride_backend

JWT_SECRET=sua_chave_secreta
```

---

## 📡 Endpoints

### 🔐 Autenticação

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/auth/register` | Cadastro de usuário |
| `POST` | `/auth/login` | Login e geração do token JWT |

### 👤 Usuários

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/usuarios` | Lista todos os usuários |
| `GET` | `/usuarios/:id` | Busca usuário por ID |
| `POST` | `/usuarios` | Cria novo usuário |
| `PUT` | `/usuarios/:id` | Atualiza usuário |
| `DELETE` | `/usuarios/:id` | Remove usuário |

### 🚗 Caronas

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/caronas` | Lista todas as caronas |
| `GET` | `/caronas/:id` | Busca carona por ID |
| `POST` | `/caronas` | Cria nova carona |
| `PUT` | `/caronas/:id` | Atualiza carona |
| `DELETE` | `/caronas/:id` | Remove carona |

### 🏷️ Categorias

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/categorias` | Lista todas as categorias |
| `GET` | `/categorias/:id` | Busca categoria por ID |
| `POST` | `/categorias` | Cria nova categoria |
| `PUT` | `/categorias/:id` | Atualiza categoria |
| `DELETE` | `/categorias/:id` | Remove categoria |

---

## 💡 Diferenciais do projeto

- ✅ Autenticação segura com JWT e hash de senhas via Bcrypt
- ✅ Arquitetura modular seguindo o padrão do NestJS
- ✅ Validação robusta de dados com `class-validator`
- ✅ Testes E2E implementados com Jest e Supertest
- ✅ Boas práticas de API REST

---

## 🌐 Deploy

> https://velo-backend-4pl2.onrender.com/swagger#/



---

## 📷 Screenshots

> *(<img width="718" height="843" alt="image" src="https://github.com/user-attachments/assets/b7d85662-ac6a-4669-9679-26127f020e0a" />


---

## 📈 Melhorias futuras

- [ ] Documentação com Swagger / OpenAPI
- [ ] Paginação e filtros avançados
- [ ] Sistema de avaliações entre motoristas e passageiros
- [ ] Cache com Redis
- [ ] Deploy automatizado com CI/CD
