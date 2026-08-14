// Route definitions for gadget resources
const express = require('express');
const router = express.Router();
const {
  getAllGadgets,
  getGadgetById,
  addGadget
} = require('../controllers/gadgetController');
const validateGadget = require('../middleware/validateGadgetInput');

// GET /api/gadgets - Fetch all gadgets
router.get('/', getAllGadgets);

// GET /api/gadgets/:id - Fetch a gadget by ID
router.get('/:id', getGadgetById);

// POST /api/gadgets - Add a new gadget (with validation)
router.post('/', validateGadget, addGadget);

module.exports = router;