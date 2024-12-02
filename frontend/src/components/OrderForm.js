import React, { useState } from 'react';
import { createOrder } from '../services/api';

function OrderForm() {
    const [order, setOrder] = useState({ coffee: '', quantity: 1 });

    const handleSubmit = (e) => {
        e.preventDefault();
        createOrder(order).then(() => alert('Order placed!'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Coffee ID"
                value={order.coffee}
                onChange={(e) => setOrder({ ...order, coffee: e.target.value })}
            />
            <input
                type="number"
                value={order.quantity}
                onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
            />
            <button type="submit">Place Order</button>
        </form>
    );
}

export default OrderForm;
