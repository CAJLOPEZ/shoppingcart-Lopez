import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Button } from 'react-bootstrap';

function AddToCart({ qtyCounter, product }) {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const handleClick = () => {
        let cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            count: qtyCounter
        }
        if (cartProducts.find((product) => product.id === cartItem.id)) {
            const newCartProducts = cartProducts.map((product) => {
                if (product.id === cartItem.id) {
                    return { ...product, count: cartItem.count + product.count }
                }
                return product
            })
            setCartProducts(newCartProducts)
        } else {
            setCartProducts([...cartProducts, cartItem])
        }
    }      
    return (
        <div>
            <Button variant="dark" onClick={handleClick}>Comprar</Button>
        </div>
    );
}

export default AddToCart;