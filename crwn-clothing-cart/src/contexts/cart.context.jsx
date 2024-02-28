import { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartsOpen: false,
	setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartsOpen, setIsCartOpen] = useState(false);
	const value = { isCartsOpen, setIsCartOpen };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
