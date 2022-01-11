import React from 'react';
import Artikel from './Artikel';

function Kategori({ kategori }) {
  return (
    <div>
      <h1>{kategori.category}</h1>
      {kategori.products.map((produkt) => {
        return <Artikel produkt={produkt} />
      })}
    </div>
  );
}

export default Kategori;