const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( resp => console.log(`tabla-${argv.b}.txt`.rainbow, 'Creado'))
    .catch( err => console.log(err));

 