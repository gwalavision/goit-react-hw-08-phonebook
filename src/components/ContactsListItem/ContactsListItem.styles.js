import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  listItem: {
    display: 'flex',
    listStyle: 'none',
    '&:not(:last-child)': {
      marginBottom: '7px',
    },
  },

  data: {
    marginRight: '10px',
  },
});

export default useStyles;
