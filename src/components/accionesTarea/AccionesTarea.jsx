// CSS
import './AccionesTarea.css'

function AccionesTarea({ onChecked, onBorrado, estadoTarea, borradoTarea }) {

    // Cambiar estado del checkbox si la tarea está hecha o no
    function cambiarEstado(e) {
        estadoTarea(onChecked)
        console.log("Estado cambiado...")
    }

    function borrar() {
        borradoTarea(onBorrado)
        console.log("Borrando tarea...")
    }

    return (
        <>
                <input type="checkbox" className='checkboxSize' checked={onChecked.hecha} onChange={cambiarEstado}></input>
                <button className='accion-borrar' onClick={borrar}>{onBorrado.borrado === null ? "🗑️" : "🔁"}</button>
        </>
    )

}

export default AccionesTarea