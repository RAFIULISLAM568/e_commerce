function Cart({ cartItems }) {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p>Total items: {cartItems.length}</p>
                    <p>Total price: ${totalPrice}</p>
                </>
            )}
        </div>
    );
}

export default Cart;
