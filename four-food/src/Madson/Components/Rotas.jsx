import { 
    BrowserRouter,
    Routes, 
    Route,
  } from 'react-router-dom';
import Busca from '../Pages/Busca';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Perfil from '../Pages/Perfil';
import Cadastro from '../Pages/Cadastro/Cadastro';
import CadastroEndereco from '../Pages/Cadastro/CadastroEndereco';
import Restaurante from '../Pages/Restaurante'

  const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/Login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/Busca" element={<Busca/>}/>
                
                <Route path="/Perfil" element={<Perfil/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/CadastroEndereco" element={<CadastroEndereco/>}/>
                <Route path="/Restaurante/:id" element={<Restaurante/>}/>
            </Routes>
        </BrowserRouter>
    )
  }

  export default Rotas;