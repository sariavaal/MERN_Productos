const connectDB = require('../config/mongoose.config');
const Product = require('../models/Product.model');

//productos a insertar
const productsData = [
    {
        title: 'Product 1',
        price: 100,
        description: 'Description 1'
    },
    {
        title: 'Product 2',
        price: 200,
        description: 'Description 2'
    },
    {
        title: 'Product 3',
        price: 300,
        description: 'Description 3'
    },
    {
        title: 'Product 4',
        price: 400,
        description: 'Description 4'
    },
    {
        title: 'Product 5',
        price: 500,
        description: 'Description 5'
    }
];

//conexion a la bd
connectDB()
    .then(() => {
        Product.insertMany(productsData)
            .then(() => {
                console.log('Data inserted successfully');
                process.exit();
            })
            .catch((err) => {
                console.log(err);
                process.exit();
            });
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    });

