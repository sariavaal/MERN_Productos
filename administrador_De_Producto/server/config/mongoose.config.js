const mongoose = require('mongoose');
const db_name = 'product_db_pt2';

mongoose.connect(("mongodb://127.0.0.1:27017/"  + db_name), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));