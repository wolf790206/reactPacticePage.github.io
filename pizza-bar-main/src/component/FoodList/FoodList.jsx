import React, { useContext } from "react"
import "./FoodList.css"
import { StoreContext } from "../../context/StoreContext"
import { Link } from "react-router-dom"

const FoodList = () => {
  const { foods } = useContext(StoreContext)

  return (
    <div className="food-list">
      <h2>選擇您的餐點</h2>
      <div className="food-list-content">
        {foods.map((item, index) => (
          <div key={index} id={item.id} className="food-item">
            <img src={item.image} alt="" />
            <div className="food-item-info">
              <h4>{item.name}</h4>
              <p className="food-item-description">{item.description}</p>
              <p className="food-item-price">${item.price}</p>
              <Link to={`/food/${item.id}`}>
                <button>訂購</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodList
