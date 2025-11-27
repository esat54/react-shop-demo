import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../slices/apiSlice';
import ProductDetailCard from '../components/ProductDetailCard';

function ProductDetail() {
    const { id } = useParams();

    const { data, isError, isLoading } = useGetProductByIdQuery(id);

    if (isLoading) return <p className="loading-state">Ürünler Yükleniyor...</p>;
    if (isError) return <p className="error-state">Hata: Ürünler yüklenemedi.</p>;

    return (
        <div className="product-detail-page">
            {data && <ProductDetailCard product={data} />} {/*data değişkeninin içeriğini, alt bileşene product adında bir prop olarak gönder. */}
        </div>
    );
}

export default ProductDetail;