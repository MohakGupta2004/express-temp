const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes (modularized)
const routes = require('./routes'); // Import routes
app.use('/api', routes); // Mount routes at /api

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
