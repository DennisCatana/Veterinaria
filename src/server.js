// Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import routerVeterinarios from './routers/veterinario_routes.js'
import routerPacientes from './routers/paciente_routes.js'
import routerTratamiento from './routers/tratameinto_routes.js'





// Inicializaciones
const app = express()
dotenv.config()


// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())




// Middlewares 
app.use(express.json())


// Variables globales





// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})
//ruta para veterinarios
app.use('/api',routerVeterinarios)

//Ruta para pacientes
app.use('/api',routerPacientes)

app.use('/api',routerTratamiento)


// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))



// Exportar la instancia de express por medio de app
export default  app