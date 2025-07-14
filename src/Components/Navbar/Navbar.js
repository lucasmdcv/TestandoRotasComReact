// Certifique-se de que o caminho e o nome do arquivo estão corretos, por exemplo, './Components/Navbar/Navbar.jsx'
import React from 'react';
import { Link } from 'react-router-dom'; // Importou 'Link' corretamente?



function Navbar () { // A função está exportada corretamente?
  return (
      
    <div className='navegacao'>

      <nav className='navegacao'>
        <row>

      <ul>
        <li>
          <Link to="/">Home</Link> {/* O 'to' corresponde à sua rota '/' ? */}
        </li>
        <li>
          <Link to="/Page">Página</Link> {/* O 'to' corresponde à sua rota '/Page' (case-sensitive)? */}
        </li>
        <li>
          <Link to="/Page2">Página2</Link> {/* O 'to' corresponde à sua rota '/Page' (case-sensitive)? */}
        </li>

      </ul>
        </row>
    </nav>
    </div>
  );
}

export default Navbar; // Está exportando o componente?