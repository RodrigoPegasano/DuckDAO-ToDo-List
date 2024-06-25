// CSS
import './NavBar.css'

// React
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
            <header>
                <Link className="header-img" to="/">
                    <img src="assets\DuckDAO.svg" width={150}></img>
                </Link>
                <div className='header-nav'>
                    <Link className="nav-link" to="/lista-tareas">Lista de tareas</Link>
                    <Link className="nav-link" to="/usuarios">Usuarios</Link>
                    <Link className="nav-link" to="/crear-usuario">Crear usuario</Link>
                </div>
            </header>
        </>
    )

}

export default NavBar