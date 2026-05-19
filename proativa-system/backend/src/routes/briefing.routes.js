const express = require('express');
const router = express.Router();

// @route   GET /api/briefings
// @desc    Listar todos os briefings
// @access  Private
router.get('/', async (req, res) => {
  try {
    res.json({ success: true, message: 'Lista de briefings', data: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao listar briefings' });
  }
});

// @route   POST /api/briefings
// @desc    Criar novo briefing
// @access  Private
router.post('/', async (req, res) => {
  try {
    res.status(201).json({ success: true, message: 'Briefing criado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao criar briefing' });
  }
});

module.exports = router;
