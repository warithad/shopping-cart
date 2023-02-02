const CartItem  =({onAddToCart, onRemoveItemFromCart, item})=>{
    return (
        <div>
            <p>name: {item.planet.name} quantity: {item.quantity}</p>
            <button onClick={id => onAddToCart(item.planet.id)}>+</button>
            <button onClick={id => onRemoveItemFromCart(item.planet.id)}>-</button>
        </div>
    )
}

export default CartItem;