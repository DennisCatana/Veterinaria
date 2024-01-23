//Importar router de express
import {Router} from 'express'

import verificarAutenticacion from '../middlewares/autenticacion.js'

import { validacionVeterinario } from '../middlewares/validacionVeterinario.js';


//Crear la instancia router()
const router = Router()


import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";

//Rutas publicas
router.post('/registro',validacionVeterinario,registro)//Listo
router.post('/login',login)//Listo
router.get('/confirmar/:token',confirmEmail)
router.get('/veterinarios',listarVeterinarios)
router.post('/recuperar-password',recuperarPassword)//Listo
router.get('/recuperar-password/:token',comprobarTokenPasword)//Listo
router.post('/nuevo-password/:token',nuevoPassword)//Listo


//Rutas privadas
router.get('/perfil',verificarAutenticacion,perfil)
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
router.get('/veterinario/:id',verificarAutenticacion,detalleVeterinario)
router.put('/veterinario/:id',verificarAutenticacion,actualizarPerfil)//Listo


export default router
