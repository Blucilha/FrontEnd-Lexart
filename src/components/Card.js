import React from 'react';

function Card({ item }) {
    const { category, img, name, price, url } = item;
    return (
        <div>
            <img src={ img } alt={ name } />
            <h3>{ name }</h3>
            <p>{ category }</p>
            <p>{ price }</p>
            <a href={ url } target='_blank' rel="noreferrer">Ir ao site</a>
        </div>
    )
}

export default Card;