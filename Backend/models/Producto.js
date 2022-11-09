import mongoose from 'mongoose';

const productosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: Number,
        required: true,
        trim: true,
    },
    image: {
        url: String,
        public_id: String,
    },
    stock: {
        type: Number,
        required: true,
        trim: true,
    }
});

const Producto = mongoose.model('Producto', productosSchema);
export default Producto;