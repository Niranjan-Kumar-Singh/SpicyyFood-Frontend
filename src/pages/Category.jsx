// src/pages/Category.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

function Category() {
  const { id } = useParams();

  return (
    <div>
      <h1>Category {id}</h1>
      <p>Items for this category will be displayed here.</p>
    </div>
  );
}

export default Category;
