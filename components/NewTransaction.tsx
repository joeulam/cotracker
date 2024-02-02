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
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';




const NewTransaction = () => {

  // Allows for the snackbar to popup on the bottom left //
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
// ------------------------------------ // 


  // List the choices for a multi line tag // 

  const names = [ 
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ]; // Change it from hard code to getting it from firebase -Joey // 

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
// ------------------------------------------------------------------------- //
    return (
        <div className="relative mr-[50vw] bg-white w-[50vw] h-[60vh] justify-center	">
            <h1>New Transaction</h1>

            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField label="Date" />
                </LocalizationProvider>
            </div>

            <div>
              <FormControl  sx={{ m: 1 }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                  <FilledInput
                      id="filled-adornment-amount"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
              </FormControl>
            </div>

            <div>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="1" control={<Radio />} label="Income" />
                  <FormControlLabel value="-1" control={<Radio />} label="Expense" />
                </RadioGroup>
              </FormControl>
            </div>

            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">Labels</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField
                  id="filled-multiline-static"
                  label="Comments"
                  multiline
                  rows={4}
                  variant="filled"
                />
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