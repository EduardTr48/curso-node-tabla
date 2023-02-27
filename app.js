const crearArchivo  = require("./helpers/multiplicar.js")
const argv = require("./config/yargs")
const colors = require('colors');




// const [,,arg3 = "base=5"] = process.argv;
// const [,base=5] = arg3.split("=");
// console.log(argv)
crearArchivo(argv.b,argv.h,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,"Creado"))
    .catch(err=>console.log(err))



