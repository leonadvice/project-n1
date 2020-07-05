require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const authRoutes = require('./Routes/authRoutes');

app.use(authRoutes);

app.listen(PORT, () => console.log(`rest service is running on port ${PORT}`));
