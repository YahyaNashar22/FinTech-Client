import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import pic from "../../assets/icons/noAvatar.png"
export const DataTable = ({ usersData }) => {
    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 30 },
    //     {
    //         field: "avatar", headerName: "Profile", width: 300,
    //         renderCell: (params) => {
    //             return <img src={params.row.img || pic} alt='' />
    //         }
    //     },

    //     {
    //         field: 'Name',
    //         headerName: 'Name',
    //         width: 300,
    //         editable: true,
    //     },

    //     {
    //         field: "role", headerName: "Role", width: 300,
    //     },
    //     {
    //         field: "email", headerName: "Email", width: 300,
    //     },
    //     {
    //         field: "action", headerName: "Action", width: 300,
    //         renderCell: (params) => {
    //             return <div className='action'>
    //                 <span className='view'>Edit </span>
    //                 <span>/ </span>
    //                 <span className='delete'>Delete</span>
    //             </div>
    //         }
    //     },
    // ];

    // const rows = [
    //     { id: 1, avatar: '', Name: 'Jon', email: "example@gmail.com", role: "manager" },
    //     { id: 2, avatar: '', Name: 'Cersei', email: "example@gmail.com", role: "manager" },
    //     { id: 3, avatar: '', Name: 'Jaime', email: "example@gmail.com", role: "manager" },
    //     { id: 4, avatar: '', Name: 'Arya', email: "example@gmail.com", role: "manager" },
    //     { id: 5, avatar: '', Name: 'Daenerys', email: "example@gmail.com", role: "manager" },
    //     { id: 6, avatar: '', Name: null, email: "example@gmail.com", role: "manager" },
    //     { id: 7, avatar: '', Name: 'Ferrara', email: "example@gmail.com", role: "manager" },
    //     { id: 8, avatar: '', Name: 'Rossini', email: "example@gmail.com", role: "manager" },
    //     { id: 9, avatar: '', Name: 'Harvey', email: "example@gmail.com", role: "manager" },
    //     { id: 10, avatar: '', Name: 'Jon', email: "example@gmail.com", role: "manager" },
    //     { id: 11, avatar: '', Name: 'Jon', email: "example@gmail.com", role: "manegar" },
    //     { id: 12, avatar: '', Name: 'Cersei', email: "example@gmail.com", role: "manager" },
    //     { id: 13, avatar: '', Name: 'Jaime', email: "example@gmail.com", role: "manager" },
    //     { id: 14, avatar: '', Name: 'Arya', email: "example@gmail.com", role: "manager" },
    //     { id: 15, avatar: '', Name: 'Daenerys', email: "example@gmail.com", role: "manager" },
    //     { id: 16, avatar: '', Name: null, email: "example@gmail.com", role: "manager" },
    //     { id: 17, avatar: '', Name: 'Ferrara', email: "example@gmail.com", role: "manager" },
    //     { id: 18, avatar: '', Name: 'Rossini', email: "example@gmail.com", role: "manager" },
    //     { id: 19, avatar: '', Name: 'Harvey', email: "example@gmail.com", role: "manager" },

    // ];

    const columns = Object.keys(usersData[0] || {}).map((key) => ({
        field: key,
        headerName: key,
        width: 200,
    }))

    console.log("dataTable", usersData)
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
                    ".MuiDataGrid-withBorderColor": {
                        // background: "red",
                        // margin: '0 auto'
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
                            pageSize: 8,
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
                pageSizeOptions={[8]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    )
}
