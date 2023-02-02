import CartItem from "./CartItem";

const Cart =({onAddToCart,
             onRemoveItemFromCart, 
             shoppingCart})=>{

    return (
        <ul>
            {shoppingCart.map(item => {
                return <CartItem 
                        onAddToCart={onAddToCart}
                        onRemoveItemFromCart={onRemoveItemFromCart}
                        item={item}
                        />
            })}
        </ul>
    )
}
export default Cart;