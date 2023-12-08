// EditUserForm.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

const EditUserForm = ({ formData, onSave, onCancel }) => {
    const [formUser, setFormUser] = useState(formData);
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormUser((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(formUser);
    };

    return (
        <Dialog open={true} onClose={onCancel}>
            <Paper sx={{ backgroundColor: '#25282C', p: 2, color: '#FFFFFF' }}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        name="Name"
                        value={formUser.Name}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputProps={{ style: { color: '#FFFFFF' } }}
                        InputLabelProps={{ style: { color: '#FFFFFF' } }}
                        sx={{ '& fieldset': { borderColor: '#4DA192' } }}
                    />
                    <TextField
                        label="Email"
                        name="Email"
                        value={formUser.Email}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputProps={{ style: { color: '#FFFFFF' } }}
                        InputLabelProps={{ style: { color: '#FFFFFF' } }}
                        sx={{ '& fieldset': { borderColor: '#4DA192' } }}
                    />
                    <TextField
                        label="Role"
                        name="Role"
                        value={formUser.Role}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputProps={{ style: { color: '#FFFFFF' } }}
                        InputLabelProps={{ style: { color: '#FFFFFF' } }}
                        sx={{ '& fieldset': { borderColor: '#4DA192' } }}
                    />
                    <TextField
                        label="Pssword"
                        name="Password"
                        // value={formUser.Role}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputProps={{ style: { color: '#FFFFFF' } }}
                        InputLabelProps={{ style: { color: '#FFFFFF' } }}
                        sx={{ '& fieldset': { borderColor: '#4DA192' } }}
                    />
                    <TextField
                        label="Pssword"
                        name="Password"
                        // value={formUser.Role}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputProps={{ style: { color: '#FFFFFF' } }}
                        InputLabelProps={{ style: { color: '#FFFFFF' } }}
                        sx={{ '& fieldset': { borderColor: '#14EBBE' } }}
                    />
                    <TextField
                        label="Pssword"
                        name="Password"
                        // value={formUser.Role}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputProps={{ style: { color: '#FFFFFF' } }}
                        InputLabelProps={{ style: { color: '#FFFFFF' } }}
                        sx={{ '& fieldset': { borderColor: '#4DA192' } }}
                    />
                    {/* Add more fields as needed */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} variant="contained" color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Paper>
        </Dialog>
    );
};

export default EditUserForm;
