/*
    Hospitales
    ruta: '/api/hospitales'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
} = require('../controllers/hospitales')


const router = Router();
//No es necesario que en el get coloque la ruta, ya que se que si se ingresa aqui es porque viene desde api/hospitales
router.get( '/', getHospitales );

router.post( '/', //ruta esta formada por el ('path', midelware o [midelware], controlador)
    [
        validarJWT,
        check('nombre','El nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ], 
    crearHospital 
);

router.put( '/:id',
    [
        validarJWT,
        check('nombre','El nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ],
    actualizarHospital
);

router.delete( '/:id',
    validarJWT,
    borrarHospital
);



module.exports = router;
