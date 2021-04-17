import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  logoutContainer: {
    position: 'relative',
  },

  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    outline: 'none',
  },

  modalThumb: {
    fontSize: 24,
  },

  button: {
    color: '#1188ce',
  },
});
