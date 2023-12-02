import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import pic from "../../assets/icons/noAvatar.png"
export const DataTable = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 30 },
        {
            field: "avatar", headerName: "Profile", width: 300,
            renderCell: (params) => {
                return <img src={params.row.img || pic} alt='' />
            }
        },

        {
            field: 'firstName',
            headerName: 'First name',
            width: 300,
            editable: true,
        },

        {
            field: "role", headerName: "Role", width: 300,
        },
        {
            field: "email", headerName: "Email", width: 300,
        },
        {
            field: "action", headerName: "Action", width: 300,
            renderCell: (params) => {
                return <div className='action'>
                    <span className='view'>Edit </span>
                    <span>/ </span>
                    <span className='delete'>Delete</span>
                </div>
            }
        },
    ];

    const rows = [
        { id: 1, avatar: '', firstName: 'Jon', email: "example@gmail.com", role: "manager" },
        { id: 2, avatar: '', firstName: 'Cersei', email: "example@gmail.com", role: "manager" },
        { id: 3, avatar: '', firstName: 'Jaime', email: "example@gmail.com", role: "manager" },
        { id: 4, avatar: '', firstName: 'Arya', email: "example@gmail.com", role: "manager" },
        { id: 5, avatar: '', firstName: 'Daenerys', email: "example@gmail.com", role: "manager" },
        { id: 6, avatar: '', firstName: null, email: "example@gmail.com", role: "manager" },
        { id: 7, avatar: '', firstName: 'Ferrara', email: "example@gmail.com", role: "manager" },
        { id: 8, avatar: '', firstName: 'Rossini', email: "example@gmail.com", role: "manager" },
        { id: 9, avatar: '', firstName: 'Harvey', email: "example@gmail.com", role: "manager" },
        { id: 10, avatar: '', firstName: 'Jon', email: "example@gmail.com", role: "manager" },
        { id: 11, avatar: '', firstName: 'Jon', email: "example@gmail.com", role: "manegar" },        
        { id: 12, avatar: '', firstName: 'Cersei', email: "example@gmail.com", role: "manager" },
        { id: 13, avatar: '', firstName: 'Jaime', email: "example@gmail.com", role: "manager" },
        { id: 14, avatar: '', firstName: 'Arya', email: "example@gmail.com", role: "manager" },
        { id: 15, avatar: '', firstName: 'Daenerys', email: "example@gmail.com", role: "manager" },
        { id: 16, avatar: '', firstName: null, email: "example@gmail.com", role: "manager" },
        { id: 17, avatar: '', firstName: 'Ferrara', email: "example@gmail.com", role: "manager" },
        { id: 18, avatar: '', firstName: 'Rossini', email: "example@gmail.com", role: "manager" },
        { id: 19, avatar: '', firstName: 'Harvey', email: "example@gmail.com", role: "manager" },

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
                rows={rows}
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
        </div>
    )
}
