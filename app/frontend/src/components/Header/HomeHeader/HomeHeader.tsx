/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowRight, FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import LogoImage from '../../../assets/icons/favicon.svg';
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
          <img src={ LogoImage } alt="Logo" />
          <h1>
            <Link to="/">Coders</Link>
          </h1>
        </Logo>
        <SignUp>
          <Link to="/">POSTS</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/register">REGISTER</Link>
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
