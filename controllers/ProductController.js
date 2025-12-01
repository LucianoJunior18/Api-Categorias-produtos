const { Product, Category } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { name, description, price, categoryId } = req.body;
      const category = await Category.findByPk(categoryId);
      if (!category) return res.status(400).json({ error: 'Invalid categoryId' });
      const product = await Product.create({ name, description, price, categoryId });
      return res.status(201).json(product);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async list(req, res) {
    try {
      const products = await Product.findAll({ include: [{ model: Category, as: 'category' }] });
      return res.json(products);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, { include: [{ model: Category, as: 'category' }] });
      if (!product) return res.status(404).json({ error: 'Product not found' });
      return res.json(product);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price, categoryId } = req.body;
      const product = await Product.findByPk(id);
      if (!product) return res.status(404).json({ error: 'Product not found' });
      if (categoryId) {
        const category = await Category.findByPk(categoryId);
        if (!category) return res.status(400).json({ error: 'Invalid categoryId' });
      }
      await product.update({ name, description, price, categoryId });
      return res.json(product);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) return res.status(404).json({ error: 'Product not found' });
      await product.destroy();
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
};