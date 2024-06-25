import './Footer.css'

function Footer() {

    return (
        <>
            <div className='footer'>
                <div>
                    <img src="assets\DuckDAO.svg" width={150}></img>
                </div>
                <div className='info'>
                    <a href='/'>Política de Privacidad</a>
                    <a href='/'>FAQ</a>
                    <a href='/'>Contacto</a>
                </div>
                <div >
                    <img src='assets\instagram.svg' width={40}></img>
                    <img className='social-margin' src='assets\linkedin.svg' width={40}></img>
                </div>
            </div>
        </>
    )

}

export default Footer