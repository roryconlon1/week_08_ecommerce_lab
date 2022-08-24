import React, { useState } from "react";
import FavouriteProduct from "../Components/FavouriteProduct";
import ProductList from "../Components/ProductList";

const ShopContainer = () => {

    const products =[
        {name: "Football", price: 15},
        {name: "Celtic Home Top", price: 67},
        {name: "Hoopy The Hound Soft Toy", price: 12},
        {name: "Adidas Predators", price: 55},
        {name: "5-a-side Goals", price: 100},
        {name: "Bibs x 5", price: 30},
        {name: "Celtic Away Top", price: 67},
        {name: "Celtic 3rd Top", price: 67},
    ]
    const [favouriteProduct, setFavouriteProduct] = useState([])

    const onFavouriteUpdate = (newProduct) => {
        newProduct.id = Date.now()
        const alreadyInBasket = favouriteProduct.filter(product => product.name === newProduct.name).length > 0
        if (alreadyInBasket){return}
        const updatedFavourite = [...favouriteProduct, newProduct]
        setFavouriteProduct(updatedFavourite)
        
    }
    console.log(favouriteProduct);

    return(
        <div>
            <h1>
                Sellick Shop
            </h1>
            <ProductList onFavouriteUpdate={onFavouriteUpdate} product={products}/>
            {favouriteProduct ? <FavouriteProduct favouriteProduct={favouriteProduct}/>: null}
        </div>
    )
}

export default ShopContainer;