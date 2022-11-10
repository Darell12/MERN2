import  express  from "express";
import {
    prueba,
    getProducto,
    deleteProductos,
    getProductos,
    createProductos,
    updateProductos
} from '../controllers/productoController.js'

const router = express.Router();

//Ruta Publica
router.get('/prueba', prueba);

//RUTAS DE GESTION PRODUCTOS
router.get('/productos', getProductos);
router.get('/productos/:id', getProducto);
router.post('/productos', createProductos);
router.put('/productos/:id', updateProductos);
router.delete('/productos/:id', deleteProductos);


export default router