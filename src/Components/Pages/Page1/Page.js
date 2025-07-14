import React from 'react';
import './Page.css';
import { useNavigate } from 'react-router-dom';




export const Page1 = () => {

  const navigate = useNavigate();

  const Home = () => {
    navigate('/')
  }

  const Page2 = () => {
    navigate('/Page2')
  }



  return (
    <div className='*'>


      <center>

        <h1> Bem Vindo a Página 1 </h1>

        <p> você conseguiu chegar a essa página </p>


        <p>  todos os direitos reservados </p>
    

        <div>
          <button onClick={Home} className='button'> Home  </button>
        </div>

        <div>
          <button onClick={Page2} className='button'> Pagina 2   </button>
        </div>





      </center>

    </div>
  )
}

