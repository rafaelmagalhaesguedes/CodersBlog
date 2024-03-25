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

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    padding-top: 5px;
  }

  div {
    display: flex;
  }

  span {
    color: #fff;
    font-size: 0.9rem;
    padding: 0 10px;
    letter-spacing: 1px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
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
  padding: 0 20px;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Logo = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 80px;
  }

  span {
    font-size: 1.9rem;
    font-weight: 300;
    font-family: 'Rubik Dirt';
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    
    img {
      width: 60px;
    }

    span {
      padding-top: 10px;
      width: 130px;
      font-size: 1.5rem;
    }
  }
`;

export const SignUp = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  a {
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  top: 80px;
  right: 0;
  width: 50%;
  height: 40vh;
  background-color: #1a1b1c;
  color: #fff;
  z-index: 999;
  transition: 0.3s ease-in-out;
  border-radius: 0 20px 0 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
