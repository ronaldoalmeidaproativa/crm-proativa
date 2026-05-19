const express = require('express');
const router = express.Router();

// @route   GET /api/media
// @desc    Listar campanhas de mídia
// @access  Private
router.get('/', async (req, res) => {
  try {
    res.json({ success: true, message: 'Lista de campanhas', data: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao listar campanhas' });
  }
});

module.exports = router;
