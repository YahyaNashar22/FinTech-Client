import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Paper, Box } from '@mui/material';

const EditTransactionForm = ({ onClose, onEditTransaction, rowData }) => {
  const [editedTransaction, setEditedTransaction] = useState({
    title: rowData.title,
    type: rowData.type,
    date: rowData.date, // Corrected field name
    value: rowData.value,
    userID: rowData.userID,
    categoryID: rowData.categoryID,
  });

  const handleFieldChange = (fieldName, value) => {
    setEditedTransaction((prevTransaction) => ({
      ...prevTransaction,
      [fieldName]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();

    // Implement any validation or additional logic here
    onEditTransaction(editedTransaction);
  };
  return (
    <Dialog open={true} onClose={onClose}>
      <Box
        component="form"
        onSubmit={handleEdit}
      >
        <Paper sx={{ backgroundColor: '#25282C', p: 2, color: '#FFFFFF' }}>
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
              value={editedTransaction.date}
              onChange={(e) => handleFieldChange('date', e.target.value)}
              fullWidth
              margin="normal"
              InputProps={{ style: { color: '#FFFFFF' } }}
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
            />
            <TextField
              label="Value"
              type="number"
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
              value={editedTransaction.userID}
              onChange={(e) => handleFieldChange('userID', e.target.value)}
              fullWidth
              margin="normal"
              InputProps={{ style: { color: '#FFFFFF' } }}
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              sx={{ '& fieldset': { borderColor: '#CCCCCC' } }}
            />
            <TextField
              label="CategoryID"
              value={editedTransaction.categoryID}
              onChange={(e) => handleFieldChange('categoryID', e.target.value)}
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
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </Paper>
      </Box>
    </Dialog>
  );
};
export default EditTransactionForm;





