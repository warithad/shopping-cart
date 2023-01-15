import styled from "styled-components";
import Product from "./Product";

//write code for the nine planets as products
//make their onaddtocart method return their names and prices up to the main component
const ProductsGrid =({onAddToCart})=>{
    return(
        <ProductsGridWrapper>
            <div>
                <Product
                    name='MERCURY'
                    image=''
                    price='20.99'
                    about=''
                    onAddToCart={onAddToCart}
                />
                <Product
                    name='VENUS'
                    image=''
                    price='20.99'
                    about=''
                    onAddToCart={onAddToCart}
                />
                <Product
                    name='EARTH'
                    image=''
                    price='50.99'
                    about=''
                    onAddToCart={onAddToCart}
                />
                <Product
                    name='MARS'
                    image=''
                    price='19.99'
                    about=''
                    onAddToCart={onAddToCart}
                />
                <Product
                    name='JUPITER'
                    image=''
                    price='14.99'
                    about=''
                    onAddToCart={onAddToCart}
                />
                <Product
                    name='SATURN'
                    image=''
                    price='12.99'
                    about=''
                    onAddToCart={onAddToCart}
                />
                <Product
                    name='URANUS'
                    image=''
                    price='25.99'
                    about=''
                    onAddToCart={onAddToCart}
                />
                <Product
                    name='NEPTUNE'
                    image=''
                    price='14.99'
                    about=''
                    onAddToCart={onAddToCart}
                />
                <Product
                    name='PLUTO'
                    image=''
                    price='9.99'
                    about=''
                    onAddToCart={onAddToCart}
                 />
            </div>
        </ProductsGridWrapper>
    )
}

const ProductsGridWrapper = styled.div`

`
export default ProductsGrid;