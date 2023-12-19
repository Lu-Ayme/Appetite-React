import './assets/css/app.css'

import SideBar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'
import ContentRowMovies from "./components/ContentRowMovies";
import SearchMovies from './components/SearchMovies';
import CajadeCombos from './components/CajadeCombos';
import Categorias from './components/Categorías';
import Presentacion from './components/Presentacion'
import Error404 from './components/Error404'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar />

        <Routes>
          <Route path='/' element={<ContentWrapper />} />
         {/*<Route path='/Presentación' element={<Presentacion />} />*/}
          <Route path='/CajadeCombos' element={<CajadeCombos />} />
          <Route path='/tables' element={<ContentRowMovies />} />
          <Route path='/Categorias' element={<Categorias />} />
          <Route path='/search' element={<SearchMovies />} />
          <Route element={<Error404 />} />
        </Routes>

      </div>
    </>
  )
}

export default App
