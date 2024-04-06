import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen } from 'react-icons/fa';
import { usePost } from '../../../hooks/usePost';
import { CreatePostButton, CreatePostContainer, MenuBody } from './Style';
import { Loading } from '../../Loading/Loading';

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

  if (!categories) {
    return <Loading />;
  }

  return (
    <CreatePostContainer>
      <MenuBody>
        <Link to="/">
          <FaArrowLeft size={ 15 } />
          {' '}
          Go back
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
        <h3 className="title">Image URL</h3>
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
      <div>
        <h3 className="title">Categories</h3>
      </div>
      <ul>
        {categories && categories.map((category: any) => (
          <li className="tags" key={ category.id }>
            <label htmlFor={ `category-${category.id}` }>
              {category.name}
              <input
                type="checkbox"
                id={ `category-${category.id}` }
                value={ category.id }
                checked={ selectedCategories.includes(category.id) }
                onChange={ handleCheckboxChange }
              />
            </label>
          </li>
        ))}
        {categories.length === 0 && <li>No categories found</li>}
      </ul>
      <CreatePostButton onClick={ handleCreatePost }>Create</CreatePostButton>
    </CreatePostContainer>
  );
}
