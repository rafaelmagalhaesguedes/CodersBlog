import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 80%;
  margin: 0 auto;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  width: 100%;
  margin: 2rem 0;
  border-radius: 5px;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  a {
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px 20px 20px;

  label {
    margin-bottom: 10px;
    font-size: 18px;
  }

  input {
    margin-bottom: 20px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #999;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    margin-bottom: 20px;
    width: 100%;
    height: 300px;
    padding: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #333;
  color: #fff;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  align-self: flex-end;
`;
