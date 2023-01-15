import styled from "styled-components";
import ProductsGrid from "../components/shop/ProductsGrid";

const Shop =({onAddToCart})=>{
    return (
    <ShopWrapper>        
        <h1>Shop</h1>
        <ProductsGrid onAddToCart={onAddToCart}/>
    </ShopWrapper>
    )
}

const ShopWrapper = styled.div`
    
`
export default Shop;