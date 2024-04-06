/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrash, FaSave, FaBookOpen } from 'react-icons/fa';
import { useCategory } from '../../hooks/useCategory';
import {
  CategoryContainer,
  CategoryWrapper, CreateCategory, EditCategory, MenuBody } from './Style';

export function Categories() {
  const {
    name,
    setName,
    categories,
    handleCreateCategory, handleEditCategory, handleDeleteCategory } = useCategory();
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <CategoryContainer>
      <MenuBody>
        <Link to="/user-posts">
          <FaArrowLeft size={ 15 } />
          {' '}
          Go Back
        </Link>
        <h3>Tags</h3>
        <Link to="/user-posts">
          <span>
            <p>My posts</p>
            {' '}
            <FaBookOpen />
          </span>
        </Link>
      </MenuBody>
      <CategoryWrapper>
        <CreateCategory>
          <div className="tags">
            <h2>Create</h2>
            <div className="create-tag">
              <input
                type="text"
                placeholder="Name"
                value={ name }
                onChange={ (e) => setName(e.target.value) }
              />
              <button
                className="createButton"
                onClick={ handleCreateCategory }
              >
                Create
              </button>

            </div>
          </div>

          <div className="cloud-tags">
            <h2>Cloud Tags</h2>
            <div>
              <ul>
                {categories.map((category: any) => (
                  <li key={ category.id }>{category.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </CreateCategory>

        <EditCategory>
          <h2>Update</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category: any) => (
                <tr key={ category.id }>
                  <td className="name">
                    {editingId === category.id ? (
                      <input
                        type="text"
                        placeholder="New name"
                        value={ newName }
                        onChange={ (e) => setNewName(e.target.value) }
                      />
                    ) : (
                      category.name
                    )}
                  </td>
                  <td className="actions">
                    {editingId === category.id ? (
                      <button
                        onClick={ () => {
                          handleEditCategory(category.id, newName);
                          setEditingId(null);
                        } }
                        aria-label="Save"
                      >
                        <FaSave />
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={ () => setEditingId(category.id) }
                          aria-label="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={ () => handleDeleteCategory(category.id) }
                          aria-label="Delete"
                        >
                          <FaTrash />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </EditCategory>

      </CategoryWrapper>
    </CategoryContainer>
  );
}
