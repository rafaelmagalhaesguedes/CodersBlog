import styled from 'styled-components';

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: 0 auto;
  padding: 1rem 2rem;

  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin: 30px 0;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #000;
  }

  span {
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    h3 {
      display: none;
    }
}`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  margin: 1rem 0 0 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Published = styled.div`
  display: flex;
  justify-content: start;
  margin: 0.7rem 0 1rem 0;
  font-size: 0.9rem;
  gap: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
`;

export const Content = styled.div`
  margin: 0.5rem 0 2rem 0;
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  display: flex;
  justify-content: space-between;

  img {
    width: 300px;
    height: 100%;
    object-fit: cover;
    margin: 1rem 0;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

export const Card = styled.div`
  margin: 1rem 0 0 2rem;

  p {
    margin-bottom: 2rem;
    line-height: 2;
    letter-spacing: 0.5px;
    color: #333;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`;

export const Category = styled.div`
  margin: 1rem 0;
  font-size: 0.9rem;

  .category-item {
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
`;
