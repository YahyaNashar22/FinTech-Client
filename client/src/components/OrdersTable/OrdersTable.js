import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./OrdersTable.css";
import axios from "axios";

// material-ui
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function createData(transactionID, title, value, type, date) {
  return { transactionID, title, value, type, date };
}

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
  return order === "desc"
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

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: "transactionID",
    align: "left",
    disablePadding: false,
    label: "Transaction ID",
  },
  {
    id: "title",
    align: "left",
    disablePadding: true,
    label: "Title",
  },
  {
    id: "value",
    align: "left",
    disablePadding: false,
    label: "Value",
  },
  {
    id: "type",
    align: "left",
    disablePadding: false,
    label: "Type",
  },
  {
    id: "date",
    align: "left",
    disablePadding: false,
    label: "Date",
  },
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
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState("asc");
  const [orderBy] = useState("transactionID");
  const [selected] = useState([]);
  const isSelected = (transactionID) => selected.indexOf(transactionID) !== -1;
  let rows = [];

  // Fetching
  const [transactionsData, setTransactionsData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/transactions/read"
        );
        const data = response.data || [];
        setTransactionsData(data);
        console.log("Data Respond: ", data)
        // const reversedData = Array.isArray(data) ? data.reverse() : [];
        // setTransactionData(reversedData);
        // console.log(reversedData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  console.log("transactionsData: ", transactionsData)
  rows = Array.isArray(transactionsData)
    ? transactionsData.map((transaction) => {
        return createData(
          transaction.id,
          transaction.title,
          transaction.value,
          transaction.type ? "Income" : "Expense",
          transaction.Date
        );
      })
    : [];

  //-----------------

  return (
    <Box>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
        }}>
        <Table
          aria-labelledby="tableTitle"
          sx={{
            "& .MuiTableCell-root:first-of-type": {
              pl: 2,
            },
            "& .MuiTableCell-root:last-of-type": {
              pr: 3,
            },
          }}>
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map(
              (row, index) => {
                const isItemSelected = isSelected(row.transactionID);
                const labelId = `enhanced-table-checkbox-${index}`;

                // Format the date to YYYY-MM-DD
                const formattedDate = new Date(row.date).toISOString().split('T')[0];

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.transactionID}
                    selected={isItemSelected}>
                    <TableCell component="th" id={labelId} scope="row">
                      <Typography color="secondary">
                        {row.transactionID}
                      </Typography>
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>
                      <Typography>${row.value}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{row.type}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{formattedDate}</Typography>
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
