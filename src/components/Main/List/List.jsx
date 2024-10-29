import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import useStyles from './styles';
import { Delete, MoneyOff } from '@material-ui/icons';

function List() {
  const classes = useStyles();

  const transactions = [
    {
      id:1,
      type:'Income',
      category:'home',
      amount:200,
      date: new Date(),

    }
  ] ;
  return(
    <div>

      <MUIList dense={false} className={classes.List}>

      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>

            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
                {/* here moneyoff is icon */}
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />

            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick=" ">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}

      </MUIList>

    </div>
  )
}

export default List