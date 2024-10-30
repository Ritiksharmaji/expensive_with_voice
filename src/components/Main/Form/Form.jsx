import React, { useState,useContext } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';
import { incomeCategories,expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};


function Form() {

    const classes = useStyles()
    const[formData, setFormData] = useState(initialState)

    // getting the add function using the useContext() Hook
    const { addTransaction } = useContext(ExpenseTrackerContext);

      // log the data
      console.log(formData)

      const createTransaction = () => {
        // creating a single transaction 
        const transaction = {...formData, amount: Number(formData.amount), id:uuidv4()}
        //calling the method
        addTransaction(transaction)
        setFormData(initialState)
        
      };

      // to set the category based on choose the type(based on expensive or income )
      const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories 


  return (
    <div>
 <Grid container spacing={2}>
    <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
        {/* here we are going to add the speach which is done by voice */}
        
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
             {/* <MenuItem value="business">Business</MenuItem>
             <MenuItem value="school">school</MenuItem> */}
            {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })}  fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction} >Create</Button>
    

</Grid>
        
    </div>
  )
}

export default Form