import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Button, Container, Alert } from 'react-bootstrap';
import CartForm from './CartForm';


function Cart({ createOrder, orderId }) {
    // eslint-disable-next-line no-unused-vars
    const [cartProducts, setCartProducts, totalCost] = useContext(CartContext);

    if (orderId) {
        return (
            <Alert variant="success">
                <Alert.Heading>¡Gracias por tu compra! </Alert.Heading>
                <p>
                    El código de tu compra es: {orderId}
                </p>
                <hr />
                <p className="mb-0">
                    Ya te estamos enviando un e-mail con la información de tu orden
                </p>
            </Alert>
        )
    }

    return (
        <div>
            <Container>
                {
                    cartProducts.length ?
                        <div>
                            <h2>
                                Resumen de tu compra:
                            </h2>
                            <ul>
                                {cartProducts.map((product) => (
                                    <p>{product.title} <br />
                                        <span className="qty">{"cantidad:"}</span> {product.count}</p>
                                ))}
                            </ul>
                            <h5>Total de la compra: ${totalCost()}</h5>
                        </div>
                        :
                        <h2>Tu carrito está vacío</h2>
                }
                <Button variant="info">
                    <Link to={`/`} className="buy-link">
                        Seguir comprando
                    </Link>
                </Button>
            </Container>
            <CartForm createOrder={createOrder} />
        </div>
    );
}

export default Cart;