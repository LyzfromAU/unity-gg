const express = require('express');
const path = require('path');

const app = express();
const PORT = 3009;

// Serve the Unity WebGL files
app.use(express.static(path.join(__dirname, 'Build')));


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
