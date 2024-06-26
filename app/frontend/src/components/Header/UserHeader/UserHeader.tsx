/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import { UserType } from '../../../types/UserType';
import { useAuth } from '../../../context/auth';
import {
  HeaderContainer,
  Navbar,
  DropdownMenu,
  DropdownItem,
  Logo, UserInfo,
  MenuTop,
  NavMobile,
} from './Style';

export function UserHeader() {
  const { user, Logout } = useAuth();
  const { username, image } = user as UserType;
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
    <>
      <MenuTop>
        <span>Web Technologys Blog</span>
        <div>
          <Link to="https://github.com/rafaelmagalhaesguedes" target="_blank">
            <FaGithub size={ 20 } color="#fff" />
          </Link>
          <Link to="https://www.linkedin.com/in/rafael-magalh%C3%A3es-guedes/" target="_blank">
            <FaLinkedin size={ 20 } color="#fff" />
          </Link>
        </div>
      </MenuTop>
      <HeaderContainer>
        <Logo>
          <h1>
            <Link to="/">Coders Blog</Link>
          </h1>
        </Logo>
        <UserInfo>
          <p>
            {username.split(' ')[0]}
          </p>
          {image
            ? <img src={ image } alt="User" />
            : <FaUserCircle size={ 30 } color="#000" />}
        </UserInfo>
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
                <Link to="/" onClick={ closeMenu }>Posts</Link>
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
    </>
  );
}
