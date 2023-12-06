import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import pic from "../../assets/icons/noAvatar.png"
import { Link } from 'react-router-dom'
export const DataTable = ({ usersData }) => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: "avatar", headerName: "Profile", width: 200,
            renderCell: (params) => {
                return <img src={params.row.img || pic} alt='' />
            }
        },

        {
            field: 'Name',
            headerName: 'Name',
            width: 200,
            editable: true,
        },

        {
            field: "Role", headerName: "Role", width: 200,
        },
        {
            field: "Email", headerName: "Email", width: 200,
        },
        {
            field: "action", headerName: "Action", width: 200,
            renderCell: (params) => {
                return <div className='action'>
                    <Link to="/editUser">
                    <span className='view'>Edit </span>
                    </Link>
                    <span>/ </span>
                    <span className='delete'>Delete</span>
                </div>
            }
        },
    ];

    console.log("lklk",usersData.Email)

    // const columns = Object.keys(usersData[0] || {}).map((key) => ({

    //     field: key, headerName: key, width: 300

    // }))

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
