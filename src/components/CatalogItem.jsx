import React from 'react';
import mai from "../assets/images/shirt.png"

function CatalogItem({ image, name, size }) {
    return (
        <div className="catalog">
            <img src={image} alt={name} width="240" height="300" style={{ position: 'relative', left: '90px' }} />
            <div className="container1">
                <div className="market">
                    <div className="container">
                        <h3 className="name">{name}</h3>
                        <span className="size">{size}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatalogItem;
