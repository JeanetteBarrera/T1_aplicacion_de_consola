const {v4: uudiv4} = require('uuid')
/*Utilizamos clases*/ 

class Tarea {
    id= '';
    desc= '';
    conmpletadoEn = null;

    //definimos un constructor de la clase Tarea que tiene como requerimiento la descripcion
    constructor( desc ) {
        this.id = uudiv4();
        this.desc = desc;
        this.conmpletadoEn = null; 
    }
}


module.exports = Tarea;