import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="checkout-block">
					<sapn>Product</sapn>
				</div>
				<div className="checkout-block">
					<sapn>Description</sapn>
				</div>
				<div className="checkout-block">
					<sapn>Quantity</sapn>
				</div>
				<div className="checkout-block">
					<sapn>Price</sapn>
				</div>
				<div className="checkout-block">
					<sapn>Remove</sapn>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem
					key={cartItem.id}
					cartItem={cartItem}
				/>
			))}
			<span className="total">Total: {cartTotal}</span>
		</div>
	);
};

export default Checkout;
