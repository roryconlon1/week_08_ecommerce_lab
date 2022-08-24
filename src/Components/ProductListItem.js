import React from "react";

const ProductListItem = ({item, onFavouriteUpdate}) => {

    const handleClick = () => {
        onFavouriteUpdate(item)
    }

    return(
        <div>
            <li>
                {item.name}
                £ {item.price}<button onClick={handleClick}>Add to Cart</button>
                
            </li>
        </div>
    )

}

export default ProductListItem