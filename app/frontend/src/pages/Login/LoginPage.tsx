/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../../context/auth';
import { Info, LoginBox, LoginContainer } from './Style';

function LoginPage() {
  const { Login } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (): void => {
    Login({ email, password });
  };

  return (
    <LoginContainer>
      <Info>
        <h1>Coffee and Code!</h1>
        <p>
          User panel for the Coffee and Code blog.
        </p>
      </Info>
      <LoginBox>
        <form onSubmit={ handleLogin }>
          <h2>Login</h2>
          <span className="border-title" />
          <input
            onChange={ (e) => {
              setEmail(e.target.value);
            } }
            placeholder="Email"
          />
          <div>
            <input
              type={ showPassword ? 'text' : 'password' }
              onChange={ (e) => {
                setPassword(e.target.value);
              } }
              placeholder="Password"
            />
            {showPassword ? (
              <FiEyeOff
                className="icon"
                onClick={ () => setShowPassword(!showPassword) }
              />
            ) : (
              <FiEye
                className="icon"
                onClick={ () => setShowPassword(!showPassword) }
              />
            )}
          </div>
          <button type="submit">Access</button>
          <span className="register">
            Don&apos;t have an account?
            {' '}
            <Link to="/register">Register now!</Link>
            <br />
            <div className="back-icon">
              <BiArrowBack size={ 20 } />
              <Link to="/"> Back to home</Link>
            </div>
          </span>
        </form>
      </LoginBox>
    </LoginContainer>
  );
}

export { LoginPage };
