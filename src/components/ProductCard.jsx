import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">

            <span className="product-category">
                {product.category}
            </span>

            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />

            <div className="card-body">
                <h3 className="product-title">{product.title}</h3>

                <p className="product-price">${product.price.toFixed(2)}</p>

                <Link to={`/product/${product.id}`} className="detail-button primary-button">
                    Detayı Gör
                </Link>

            </div>

        </div>
    );
};

export default ProductCard;