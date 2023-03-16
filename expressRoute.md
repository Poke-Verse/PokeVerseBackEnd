const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

router.get('/entries', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Go away team rocket' });
  }
});

module.exports = router;
