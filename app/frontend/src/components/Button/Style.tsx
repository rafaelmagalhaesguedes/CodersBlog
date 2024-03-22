/*
* Styles Component ButtonBackToTop
*/
import styled from 'styled-components';

export const Section = styled.section`
  /* Section button back to top */
`;

export const Button = styled.button`
  background-color: #333;
  border: none;
  border-radius: 50%;
  bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 15px;
  position: fixed;
  right: 5px;
  transition: background-color 0.3s , transform 0.3s;

  &:hover {
    background-color: #211951;
  }
`;
