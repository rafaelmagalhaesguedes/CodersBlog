/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LogoImage from '../../../assets/img/logo.png';
import {
  HeaderContainer,
  MenuTop,
  Logo,
  SignUp,
} from './Style';

export function HomeHeader() {
  return (
    <>
      <MenuTop>
        <span>Blogs API</span>
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
          <Link to="https://www.linkedin.com/in/rafael-magalh%C3%A3es-guedes/" target="_blank">LinkedIn</Link>
          <Link to="https://github.com/rafaelmagalhaesguedes" target="_blank">GitHub</Link>
          <Link to="/login">Login</Link>
        </SignUp>
      </HeaderContainer>
    </>
  );
}
