import styled from "styled-components";
import Product from "./Product";
import Planets from "../../utils/planets.json"

const ProductsGrid =({onAddToCart})=>{
    return(
        <ProductsGridWrapper>
            {Planets.map(planet => {
                return (
                    <Product
                        key={planet.id}
                        id={planet.id}
                        name={planet.name}
                        price={planet.price}
                        image={planet.img}
                        about=''
                        onAddToCart={onAddToCart}
                    />
                )
            })}
        </ProductsGridWrapper>
    )
}

const ProductsGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`
export default ProductsGrid;