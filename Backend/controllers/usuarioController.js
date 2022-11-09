import Usuario from "../models/Usuario.js";
import emailRegistro from "../helper/emailRegistro.js";

const prueba = (req, res) => {
    res.send({
        msg : "En esta ruta gestionaremos todas la peticiones correspondiente al modelo de usuarios"
    })
};

const registrar = async (req, res) => {

    const {nombre, email, password, telefono, direccion, web} = req.body;

    //Validar Usuario Duplicado
    //FindOne busca en los usuarios de la coleccion atributos duplicados
    const existeUsuario = await Usuario.findOne({email});
    
    if (existeUsuario) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({msg: error.message});
    };
    try {
        
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();

        //Enviar El Email
        emailRegistro({
            email,
            nombre,
            token: usuarioGuardado.token
        });

        res.json(usuarioGuardado);

    } catch (error) {
        console.error(error.message);
    };
};

const confirmar = async (req, res) => {
    //req.params Lee datos de la URL, en este caso el token
    const {token} = req.params
    const usuarioConfirmar = await Usuario.findOne({token});

    if (!usuarioConfirmar) {
        const error = new Error("Token no valid");
        return res.status(404).json({msg: error.message});
    };
    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        res.json({
            msg: "Usuario confirmado correctamente"
        });
    } catch (error) {
        console.error(error.message);
    }

}


export {
    prueba,
    registrar,
    confirmar
};