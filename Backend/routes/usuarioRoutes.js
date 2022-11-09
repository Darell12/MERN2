import express from 'express';
import {
    prueba,
    registrar,
    confirmar
} from '../controllers/usuarioController.js';

const router = express.Router();

//rutas publicas
router.get('/prueba', prueba);
router.get('/', registrar);
router.get('/confirmar/:token', confirmar);
export default router;