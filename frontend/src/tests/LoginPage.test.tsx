// src/LoginPage.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/Login/LoginPage';

describe('LoginPage', () => {
  it('should render login form', () => {
    // Arrange
    const { getByPlaceholderText, getByText } = render(<BrowserRouter><LoginPage /></BrowserRouter>);

    // Assert
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Access')).toBeInTheDocument();
  });

  it('should allow typing into email and password fields', () => {
    // Arrange
    const { getByPlaceholderText } = render(<BrowserRouter><LoginPage /></BrowserRouter>);
    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;

    // Act
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Assert
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password');
  });
});
