// CSS
import './ListaTarea.css'

// Components
import Tarea from "../tarea/Tarea"


function ListaTarea({ tareas, onTareaCambiada, onBorrarTarea }) {

    return (
        <ol className="lista">
            {tareas.map((x, idx) => <Tarea onTareaCambiada={onTareaCambiada} onBorrarTarea={onBorrarTarea} key={idx} tarea={x}></Tarea>)}
        </ol>
    )

}

export default ListaTarea