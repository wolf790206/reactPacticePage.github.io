import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { ProductCardContainer, Img, Footer, ButtonStyles } from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<ProductCardContainer>
			<Img
				src={imageUrl}
				alt={`${name}`}
			/>
			<Footer>
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</Footer>
			<ButtonStyles
				buttonType={BUTTON_TYPES_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to cart
			</ButtonStyles>
		</ProductCardContainer>
	);
};

export default ProductCard;
