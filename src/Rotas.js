import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';



const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/login" element={<Login/>} />
                <Route exact={true} path="/cadastro" element={<Cadastro/>} />
               
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;

