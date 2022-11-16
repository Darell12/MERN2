import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LayoutAuth from './Layout/LayoutAuth'
import Login from './Pages/Login'
import Confirmar from './Pages/usuario/Confirmar'
import OlvidePassword from './Pages/usuario/OlvidePassword'
import Registro from './Pages/usuario/Registro'


function App() {



  return (
    <Router>
      <Routes>

{/*RUTAS PUBLICAS*/}
        <Route path='/'element={<LayoutAuth />}>
          <Route  index element={<Login/>} />
          <Route path='registro' element={<Registro/>}/>
          <Route path='olvide-password' element={<OlvidePassword/>}/>
          <Route path='confirmar/:id' element={<Confirmar/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
