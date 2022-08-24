import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
display: flex;
justify-content: space-between;
padding: 5px`

const AllSpan = styled.span`
margin-left: auto;
margin-right: 5px;`

const AddtoCartButton = styled.button`
border-radius: 6px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;`

const ProductListItem = ({item, onFavouriteUpdate, setSelectAmount}) => {

    const amountOfProductsForDropdown = [
        {number: "1", value: 1},
        {number: "2", value: 2},
        {number: "3", value: 3},
        {number: "4", value: 4},
        {number: "5", value: 5},
        {number: "6", value: 6},
        {number: "7", value: 7},
        {number: "8", value: 8},
        {number: "9", value: 9},
        {number: "10", value: 10},
    ]

    const handleClick = () => {
        onFavouriteUpdate((item))
    }

    const handleChange = (event) => {
        const changedItem = amountOfProductsForDropdown[event.target.value];
        setSelectAmount(changedItem);
        
    }

    const allNumbers = amountOfProductsForDropdown.map((number, index) => {
        return <option value={index} key={index}>{number.value}</option>
    })

    

    return(
        <div>
            <ListItem>
                {item.name} <AllSpan>£{item.price}</AllSpan>
                <AddtoCartButton onClick={handleClick}>Add to Cart</AddtoCartButton>
                <select defaultValue="" onChange={handleChange}>
                <option value="">Choose an Amount</option>
                {allNumbers}
                </select>               
            </ListItem>
        </div>
    )

}

export default ProductListItem