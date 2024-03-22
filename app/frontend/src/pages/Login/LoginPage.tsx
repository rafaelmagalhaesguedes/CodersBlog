import { useState } from 'react';
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
          Admin panel for the Coffee and Code blog.
          <br />
          For tests, use the following credentials:
          <br />
          <strong>Email:</strong>
          {' '}
          admin@admin.com
          <br />
          <strong>Password:</strong>
          {' '}
          secret_admin
        </p>
      </Info>
      <LoginBox>
        <h2>Login</h2>
        <form onSubmit={ handleLogin }>
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
        </form>
      </LoginBox>
    </LoginContainer>
  );
}

export { LoginPage };
