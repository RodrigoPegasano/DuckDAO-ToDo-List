// CSS
import './Usuario.css'

// Componente de como se ve un usuario creado
function Usuario({ usuario }) {

    return (
        <>
            <div className="usuario">
                <img src={usuario.foto} width={100} height={100}></img>
                <div className='info-1'>
                    <span className='info-nombre'>{usuario.nombre} </span><span className='info-apellido'>{usuario.apellido}</span>
                </div>
                <div className='info-2'>
                    <span>{usuario.nacionalidad}, </span><span>{usuario.nacimiento}</span>
                </div>
                <div className='info-3'>
                    <a href={`mailto:${usuario.email}`} target='_blanK'>{usuario.email}</a>
                </div>
            </div>
        </>
    )

}

export default Usuario