import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #ddd;

  @media (max-width: 768px) {
    padding: 10px;
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
    margin: 1rem 0;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CreateCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;

  .tags {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 2rem;
  }

  .cloud-tags {
    background-color: #ddd;
    border-radius: 5px;
    padding: 20px;

    h2 {
      border-bottom: 1px solid #999;
      padding-bottom: 10px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;
    }

    li {
      background-color: #333;
      color: #fff;
      padding: 5px 10px;
      border-radius: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }

    li span {
      cursor: pointer;
    }
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  .create-tag {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    input {
      width: 80%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      width: 20%;
      height: 40px;
      border: none;
      border-radius: 5px;
      background-color: #333;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const EditCategory = styled.div`
  width: 50%;
  padding: 30px;
  background-color: #fff;
  margin: 0 0 0 1rem;
  border-radius: 5px;

  h2 {
    margin: 0;
    padding: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;

    thead {
      background-color: #333;
      color: #fff;
    }

    th {
      padding: 10px;
    }

    td {
      padding: 10px;
      text-align: center;
    }

    tr {
      &:hover {
        background-color: #f9f9f9;
      }
    }

    button {
      background-color: #333;
      color: #fff;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    input {
      padding: 5px;
      border-radius: 5px;
    }

    .name {
      display: flex;
      align-items: center;
    }
  }
`;
