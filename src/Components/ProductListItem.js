import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
display: flex;
justify-content: space-between;
padding: 5px`

const AllSpan = styled.span`
margin-left: auto;
margin-right: 5px;`

const ProductListItem = ({item, onFavouriteUpdate}) => {

    const handleClick = () => {
        onFavouriteUpdate(item)
    }

    

    return(
        <div>
            <ListItem>
                {item.name} <AllSpan>£{item.price}</AllSpan>
                <button onClick={handleClick}>Add to Cart</button>
                
            </ListItem>
        </div>
    )

}

export default ProductListItem