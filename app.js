const crearArchivo  = require("./helpers/multiplicar.js")
const argv = require("./config/yargs")
const colors = require('colors');

crearArchivo(argv.b,argv.h,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,"Creado"))
    .catch(err=>console.log(err))



