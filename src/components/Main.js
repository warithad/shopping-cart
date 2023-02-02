import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Planets from "../utils/planets.json"

const Main =()=>{
    const [shoppingCart, setShoppingCart] = useState([]);

    const onAddToCart =(id)=>{

        const item = {planet: Planets[id], quantity : 1};
        const itemIndex = shoppingCart.findIndex((i) => i.planet.id === id);

        if(itemIndex > -1){
            const newCart = shoppingCart.slice();
            newCart[itemIndex].quantity++;
            setShoppingCart(newCart);
        }
        else {
            setShoppingCart([...shoppingCart, item])
            console.log(shoppingCart);
        }
    }

    const onRemoveItemFromCart = id =>{
        const item = shoppingCart.find((i) => i.planet.id === id);
        const itemIndex = shoppingCart.findIndex(i => i.planet.id === id);

        if(item.quantity === 1){
            const newCart = shoppingCart.filter(i => i.planet.id !== id );
            setShoppingCart(newCart);
        }else{
            const newCart = shoppingCart.slice();
            newCart[itemIndex].quantity--;
            setShoppingCart(newCart);
        }
        console.log(shoppingCart);
    }

    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shop' element={<Shop onAddToCart={onAddToCart}/>}/>
                
                <Route path='/checkout' 
                element={
                    <Checkout 
                        onAddToCart={onAddToCart}
                        onRemoveItemFromCart={onRemoveItemFromCart}
                        shoppingCart={shoppingCart}
                    />
                    }/>
            </Routes>
    )
}

export default Main;