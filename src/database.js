// Importar mongoose
import mongoose from 'mongoose'

// Permitir que solo los campos en el schema sean almacenados
// en la BDD
mongoose.set('strictQuery', true)

// Crear una función llamada connection()
const connection = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Database is connected on ${connection.host}:${connection.port}`)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}

// Exportar la función
export default connection