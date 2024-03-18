//
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useAuth } from '../../context/auth';
import {
  HeaderContainer,
  Navbar,
  DropdownMenu,
  DropdownItem,
  Logo, UserInfo,
  MenuHeader,
  MenuTop,
} from './Style';

export function Header() {
  const { user, Logout } = useAuth() as any;
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
        <span>Turma 34 - Backend - Trybe</span>
        <div>
          <FaGithub />
          <FaLinkedin />
        </div>
      </MenuTop>
      <HeaderContainer>
        <Logo>
          <h1>Project Blogs API</h1>
        </Logo>
        <UserInfo>
          <p>
            Welcome,
            {user.displayName}
          </p>
        </UserInfo>
        <MenuHeader>
          <Navbar onClick={ toggleMenu } className="hamburger">
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
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
        </MenuHeader>
      </HeaderContainer>
    </>
  );
}
