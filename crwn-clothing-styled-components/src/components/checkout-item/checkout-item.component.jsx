import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	SpanContainer,
	RemoveButton,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
	const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
	const { name, imageUrl, price, quantity } = cartItem;

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img
					src={imageUrl}
					alt={`${name}`}
				/>
			</ImageContainer>
			<SpanContainer>{name}</SpanContainer>
			<Quantity>
				<div
					className="arrow"
					onClick={removeItemHandler}
				>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div
					className="arrow"
					onClick={addItemHandler}
				>
					&#10095;
				</div>
			</Quantity>
			<SpanContainer>{price}</SpanContainer>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
