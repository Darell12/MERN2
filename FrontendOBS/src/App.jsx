import {Routes,Route,BrowserRouter} from "react-router-dom"



import Layout from "./Layout/Layout"

import Login from "./Pages/Login"
import Registro from "./Pages/Registro"
import Forgot from "./Pages/Forgot"
import Acercade from "./Pages/Acercade"

function App() {

  



  return (
    <>
    <BrowserRouter>
    
    <Routes>

    <Route path="/" element={<Layout/>}>  
    <Route path="/acerca-de" element={<Acercade/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/registro" element={<Registro/>} />
    <Route path="/olvide-clave" element={<Forgot/>} />
    </Route>

    

    
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
