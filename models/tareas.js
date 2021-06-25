const Tarea = require("./tarea");

class Tareas  {

    _listado = {}; //donde se almacenaran las tareas

    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach( key =>{
            //const tarea = this._listado[key];
            listado.push(this._listado[key]);
        })

        return listado;
    } 

    constructor() { //constructor que organiza los datos
        this._listado = {};
    }

    borrarTarea( id = '') {
        if(this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ){

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.cyan;
            const {desc, completadoEn} = tarea;
            const estado= (completadoEn)? 'Completada'.green : 'Pendiente'.red ;
            console.log(`${ idx } ${ desc } :: ${ estado }`)

        });

    }

    listarPendientesCompletadas( completadas = true) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach( (tarea) => {

            const {desc, completadoEn} = tarea;
            const estado= (completadoEn)? 'Completada'.green : 'Pendiente'.red ;
            
            if(completadoEn) {
                if(completadas){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green}`)
                }
            }else {
                if(!completadas){
                    contador += 1;
                    console.log(`${ (contador + '.').red } ${ desc } :: ${ estado }`)
                }
            }
            
            //console.log(`${ } ${ desc } :: ${ estado }`)

        });
    }

    toggleCompletadas( ids = []) {
        
        ids.forEach( id => {

            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        });

        this.listadoArr.forEach( tarea => {

            if( !ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        })

    }
}


module.exports = Tareas;