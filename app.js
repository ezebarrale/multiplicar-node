const argv = require('./config/yargs').argv;
var colors = require('colors');



//const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}

//let base = 6;

/* let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base*i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado!`);
});
 */

//console.log(argv);

/* let argv2 = process.argv;

console.log('Limite', argv.limite); */

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e)); */