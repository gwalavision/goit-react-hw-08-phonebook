import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    dispatch(authOperations.login(payload));
    resetForm();
  };

  const handleCheckbox = e => {
    e.target.checked ? setInputType('text') : setInputType('password');
  };

  return (
    <>
      <h1>Please, log in to get into your profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type={inputType}
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="passwordCheckbox"
            onClick={handleCheckbox}
          />
          Show password
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LoginView;
