/* eslint-disable sonarjs/no-duplicate-string */
import { fireEvent } from '@testing-library/react';
import { Register } from '../pages/Register/Register';
import renderWithRouter from '../utils/renderWithRouter';

describe('Register', () => {
  it('should render register form', () => {
    // Arrange
    const { getByPlaceholderText, getByText } = renderWithRouter(<Register />);

    // Assert
    expect(getByText('Create your account')).toBeInTheDocument();
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(getByPlaceholderText('Url image')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
  });

  it('should allow typing into name, email, image url, password and confirm password fields', () => {
    // Arrange
    const { getByPlaceholderText } = renderWithRouter(<Register />);
    const nameInput = getByPlaceholderText('Name') as HTMLInputElement;
    const emailInput = getByPlaceholderText('E-mail') as HTMLInputElement;
    const imageUrlInput = getByPlaceholderText('Url image') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    const confirmPasswordInput = getByPlaceholderText('Confirm password') as HTMLInputElement;

    // Act
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(imageUrlInput, { target: { value: 'http://example.com/image.jpg' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });

    // Assert
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(imageUrlInput.value).toBe('http://example.com/image.jpg');
    expect(passwordInput.value).toBe('password');
    expect(confirmPasswordInput.value).toBe('password');
  });

  it('should allow submitting the form', () => {
    // Arrange
    const { getByPlaceholderText, getByText } = renderWithRouter(<Register />);
    const nameInput = getByPlaceholderText('Name') as HTMLInputElement;
    const emailInput = getByPlaceholderText('E-mail') as HTMLInputElement;
    const imageUrlInput = getByPlaceholderText('Url image') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    const confirmPasswordInput = getByPlaceholderText('Confirm password') as HTMLInputElement;
    const registerButton = getByText('Register');

    // Act
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(imageUrlInput, { target: { value: 'http://example.com/image.jpg' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });
    fireEvent.click(registerButton);

    // Assert
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(imageUrlInput.value).toBe('http://example.com/image.jpg');
    expect(passwordInput.value).toBe('password');
    expect(confirmPasswordInput.value).toBe('password');
  });
});
