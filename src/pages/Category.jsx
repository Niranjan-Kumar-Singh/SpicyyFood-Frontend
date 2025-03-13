import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Category() {
  const { id: categoryId } = useParams(); // Get category ID from URL
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        setLoading(true);
        if (!categoryId) return;

        // Fetch category details (name, image)
        const categoryResponse = await axios.get(
          `http://localhost:5000/api/categories/${categoryId}`
        );
        setCategory(categoryResponse.data);

        // Fetch items for this category
        const itemsResponse = await axios.get(
          `http://localhost:5000/api/items/category/${categoryId}`
        );
        setItems(itemsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryDetails();
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : category ? (
        <div>
          <h1>{category.name}</h1>
          <img src={category.image} alt={category.name} width="200" />
          <h2>Items in {category.name}</h2>
          {items.length > 0 ? (
            <ul>
              {items.map((item) => (
                <li key={item._id}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price: ₹{item.price}</p>
                  <img src={item.image} alt={item.name} width="150" />
                </li>
              ))}
            </ul>
          ) : (
            <p>No items found for this category.</p>
          )}
        </div>
      ) : (
        <p>Category not found.</p>
      )}
    </div>
  );
}

export default Category;
