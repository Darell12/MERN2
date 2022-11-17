import express from 'express';
import {
    prueba,
    registrar,
    confirmar,
    auntenticar,
    perfil
} from '../controllers/usuarioController.js';

import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

//rutas publicas
router.get('/prueba', prueba);
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', auntenticar)

router.get('/perfil', checkAuth , perfil);
export default router;