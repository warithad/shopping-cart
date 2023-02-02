import styled from "styled-components";
import Cart from "../components/cart/Cart";

const Checkout = ({onAddToCart, 
                   onRemoveItemFromCart,
                   shoppingCart,
                   total
                })=>{
    return (
        <CheckoutWrapper>
            <h1>Checkout</h1>
            <Cart 
            onAddToCart={onAddToCart}
            onRemoveItemFromCart={onRemoveItemFromCart}
            shoppingCart={shoppingCart}
            />
            <h3>total : ${total}</h3>
        </CheckoutWrapper>
    )
}

const CheckoutWrapper = styled.div`
`
export default Checkout;