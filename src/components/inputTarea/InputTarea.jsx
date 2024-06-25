// CSS
import './InputTarea.css'

// UseState
import { useState } from "react"

// onAgregarTarea = Prop para enviar el valor del input a ListaTareas
function InputTarea({ onAgregarTarea }) {

    // Variable para leer el texto en el input al hacer clic en el botón
    // texto = variable de lectura
    // setTexto = variable de cambio del valor
    // useState() = contiene el valor inicial del input
    const [texto, setTexto] = useState("")

    // Función para agregar tarea
    function agregarTarea() {
        onAgregarTarea(texto)
        setTexto("")
    }

    return (
        <>
            <div className='div-input'>
                {/*
                defaultValue = el valor inicial del input
                onChange = acción al cambiar el valor del input
            */}
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}></input>

                {/* onClick = al hacer clic en el botón activa la función arriba */}
                <button onClick={agregarTarea}>+</button>
            </div>
        </>
    )

}

export default InputTarea