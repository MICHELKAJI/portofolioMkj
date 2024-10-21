import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/service"
import Layout from "./layoute"
import About from "./pages/about"
import Projects from "./pages/portofolio"
import PageContacts from "./pages/Pagecontacts"
import ScrollToTop from "./components/scrolTop"


function App (){
  return(
    <div>
      <Router>
        <ScrollToTop/>
      <Layout/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/projects" element={<Projects/>}/> 
        <Route path="/contacts" element={<PageContacts/>}/> 
      </Routes>
      </Router>
    </div>
  )
}
export default App
