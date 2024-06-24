import foodsData from "../data/FOOD_DATA.json"
import { createContext, useState } from "react"

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const foods = foodsData

  const [cart, setCart] = useState([])

  const addToCart = (food, quantity) => {
    setCart((prev) => {
      const cartItem = prev.find((item) => item.id === food.id)
      if (cartItem) {
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prev, { ...food, quantity }]
      }
    })
  }

  const updateCartItem = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + quantity, 1) }
          : item
      )
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <StoreContext.Provider
      value={{
        foods,
        cart,
        addToCart,
        updateCartItem,
        removeFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
