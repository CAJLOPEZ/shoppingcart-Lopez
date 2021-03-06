import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Categories({list}) {

    return (
        <div className='categoryStyles margin-bootom-category-200px'>
        {
            list && list.categories && list.categories.map((cat, idx)=>(
            <Link to={`/categories/${cat.id}`}>   
                <div key={idx}>
                    <div className='category-item'>
                        <div  className='title-item-category margin-bottom-category' style={{ textTransform: 'uppercase' }}>{cat.name}</div>
                        <div className='subtitle-category'>
                        </div>                        
                            <p className='color-violet'>Ver {cat.name}</p>                        
                    </div>
                </div>
                </Link>
            ))
        }
        </div>
    )
}
