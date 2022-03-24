
import './cardPerfil.css'

export const CardPerfil = () => {
    return (
        <div className='container__Cardperfil'>
            <div className='cardperfil__curva3'>
                <div className='curva3__button'>Branding</div>
                <div className='curva3__button'>Editorial</div>
                <div className='curva3__button'>Empaques</div>
                <div className='curva3__button'>Branding</div>
                <div className='curva3__button'>Branding</div>
                <div className='curva3__button'>Branding</div>
            </div>
            <div className='cardperfil__curva2'>
                <div className='curva2__content'>
                    <h4 className='curva2__h4'>Mis Industrias</h4>
                    <button className='curva2__'>Diseño Grafico</button>
                    <button className='curva2__'>Animacion</button>
                    <button className='curva2__'>Fotografia</button>
                    <div className='curva2__editar'>Logo</div>
                </div>
                
            </div>
            <div className='cardperfil__back-curva1'></div>
            <div className='cardperfil__front-curva1'>
                <div className='curva1__img'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ja63pG-b1ebiic3ZwhA891LcdOW-UnYoqw&usqp=CAU' alt='img' />
                    <div className='img__content'>
                        <h1>Santiago Reyes</h1>
                        <div className='img__detail'>
                            <h4>Diseñador Digital</h4>
                            <h5>Ingles - Español</h5>
                            <p>Bogota - Colombia</p>
                            <p>sigor.saman@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='curva1__social'>
                    <div className='social__editar'>
                        <button className='editar__btn'>Editar</button>
                        <i className="fa fa-code-fork editar__icom'" aria-hidden="true"></i>
                    </div>
                    <div className='social_seguidores'>
                        <p>43 Seguidores</p>
                    </div>
                    <div className='social__logos'>
                        <div className='logos__instagram'>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div className='logos__twitter'>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className='logos__link'>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                        <div className='logos__instagram'>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div className='logos__twitter'>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className='logos__link'>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
