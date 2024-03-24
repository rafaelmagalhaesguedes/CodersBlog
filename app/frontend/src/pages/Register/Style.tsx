import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1a1b1c;
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 35%;
  color: #fff;

  .border-title {
    width: 5.5%;
    border: 3px solid #fff;
    margin-top: -15px;
    margin-bottom: -5px;
  }

  .password, .nameEmail {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }

  h1 {
    font-size: 34px;
    align-self: flex-start;
  }

  span {
    font-size: 16px;
    align-self: flex-start;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 2px #c0c0c0;
  }
    
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    margin: 10px 0;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-weight: 700;
  }

  button:hover {
    background-color: #555;
    transition: 0.3s;
    letter-spacing: 2px;
  }

  a {
    color: #fff;
  }

  a:hover {
    text-decoration: underline;
  }

  .signin {
    font-size: 14px;
    margin-top: 10px;
    align-self: center;

    .back-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      gap: 5px;
    }
  }
`;
