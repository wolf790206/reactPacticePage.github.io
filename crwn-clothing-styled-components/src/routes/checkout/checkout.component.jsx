import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

const titleContents = ['product', 'description', 'quantity', 'price', 'remove'];

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	return (
		<CheckoutContainer>
			<CheckoutHeader>
				{titleContents.map((content, index) => (
					<HeaderBlock key={index}>
						<span>{content}</span>
					</HeaderBlock>
				))}
			</CheckoutHeader>
			{cartItems.map((cartItem) => (
				<CheckoutItem
					key={cartItem.id}
					cartItem={cartItem}
				/>
			))}
			<Total>Total: {cartTotal}</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
