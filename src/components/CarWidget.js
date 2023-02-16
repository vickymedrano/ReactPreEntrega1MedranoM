import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = () =>{

    return (
        <>
    <AddShoppingCartIcon color="primary" fontSize="large" />
    <span id="contador">5</span>
    </>
    );

};


export default CartWidget;