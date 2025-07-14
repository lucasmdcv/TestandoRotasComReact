import React from 'react';
import { BrowserRouter , Routes, Route, } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Page1 } from './Components/Pages/Page1/Page';
import { Page2 } from './Components/Pages/Page2/Page';

function App() {
  return (
    <BrowserRouter>

     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;