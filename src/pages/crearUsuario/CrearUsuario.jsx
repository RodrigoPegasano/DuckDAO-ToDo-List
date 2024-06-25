// CSS
import './CrearUsuario.css'

// useState
import { useState } from "react"

// Components
import Form from "../../components/form/Form"
import Usuario from "../../components/usuario/Usuario"

// Formulario para crear perfil de un usuario
function CrearUsuario() {

    // Array de objetos donde vamos a tener todos nuestros usuarios
    const [usuarios, setUsuarios] = useState([])

    function insertarUsuario(usuario) {
        fetch("http://localhost:3000/usuarios", {
            // method = qué es lo que queremos hacer con la información
            // POST = Agrega ese nuevo objeto al array de la base de datos
            method: "POST",
            // body = tenemos que convertir el objeto a string
            body: JSON.stringify(usuario)
        }).then((response) => {
            setUsuarios([...usuarios, usuario])
        }).catch((error) => {
            alert("Error al crear un usuario")
        })
    }

    return (
        <>
            <div className="crear-usuario">
                <Form onInsertarUsuario={insertarUsuario}></Form>
            </div>
        </>
    )

}

export default CrearUsuario