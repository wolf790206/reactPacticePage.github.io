import React from "react"
import "./Home.css"
import Header from "../../component/Header/Header"
import FoodList from "../../component/FoodList/FoodList"

const Home = () => {
  return (
    <div>
      <Header />
      <FoodList />
    </div>
  )
}

export default Home
