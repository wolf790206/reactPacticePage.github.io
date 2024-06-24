import React, { useContext, useState } from "react"
import "./FoodDetail.css"
import { StoreContext } from "../../context/StoreContext"
import { useParams } from "react-router-dom"

const FoodDetail = () => {
  const { id } = useParams()
  const { foods, addToCart } = useContext(StoreContext)
  const food = foods.find((item) => item.id === parseInt(id))
  const [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleReduce = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(food, count)
      alert(`${food.name} 已添加到購物車，數量: ${count}`)
    }
  }

  return (
    <div className="food-detail">
      <div className="food-detail-left">
        <img src={food.image} alt="" />
      </div>
      <div className="food-detail-right">
        <h2>{food.name}</h2>
        <p>內容物 : {food.description}</p>
        <p className="food-detail-price">${food.price}</p>
        <p>選擇數量</p>
        <div className="food-detail-quantity">
          <span onClick={handleReduce}>-</span>
          <p>{count}</p>
          <span onClick={handlePlus}>+</span>
        </div>
        <div>
          <button onClick={handleAddToCart}>新增餐點</button>
        </div>
      </div>
    </div>
  )
}

export default FoodDetail
