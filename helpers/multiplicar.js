const fs = require("fs");
const colors = require('colors');
const stripAnsi = require("./stripAnsi")


const crearArchivo = async (base = 5,hasta = 10, l=false) =>{
    try {
        let salida = '';
        const nombreArchivo = `TABLA-${base}.txt`;
        salida+="======================\n".green;
        salida+=`${"TABLA DEL".green} ${colors.magenta(base)}\n`;
        salida+="======================\n".green;

        for (let i = 0; i <= hasta; i++) {
            salida += `${base} ${"x".green} ${i} ${"=".green} ${colors.magenta(base * i)}\n`;
        }

        if(l){
            console.log(salida)
        }

        fs.writeFileSync(`./salida/${nombreArchivo}`,stripAnsi(salida));
        return nombreArchivo;

    } catch (error) {
        throw error
    }
       
}

module.exports = crearArchivo