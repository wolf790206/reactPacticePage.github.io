import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Navbar from "./component/Navbar/Navbar"
import FoodDetail from "./pages/FoodDetail/FoodDetail"
import Footer from "./component/Footer/Footer"
import ScrollToTop from "./component/ScrollToTop/ScrollToTop"
import Login from "./component/Login/Login"

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="food/:id" element={<FoodDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
