import React from 'react'
import { useState } from 'react';
import { useGetProductByIdQuery } from '../slices/apiSlice';
import ProductCard from '../components/ProductCard';



function SearchPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [submittedId, setSubmittedId] = useState(null);

  const { data, isLoading, isError } = useGetProductByIdQuery(submittedId, {
    skip: submittedId === null
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedId(searchTerm);
    console.log(data);
  }

  if (isError) return <p className="error-state">Hata: Ürünler yüklenemedi.</p>;

  return (
    <div className="search-page-container">
      <h1 style={{ marginBottom: '10px', color: '#c8c8c8' }}>ID ile Ürün Sorgulama</h1>

      <form onSubmit={handleSubmit} className="search-form">

        <input type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search...'
        />

        <button type="submit" className="search-button primary-button">
          {isLoading ? "Yükleniyor" : "Search"}
        </button>

      </form>

      {data && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <ProductCard product={data} />
        </div>
      )}
    </div>
  )
}

export default SearchPage;