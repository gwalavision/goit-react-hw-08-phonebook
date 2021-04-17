import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    borderBottom: '1px solid #000',
  },

  link: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '20px',
    '&:not(:last-child)': {
      paddingRight: '10px',
    },
  },

  linkActive: {
    color: '#2196F3',
  },
});

export default useStyles;
