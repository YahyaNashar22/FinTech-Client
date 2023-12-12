import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import io from "socket.io-client";

export const socket = io.connect("http://localhost:5000");

const AddTransactionForm = ({ onClose, onAddTransaction }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [userID, setUserID] = useState("");
  const [categoryID, setCategoryID] = useState("");

  const [userList, setUserList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchUserList().then((users) => {
      console.log("User Data:", users);
      setUserList(users);
    });
    fetchCategoryList().then((categories) => setCategoryList(categories));
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await fetch("http://localhost:5000/users/getAll");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const users = await response.json();

      // Add a console log to check the structure of the received data
      console.log("User Data:", users);

      // Check if the data is nested inside a 'data' property
      const userList = users.data || users;

      if (!Array.isArray(userList)) {
        throw new Error("Invalid user data format");
      }

      return userList;
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      return [];
    }
  };
  const fetchCategoryList = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories/all");
      if (!response.ok) {
        throw new Error(
          `Failed to fetch category data. Status: ${response.status}`
        );
      }

      const result = await response.json();
      const categories = result.data;

      console.log("Category Data:", categories); // Log the categories

      if (!Array.isArray(categories)) {
        throw new Error("Invalid category data format");
      }

      setCategoryList(categories); // Set categories in the state

      return categories;
    } catch (error) {
      console.error("Error fetching category data:", error.message);
      return [];
    }
  };
  //////////////////////////socketIO//////////////////
  const sendMessage = () => {
    socket.emit("send_message", "Transaction added");
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("notification added");
    });
  }, []);
  ////////////////////////////socketIO////////////////////
  const handleAddClick = () => {
    const formattedDate = new Date(date).toISOString().split("T")[0];

    const newTransaction = {
      title,
      type,
      Date: formattedDate,
      value: parseFloat(value),
      UserID: userID,
      CategoryID: categoryID,
    };

    onAddTransaction(newTransaction);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <Paper sx={{ backgroundColor: " #25282C", p: 2, color: "#FFFFFF" }}>
        <DialogTitle sx={{ color: "#FFFFFF" }}>Add New Transaction</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{ style: { color: "#FFFFFF" } }}
            InputLabelProps={{ style: { color: "#FFFFFF" } }}
            sx={{ "& fieldset": { borderColor: "#CCCCCC" } }}
          />

          <TextField
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{ style: { color: "#FFFFFF" } }}
            InputLabelProps={{ style: { color: "#FFFFFF" } }}
            sx={{ "& fieldset": { borderColor: "#CCCCCC" } }}
          />
          <TextField
            label="Date"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{ style: { color: "#FFFFFF" } }}
            InputLabelProps={{ style: { color: "#FFFFFF" } }}
            sx={{ "& fieldset": { borderColor: "#CCCCCC" } }}
          />
          <TextField
            label="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{ style: { color: "#FFFFFF" } }}
            InputLabelProps={{ style: { color: "#FFFFFF" } }}
            sx={{ "& fieldset": { borderColor: "#CCCCCC" } }}
          />

          <Select
            label="UserID"
            value={userID}
            onChange={(e) => {
              console.log("Selected User ID:", e.target.value);
              setUserID(e.target.value);
            }}
            fullWidth
            margin="normal"
            sx={{
              "& fieldset": { borderColor: "#CCCCCC" },
              "& .MuiSelect-menu": {
                backgroundColor: "#333",
                color: "#FFFFFF",
              },
              "& .MuiSelect-icon": { color: "#FFFFFF" },
            }}
          >
            <MenuItem value="" disabled>
              UserID
            </MenuItem>
            {userList.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.Name}
              </MenuItem>
            ))}
          </Select>
          <Select
            label="CategoryID"
            value={categoryID}
            onChange={(e) => {
              console.log("Selected cattegory ID:", e.target.value);
              setCategoryID(e.target.value);
            }}
            fullWidth
            margin="normal"
            sx={{
              color: "#FFFFFF",
              "& fieldset": { borderColor: "#CCCCCC" },
              "& .MuiSelect-menu": { backgroundColor: "#555555" },
            }}
          >
            <MenuItem value="" disabled>
              CategoryID
            </MenuItem>
            {categoryList.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.Name}
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
        <TextField
          label="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{ style: { color: "#FFFFFF" } }}
          InputLabelProps={{ style: { color: "#FFFFFF" } }}
          sx={{ "& fieldset": { borderColor: "#CCCCCC" } }}
        />
        {/* Add more fields as needed */}
        <DialogActions>
          <Button
            onClick={() => {
              handleAddClick();
              sendMessage();
            }}
            variant="contained"
            color="primary"
          >
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
