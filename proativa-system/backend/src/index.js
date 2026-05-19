const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

const app = express();

// Middleware de segurança
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Sistema PROATIVA está rodando!',
    timestamp: new Date().toISOString()
  });
});

// Importar rotas
const authRoutes = require('./routes/auth.routes');
const clientRoutes = require('./routes/client.routes');
const projectRoutes = require('./routes/project.routes');
const briefingRoutes = require('./routes/briefing.routes');
const taskRoutes = require('./routes/task.routes');
const mediaRoutes = require('./routes/media.routes');
const financialRoutes = require('./routes/financial.routes');
const userRoutes = require('./routes/user.routes');

// Usar rotas
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/briefings', briefingRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/financial', financialRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Erro interno do servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Rota não encontrada'
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀  SISTEMA PROATIVA - Backend API                      ║
║                                                           ║
║   Servidor rodando na porta ${PORT}                        ║
║   Ambiente: ${process.env.NODE_ENV || 'development'}                          ║
║                                                           ║
║   Módulos disponíveis:                                    ║
║   ✅ Autenticação                                         ║
║   ✅ Clientes (CRM)                                       ║
║   ✅ Projetos                                             ║
║   ✅ Briefings                                            ║
║   ✅ Tarefas (Kanban)                                     ║
║   ✅ Mídia                                                ║
║   ✅ Financeiro                                           ║
║   ✅ Usuários                                             ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});

module.exports = app;
