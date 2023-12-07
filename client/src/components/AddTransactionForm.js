import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

const AddTransactionForm = ({ onClose, onAddTransaction }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [Date, setDate] = useState('');
  const [value, setValue] = useState('');
  const[UserID,setUserID]=useState('');
  const[CategoryID,setCategoryID]=useState('');


  const handleAddClick = () => {
    // Validate form data (you may add more validation logic here)

    // Create a new transaction object
    const newTransaction = {
      title,
      type,
      Date,
      value: parseFloat(value),
      UserID,
      CategoryID, // Convert to a number if needed
      // Add other properties as needed
    };

    // Call the onAddTransaction callback with the new transaction data
    onAddTransaction(newTransaction);

    // Close the form
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}   >
            <Paper sx={{ backgroundColor: ' #25282C', p: 2, color: '#FFFFFF' }}>

      <DialogTitle sx={{ color: '#FFFFFF' }}>Add New Transaction</DialogTitle>
      <DialogContent >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        />

          
        
        <TextField
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        
        />
        <TextField
          label="Date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"

          InputProps={{ style: { color: '#FFFFFF' } }}
            InputLabelProps={{ style: { color: '#FFFFFF' } }}
            sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
          />
        <TextField
          label="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        />
        
          <TextField
          label="UserID"
          value={UserID}
          onChange={(e) => setUserID(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
            InputLabelProps={{ style: { color: '#FFFFFF' } }}
            sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
          />
          <TextField
          label="CategoryID"
          value={CategoryID}
          onChange={(e) => setCategoryID(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{
            '& fieldset': { borderColor: '#CCCCCC' },
            '&:hover fieldset': { borderColor: '#CCCCCC' },
            '&.Mui-focused fieldset': { borderColor: '#FF0000' }, // Red when focused
          }}
        />
        
        {/* Add more fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddClick} variant="contained" color="primary">
          Add
        </Button>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
      </Paper>

    </Dialog>
  );
};

export default AddTransactionForm;
