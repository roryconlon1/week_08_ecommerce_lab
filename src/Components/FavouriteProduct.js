import React from "react";
// import FavouriteProductItem from "./FavouriteProductItem";

const FavouriteProduct = ({favouriteProduct}) => {

    const showFavourite = favouriteProduct.map((newFave, index) => {
        return <div key={index}>{newFave.name}</div>
    })

    return(
        <div>
            <h1>Items in Cart:</h1>
            {showFavourite}
        </div>
    )
}

export default FavouriteProduct;