require("colors");

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear(); //para limpiar consola
        console.log('==============================='.green);
        console.log('    Seleccione una opcion'.green);
        console.log('===============================\n'.green);
    
        console.log(`${'1.' .green} Crear tarea`);
        console.log(`${'2.' .green} Listar tareas`);
        console.log(`${'3.' .green} Listar tareas completadas`);
        console.log(`${'4.' .green} Listar tareas pendientes`);
        console.log(`${'5.' .green} Completar tarea(s)`);
        console.log(`${'6.' .green} Borrar tarea`);
        console.log(`${'0.' .green} Salir\n`);
    
        /* definimos una interfase para recibir y dar datos */
        const readline = require('readline').createInterface({
            input: process.stdin, //ingresa dato
            output: process.stdout //enviamos dato al usuario
        });
    
        readline.question('Seleccione una opcion: ', (opt) =>{ //pregunta al usuario
            console.log({opt});
            readline.close(); //recibimos y finalizamos readline o se queda escuchando por siempre
        });
    
    })

}
const pausa = () => {

    return new Promise ( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin, //ingresa dato
            output: process.stdout //enviamos dato al usuario
        });
    
        readline.question(`\nPresione ${ 'ENTER'.green} para continuar\n`,(opt) => {
            readline.close() //recibimos y finalizamos readline o se queda escuchando por siempre
        
            resolve();
        })
    });
    
}

module.exports = {
    mostrarMenu,
    pausa
}