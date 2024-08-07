import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/service"
import Layout from "./layoute"
import About from "./pages/about"
import Projects from "./pages/portofolio"
import PageContacts from "./pages/Pagecontacts"


function App (){
  return(
    <div>
      <BrowserRouter>
      <Layout/>
      <Router>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/projects" element={<Projects/>}/> 
        <Route path="/contacts" element={<PageContacts/>}/> 
      </Router>
      </BrowserRouter>
    </div>
  )
}
export default App
