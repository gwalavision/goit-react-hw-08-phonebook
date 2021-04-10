import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const SignupView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    dispatch(authOperations.register(payload));
    resetForm();
  };

  return (
    <>
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
        </label>
        <label>
          <input type="checkbox" name="passwordCheckbox" />
          Show password
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignupView;
