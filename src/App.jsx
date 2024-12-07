import { Outlet } from "react-router-dom"
import Footer from "./Components/Common/Footer"
import Navbar from "./Components/Common/Navbar"
import { useContext } from "react"
import { AuthContext } from "./Components/Provider/AuthProvider"


function App() {

 


  return (
    <div className="min-h-screen dark:bg-[#222028] dark:text-white">
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default App
