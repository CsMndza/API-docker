const mongoose = require('mongoose');

const dbconnect = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/users_prueba", {});
        console.log("Conexion correcta");
    } catch (err) {
        console.error("Hay un error en la conexión:", err);
    }
}

module.exports = dbconnect;
