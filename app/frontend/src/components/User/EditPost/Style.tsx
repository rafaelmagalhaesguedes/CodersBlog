import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;

  width: 100%;

  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  width: 100%;
  margin: 0 0 1rem 0;
  border-radius: 5px;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #fff;
  }

  h3 {
    margin: 0;
    padding: 0;
    color: #fff;
  }

  a {
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px 20px 20px;

  label {
    font-size: 15px;
  }

  input {
    margin-bottom: 20px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #999;
    border-radius: 5px;
    font-size: 13px;
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
  width: 10%;
  padding: 10px 15px;
  background-color: #202020;
  color: #fff;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  align-self: flex-end;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
