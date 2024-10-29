import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles';


function List() {
  const classes = useStyles();

  const transactions = [
    { id:1,type:'Income',category:'home',amount:200,date: 'Tue Oct 29',},
    { id:2,type:'Income',category:'gym',amount:200,date: 'wed Oct 29',},
    { id:3,type:'Income',category:'school',amount:200,date: 'thir Oct 29',},
    { id:4,type:'Income',category:'play',amount:200,date: 'fri Oct 29',},
    { id:5,type:'Income',category:'eat',amount:200,date: 'sat Oct 29',}
  ] ;
  return(
    <div>

      <MUIList dense={false} className={classes.list}>

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