
import { BtnDark } from './buttonDarkMode/BtnDark'
import { BtnSearch } from './buttonSearch/BtnSearch'
import { BtnNotifications } from './buttonsNotifications/BtnNotifications'
import './navBar.css'


export const NavBar = () => {
    return (
        <header className='container__header'>
            <div className='header__search'>
                <div className='search__darkMode'>
                    <BtnDark />
                    <BtnSearch />
                    <BtnNotifications />
                </div>
            </div>
            <div className='header__nav'>
                <nav className='nav__menu'>
                    <ul>
                        <li className='nav__menu--perfil'>
                            Perfil
                        </li>
                        <li className='nav__menu--btn'>
                            <button className='btn__empleo'>Empleo
                                <div className='empleo__dropdown'>
                                    <ul>
                                        <li>Crear</li>
                                        <li>Creados</li>
                                        <li>Mis aplicaciones</li>
                                    </ul>
                                </div>
                            </button>
                            <button className='btn__evento'>Evento
                                <div className='empleo__evento'>
                                    <ul>
                                        <li>Crear</li>
                                        <li>Creados</li>
                                        <li>Mis eventos</li>
                                    </ul>
                                </div>
                            </button>
                            <button className='btn__concurso'>Concurso
                                <div className='empleo__concurso'>
                                    <ul>
                                        <li>Crear</li>
                                        <li>Creados</li>
                                        <li>Mis concursos</li>
                                    </ul>
                                </div>
                            </button>

                        </li>
                        <li className='nav__menu--save'>
                            Guardado
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}
