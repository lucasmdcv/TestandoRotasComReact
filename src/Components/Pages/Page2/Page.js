import React from 'react';
import './Page.css'
import { useNavigate } from 'react-router-dom';

export const Page2 = () => {
  const navigate = useNavigate();



  const Home = () => {
    navigate('/')
  }

  const Page = () => {
    navigate('/Page1')
  }




  return (

    <center>

      <div>
        <h1>   Página  2        </h1>
        <p> bem vindo a página 2 </p>
      </div>

      <div>
        <div>
          <button onClick={Home} className='button'> Home </button>

        </div>
        <div>
          <button onClick={Page} className='button'> Página 1 </button>

        </div>
      </div>
    </center>

  )
}
