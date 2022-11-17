import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
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
                
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirme aquí</a></p>
                
                <p> Si tu no creates esta cuenta, puedes ignorar este mensaje</p>`
    });
    //console.log("Mensaje enviado: %s, info.messageId");

};

export default emailRegistro