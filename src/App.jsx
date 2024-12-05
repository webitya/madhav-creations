import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import Gallery from "./pages/Gallery"
import Products from "./pages/Products"
import ContactUs from "./pages/ContactUs"




const App=()=>{
  const display=(
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/About-Us" element={<AboutUs/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Contact-Us" element={<ContactUs/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
  return display
}
export default App