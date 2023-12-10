import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AddTransactionForm = ({ onClose, onAddTransaction }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');
  const [userID, setUserID] = useState('');
  const [categoryID, setCategoryID] = useState('');

  const [userList, setUserList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    // Fetch user data and category data and update the state
    // Example: You can replace the fetchUserList and fetchCategoryList with your API calls
    fetchUserList().then((users) => setUserList(users));
    fetchCategoryList().then((categories) => setCategoryList(categories));
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await fetch('http://localhost:5000/users/getAll'); // Replace '/api/users' with the actual API endpoint for fetching user data
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      return [];
    }
  };
  
  const fetchCategoryList = async () => {
    try {
      const response = await fetch('http://localhost:5000/categories/all'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch category data');
      }
  
      const categories = await response.json();
  
      if (!Array.isArray(categories)) {
        throw new Error('Invalid category data format');
      }
  
      return categories;
    } catch (error) {
      console.error('Error fetching category data:', error.message);
      return [];
    }
  };
  
  

  const handleAddClick = () => {
    const newTransaction = {
      title,
      type,
      date,
      value: parseFloat(value),
      userID,
      categoryID,
    };

    onAddTransaction(newTransaction);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <Paper sx={{ backgroundColor: '#25282C', p: 2, color: '#FFFFFF' }}>
        <DialogTitle sx={{ color: '#FFFFFF' }}>Add New Transaction</DialogTitle>
        <DialogContent>
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
            value={date}
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
          <Select
            label="UserID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            fullWidth
            margin="normal"
            sx={{ color: '#FFFFFF', '& fieldset': { borderColor: '#CCCCCC' } }}
          >
            {userList.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            label="CategoryID"
            value={categoryID}
            onChange={(e) => setCategoryID(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
              color: '#FFFFFF',
              '& fieldset': { borderColor: '#CCCCCC' },
            }}
          >
            {categoryList.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
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
