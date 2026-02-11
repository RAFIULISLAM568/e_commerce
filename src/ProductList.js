import { useState } from "react";
import Cart from "./Cart";

function ProductList() {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Laptop", price: 800 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Headphones", price: 100 },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        {p.name} - ${p.price}
                        <button onClick={() => addToCart(p)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            {/* Cart component */}
            <Cart cartItems={cart} />
        </div>
    );
}

export default ProductList;
