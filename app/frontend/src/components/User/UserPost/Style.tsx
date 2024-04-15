/* eslint-disable max-lines */
import styled from 'styled-components';

export const UserPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;

  background-color: #ddd;

  .message-not-found {
    margin: 10px;
    font-size: 20px;
    text-align: center;
    
    p {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;

  h1 {
    font-size: 1.5rem;
    color: #fff;
  }

  div {
    display: flex;
    gap: 10px;
    width: 30%;

    text-align: center;

    input {
      width: 100%;
      padding: 7px 10px;
      border-radius: 5px;
      border: none;
    }

    input:focus {
      outline: none;
    }

    svg {
      margin-top: 2px;
      cursor: pointer;
    }
  }

  button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    h1 {
      font-size: 1.2rem;
    }

    div {
      width: 100%;
      margin: 1rem 0;
    }

    button {
      padding: 5px;
    }

    a {
      width: 100%;
    }
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 20px;

  background-color: #fff;
  border-radius: 5px;

  margin: 20px 0;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-radius: 5px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  padding: 10px;

  div {
    display: flex;
    gap: 10px;
  }

  button {
    padding: 8px 20px;
    border-radius: 5px;
    background-color: #202020;
    color: #fff;
    font-weight: 700;
    font-size: 0.8rem;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 5px;
  }

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;

    button {
      width: 100%;
    }
  }
`;

export const PostTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: #222;
`;

export const PostContent = styled.p`
  font-size: 16px;
  text-align: justify;

  border-radius: 5px;
  padding: 10px;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 300;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
`;

export const ReadMore = styled.div`
  margin-top: 10px;
  
  a {
    color: #000;
    font-weight: 500;
    text-decoration: none;
    background-color: #ddd;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;

    display: flex;
    justify-content: center;

    a {
      background-color: #000;
      color: #fff;
      width: 100%;
      text-align: center;
      padding: 8px;
    }
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 25px;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px;
  margin-top: -20px;

  div {
    display: flex;
    gap: 5px;

    span {
      font-weight: 500;
      letter-spacing: 1px;
      color: #000;
      font-size: 0.7rem;
    }

    p {
      font-weight: 300;
      letter-spacing: 1px;
      color: #000;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    align-items: start;

    div {
      gap: 10px;
    }

    span {
      display: block;
    }

    p {
      display: block;
    }
  }
`;

export const PostCategory = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;

  span {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
