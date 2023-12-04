import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './OrdersTable.css';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project import
import Dot from '../Dot/Dot'

function createData(transactionID, title, value, date) {
  return { transactionID, title, value, date };
}

const rows = [
  createData(84564564, 'Camera Lens', 40, "3/11/2023"),
  createData(98764564, 'Laptop', 300, "3/11/2023"),
  createData(98756325, 'Mobile', 355, "3/11/2023"),
  createData(98652366, 'Handset', 50, "3/11/2023"),
  createData(13286564, 'Computer Accessories', 100, "3/11/2023"),
  createData(86739658, 'TV', 99, "3/11/2023"),
  createData(13256498, 'Keyboard', 125, "3/11/2023"),
  createData(98753263, 'Mouse', 89, "3/11/2023"),
  createData(98753275, 'Desktop', 185, "3/11/2023"),
  createData(98753291, 'Chair', 100, "3/11/2023")
];

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
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
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

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'transactionID',
    align: 'left',
    disablePadding: false,
    label: 'Transaction ID'
  },
  {
    id: 'title',
    align: 'left',
    disablePadding: true,
    label: 'Title'
  },
  {
    id: 'value',
    align: 'right',
    disablePadding: false,
    label: 'Value'
  },
  {
    id: 'date',
    align: 'left',
    disablePadding: false,
    label: 'Date'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState('asc');
  const [orderBy] = useState('transactionID');
  const [selected] = useState([]);

  const isSelected = (transactionID) => selected.indexOf(transactionID) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.transactionID);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.transactionID}
                  selected={isItemSelected}
                >
                  <TableCell component="th" id={labelId} scope="row">
                    <Typography color="secondary">
                      {row.transactionID}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>
                  <Typography>
                      ${row.value}
                    </Typography>
                  </TableCell>
                  <TableCell>
                  <Typography>
                      {row.date}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
