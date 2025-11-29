import React, { use, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const [isAdding, setIsAdding] = useState(false)

    const handleAddToCart = () => {

        setIsAdding(true);
        dispatch(addItem(product));
        
        setTimeout(() => {
            setIsAdding(false);
        }, 500);
    }


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

                <div className="card-button-group">
                    <Link to={`/product/${product.id}`} className="card-button primary-button">
                        Detayı Gör
                    </Link>

                    <button className="card-button primary-button" onClick={handleAddToCart} disabled={isAdding} >
                        {isAdding ? 'Ekleniyor...' : 'Sepete Ekle'}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;