import React, { useState, useEffect } from 'react';
import { fetchCoffees } from '../services/api';

function CoffeeList() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetchCoffees().then(response => {
            setCoffees(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Coffee Menu</h1>
            <ul>
                {coffees.map(coffee => (
                    <li key={coffee.id}>
                        {coffee.name} <br></br>{coffee.description}<br></br> Rs{coffee.price}
                    </li>
                ))}
            </ul>
            <br></br>
        </div>
    );
}

export default CoffeeList;
