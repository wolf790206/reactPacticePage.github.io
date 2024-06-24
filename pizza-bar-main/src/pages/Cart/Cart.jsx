import React from "react"
import "./Cart.css"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { foods, cart, updateCartItem, removeFromCart } =
    useContext(StoreContext)

  if (cart.length === 0) {
    return <h2 className="no-cart">您沒有選擇任何餐點</h2>
  }

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>品項</p>
          <p>名稱</p>
          <p>數量</p>
          <p>單價</p>
          <p>小計</p>
        </div>
        <hr />
        {cart.map((item) => (
          <div key={item.id} className="cart-items-title cart-items-item">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <div className="cart-item-quantity">
              <span onClick={() => updateCartItem(item.id, -1)}>-</span>
              <p>{item.quantity}</p>
              <span onClick={() => updateCartItem(item.id, 1)}>+</span>
            </div>
            <p>${item.price}</p>
            <p>${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>X</button>
          </div>
        ))}
      </div>
      <p className="total-price">
        總金額：$
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
      <div className="cart-item-btn">
        <button>前往結帳</button>
        <Link to="/">
          <button>繼續點餐</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
