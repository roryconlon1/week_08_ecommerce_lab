import React from "react";
import ProductListItem from "./ProductListItem";


const ProductList = ({product, onFavouriteUpdate}) => {

    const showProducts = product.map((item, index) => {
        return <ProductListItem key={index} index={item.index} item={item} onFavouriteUpdate={onFavouriteUpdate}/>
    })

 



    return(
        <div>
            <ul>
                {showProducts}
            </ul>
            
            
        </div>
    )
}
export default ProductList;