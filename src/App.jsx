import { Outlet } from "react-router-dom"
import Footer from "./Components/Common/Footer"
import Navbar from "./Components/Common/Navbar"


function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
