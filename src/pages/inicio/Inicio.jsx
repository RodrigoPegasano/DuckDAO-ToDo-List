// CSS
import './Inicio.css'

function Inicio() {

    return (
        <>
            <div className='inicio'>
                <h1 className='titulo-inicio'>Bienvenido a <span className="titulo-amarillo">DuckDAO</span></h1>
                <div className='opciones'>
                    <a className='botones-opciones' href='/lista-tareas'>Lista de tareas</a>
                    <a className='botones-opciones' href='/usuarios'>Ver todos los usuarios</a>
                    <a className='botones-opciones' href='/crear-usuario'>Crear nuevo usuario</a>
                </div>
            </div>
        </>
    )

}

export default Inicio