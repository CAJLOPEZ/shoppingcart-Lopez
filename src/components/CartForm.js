import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CartForm({createOrder}) {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        emailConfirmation: '',
        phone: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const handleOnclick = () => {
        const { firstName, lastName, email, phone } = form
        createOrder({ firstName, lastName, email, phone })
    }

    const disabled = !(
        form.email.length &&
        form.firstName.length &&
        form.lastName.length &&
        form.emailConfirmation.length &&
        form.phone.length &&
        form.email === form.emailConfirmation
    )

    return (
        <div>
            <Form.Group>
                <Form.Control type="text" placeholder="Nombre" name="firstName" onChange={handleChange} />
                <br />
                <Form.Control type="text" placeholder="Apellido" name="lastName" onChange={handleChange} />
                <br />
                <Form.Control type="text" placeholder="Teléfono de contacto" name="phone" onChange={handleChange} />
                <br />
                <Form.Control type="text" placeholder="E-mail" name="email" onChange={handleChange} />
                <br />
                <Form.Control type="text" placeholder="Confirmación de e-mail" name="emailConfirmation" onChange={handleChange} />
                <Button variant="primary" type="submit" disabled={disabled} onClick={handleOnclick}>
                    Confirmar orden
                </Button>
            </Form.Group>

        </div>
    );
}

export default CartForm;