const { response } = require('express');
const { validationResult } = require('express-validator')

const validarCampos = (req, res = response, next ) => { //next lo llamamos si es que este middleware pasa, entonces
    //continua con el siguiente middleware o controlador,etc

    const errores = validationResult( req ); //aqui se almacenaran todos los errores generados por el midelware de la ruta

    if ( !errores.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    //Si el codigo avanza hasta aqui, quiere decir que no hay errores, entonces, llamo al next();
    next();
}

module.exports = {
    validarCampos
}
