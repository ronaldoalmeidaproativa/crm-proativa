const express = require('express');
const router = express.Router();

// @route   GET /api/users
// @desc    Listar usuários
// @access  Private (Admin, Diretor)
router.get('/', async (req, res) => {
  try {
    res.json({ success: true, message: 'Lista de usuários', data: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao listar usuários' });
  }
});

module.exports = router;
