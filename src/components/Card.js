import React from 'react';

function Card({ item }) {
    const { category, img, name, price, url } = item;
    return (
        <div className='card'>
            <img src={ img } alt={ name } />
            <div>
                <h3>{ name }</h3>
                <p><strong>Categoria: </strong>{ category }</p>
                <p><strong>Preço: </strong>{ price }</p>
                <a href={ url } target='_blank' rel="noreferrer">Ir ao site</a>
            </div>
        </div>
    )
}

export default Card;