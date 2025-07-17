import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemCard from "../components/ItemCard"; // Import ItemCard
import "../styles/CategoryPage.css";

const CategoryPage = ({ onAddToCart }) => {
  const { categoryId } = useParams(); // Get category ID from URL
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
        if (!categoryId) return;

        // Fetch category details (name, image)
        const categoryResponse = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/categories/${categoryId}`
        );
        setCategory(categoryResponse.data);

        // Fetch items in this category
        const itemsResponse = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/items/category/${categoryId}`
        );
        setItems(itemsResponse.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [categoryId]);

  return (
    <div className="category-page">
      {loading ? (
        <p>Loading...</p>
      ) : category ? (
        <div>
          <h1>{category.name}</h1>
          <h2>Items in {category.name}</h2>
          <div className="item-cards-container">
            {items.length > 0 ? (
              items.map((item) => (
                <ItemCard 
                  key={item._id} 
                  item={item} 
                  onAddToCart={onAddToCart} // ✅ Pass `onAddToCart` 
                />
              ))
            ) : (
              <p>No items found for this category.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Category not found.</p>
      )}
    </div>
  );
};

export default CategoryPage;
