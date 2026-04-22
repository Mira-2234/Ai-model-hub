import { useState } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Models from "./components/Models"
import Cart from "./components/Cart"

const getModels = async () => {
  const res = await fetch ("/models.json")
  return res.json()
}


const modelPromise = getModels()

function App() {
  const [activeTab, setAcriveTab] = useState("model");
  const [carts, setCarts] = useState([])
  console.log(carts)
  return (
    <>
      <Navbar/>
      <Banner/>

      {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent gap-2">
  
  <input 
    type="radio" 
    name="my_tabs_1" 
    className={`tab rounded-full w-40 font-medium shadow-lg
      ${activeTab === "model" ? "bg-gradient-to-r from-pink-400 to-red-500 text-white" : "bg-white"}`}
    aria-label="Models" 
    defaultChecked
    onClick={()=> setAcriveTab("model")}
  />

  <input 
    type="radio" 
    name="my_tabs_1" 
    className={`tab rounded-full w-40 font-medium shadow-lg
      ${activeTab === "cart" ? "bg-gradient-to-r from-pink-400 to-red-500 text-white" : "bg-white"}`}
    aria-label={`Cart (${carts.length})`}
    onClick={()=> setAcriveTab("cart")}
  />

</div>


     {activeTab ==="model" && <Models modelPromise={modelPromise} carts = {carts} setCarts ={setCarts} />}
      {activeTab ==="cart" &&<Cart carts={carts} setCarts ={setCarts}/>}
      <Footer />
    </>
  )
}

export default App
