import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: procces.env.EMAIL_HOST,
        port: procces.env.EMAIL_PORT,
        auth: {
            //type "OAuth2"
            user: procces.env.EMAIL_USER,
            pass: procces.env.EMAIL_PASS,
        }
    });

    const {email, nombre, token} = datos;
    //ENVIAR EMAIL
    const info = await transport.sendMail({
        from: "AEC - ADMINISTRADOR DE ECOMERCE ARTICULOS",
        to: email,
        subject: 'Comprueba tu cuenta en AEC',
        text: 'Comprueba tu cuenta de AEC',
        html: `<p>Hola: ${nombre}, comprueba tu cuenta AEC. </p>
                <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
                
                <a> href="${process.env.FRONTEND_URL}/confirmar/${token}"</a></p>
                
                <p> Si tu no creates esta cuenta, puedes ignorar este mensaje</p>`
    });

    //console.log("Mensaje enviado: %s, info.messageId");

};

export default emailRegistro