import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import fileupload from 'express-fileupload';

import conectarDB from './config/db.js'
import usuariosRoutes from './routes/usuarioRoutes.js'
import productosRoutes from './routes/productoRoutes.js'
import ventaRoutes from './routes/ventaRoutes.js';

const port = process.env.port || 4000;
dotenv.config();

const app = express();
app.use(express.json());

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: './files'
}))

conectarDB();

//GESTION USUARIOS
app.use('/api/usuarios', usuariosRoutes);

//GESTION Productos
app.use('/api/productos', productosRoutes);

//GESTION Ventas
app.use('/api/ventas', ventaRoutes);


app.listen(port, () => {
    console.log(`El servidor esta funcionando holiwi`)
});