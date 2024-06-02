import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/service"
import Layout from "./layoute"

function App (){
  return(
    <div>
      
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
