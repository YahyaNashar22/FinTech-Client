import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import AddTransactionForm from './AddTransactionForm';
import { Button } from '@mui/material';
import EditTransactionForm from './ EditTransactionForm';
import { toast } from 'react-toastify';


// ... (other imports)

function createData(id, title, type, date, value, userID, categoryID) {
  return {
    id,
    title,
    type,
    date,
    value,
    userID,
    categoryID,
  };
}

const EnhancedTable = () => {
  const [rows, setRows] = React.useState([
    // createData(1, 'ELECTRECITY', 1, '22/11/2023', 67, 4, 5),
    // createData(2, 'ELECTRECITY', 0, '25/11/2023', 68, 3, 6),
    // createData(3, 'ELECTRECITY', 1, '24/11/2023', 69, 1, 2),
    createData(4, 'souhad', 0, '23/11/2023', 70, 3, 2),
    createData(5, 'nnn', 0, '22/11/2023', 67, 4, 3),
    createData(6, 'sousou', 1, '29/11/2023', 60, 4, 3),
    createData(7, 'hello', 0, '22/11/2023', 69, 4, 3),
    createData(8, 'ahmad', 0, '22/11/2023', 68, 4, 3),
    createData(9, 'aboude', 0, '22/11/2023', 62, 4, 3),
    createData(10, 'ELECTRECITY', 0, '22/11/2023', 63, 4, 3),








    // ... (add the rest of your data)
  ]);

  const handleEditTransaction = (editedTransaction) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === selectedRow ? { ...row, ...editedTransaction } : row
      )
    );

    // Close the edit form
    setEditFormOpen(false);
    setSelectedRow(null);
  };


  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
    { id: 'type', numeric: true, disablePadding: false, label: 'Type' },
    { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
    { id: 'value', numeric: true, disablePadding: false, label: 'Value' },
    { id: 'userID', numeric: true, disablePadding: false, label: 'UserID' },
    { id: 'categoryID', numeric: true, disablePadding: false, label: 'CategoryID' },
  ];

  const EnhancedTableHead = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all title',
              }}
              sx={{
                color: '#FFFFFF', // Set the fixed text color of the title
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={{
                color: '#FFFFFF', // Set the fixed text color of the title
              }}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,

  };

  const EnhancedTableToolbar = (props) => {
    const { numSelected, onAddTransactionClick } = props;


    // const handleAddTransactionClick = () => {
    //   setAddTransactionFormOpen(!isAddTransactionFormOpen);
    // };

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: ' #25282C', // Set the background color when a row is selected

          }),
        }}
      >
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div" >
          <Button onClick={onAddTransactionClick} variant="contained" sx={{
            color: '#FFFFFF', // Text color
            bgcolor: '#49837D', // Background color
            '&:hover': {
              bgcolor: '#4DA192', // Hover background color
            },
          }}     >
            Add Transaction
          </Button>

        </Typography>

        {numSelected > 0 ? (
          <>
            <Tooltip title="Edit">
              <IconButton onClick={handleEditClick} sx={{ color: '#FFFFFF' }}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={handleDeleteClick} sx={{ color: '#FFFFFF' }}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <Tooltip title="Filter list">
            <IconButton sx={{ color: '#FFFFFF' }}  >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onAddTransactionClick: PropTypes.func.isRequired,
  };

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('type');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [isEditFormOpen, setEditFormOpen] = React.useState(false);
  const [isAddTransactionFormOpen, setAddTransactionFormOpen] = React.useState(false);


  const handleEditClick = () => {
    // Open the edit form when the "Edit" button is clicked
    if (selected.length === 1) {
      setEditFormOpen(true);
      setSelectedRow(selected[0]);
    }
  };

const handleDeleteClick = () => {
  if (selected.length > 0) {
    const updatedRows = rows.filter((row) => !selected.includes(row.id));
    setRows(updatedRows);
    setSelected([]);

    // Adjust page after deletion
    const lastPage = Math.ceil(updatedRows.length / rowsPerPage);
    if (page > lastPage - 1) {
      setPage(lastPage - 1);

    }
    toast.success('deleted', { position: 'top-right' });

  } else {
    toast.warning('No rows selected for deletion', { position: 'top-right' });
  }
};

  
  
  
  const addTransactionToState = (newTransaction) => {
    setRows((prevRows) => [
      ...prevRows,
      createData(prevRows.length + 1, ...Object.values(newTransaction)),
    ]);
  };
  
  const handleAddTransaction = (newTransaction) => {
    addTransactionToState(newTransaction);
  };


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleAddTransactionClick = () => {
    setAddTransactionFormOpen(!isAddTransactionFormOpen);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%', m:"20px" }}>
      <Paper sx={{ width: '100%', mb: 2, bgcolor: ' #25282C' }}>
        <EnhancedTableToolbar
          numSelected={selected.length}  // Ensure numSelected is defined
          onAddTransactionClick={handleAddTransactionClick}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}  >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              sx={{
                '& .MuiTableSortLabel-root.MuiTableSortLabel-active': {
                  color: '#FFFFFF',  // Text color of the sorted column header
                  '&:hover': {
                    color: '#FFFFFF',  // Text color when hovering over the sorted column header
                  },
                },
              }}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: 'transparent', // Change the background color on hover
                      },
                      '&.Mui-selected': {
                        bgcolor: '#49837D', // Set the background color of the selected row to red
                        '&:hover': {
                          bgcolor: '#49837D', // Change the background color when hovering over the selected row
                        },
                      },
                    }}                >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        sx={{
                          color: 'white', // Set the text color of the Checkbox
                          '&.Mui-checked': {
                            color: 'black', // Set the text color when the checkbox is checked
                          },}}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{
                        color: '#FFFFFF',
                      }}

                    >
                      {row.title}
                    </TableCell>

                    <TableCell align="right" sx={{ color: '#FFFFFF' }} >   {row.type}   </TableCell>
                    <TableCell align="right" sx={{ color: '#FFFFFF' }}>{row.date}</TableCell>
                    <TableCell align="right" sx={{ color: '#FFFFFF' }}>{row.value}</TableCell>
                    <TableCell align="right" sx={{ color: '#FFFFFF' }}>{row.userID}</TableCell>
                    <TableCell align="right" sx={{ color: '#FFFFFF' }}>{row.categoryID}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} sx={{
                    color: '#FFFFFF', // Set the fixed text color of the title
                  }} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            color: '#FFFFFF', // Set the fixed text color of the title
          }}
        />
      </Paper>
      {/* <EnhancedTableToolbar
        numSelected={selected.length}
        onAddTransactionClick={handleAddTransactionClick}
      />
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      {/* Conditional rendering of the AddTransactionForm */}
      {isAddTransactionFormOpen && (
        <AddTransactionForm
          onClose={() => setAddTransactionFormOpen(false)}
          onAddTransaction={handleAddTransaction}
        />



      )}
      {isEditFormOpen && (
        <EditTransactionForm
          onClose={() => setEditFormOpen(false)}
          onEditTransaction={handleEditTransaction}
          rowData={rows.find((row) => row.id === selectedRow)}
        />
      )}
    </Box>
  );
};

export default EnhancedTable;
