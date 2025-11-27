import React from 'react';

const ProductDetailCard = ({ product }) => {
    const ratingStars = '⭐'.repeat(Math.round(product.rating.rate));

    return (
        <div className="product-detail-container">

            <div className="detail-image-area">
                <img src={product.image} alt={product.title} className="detail-image" />
            </div>

            <div className="detail-info-area">
                <span className="detail-category">
                    {product.category}
                </span>

                <h1 className="detail-title">
                    {product.title}
                </h1>

                <div className="detail-rating">
                    {ratingStars} ({product.rating.count} değerlendirme)
                </div>

                <p className="detail-price">
                    {product.price.toFixed(2)} $
                </p>

                <hr className="detail-divider" />

                <h2>Ürün Açıklaması</h2>
                <p className="detail-description">
                    {product.description}
                </p>

                <button className="detail-cart-button primary-button">
                    Sepete Ekle
                </button>

            </div>
        </div>
    );
};

export default ProductDetailCard;