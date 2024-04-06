import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #ddd;

  .title {
    margin-top: 20px;
    background-color: #666;
    padding: 10px;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    border-radius: 5px;
  }

  .tags {
    color: #333;
    font-size: 16px;
    font-weight: 300;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .tags:hover {
    background-color: #e2e2e2;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }
  
  textarea {
    height: 250px;
  }

  ul {
    border: 1px solid #e2e2e2;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;
    border-radius: 5px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  label {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const MenuBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  background-color: #333;
  padding: 10px 15px;
  border-radius: 5px;

  span {
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;
    font-size: 16px;
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
    margin-top: 20px;

    h3 {
      display: none;
    }
  }
`;

export const CreatePostButton = styled.button`
  margin-top: 20px;
  width: 20%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #202020;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  align-self: flex-end;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
