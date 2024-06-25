// CSS
import './Tarea.css'

// Components
import AccionesTarea from "../accionesTarea/AccionesTarea"

function Tarea({ tarea, onTareaCambiada, onBorrarTarea }) {

    return (
        <li>
            <span>
                <label className={[(tarea.hecha ? "tarea-hecha" : ""), (tarea.borrado === "" ? "tarea-eliminada" : "")].join(" ")}>{tarea.texto}</label>
            </span>
            <span>
                <AccionesTarea estadoTarea={onTareaCambiada} borradoTarea={onBorrarTarea} onChecked={tarea} onBorrado={tarea}></AccionesTarea>
            </span>
        </li>
    )

}

export default Tarea