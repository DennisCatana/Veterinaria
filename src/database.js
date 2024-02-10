// Importar mongoose
import mongoose from 'mongoose';

// Permitir que solo los campos en el schema sean almacenados
// en la BDD
mongoose.set('strictQuery', true);

// Crear una función llamada connection()
const connection = async () => {
    try {
        // Conectar a la base de datos utilizando la cadena de conexión proporcionada en process.env.MONGODB_URI
        const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database is connected on ${dbConnection.connection.host}:${dbConnection.connection.port}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

// Exportar la función
export default connection;
