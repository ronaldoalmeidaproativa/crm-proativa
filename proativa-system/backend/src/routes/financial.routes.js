const express = require('express');
const router = express.Router();

// @route   GET /api/financial
// @desc    Listar dados financeiros
// @access  Private (Financeiro, Diretor, Admin)
router.get('/', async (req, res) => {
  try {
    res.json({ success: true, message: 'Dados financeiros', data: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao buscar dados financeiros' });
  }
});

module.exports = router;
