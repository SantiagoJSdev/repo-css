
import React from 'react'
import './App.css'

export const App = () => {
  return (
    <div className='container'>
      <header className='container__navBar'></header>
      <div className='container__informacion'>

        <div className='container__perfil'>
    
          <div className='perfil__back'>
            <div className='interno__borde'>
              <div className='borde__about'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ja63pG-b1ebiic3ZwhA891LcdOW-UnYoqw&usqp=CAU' alt='img' />
                <div className='about__content'>
                  <h1>Santiago Reyes</h1>
                  <div className='content__detail'>
                    <h4>Diseñador Digital</h4>
                    <h5>Ingles - Español</h5>
                    <p>Bogota - Colombia</p>
                    <p>sigor.saman@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='borde__socialMedia'>
                <div className='socialMedia__editar'>
                  <button className='editar__button'>Editar</button>
                  <i className="fa fa-code-fork editar__icom'" aria-hidden="true"></i>
                </div>
                <div className='socialMedia_seguidores'>
                  <p>43 Seguidores</p>
                </div>
                <div className='socialMedia__logos'>
                  <div className='logos__instagram'>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                  <div className='logos__twitter'>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div className='logos__link'>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='perfil__button'>
            <div className='button__content'>
              <h4 className='button__h4'>Mis Industrias</h4>
              <button className='button__'>Diseño Grafico</button>
              <button className='button__'>Animacion</button>
              <button className='button__'>Fotografia</button>
            </div>
            <div className='button__div'>Logo</div>
          </div>
          <div className='perfil__curvaBranding'>
            <div className='curvaBranding__button'>Branding</div>
            <div className='curvaBranding__button'>Editorial</div>
            <div className='curvaBranding__button'>Empaques</div>
            <div className='curvaBranding__button'>Branding</div>
            <div className='curvaBranding__button'>Branding</div>
            <div className='curvaBranding__button'>Branding</div>
          </div>

        </div>

      </div>


    </div>
  )
}
