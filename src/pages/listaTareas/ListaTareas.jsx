// CSS
import './ListaTareas.css'

// UseState
import { useState } from 'react'

// Components
import InputTarea from "../../components/inputTarea/InputTarea"
import ListaTarea from '../../components/listaTarea/ListaTarea'

function ListaTareas() {

    const [tareas, setTareas] = useState([
        /* { texto: "Tarea 1", hecha: false, borrado: null },
        { texto: "Tarea 2", hecha: false, borrado: null } */
    ])

    // Función que recibe el valor del inputTarea
    function intentarAgregarTarea(textoTarea) {
        // Comprobar si una tarea ya existe o no
        // Si no existe en el array y es diferente de vacío, la agrega
        // Si existe, muestra un alert
        if (textoTarea !== "" && tareas.find(x => x.texto === textoTarea) === undefined) {
            setTareas([...tareas, { texto: textoTarea, hecha: false, borrado: null }])
        } else {
            alert("Esta tarea ya existe")
        }
    }

    function cambiarEstadoTarea(tareaCambiar) {
        setTareas(tareas.map(t => {
            if (t.texto === tareaCambiar.texto) {
                return { ...t, hecha: !t.hecha }
            } else {
                return t
            }
        }))
    }

    function cambiarBorradoTarea(borrarTarea) {
        setTareas(tareas.map(t => {
            if (t.texto === borrarTarea.texto) {
                if (t.borrado !== null) {
                    t.borrado = null
                } else {
                    t.borrado = ""
                }
            }
            return t
        }))
    }

    return (
        <>
            <div className='lista-tareas'>
                <div className='tareas-activas'>
                    <h2>Lista de tareas <span className='activas-number'>({tareas.filter(x => x.borrado === null).length})</span></h2>
                    <InputTarea onAgregarTarea={intentarAgregarTarea}></InputTarea>
                    <ListaTarea onTareaCambiada={cambiarEstadoTarea} onBorrarTarea={cambiarBorradoTarea} tareas={tareas.filter(t => t.borrado === null)}></ListaTarea>
                </div>

                <div className='tareas-finalizadas'>
                    <h2>Tareas finalizadas ({tareas.filter(x => x.borrado !== null).length})</h2>
                    <ListaTarea onTareaCambiada={cambiarEstadoTarea} onBorrarTarea={cambiarBorradoTarea} tareas={tareas.filter(t => t.borrado !== null)}></ListaTarea>
                </div>
            </div>
        </>
    )

}

export default ListaTareas