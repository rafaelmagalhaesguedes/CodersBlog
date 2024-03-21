/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import { UserType } from '../../../types/UserType';
import { useAuth } from '../../../context/auth';
import LogoImage from '../../../assets/img/logo.png';
import {
  HeaderContainer,
  Navbar,
  DropdownMenu,
  DropdownItem,
  Logo, UserInfo,
  MenuTop,
  NavMobile,
  Nav,
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
        <span>Coffee and Code</span>
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
          <img src={ LogoImage } alt="Coffee and Code" />
        </Logo>
        <Nav>
          <a href="/">All Posts</a>
          <a href="/create-post">New Post</a>
          <a href="/user-posts">My Posts</a>
        </Nav>
        <UserInfo>
          <p>
            {username}
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
                <Link to="/profile" onClick={ closeMenu }>Profile</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/user-posts" onClick={ closeMenu }>My Posts</Link>
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
