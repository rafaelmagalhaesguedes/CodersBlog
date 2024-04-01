import styled from 'styled-components';

export const MenuTop = styled.div`
  background-color: #000;
  width: 80%;
  height: 30px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    padding-top: 5px;
  }

  div {
    display: flex;
    gap: 10px;
  }

  span {
    color: #fff;
    font-size: 0.9rem;
    padding: 0 10px;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .title-desktop {
    display: block;
  }

  .title-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .title-mobile {
      display: block;
    }

    .title-desktop {
      display: none;
    }
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  width: 80%;
  height: 80px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
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
    background-color: #000;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 10%;
  top: 80px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
    a {
        text-decoration: none;
        color: black;
    }
`;

export const Logo = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  img {
    width: 80px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin-top: 0;
    
    img {
      width: 60px;
    }

    h1 {
      font-size: 1.3rem;
    }

    span {
      padding-top: 10px;
      width: 130px;
      font-size: 1.5rem;
    }
  }
`;

export const UserInfo = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  
  p {
    margin: 0;
  }

  img {
    width: 50px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    padding-right: 20px;

    p {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  
  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  display: flex;
`;
