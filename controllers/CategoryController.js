const { Category, Product } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;
      const category = await Category.create({ name });
      return res.status(201).json(category);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async list(req, res) {
    try {
      const categories = await Category.findAll({ include: [{ model: Product, as: 'products' }] });
      return res.json(categories);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id, { include: [{ model: Product, as: 'products' }] });
      if (!category) return res.status(404).json({ error: 'Category not found' });
      return res.json(category);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await Category.findByPk(id);
      if (!category) return res.status(404).json({ error: 'Category not found' });
      await category.update({ name });
      return res.json(category);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) return res.status(404).json({ error: 'Category not found' });
      await category.destroy();
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
};