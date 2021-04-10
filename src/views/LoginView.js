import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    // console.log(e);
    // if (e.target.input.checked) {
    //   e.target.input.firstElementChild.type === 'text';
    // }
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
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            name="passwordCheckbox"
            onClick={handleCheckbox}
          />
          Show password
        </label>
      </form>
    </>
  );
};

export default LoginView;
