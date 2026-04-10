import User from '../models/User.js';
import logger from '../utils/logger.js';

const userController = {
  // Get all users
  getAll: (req, res) => {
    try {
      const users = User.getAll();
      res.json({ status: 'success', data: users });
    } catch (error) {
      logger.error(`Error fetching users: ${error.message}`);
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // Get user by ID
  getById: (req, res) => {
    try {
      const { id } = req.params;
      const user = User.getById(id);
      
      if (!user) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
      }

      res.json({ status: 'success', data: user });
    } catch (error) {
      logger.error(`Error fetching user: ${error.message}`);
      res.status(500).json({ status: 'error', message: error.message });
    }
  },

  // Create new user
  create: (req, res) => {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ status: 'error', message: 'Name and email required' });
      }

      const user = new User(null, name, email);
      user.save();

      res.status(201).json({ status: 'success', data: user });
      logger.success(`User created: ${email}`);
    } catch (error) {
      logger.error(`Error creating user: ${error.message}`);
      res.status(500).json({ status: 'error', message: error.message });
    }
  },
};

export default userController;
