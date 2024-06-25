// CSS
import './App.css'

// Bootstrap
import { Container } from 'react-bootstrap'

// Routes
import { Route, Routes } from 'react-router-dom'

// Pages
import NavBar from './pages/navBar/NavBar'
import ListaTareas from './pages/listaTareas/ListaTareas'
import Usuarios from './pages/usuarios/Usuarios'
import CrearUsuario from './pages/crearUsuario/CrearUsuario'
import Footer from './pages/footer/Footer'
import Inicio from './pages/inicio/Inicio'

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <Container>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/lista-tareas' element={<ListaTareas></ListaTareas>}></Route>
          <Route path='/usuarios' element={<Usuarios></Usuarios>}></Route>
          <Route path='/crear-usuario' element={<CrearUsuario></CrearUsuario>}></Route>
        </Routes>
      </Container>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App