import styled from "styled-components";

const Product =({name, 
                price, 
                image, 
                about, 
                onAddToCart
})=>{
    return (
    <ProductWrapper>
        <h2>{name}</h2>
        <img src={image} alt={name}/>
        <h3>${price}</h3>
        <p>{about}</p>
        <button onClick={(name, price) =>onAddToCart(name, price)}>Add to Cart</button>
    </ProductWrapper>
    )    
}

const ProductWrapper = styled.div`
    

    img{
        width: 200px;
        height: 200px;
    }
`
export default Product;