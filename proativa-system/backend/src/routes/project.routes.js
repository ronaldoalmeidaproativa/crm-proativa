const express = require('express');
const router = express.Router();

// @route   GET /api/projects
// @desc    Listar todos os projetos
// @access  Private
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Lista de projetos',
      data: []
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao listar projetos' 
    });
  }
});

// @route   POST /api/projects
// @desc    Criar novo projeto
// @access  Private
router.post('/', async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: 'Projeto criado com sucesso'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao criar projeto' 
    });
  }
});

module.exports = router;