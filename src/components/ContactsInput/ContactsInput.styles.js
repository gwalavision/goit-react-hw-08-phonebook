import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    listStyle: 'none',
    '&:not(:last-child)': {
      marginBottom: '7px',
    },
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0px',
  },

  input: {
    lineHeight: '0',
    marginRight: '15px',
  },

  label: {
    marginRight: '15px',
  },
});

export default useStyles;
