import verificarAutenticacion from "../middlewares/autenticacion.js";
import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';
import {Router} from 'express'
const router = Router()

import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";


router.post('/tratamiento/registro',verificarAutenticacion,registrarTratamiento)
router.get('/tratamiento/:id',verificarAutenticacion,detalleTratamiento)
router.put('/tratamiento/:id',verificarAutenticacion,actualizarTratamiento)
router.delete('/tratamiento/:id',verificarAutenticacion,eliminarTratamiento)
router.post('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)

router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)


export default router