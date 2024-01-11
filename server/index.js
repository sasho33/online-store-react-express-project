const express = require('express');
PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
