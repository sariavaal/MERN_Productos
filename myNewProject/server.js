const { PORT } = require('./server/config/settings');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

require('./server/config/mongoose.config');

const ProductRouter = require('./server/routes/product.routes');
app.use('/api/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})