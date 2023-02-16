import React from "react";
import NavCategorias from "./Categorias.js"
import CartWidget from "./CarWidget.js";
import { styles } from "./Navbar.style";

const Navbar =()=> {
    return (
        <>
        <header style={styles.container}>

            <img src="./images/maquetado.jpg" style={styles.imagenes}></img>
            <h1>Tienda Online</h1>
            <NavCategorias />
            <CartWidget />
            

        </header>
        </>

    );
};











export default Navbar;