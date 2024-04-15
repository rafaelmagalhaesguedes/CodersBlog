import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`;

export const MenuBody = styled.div`
  display: flex;
  flex-direction: row;
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
    margin: 1rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  .avatar {
    display: flex;
    justify-content: center;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    input {
      border: 1px solid #333;
      background-color: #fff;
      padding: 5px;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }

  .user {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
    background-color: #ddd;
    border-radius: 5px;

    h3 {
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
    }

    p {
      display: flex;
      gap: 1rem;
      align-items: center;
      width: 100%;

      strong {
        font-weight: 700;
      }

      input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #333;
        padding: 5px;
      }
    }

    button {
      padding: 10px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
