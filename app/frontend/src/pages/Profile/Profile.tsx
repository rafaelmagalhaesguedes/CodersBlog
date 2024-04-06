/* eslint-disable react/jsx-max-depth */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUserAlt } from 'react-icons/fa';
import { useProfile } from '../../hooks/useProfile';
import { Content, MenuBody, ProfileContainer, Wrapper } from './Style';

export function Profile() {
  const {
    editing,
    username,
    setUsername,
    email,
    setEmail,
    image,
    setImage,
    handleLogout,
    handleEdit,
  } = useProfile();

  return (
    <ProfileContainer>
      <Wrapper>
        <MenuBody>
          <Link to="/user-posts">
            <FaArrowLeft size={ 15 } />
            {' '}
            Go Back
          </Link>
          <h3>Profile</h3>
          <Link to="/user-posts">
            <span>
              <Link to="/" onClick={ handleLogout }>Logout</Link>
            </span>
          </Link>
        </MenuBody>
        <Content>
          <div className="avatar">
            {image ? (
              <img src={ image } alt={ username } />
            ) : (
              <FaUserAlt size={ 300 } />
            )}
          </div>
          <div className="user">
            <h3>Hello, here you can update your information!</h3>
            <p>
              <strong>
                User:
                {' '}
              </strong>
              {editing
                ? <input
                    value={ username }
                    onChange={ (e) => setUsername(e.target.value) }
                /> : <input value={ username } disabled /> }
            </p>
            <p>
              <strong>
                Email:
                {' '}
              </strong>
              {editing
                ? <input
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                /> : <input value={ email } disabled /> }
            </p>
            <p>
              <strong>
                Image:
                {' '}
              </strong>
              {editing
                ? <input
                    value={ image || '' }
                    onChange={ (e) => setImage(e.target.value) }
                /> : <input value={ image || '' } disabled /> }
            </p>
            <button onClick={ handleEdit }>{editing ? 'Save' : 'Edit Profile'}</button>
          </div>
        </Content>
      </Wrapper>
    </ProfileContainer>
  );
}
