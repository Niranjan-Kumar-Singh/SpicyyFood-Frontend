import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const query = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return (params.get("q") || "").trim();
  }, [location.search]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/items`
        );
        setItems(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Failed to fetch items:", error);
        setError("Unable to load items right now. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [query]);

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    const normalized = query.toLowerCase();
    return items.filter((item) => {
      const name = item.name ? item.name.toLowerCase() : "";
      const desc = item.description ? item.description.toLowerCase() : "";
      return name.includes(normalized) || desc.includes(normalized);
    });
  }, [items, query]);

  return (
    <div className="search-results-page">
      <h1>Search Results</h1>
      {query ? (
        <p className="search-subtitle">
          Showing {results.length} result{results.length === 1 ? "" : "s"} for
          <span className="search-query"> "{query}"</span>
        </p>
      ) : (
        <p className="search-subtitle">Type something to search the menu.</p>
      )}

      {loading ? (
        <div className="search-loading">Loading...</div>
      ) : error ? (
        <div className="search-empty">{error}</div>
      ) : query && query.length < 2 ? (
        <div className="search-empty">
          Type at least 2 characters to search.
        </div>
      ) : query && results.length > 0 ? (
        <div className="search-results-grid">
          {results.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      ) : query ? (
        <div className="search-empty">
          No items found. Try a different keyword.
        </div>
      ) : null}
    </div>
  );
};

export default SearchResults;
