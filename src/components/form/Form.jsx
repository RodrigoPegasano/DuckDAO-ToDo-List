// CSS
import './Form.css'

// useState
import { useState } from "react"

function Form({ onInsertarUsuario }) {

    // Constante de como queremos que sea el estado inicial de nuestro objeto
    const INITIAL_STATE = {
        foto: "",
        nombre: "",
        apellido: "",
        nacionalidad: "",
        nacimiento: "",
        email: "",
        contraseña: ""
    }

    const [dato, setDato] = useState(INITIAL_STATE)

    // Función para guardar la información cuando cambia el valor del input
    function cambiarAtributo(e, atributo) {
        // Se escribe entre [] porque queremos el valor de atributo
        // Si lo ponemos sin [], nos agrega un nuevo atributo llamado "atributo" a nuestro objeto
        setDato({ ...dato, [atributo]: e.target.value })
    }

    // Función para insertar un nuevo usuario con los datos que están en los campos del form
    function insertar() {
        onInsertarUsuario(dato)
        alert("Usuario creado")
        setDato(INITIAL_STATE)
    }

    return (
        <>
            {/* <legend><h2>Crear usuario</h2></legend> */}

            {/* onChange = Cuando cambia el valor del input, lo agrega al campo que le corresponde en el objeto  */}
            <fieldset>
                <div className='foto-preview'>
                    <img width={100} src={dato.foto} placeholder='Foto'></img>
                </div>
                <div className='foto'>
                    <input value={dato.foto} onChange={(e) => cambiarAtributo(e, 'foto')} placeholder='Foto' type="text"></input>
                </div>

                <div className='nombre-apellido'>
                    <input className='nombre' value={dato.nombre} onChange={(e) => cambiarAtributo(e, 'nombre')} placeholder='Nombre' type="text"></input>

                    <input value={dato.apellido} onChange={(e) => cambiarAtributo(e, 'apellido')} placeholder='Apellido' type="text"></input>
                </div>

                <div className='nacionalidad-nacimiento'>
                    <input className='nacionalidad' value={dato.nacionalidad} onChange={(e) => cambiarAtributo(e, 'nacionalidad')} placeholder='Nacionalidad' type="text"></input>

                    <input value={dato.nacimiento} onChange={(e) => cambiarAtributo(e, 'nacimiento')} placeholder='dd/mm/aaaa' type="date" min="1900-01-01" max="2024-12-31"></input>
                </div>

                <div className='email'>
                    <input value={dato.email} onChange={(e) => cambiarAtributo(e, 'email')} placeholder='Email' type="email"></input>
                </div>

                <div className='contraseña'>
                    <input value={dato.contraseña} onChange={(e) => cambiarAtributo(e, 'contraseña')} placeholder='Contraseña' type="password"></input>
                </div>
            </fieldset>

            {/* onClick = Al hacer clic en el botón, agrega los datos datos del formulario */}
            <button className='enviar-form' onClick={insertar}>Enviar</button>
        </>
    )

}

export default Form