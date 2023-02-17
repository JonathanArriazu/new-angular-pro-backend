const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    usuario: { //Para saber que usuario es el que creo ese hospital
        required: true,
        type: Schema.Types.ObjectId,//Esto indica que hay una relacion entre
        ref: 'Usuario'//               este Schema y el de Usuario
    }
}, {  collection: 'hospitales' }); //Esto es como quiero que aparezca en mongoDB


HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Hospital', HospitalSchema );
