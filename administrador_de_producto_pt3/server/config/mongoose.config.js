const mongoose = require('mongoose');
const db_name = 'product_db_pt3';

const connectDB = async () => {
    try {
        await mongoose.connect(("mongodb://127.0.0.1:27017/" + db_name), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conexion a la base de datos establecida', db_name)
    } catch (error) {
        console.log('Error al establecer la conexion', error);
        throw error;
    }

}



module.exports = connectDB;