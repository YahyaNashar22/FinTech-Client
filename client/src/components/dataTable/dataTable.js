import React, { useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import pic from "../../assets/icons/noAvatar.png"
import EditUserForm from '../dataTable/EditUserForm.js';
import axios from 'axios';

export const DataTable = ({ usersData }) => {

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editFormData, setEditFormData] = useState(null);

    // const [userData, setUsersData] = useState(usersData)g
    const openEditModal = (rowData) => {
        setEditFormData(rowData);
        setIsEditModalOpen(true);
    };
    // const deleteUser = async (userId) => {
    //     try {
    //         const response = await axios.delete(`http://localhost:5000/users/${userId}`);

    //         if (response.status === 200) {
    //             const updatedUsers = usersData.filter((user) => user.id !== userId);
    //             setUsersData(updatedUsers);

    //             console.log('User deleted successfully');
    //         } else {
    //             console.error('Error deleting user:', response.data.error);
    //         }
    //     } catch (error) {
    //         console.error('Error deleting user:', error.message);
    //     }
    // };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditFormData(null);
    };

    const handleSaveEditForm = async (editedData) => {
        try {
            const response = await axios.put(`http://localhost:5000/users/${editedData.id}`, editedData);

            if (response.status === 200) {
                // Close the modal after successfully updating the user data
                closeEditModal();
            } else {
                console.error('Error updating user:', response.data.message);
                // Handle error cases, you can display an error message to the user if needed
            }
        } catch (error) {
            console.error('Error updating user:', error.message);
            // Handle network errors or other issues, you can display an error message to the user if needed
        }
    };





    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },

        {
            field: "avatar", headerName: "Profile", width: 200,
            renderCell: (params) => {
                return <img src={params.img || pic} alt='' />
            }
        },

        {
            field: 'Name', headerName: 'Name', width: 200, editable: true,
        },

        {
            field: "Role", headerName: "Role", width: 200,
        },
        {
            field: "Email", headerName: "Email", width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='action'>
                        <span className='edit' onClick={() => openEditModal(params.row)}>
                            Edit
                        </span>
                        <span>/</span>
                        <span className='delete' /*onClick={() => deleteUser(params.row.id)} */>Delete</span>
                    </div>
                );
            },
        },
    ];


    return (
        <div>
            <DataGrid
                sx={{
                    border: "none",
                    color: "#fff",
                    img: {
                        objectFit: "cover",
                        borderRadius: 50,
                        width: 32,
                        height: 32,
                    },
                    ".MuiDataGrid-toolbarContainer": {
                        flexDirection: "row-reverse",
                    },
                    ".MuiToolbar-root": {
                        color: "#fff",
                    },
                    ".MuiInput-underline": {
                        background: "#fff",
                    },
                    ".MuiDataGrid-root--densityStandard": {
                        border: "none"
                    },
                    ".MuiButton-text": {
                        color: "var(--primary-green)",
                    },
                    ".MuiCheckbox-colorPrimary": {
                        color: "#fff"
                    },
                    marginTop: 10,
                }}
                rows={usersData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
            {/* Edit Form Modal */}
            {isEditModalOpen && (
                <EditUserForm
                    formData={editFormData}
                    onSave={handleSaveEditForm}
                    onCancel={closeEditModal}
                />
            )}
        </div>
    )
}
