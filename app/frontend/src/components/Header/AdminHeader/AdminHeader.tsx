/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { TiPinOutline } from 'react-icons/ti';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { TbTags } from 'react-icons/tb';
import { FaUserCircle } from 'react-icons/fa';
import { UserType } from '../../../types/UserType';
import { useAuth } from '../../../context/auth';
import {
  HeaderContainer,
  Navbar,
  DropdownMenu,
  DropdownItem,
  UserInfo,
  NavMobile,
  Nav,
  ButtonLogout,
} from './Style';

export function AdminHeader() {
  const { user, Logout } = useAuth();
  const { username, email, image } = user as UserType;
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    Logout();
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      <UserInfo>
        <p className="email">
          {email}
        </p>
        <p className="username">
          {username}
        </p>
        {image
          ? <img src={ image } alt="User" />
          : <FaUserCircle size={ 30 } color="#FFF" />}
      </UserInfo>
      <Nav>
        <Link to="/">
          <TiPinOutline size={ 20 } color="#FFF" />
          Dashboard
        </Link>
        <Link to="/create-post">
          <HiOutlineLightBulb size={ 20 } color="#FFF" />
          New Post
        </Link>
        <Link to="/categories">
          <TbTags size={ 20 } color="#FFF" />
          Tags
        </Link>
        <Link to="/profile">
          <CgProfile size={ 20 } color="#FFF" />
          Profile
        </Link>
      </Nav>
      <ButtonLogout>
        <Link to="/" onClick={ handleLogout }>
          <RiLogoutCircleLine size={ 20 } color="#FFF" />
          Logout
        </Link>
      </ButtonLogout>
      <NavMobile>
        <Navbar onClick={ toggleMenu }>
          <div className="hamburger">
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>
        </Navbar>
        {isOpen && (
          <DropdownMenu>
            <DropdownItem>
              <Link to="/" onClick={ closeMenu }>All Posts</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/create-post" onClick={ closeMenu }>New Post</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/user-posts" onClick={ closeMenu }>My Posts</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/profile" onClick={ closeMenu }>Profile</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/" onClick={ handleLogout }>
                Logout
              </Link>
            </DropdownItem>
          </DropdownMenu>
        )}
      </NavMobile>
    </HeaderContainer>
  );
}
