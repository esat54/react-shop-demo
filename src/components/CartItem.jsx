import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../slices/cartSlice';

function CartItem({ product }) {
    const ratingStars = '⭐'.repeat(Math.round(product.rating.rate));

    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increaseItem(product.id));
    };
    const handleDecrease = () => {
        dispatch(decreaseItem(product.id));
    };
    const handleRemove = () => {
        dispatch(removeItem(product.id));
    };

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="cart-item-info">
                <div className="cart-item-category">{product.category}</div>
                <h3 className="cart-item-title">{product.title}</h3>

                <div className="cart-item-rating">
                    {ratingStars} ({product.rating.count})
                </div>

                <p className="cart-item-description">{product.description}</p>
            </div>

            <div className="cart-item-actions">
                <div className="cart-item-price">
                    ${product.price.toFixed(2)}
                </div>

                <div className="cart-item-quantity">
                    <button onClick={handleDecrease} className="qty-button qty-minus">
                        -
                    </button>
                    <span className="qty-number">Adet: {product.quantity}</span>
                    <button onClick={handleIncrease} className="qty-button qty-plus">
                        +
                    </button>
                </div>

                <button onClick={handleRemove} className="cart-item-remove">
                    🗑️ Sil
                </button>
            </div>
        </div>
    )
}

export default CartItem;