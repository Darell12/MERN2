import mongoose from 'mongoose';

const ventaSchema = mongoose.Schema(
    {
        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario"
        },
        articulos:{
            type: Array,
            required: true,
        },
        confirmado:{
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Venta = mongoose.model('Venta', ventaSchema);
export default Venta;
