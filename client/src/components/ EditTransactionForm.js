import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 import { Paper } from '@mui/material';

const EditTransactionForm = ({ onClose, onEditTransaction, rowData }) => {
  const [editedTransaction, setEditedTransaction] = useState({
    title: rowData.title,
    type: rowData.type,
    Date: rowData.Date,
    value: rowData.value,
    UserID: rowData.UserID,
    CategoryID: rowData.CategoryID,
  });

  const handleFieldChange = (fieldName, value) => {
    setEditedTransaction((prevTransaction) => ({
      ...prevTransaction,
      [fieldName]: value,
    }));
  };

  const handleEdit = () => {
    // Implement any validation or additional logic here
    onEditTransaction(editedTransaction);
  };

  return (
    <Dialog open={true} onClose={onClose}>
                  <Paper sx={{ backgroundColor: ' #25282C', p: 2, color: '#FFFFFF' }}>

      <DialogTitle>Edit Transaction</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={editedTransaction.title}
          onChange={(e) => handleFieldChange('title', e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        />
        <TextField
          label="Type"
          value={editedTransaction.type}
          onChange={(e) => handleFieldChange('type', e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        />
        <TextField
          label="Date"
          value={editedTransaction.Date}
          onChange={(e) => handleFieldChange('Date', e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        />
        <TextField
          label="Value"
          value={editedTransaction.value}
          onChange={(e) => handleFieldChange('value', e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        />
        <TextField
          label="UserID"
          value={editedTransaction.UserID}
          onChange={(e) => handleFieldChange('UserID', e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        />
        <TextField
          label="CategoryID"
          value={editedTransaction.CategoryID}
          onChange={(e) => handleFieldChange('CategoryID', e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: '#FFFFFF' } }}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
        />
        {/* Add more fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleEdit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
      </Paper>
    </Dialog>
  );
};

export default EditTransactionForm;