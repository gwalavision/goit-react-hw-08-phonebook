import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '395px',
    margin: '0',
    padding: '0',
  },
});

export default useStyles;
