import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
  align-items: center;
  background-color: #202020;
  width: 17%;
  height: 100vh;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 2rem;
    width: 100%;
    height: 60px;
    flex-direction: row;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  .hamburger {
    width: 30px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .hamburger-line {
    width: 100%;
    height: 2px;
    background-color: #fff;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  background-color: #202020;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  width: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  svg {
    width: 10px;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #ddd;

    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
  }

  .username {
    font-weight: 700;
  }

  .email {
    font-size: 0.8rem;
    font-weight: 400;
  }

  img {
    width: 100px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    flex-direction: row-reverse;

    .email {
      display: none;
    }

    img {
      width: 50px;
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;

  a {
    text-decoration: none;
    color: #fff;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ButtonLogout = styled.div`
  width: 100%;
  padding: 3rem;

  a {
    text-decoration: none;
    color: #fff;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;
