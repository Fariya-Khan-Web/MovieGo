import { Outlet } from "react-router-dom"
import Footer from "./Components/Common/Footer"
import Navbar from "./Components/Common/Navbar"


function App() {


  return (
    <div className="min-h-screen text-white bg-[#1a191f] flex flex-col justify-between">
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default App
