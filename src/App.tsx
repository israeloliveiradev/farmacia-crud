import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import FormularioCategoria from './category/formularioCategoria/FormularioCategoria'
import ListaCategorias from './category/listaCategoria/ListaCategorias'
import DeletarCategoria from './category/deletarCategoria/DeletarCategoria'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/categorias" element={<ListaCategorias/>}></Route>
            <Route path="/cadastroCategoria" element={<FormularioCategoria/>}></Route>
            <Route path="/editarCategoria/:id" element={<FormularioCategoria/>}></Route>
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>}></Route>
          </Routes>
        </div>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
