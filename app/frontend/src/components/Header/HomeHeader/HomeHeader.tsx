/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowRight, FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import LogoImage from '../../../assets/img/logo.png';
import {
  HeaderContainer,
  MenuTop,
  Logo,
  SignUp,
  MobileIcon,
  MobileMenu,
} from './Style';

export function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuTop>
        <span>Web Technology Blog</span>
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
          <span>Coffee and Code</span>
        </Logo>
        <SignUp>
          <Link to="/">Posts</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </SignUp>
        <MobileIcon onClick={ handleToggle }>
          <FaBars />
        </MobileIcon>
        {isOpen && (
          <MobileMenu>
            <Link to="/" onClick={ handleToggle }>
              <FaArrowRight size={ 12 } />
              {' '}
              Posts
            </Link>
            <Link to="/login" onClick={ handleToggle }>
              <FaArrowRight size={ 12 } />
              {' '}
              Login
            </Link>
            <Link to="/register" onClick={ handleToggle }>
              <FaArrowRight size={ 12 } />
              {' '}
              Register
            </Link>
          </MobileMenu>
        )}
      </HeaderContainer>
    </>
  );
}
