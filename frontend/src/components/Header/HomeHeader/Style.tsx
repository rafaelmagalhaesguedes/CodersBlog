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
    gap: 10px;
  }

  span {
    color: #fff;
    font-size: 0.9rem;
    padding: 0 10px;
    letter-spacing: 1px;
    font-weight: 500;
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

  @media (max-width: 1000px) {
    justify-content: space-between;
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
`;
