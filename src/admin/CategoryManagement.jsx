import React, { useEffect, useState } from 'react';
import { Button, Form, Table, Modal, Spinner } from 'react-bootstrap';
import api from './api';
import './styles.css';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', image: null });
  const [editCategory, setEditCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for image upload

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch all categories
  const fetchCategories = async () => {
    const res = await api.get('/categories');
    setCategories(res.data);
  };

  // Handle change for input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change for the image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewCategory((prev) => ({ ...prev, image: file }));
  };

  // Add a new category
  const handleAddCategory = async () => {
    if (!newCategory.name || !newCategory.image) return;

    const formData = new FormData();
    formData.append('name', newCategory.name);
    formData.append('image', newCategory.image);

    setLoading(true); // Start loading
    try {
      await api.post('/categories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setNewCategory({ name: '', image: null });
      fetchCategories();
      setShowModal(false);
    } catch (error) {
      console.error("Error adding category:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Update an existing category
  const handleUpdateCategory = async () => {
    if (!editCategory || !editCategory.name) return;

    const formData = new FormData();
    formData.append('name', editCategory.name);
    if (editCategory.image) formData.append('image', editCategory.image);

    setLoading(true); // Start loading
    try {
      await api.put(`/categories/${editCategory._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setEditCategory(null);
      fetchCategories();
      setShowModal(false);
    } catch (error) {
      console.error("Error updating category:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Delete a category
  const handleDeleteCategory = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      await api.delete(`/categories/${id}`);
      fetchCategories();
    }
  };

  // Open modal for adding or editing
  const openModal = (category = null) => {
    if (category) {
      setEditCategory(category);
    } else {
      setNewCategory({ name: '', image: null });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditCategory(null);
    setNewCategory({ name: '', image: null });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Manage Categories</h2>
      <Button onClick={() => openModal()} variant="primary" className="mb-3">
        Add New Category
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>
                {category.image ? (
                  <img src={category.image} alt={category.name} width="50" height="50" />
                ) : (
                  'No image'
                )}
              </td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => openModal(category)}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteCategory(category._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding and Editing */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editCategory ? 'Edit Category' : 'Add New Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editCategory ? editCategory.name : newCategory.name}
                onChange={(e) =>
                  editCategory
                    ? setEditCategory({ ...editCategory, name: e.target.value })
                    : handleInputChange(e)
                }
                placeholder="Enter category name"
              />
            </Form.Group>

            <Form.Group controlId="categoryImage" className="mt-3">
              <Form.Label>Category Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) =>
                  editCategory
                    ? setEditCategory({ ...editCategory, image: e.target.files[0] })
                    : handleFileChange(e)
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={editCategory ? handleUpdateCategory : handleAddCategory}
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <>
                <Spinner animation="border" variant="light" size="sm" role="status" className="me-2" />
                {editCategory ? 'Updating...' : 'Adding...'}
              </>
            ) : (
              editCategory ? 'Update Category' : 'Add Category'
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryManagement;
