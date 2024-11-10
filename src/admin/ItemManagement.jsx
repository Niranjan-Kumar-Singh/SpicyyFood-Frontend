import React, { useEffect, useState } from 'react';
import { Button, Form, Table, Modal, Spinner, InputGroup } from 'react-bootstrap';
import api from './api'; // Adjust path if necessary
import './styles.css';

const ItemManagement = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '', image: null, categoryId: '' });
  const [editItem, setEditItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategory, setFilteredCategory] = useState('');

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await api.get('/items');
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await api.get('/categories');
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const filterItems = () => {
    return items.filter(item => {
      const itemCategoryId = item.categoryId?._id || item.categoryId;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !filteredCategory || itemCategoryId === filteredCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewItem(prev => ({ ...prev, image: file }));
  };

  // Open modal for adding or editing items
  const openModal = (item = null) => {
    setEditItem(item);
    setNewItem(item ? {
      name: item.name,
      description: item.description,
      price: item.price,
      image: null,
      categoryId: item.categoryId._id || item.categoryId, // Adjusts for object or string categoryId
    } : { name: '', description: '', price: '', image: null, categoryId: '' });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditItem(null);
    setNewItem({ name: '', description: '', price: '', image: null, categoryId: '' });
  };

  const handleAddItem = async () => {
    if (!newItem.name || !newItem.price || !newItem.image || !newItem.categoryId) return;

    const formData = new FormData();
    Object.keys(newItem).forEach(key => formData.append(key, newItem[key]));

    setLoading(true);
    try {
      await api.post('/items', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      fetchItems();
      closeModal();
    } catch (error) {
      console.error("Error adding item:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateItem = async () => {
    if (!editItem || !newItem.name) return;

    const formData = new FormData();
    Object.keys(newItem).forEach(key => {
      if (newItem[key]) formData.append(key, newItem[key]);
    });

    setLoading(true);
    try {
      await api.put(`/items/${editItem._id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      fetchItems();
      closeModal();
    } catch (error) {
      console.error("Error updating item:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await api.delete(`/items/${id}`);
        fetchItems();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <div className="container mt-5 admin-dashboard">
      <h2 className="mb-4">Item Management</h2>
      <Button className="primary mb-3" onClick={() => openModal()}>
        Add New Item
      </Button>

      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Form.Select onChange={(e) => setFilteredCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </Form.Select>
      </InputGroup>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterItems().map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.categoryId?.name || 'No Category'}</td>
              <td>
                {item.image ? (
                  <img src={item.image} alt={item.name} width="50" height="50" />
                ) : 'No image'}
              </td>
              <td>
                <Button className="btn-warning me-2" onClick={() => openModal(item)}>
                  Edit
                </Button>
                <Button className="danger" onClick={() => handleDeleteItem(item._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding and Editing */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editItem ? 'Edit Item' : 'Add New Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="itemName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
                placeholder="Enter item name"
                required
              />
            </Form.Group>
            <Form.Group controlId="itemCategory" className="mt-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="categoryId"
                value={newItem.categoryId}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="itemDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
                placeholder="Enter item description"
              />
            </Form.Group>
            <Form.Group controlId="itemPrice" className="mt-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={newItem.price}
                onChange={handleInputChange}
                placeholder="Enter item price"
                required
              />
            </Form.Group>
            <Form.Group controlId="itemImage" className="mt-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button
            className="primary"
            onClick={editItem ? handleUpdateItem : handleAddItem}
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : editItem ? 'Update Item' : 'Add Item'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemManagement;
