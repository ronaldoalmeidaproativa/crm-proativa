# 🚀 Sistema PROATIVA

Sistema ERP/CRM especializado para agências de publicidade.

## 📋 Visão Geral

O **PROATIVA** é uma plataforma completa para gestão de agências, incluindo:

- **CRM & Gestão de Clientes** - Pipeline de vendas e gestão de contas
- **Planejamento Estratégico** - Central de briefings e análise de mercado
- **Gestão de Projetos** - Kanban, prazos e alocação de recursos
- **Produção Criativa** - DAM e controle de versões
- **Mídia & Performance** - Planejamento e monitoramento de campanhas
- **Gestão Financeira** - Faturamento, custos e rentabilidade
- **Recursos Humanos** - Timesheet e gestão de equipe

## 🏗️ Estrutura do Projeto

```
proativa-system/
├── backend/          # API Node.js + Express
│   ├── src/
│   │   ├── config/   # Configurações (DB, etc)
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/   # Rotas da API
│   │   ├── services/
│   │   ├── middleware/
│   │   └── utils/
│   └── tests/
├── frontend/         # React + Vite + TailwindCSS
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── styles/
│   │   └── utils/
│   └── public/
├── database/         # Migrações e seeds
│   ├── migrations/
│   └── seeds/
├── docs/             # Documentação
└── scripts/          # Scripts utilitários
```

## 🛠️ Tecnologias

### Backend
- Node.js
- Express.js
- PostgreSQL + Sequelize ORM
- JWT para autenticação
- Redis para cache e filas

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router
- React Query
- Formik + Yup
- Lucide Icons

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+
- PostgreSQL 14+
- Redis (opcional)

### Instalação

```bash
# Instalar dependências
npm run install:all

# Configurar variáveis de ambiente
cp backend/.env.example backend/.env
# Editar backend/.env com suas configurações

# Rodar migrações do banco
npm run db:migrate

# Iniciar em desenvolvimento
npm run dev
```

### Acesso

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:3001
- **Health Check:** http://localhost:3001/health

## 📊 Módulos Implementados

| Módulo | Status | Descrição |
|--------|--------|-----------|
| Autenticação | ✅ | Login, registro, JWT |
| CRM | 🟡 | Estrutura básica criada |
| Projetos | 🟡 | Estrutura básica criada |
| Briefings | 🟡 | Estrutura básica criada |
| Kanban | 🟡 | Estrutura básica criada |
| Mídia | ⬜ | Pendente |
| Financeiro | ⬜ | Pendente |

Legenda: ✅ Completo | 🟡 Em desenvolvimento | ⬜ Pendente

## 👥 Matriz de Permissões

| Perfil | CRM | Briefing | Tráfego | Produção | Mídia | Financeiro |
|--------|-----|----------|---------|----------|-------|------------|
| Atendimento | ✅ | ✅ | ✅ | ⚠️ | ✅ | ⚠️ |
| Planejamento | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Criação | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Mídia | ❌ | ✅ | ✅ | ❌ | ✅ | ⚠️ |
| Financeiro | ⚠️ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Diretor | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 📈 Próximos Passos

1. Implementar models do Sequelize
2. Completar CRUD de clientes
3. Implementar sistema de kanban
4. Integrar com APIs de mídia (Google Ads, Meta)
5. Implementar relatórios financeiros
6. Adicionar testes automatizados

## 📄 Licença

MIT

---

Desenvolvido com ❤️ para agências de publicidade
