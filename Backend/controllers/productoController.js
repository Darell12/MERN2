import Producto from '../models/Producto.js';
import {
        uploadImage,
        deleteImage
} from '../helper/cloudinary.js'


const prueba = (req, res) => {
    res.send({
        msg : "En esta ruta gestionaremos todas la peticiones correspondiente al modelo de producto"
    })
};

const createProductos = async (req, res) => {
    try {
        const {nombre, descripcion, precio, stock  } = req.body
        let image;


        if (req.files.image){
        const result = await uploadImage(req.files.image.tempFilePath);
        await fs.remove(req.files.image.tempFilePath);
        image ={
            url: result.secure_url,
            public_id: result.public_id,
        };
        console.log(result)
    }

    const Newproduct = new Producto({nombre, descripcion, precio, image, stock});
    await Newproduct.save();
    return res.json(Newproduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: error.message});
        
    }
}

const getProductos = async (req, res) => {
}

const updateProductos = async (req, res) =>{
}

const deleteProductos = async (req, res) =>{

}

const getProducto = async (req, res) =>{
}

export {
    prueba,
    createProductos,
    getProducto,
    getProductos,
    deleteProductos,
    updateProductos
};