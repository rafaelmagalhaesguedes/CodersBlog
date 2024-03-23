import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 80%;
  margin: 0 auto;
  padding: 30px 0px;
  gap: 5px;
  background-color: #fff;

  .title {
    margin-top: 20px;
    background-color: #f2f2f2;
    padding: 10px;

    h3 {
      margin: 0;
      padding: 0;
    }
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
    border: 1px solid #e2e2e2;
  }
  
  textarea {
    height: 200px;
  }

  ul {
    border: 1px solid #e2e2e2;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-evenly;
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
`;

export const MenuBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;

  span {
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;
    font-size: 16px;
  }

  a {
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    font-weight: 400;
  }
`;

export const CreatePostButton = styled.button`
  margin-top: 10px;
  width: 20%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  align-self: flex-end;
`;
