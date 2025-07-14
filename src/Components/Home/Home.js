import React from 'react';

import './Home.css';

import { useNavigate } from 'react-router-dom';







export const Home = () => {
    const navigate = useNavigate();

    const Page1 = () => {
        navigate('./Page1')
    }
    const Page2 = () => {
        navigate('./Page2')
    }

    return (
        <body>

            <div className='*'>

                <center>

                    <div>
                        <h1>Bem vindo ao Aplicativo <br></br> React </h1>
                        <p> esta é uma pequena aplicação </p>
                        <br>
                        </br>

                        <p> para testar o conhecimentos de rotas </p>

                        <p> ( esse botão levará  para site de busca do google ) </p>

                    </div>
                    <div className='botaoHome'>
                        <a
                            name="clique aqui"
                            id="botao-componente"
                            class="btn btn-primary"
                            href="https://google.com"
                            role="button"
                            className='botaoHome'
                        >Botão </a
                        >

                    </div>
                    <screenLeft>
                        <div>
                            <h3>Opções</h3>

                            <div>

                                <button className='Botao'  onClick={Page1}                      >
                                    Vá para Página 1
                                </button>

                            </div>

                            <div>
                                <button className='Botao' onClick={Page2} >
                                    Vá para Página 2
                                </button>

                            </div>

                        </div>
                    </screenLeft>
                </center>
            </div>

        </body>
    )
}

