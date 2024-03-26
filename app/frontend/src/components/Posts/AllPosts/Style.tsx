/* eslint-disable max-lines */
import styled from 'styled-components';

export const ContainerPosts = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  span {
    font-size: 1.5rem;
    color: #000;
    padding: 5px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h2 {
      display: none;
    }

    span {
      width: 100%;
    }
  }
`;

export const BannerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border-bottom: 5px solid #000;
  border-top: 5px solid #000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #000;
    padding: 5px 0;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: #000;
    padding: 5px 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const BannerImage = styled.div`
  width: 60%;
  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: -118px;
  width: 30%;

  input {
    width: 100%;
    height: 35px;
    padding: 5px 15px;
    border: 1px solid #888;
    border-bottom-left-radius: 8px;
  }

  input::placeholder {
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    font-weight: 500;
  }

  input:focus {
    outline: none;
  }

  button {
    color: #000;
    font-size: 0.9rem;
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    padding: 0 10px;
    height: 35px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const Post = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border-bottom: 5px solid #000;
  border-top: 5px solid #000;
`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #999;
  
  @media (max-width: 768px) {
    margin: 10px;
  }
  
  h3 {
    font-size: 1.8rem;
    color: #000;
    padding: 5px 0;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  div {
    display: flex;
    justify-content: start;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column;
      gap: 1px;
    }
  }

  span {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    span {
      font-size: 0.7rem;
    }
  }
    
  p {
    font-size: 0.9rem;
    padding: 20px 0;
    color: #222;
    line-height: 1.9;
    letter-spacing: 0.9px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }

  .category-item {
    display: inline-block;
    padding: 5px 10px;
    margin: 5px 10px 0 0;
    border-radius: 50px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    .category-item {
      padding: 5px 5px;
      margin: 5px 5px 0 0;
    }
  }
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
  padding: 20px 0;

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  img {
    width: 200px;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
    }

    .content {
      margin-left: 0;
    }
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1rem;
    color: #000;
    line-height: 1.9;
    letter-spacing: 0.9px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
    }
  }

  .read-more {
    margin-top: 10px;

    a {
      font-size: 0.9rem;
      color: #000;
      text-decoration: none;
      background-color: #333;
      color: #fff;
      padding: 5px 10px;
      border-radius: 10px;
    }
  }

  @media (max-width: 768px) {
    .read-more {
      align-self: center;

      a {
        padding: 10px 50px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.8px;
      }
    }
  }
`;

export const PostsNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    color: #000;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ButtonLoadMore = styled.button`
  width: 30%;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #000;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
