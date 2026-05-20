# e-Saúde
O Sistema e-Saúde foi idealizado para atender às necessidades de Unidades Básicas de Saúde (UBS) que enfrentam dificuldades no acesso centralizado às informações e no controle manual de intercorrências.

# Como rodar o projeto?

1. Instalar Node.js
2. Abrir o projeto no VS Code
3. Instalar dependências do BACKEND
4. Instalar dependências do FRONTEND
5. Rodar frontend e backend

# Como contribuir com o projeto?

- git pull
- git checkout -b minha-feature
- git add .
- git commit -m "feat: minha alteração"
- git push origin minha-feature

# Organização das Pastas FRONTEND

src/
  pages/
    public/ (Tudo que o cidadão/participante acessa sem senha - )  
      Home/ (index.jsx e style.jsx - A página inicial com busca e banners)
      DetalheUBS/ (index.jsx e style.jsx - O Raio-X da unidade e profissionais)
    restrita/ (Tudo que exige autenticação de Gestores e Admins - )  
      Login/ (index.jsx e style.jsx - A tela de chave de acesso)
      Gestor/
        Home/ (index.jsx e style.jsx - Painel do gestor para registrar intercorrências)
      Admin/
        Home/ (index.jsx e style.jsx - Painel do administrador para validar chamados)
