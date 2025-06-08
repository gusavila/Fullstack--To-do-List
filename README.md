# 📝 Todo List App

Aplicação web para gerenciamento de tarefas com sistema de autenticação. Permite ao usuário registrar-se, fazer login, criar, editar e excluir tarefas.

![Imagem da lista de tarefas](https://github.com/user-attachments/assets/37b80bd7-4d73-41a8-9ba8-884ef0e62a42)

---

## 🛠️ Tecnologias

**Frontend:**
- React.js
- Tailwind CSS
- Axios
- React Router
- JWT Decode
- Framer Motion

**Backend:**
- Node.js
- Express.js
- PostgreSQL
- Bcrypt
- JSON Web Token (JWT)
- Dotenv

---

## 🚀 Funcionalidades

- Registro de usuário com login automático
- Login com persistência de sessão via JWT
- Logout com remoção do token
- Validação de formulário
- Criação, edição, exclusão e listagem de tarefas
- Tarefas vinculadas ao usuário autenticado
- Rotas protegidas com middleware

---

## 📁 Estrutura de Pastas

```bash
.
├── backend
│   ├── controllers
│   ├── db.js
│   ├── middleware
│   ├── models
│   ├── routes
│   └── index.js
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public
│   └── index.html
```

---

## ⚙️ Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Configure o **backend**:
```bash
cd backend
cp .env.example .env # ou crie seu próprio .env
npm install
npm run dev
```

> Variáveis necessárias no `.env`:
```env
PG_USER=""
PG_HOST=""
PG_DATABASE=""
PG_PASSWORD=""
PG_PORT=""

JWT_SECRET=sua_chave_secreta
```

3. Configure o **frontend**:
```bash
cd ../frontend
npm install
npm run dev
```

---

## 📌 TODO

- [ ] Filtro de tarefas concluídas/pedentes
- [ ] Dark Mode
- [ ] Deploy no Vercel e Render

---

## 🧑‍💻 Autor

**Gustavo**  
Formado em Sistemas de Informação, com foco em frontend web development.
