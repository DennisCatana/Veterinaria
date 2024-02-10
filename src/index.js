//iMPORAT LA VARIABLE APP
import app from './server.js'

//Importando la funcion con la BDD
import connection from './database.js';

// Obtener el puerto desde la configuración de la aplicación
const port = process.env.PORT || 3000;

//llamando la funcion connection()
connection()


app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${port}`);
})




