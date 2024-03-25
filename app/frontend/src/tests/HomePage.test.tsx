// src/App.test.tsx

import { screen } from '@testing-library/react';
import { Posts } from '../components/Posts/AllPosts/Posts';
import renderWithRouter from '../utils/renderWithRouter';

describe('Home Page', () => {
  it('should title banner exists', () => {
    renderWithRouter(<Posts />);
    const title = screen.getByText('WELCOME TO THE BLOG!');
    expect(title).toBeInTheDocument();
  });

  it('should paragraph banner exists', () => {
    renderWithRouter(<Posts />);
    const paragraph = screen.getByText('Coffee and Code is a blog about programming, technology, and coffee. Enjoy reading!');
    expect(paragraph).toBeInTheDocument();
  });

  it('should image banner exists', () => {
    renderWithRouter(<Posts />);
    const image = screen.getByAltText('Banner');
    expect(image).toBeInTheDocument();
  });

  it('should title menu exists', () => {
    renderWithRouter(<Posts />);
    const title = screen.getByText('All Posts');
    expect(title).toBeInTheDocument();
  });

  it('should search input exists', () => {
    renderWithRouter(<Posts />);
    const input = screen.getByPlaceholderText('Search for a post...');
    expect(input).toBeInTheDocument();
  });

  it('should search button exists', () => {
    renderWithRouter(<Posts />);
    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeInTheDocument();
  });
});
