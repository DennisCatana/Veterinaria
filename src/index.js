// Importar la aplicación express
import app from './server.js';

// Importar la función para la conexión con la base de datos
import connection from './database.js';

// Llamar a la función para establecer la conexión con la base de datos
connection();

// Obtener el puerto desde la configuración de la aplicación
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
