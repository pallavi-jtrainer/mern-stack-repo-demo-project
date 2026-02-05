// express server

const express = require('express');
const cors = require('cors');

const productRoutes = require("./routes/productRoutes");

const orderRoutes = require('./routes/orderRoutes');

const userRoutes = require('./routes/userRoutes');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use("/api/products", productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send("Hello");
// });

module.exports = app;