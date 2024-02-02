import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Mobile navbar menu icon
import { GrClose } from 'react-icons/gr'; // Mobile navbar menu close icon
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const NewTransaction = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


    return (
        <div>
            <h1>New Transaction</h1>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField label="Basic date field" />
                </LocalizationProvider>
            </div>
            <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            </div>
            <div>
                <h3>Tags</h3>
                <select multiple>
                    <option>Home</option>
                    <option>Income</option>
                    <option>Healthcare</option>
                    <option>Food</option>
                </select>
            </div>
            <div>
                <h3>Comments</h3>
                <input type='text'></input>
            </div>
            


            
            <Button onClick={handleClick}>Submit</Button>
        

            <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Transaction added"
            action={action}

            />


        </div>
    );
}



export default NewTransaction;