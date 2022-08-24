import React from "react";
import ProductListItem from "./ProductListItem";
import FavouriteProduct from "./FavouriteProduct";
import styled from "styled-components";



const List = styled.ul`
display: grid;
column-gap: 500px;
list-style-type: none;
background-color: #E15D44;
margin-left: 25%;
margin-right: 25%;
margin-bottom: 5%;`

const FavList = styled.li`
display: grid;
column-gap: 500px;
list-style-type: none;
background-color: #E15D44;
margin-left: 25%;
margin-right: 25%;
margin-bottom: 5%;`

const ProductList = ({product, onFavouriteUpdate, favouriteProduct}) => {

    const showProducts = product.map((item, index) => {
        return <ProductListItem key={index} index={item.index} item={item} onFavouriteUpdate={onFavouriteUpdate}/>
    })





    return(
        <div>
            <List>
                {showProducts}
            </List>
            <FavList>
                {favouriteProduct ? <FavouriteProduct favouriteProduct={favouriteProduct}/>: null}
            </FavList>

            
            
        </div>
    )
}
export default ProductList;