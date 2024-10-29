import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';
function Form() {

    const classes = useStyles()

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
          <Select >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
             <MenuItem value="business">Business</MenuItem>
             <MenuItem value="school">school</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount"  fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date"  />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth >Create</Button>
    

</Grid>
        
    </div>
  )
}

export default Form