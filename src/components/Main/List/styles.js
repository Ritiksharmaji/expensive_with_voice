import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
 
  list: {
    maxHeight: '200px', // Set a fixed height
    overflowY: 'auto',  // Enable vertical scrolling
    overflowX: 'hidden',
  },

}));