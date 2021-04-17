import React from 'react';
import CartWidget from '../CartWidget/CartWidget'; 

const NavBar = () =>{
    return(
        <div style={{borderBottom: 'solid 2px white', display: 'flex'}}>
            <h1>Titulo</h1>
            <ul>
                <li><p>Parte 1</p></li>
                <li><p>Parte 2</p></li>
                <li><p>Parte 3</p></li>    
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar