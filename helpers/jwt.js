const jwt = require('jsonwebtoken');

const generarJWT = ( uid ) => {

    return new Promise( ( resolve, reject ) => {

        const payload = {
            uid,
            //Aqui tambien se puede poner nombre, email, todo lo que no sea info sensible
        };
    
        //El sign se utiliza para crear el JWT
        //El .sign lleva en sus parametros: (payload, secret or private key,
        //duracion del token, por ultimo un callback que retorna error y token)
        jwt.sign( payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, ( err, token ) => {
    
            if ( err ) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve( token );
            }
    
        });

    });

}


module.exports = {
    generarJWT,
}