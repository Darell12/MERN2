import  express  from "express";
import {
    prueba,

} from '../controllers/ventaController.js'

const router = express.Router();

//Ruta Publica
router.get('/prueba', prueba);


export default router