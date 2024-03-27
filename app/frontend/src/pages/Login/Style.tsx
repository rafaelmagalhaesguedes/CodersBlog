import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #1a1b1c;

    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    padding: 200px;

    width: 60%;

    h1 {
        margin-bottom: 20px;
        font-size: 5rem;
        text-align: center;
        color: #fff;
    }

    img {
        width: 150px;
        height: 150px;
    }

    p {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 2rem;
        letter-spacing: 1px;
        color: #fff;
    }

    @media (max-width: 768px) {
        display: none;

        img {
            display: none;
        }
    }
`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media (max-width: 768px) {
      width: 100%;
      padding: 30px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .border-title {
      width: 5%;
      border: 3px solid #fff;
      margin-top: -20px;
      margin-bottom: 20px;
    }
    
    h2 {
        margin-bottom: 20px;
        font-size: 2rem;
        color: #fff;
    }

    input {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    input::placeholder {
        font-size: 0.8rem;
        font-weight: 300;
        letter-spacing: 1px;
    }

    input:focus {
        outline: 0;
    }

    button {
        width: 300px;
        height: 40px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 3px;
    }

    button:hover {
        background-color: #444;

        transition: 0.5s;

        font-weight: 900;

        letter-spacing: 4px;
    }

    .icon {
        position: relative;
        right: 25px;
        top: 3px;
        cursor: pointer;
    }

    .register {
        width: 300px;
        text-align: center;
        font-size: 0.8rem;
        font-weight: 300;
        line-height: 2rem;
        letter-spacing: 1px;
        color: #fff;
    
        a {
            color: #fff;
            font-weight: 700;
        }

        .back-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            gap: 5px;
        }
    }
`;
