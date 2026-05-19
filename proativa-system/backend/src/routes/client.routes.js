const express = require('express');
const router = express.Router();

// @route   GET /api/clients
// @desc    Listar todos os clientes
// @access  Private (Atendimento, Planejamento, Diretor, Admin)
router.get('/', async (req, res) => {
  try {
    // TODO: Implementar busca no banco de dados
    res.json({
      success: true,
      message: 'Lista de clientes',
      data: []
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao listar clientes' 
    });
  }
});

// @route   POST /api/clients
// @desc    Cadastrar novo cliente
// @access  Private (Atendimento, Diretor, Admin)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, industry } = req.body;

    // TODO: Validar dados e salvar no banco

    res.status(201).json({
      success: true,
      message: 'Cliente cadastrado com sucesso',
      data: { id: 1, name, email, phone, company, industry }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao cadastrar cliente' 
    });
  }
});

// @route   GET /api/clients/:id
// @desc    Obter detalhes de um cliente
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Buscar cliente no banco

    res.json({
      success: true,
      data: { id, name: 'Cliente Exemplo' }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao buscar cliente' 
    });
  }
});

// @route   PUT /api/clients/:id
// @desc    Atualizar cliente
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Atualizar cliente no banco

    res.json({
      success: true,
      message: 'Cliente atualizado com sucesso'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao atualizar cliente' 
    });
  }
});

// @route   DELETE /api/clients/:id
// @desc    Remover cliente
// @access  Private (Diretor, Admin)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Remover cliente do banco

    res.json({
      success: true,
      message: 'Cliente removido com sucesso'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao remover cliente' 
    });
  }
});

module.exports = router;