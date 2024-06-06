import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/service"
import Layout from "./layoute"
import About from "./pages/about"
import Projects from "./pages/portofolio"

function App (){
  return(
    <div>
      
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/projects" element={<Projects/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
