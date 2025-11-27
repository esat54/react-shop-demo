import React from 'react';
import { useGetProductsQuery } from '../slices/apiSlice';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <p className="loading-state">Ürünler Yükleniyor...</p>;
  if (isError) return <p className="error-state">Hata: Ürünler yüklenemedi.</p>;

  return (
    <div className="homepage-content">
      <div className='homepage-title'>Ürün Listesi ({data?.length || 0}) Adet</div>

      <div className="product-grid">
        {data?.map((product) => (<ProductCard key={product.id} product={product} />))}
      </div>
    </div>
  );
}

export default HomePage;