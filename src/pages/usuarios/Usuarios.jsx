// CSS
import './Usuarios.css'

// useState
import { useEffect, useState } from "react"

// Components
import Usuario from "../../components/usuario/Usuario"

function Usuarios() {

    // Array de objetos donde vamos a tener todos nuestros usuarios
    const [usuarios, setUsuarios] = useState([])

    // useEffect se utiliza para hacer la primera carga del componente
    // Si lo hacemos fuera, ese código se repetiría muchas veces
    useEffect(() => {
        fetch("http://localhost:3000/usuarios")
            .then((respuesta) =>
                respuesta.json()
                    .then((datos) => {
                        setUsuarios([...usuarios, ...datos])
                    }))
    }, [])

    return (
        <>
            <div className='todos-usuarios'>
                {usuarios.map(i => <Usuario usuario={i}></Usuario>)}
            </div>
        </>
    )

}

export default Usuarios