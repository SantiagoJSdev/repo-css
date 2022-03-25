
import React from 'react'
import './App.css'
import { NavBar } from './nav/NavBar'
import { CardPerfil } from './perfil/CardPerfil'



export const App = () => {


  return (

    <div className='container'>
      <NavBar />
      <CardPerfil />
      <div className='container__informacion'>
      </div>
    </div>
  )
}
