/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { useProfile } from '../../hooks/useProfile';
import { ProfileContainer } from './Style';

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
      <div>
        <h2>Profile</h2>
        {editing ? (
          <input value={ image || '' } onChange={ (e) => setImage(e.target.value) } />
        ) : (
          image ? (
            <img src={ image } alt={ username } />
          ) : (
            <FaUserAlt size={ 100 } />
          )
        )}
        <p>
          <strong>
            User:
            {' '}
          </strong>
          {editing
            ? <input
                value={ username }
                onChange={ (e) => setUsername(e.target.value) }
            /> : username }
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
            /> : email }
        </p>

        <button onClick={ handleEdit }>{editing ? 'Save' : 'Edit Profile'}</button>
        <Link to="/" onClick={ handleLogout }>Logout</Link>
        <Link to="/">Back to home</Link>
      </div>
    </ProfileContainer>
  );
}
