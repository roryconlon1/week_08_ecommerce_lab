import React from "react";
import styled from "styled-components";

const ProductHeader = styled.h2`
text-decoration: underline;
font-size: 50px`

const ProductAmount = styled.h2`
text-decoration: underline;
font-size: 30px`

const FavouriteProduct = ({favouriteProduct}) => {
    
    
    const showFavourite = favouriteProduct.map((newFave, index) => {
        return <div key={index}>{newFave.name}<span>     £{newFave.price}</span></div>
    })

    const totalAmount = favouriteProduct.reduce((runningTotal, newFave) => {
        return runningTotal + newFave.price
    }, 0)


    return(
        <div>
            <ProductHeader>Items in Cart:</ProductHeader>
            <span>{showFavourite}</span>
            <ProductAmount><b>Total:  £{totalAmount}</b></ProductAmount>
        </div>
    )
}

export default FavouriteProduct;