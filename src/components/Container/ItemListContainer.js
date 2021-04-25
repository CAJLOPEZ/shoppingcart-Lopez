import React, {useState} from 'react';
import ItemList from '../ItemList/ItemList';


export const ItemListContainer = () => {

    const [arrayItems, setArrayItems] = useState([])

           const productos = [
        {
            img:"../assets/img/Remera1.jpg",
            description:"Remera color negra",
            id:'Remera1',
            title:'Remera Negra',
            price:'400',
            stock: '5'
        },
        {
            img:"../assets/img/Remera2.jpg",
            description:"Remera color blanca",
            id:'Remera2',
            title:'Remera Blanca',
            price:'450',
            stock: '4'
        },
        {
            img:"../assets/img/Remera3.jpg",
            description:"Remera color roja",
            id:'Remera3',
            title:'Remera Roja',
            price:'500',
            stock: '3' 
        }
    ]

    const listas = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(productos)    
        },2000)
    })

    listas.then((res)=>{
        setArrayItems(res) 
    })

    return (
        <ItemList productos={productos}/>
    )
    
}

export default ItemListContainer;