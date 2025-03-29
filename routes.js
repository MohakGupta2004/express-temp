const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Add more routes here as needed

module.exports = router;