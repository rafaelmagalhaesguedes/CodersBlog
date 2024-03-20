import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen } from 'react-icons/fa';
import { usePost } from '../../../hooks/usePost';
import { CreatePostButton, CreatePostContainer, MenuBody } from './Style';

export function CreatePost() {
  const {
    title,
    setTitle,
    content,
    setContent,
    image,
    setImage,
    categories,
    selectedCategories,
    fetchCategories,
    handleCreatePost,
    handleCheckboxChange,
  } = usePost();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CreatePostContainer>
      <MenuBody>
        <Link to="/">
          <FaArrowLeft size={ 15 } />
          {' '}
          Back
        </Link>
        <h3>Create new post</h3>
        <Link to="/user-posts">
          <span>
            <p>My posts</p>
            <FaBookOpen />
          </span>
        </Link>
      </MenuBody>
      <input
        type="text"
        placeholder="Title"
        value={ title }
        onChange={ (e) => setTitle(e.target.value) }
      />
      <textarea
        placeholder="Content"
        value={ content }
        onChange={ (e) => setContent(e.target.value) }
      />
      <div>
        <h3 className="title">Image</h3>
        {' '}
        <div className="input">
          <input
            type="text"
            value={ image }
            onChange={ (e) => setImage(e.target.value) }
            placeholder="Insert an url"
          />
        </div>
      </div>
      <div className="title">
        <h3>Categories</h3>
      </div>
      <ul>
        {categories.map((category: any) => (
          <li className="tags" key={ category.id }>
            <input
              type="checkbox"
              id={ `category-${category.id}` }
              value={ category.id }
              checked={ selectedCategories.includes(category.id) }
              onChange={ handleCheckboxChange }
            />
            <label htmlFor={ `category-${category.id}` }>{category.name}</label>
          </li>
        ))}
      </ul>
      <CreatePostButton onClick={ handleCreatePost }>Create Post</CreatePostButton>
    </CreatePostContainer>
  );
}
