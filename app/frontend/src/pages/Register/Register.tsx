import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useRegister } from '../../hooks/useRegister';
import { RegisterContainer, RegisterForm } from './Style';
import { avatarGenerate } from '../../utils/avatarGenerator';

export function Register() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    image,
    setImage,
    passwordConfirmation,
    setPasswordConfirmation,
    handleRegister,
  } = useRegister();

  // Function to generate a random image and set it in the image input field
  const handleGenerateImage = async () => {
    const imageUrl = await avatarGenerate();
    setImage(imageUrl);
  };

  return (
    <RegisterContainer>
      <RegisterForm>
        <h1>Hello,</h1>
        <span className="border-title" />
        <span>Create your account</span>
        <div className="nameEmail">
          <input
            type="text"
            placeholder="Name"
            value={ username }
            onChange={ (e) => setUsername(e.target.value) }
          />
          <input
            type="email"
            placeholder="E-mail"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="image">
          <input
            type="text"
            placeholder="Url image"
            value={ image }
            onChange={ (e) => setImage(e.target.value) }
          />
          <button onClick={ handleGenerateImage }>Generate</button>
          {image && <img src={ image } alt="Generated avatar" />}
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={ passwordConfirmation }
            onChange={ (e) => setPasswordConfirmation(e.target.value) }
          />
        </div>
        <button onClick={ handleRegister }>Register</button>
        <span className="signin">
          Created your account?
          {' '}
          <Link to="/login">Sign in now!</Link>
          <br />
          <div className="back-icon">
            <BiArrowBack size={ 20 } />
            <Link to="/"> Back to home</Link>
          </div>
        </span>
      </RegisterForm>
    </RegisterContainer>
  );
}
