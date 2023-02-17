const jwt = require('jsonwebtoken');



const validarJWT = (req, res, next) => {

    // Leer el Token
    const token = req.header('x-token');

    //Si no hay token, envio mensaje de que no hay token al usuario
    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    //Para verificar el JWT utilizamos el try and catch
    try {
        //Traemos el uid del payload del JWT
        const { uid } = jwt.verify( token, process.env.JWT_SECRET );
        //Con esto de arriba, verifica si el token coincide con el del env y seguira ejecutando el codigo
        //sino, avanza al catch

        //Establezco informacion en la req y digo que la req.uid va a ser igual al uid que viene del token
        //Y esto solo funciona si es que el token es correcto y se paso por la verificacion anterior
        req.uid = uid;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
 
}


module.exports = {
    validarJWT
}