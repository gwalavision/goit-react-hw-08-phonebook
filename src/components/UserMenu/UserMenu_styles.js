import { withStyles } from '@material-ui/core/styles';
import { createUseStyles } from 'react-jss';
import { Button } from '@material-ui/core';

export const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    padding: '2px 20px',
    fontFamily: 'Helvetica',
  },
})(Button);

export const useStyles = createUseStyles({
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  avatar: {
    display: 'block',
    marginRight: '7px',
  },

  name: {
    fontSize: '20px',
    marginRight: '7px',
    lineHeight: '100%',
  },

  link: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '20px',
    '&:not(:last-child)': {
      marginRight: '10px',
    },
  },

  linkActive: {
    color: '#2196F3',
  },
});
