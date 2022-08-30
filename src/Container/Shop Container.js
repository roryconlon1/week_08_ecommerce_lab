import React, { useState } from "react";
import ProductList from "../Components/ProductList";
import styled from "styled-components";

const Header = styled.header`
background-color: #E15D44;
margin: 0;
padding: .5em;
font-size: 3em;
color: orange;
background: repeating-radial-gradient(
    circle,
    #018749,
    #018749 10px,
    white, 
    #DEA96B 20px);`

const Text = styled.h1`
border: 3px
background-color: black;
text-shadow: 4px 4px #ff0000;`

const ProductHeader = styled.h2`
text-decoration: underline;
font-size: 50px`

const ShopContainer = () => {

    const products = [
        { name: "Football", price: 15.12 },
        { name: "Celtic Home Top", price: 67.88 },
        { name: "Hoopy The Hound Soft Toy", price: 12.75 },
        { name: "Adidas Predators", price: 80.70 },
        { name: "5-a-side Goals", price: 99.99 },
        { name: "Bibs x 5", price: 8.5 },
        { name: "Celtic Away Top", price: 67.88 },
        { name: "Celtic 3rd Top", price: 67.88 },
    ]

    const [favouriteProduct, setFavouriteProduct] = useState([])
    const [selectAmount, setSelectAmount] = useState()

    const onFavouriteUpdate = (newProduct) => {
        const alreadyInBasket = favouriteProduct.filter(product => product.name === newProduct.name).length > 0
        if (alreadyInBasket) {return}
        const updatedFavourite = [...favouriteProduct, newProduct]
        setFavouriteProduct(updatedFavourite)
    }


    return (
        <div>
            <Header>
                <Text>Football Shop</Text>
            </Header>
            <ProductHeader>All Products:</ProductHeader>
            <ProductList onFavouriteUpdate={onFavouriteUpdate} product={products} favouriteProduct={favouriteProduct} setSelectAmount={setSelectAmount} />
        </div>
    )
}

export default ShopContainer;