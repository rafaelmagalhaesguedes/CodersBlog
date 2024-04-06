import styled from 'styled-components';

export const MenuTop = styled.div`
  background-color: #000;
  width: 100%;
  height: 30px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 165px;

  @media (max-width: 768px) {
    padding: 0;
  }

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
    font-size: 0.8rem;
    padding: 0 10px;
    letter-spacing: 0.5px;
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
  background-color: #202020;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 0 165px 0 160px;
  border-bottom: 1px solid #d3d3d3;


  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-right: 10px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.5px;
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
    margin-top: 15px;

    img {
      width: 40px;
    }
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
