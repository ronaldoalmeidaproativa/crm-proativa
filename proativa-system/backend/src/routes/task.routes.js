const express = require('express');
const router = express.Router();

// @route   GET /api/tasks
// @desc    Listar todas as tarefas (Kanban)
// @access  Private
router.get('/', async (req, res) => {
  try {
    res.json({ success: true, message: 'Lista de tarefas', data: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao listar tarefas' });
  }
});

// @route   POST /api/tasks
// @desc    Criar nova tarefa
// @access  Private
router.post('/', async (req, res) => {
  try {
    res.status(201).json({ success: true, message: 'Tarefa criada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao criar tarefa' });
  }
});

module.exports = router;
