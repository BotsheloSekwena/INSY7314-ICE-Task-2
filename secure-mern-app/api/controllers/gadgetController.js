// Controller functions for gadget resources

// Temporary in-memory data store (initial seed data)
// Each gadget has 5 attributes: name, brand, price, category, stock (plus id = 6 total)
let gadgets = [
  { id: 'g1', name: 'Smartphone X', brand: 'TechCorp', price: 999.99, category: 'Electronics', stock: 50 },
  { id: 'g2', name: 'Wireless Earbuds', brand: 'AudioPro', price: 149.99, category: 'Audio', stock: 120 },
  { id: 'g3', name: 'Smart Watch', brand: 'TechCorp', price: 299.99, category: 'Wearables', stock: 75 }
];

// Helper to generate a new ID (g4, g5, g6, etc.)
const generateId = () => {
  const lastId = gadgets.length > 0
    ? parseInt(gadgets[gadgets.length - 1].id.substring(1))
    : 0;
  return `g${lastId + 1}`;
};

// GET all gadgets
const getAllGadgets = (req, res) => {
  res.status(200).json({
    status: 'success',
    count: gadgets.length,
    data: gadgets
  });
};

// GET a single gadget by ID
const getGadgetById = (req, res) => {
  const { id } = req.params;
  const gadget = gadgets.find(g => g.id === id);

  if (!gadget) {
    return res.status(404).json({
      status: 'error',
      message: `Gadget with ID ${id} not found`
    });
  }

  res.status(200).json({
    status: 'success',
    data: gadget
  });
};

// POST - Add a new gadget
const addGadget = (req, res) => {
  const { name, brand, price, category, stock } = req.body;

  const newGadget = {
    id: generateId(),
    name,
    brand,
    price,
    category,
    stock
  };

  gadgets.push(newGadget);

  res.status(201).json({
    status: 'success',
    message: 'Gadget added successfully',
    data: newGadget
  });
};

module.exports = {
  getAllGadgets,
  getGadgetById,
  addGadget
};