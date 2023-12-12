import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Dashboard.module.css";

// material-ui
import {
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

// Components

import AnalyticEcommerce from "../../components/AnalyticEcommerce/AnalyticEcommerce";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import IncomeAreaChart from "../../components/IncomeAreaChart/IncomeAreaChart";
import MonthlyBarChart from "../../components/ MonthlyBarChart/MonthlyBarChart";
import MainCard from "../../components/MainCard/MainCard";
import ReportAreaChart from "../../components/ReportAreaChart/ReportAreaChart";

const styles = {
  h1: {
    color: "white",
    fontSize: "50px",
    fontWeight: "bold",
  },
  ".css-dasaed-MuiGrid-root": {
    mt: "0",
    pr: "22px",
    m: "20px",
    backgroundColor: "#25282C",
    width: "initial",
  },
  ".MuiCardContent-root": {
    backgroundColor: "#25282C",
  },
  ".title": {
    color: "white",
  },
  ".buttons": {
    color: "#24B3F5",
  },
};

const Dashboard = () => {
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("week");

  // Fetching For transaction data
  const [transactionsData, setTransactionsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/transactions/readAll"
        );
        const data = response.data.data || [];
        setTransactionsData(data);
        console.log("Data Respond: ", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const calculateFinancials = (transactionsData) => {
    let transactionArray = Object.values(transactionsData);

    let sumIncomes = 0;
    let sumExpenses = 0;

    transactionArray.forEach((transaction) => {
      if (transaction.type === true) {
        sumIncomes += transaction.value;
      } else {
        sumExpenses += transaction.value;
      }
    });

    const profit = sumIncomes - sumExpenses;

    return {
      sumIncomes,
      sumExpenses,
      profit,
    };
  };
  const financialData = calculateFinancials(transactionsData);
  // console.log(financialData);
  // console.log(financialData.sumIncomes);
  // console.log(financialData.sumExpenses);
  // console.log(financialData.profit);

  // Fetching for the Goal
  const [goalsData, setGoalsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/goals/getAll");
        const data = response.data;
        setGoalsData(data);
        console.log("Data Respond: ", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("Goals Data Baby:", goalsData);

  if (goalsData.length > 0) {
    const lastGoal = goalsData[goalsData.length - 1];
    var lastGoalValue = lastGoal.Value;
    console.log("Last Goal:", lastGoal);
    console.log("value: ", lastGoalValue);
  } else {
    console.log("No goals found.");
  }

  // Calculate the percentage completed
  const percentageCompleted = (
    (financialData.sumIncomes / lastGoalValue) *
    100
  ).toFixed(2);

  // Calculate how much is left to reach the goal
  const remainingToGoal = lastGoalValue - financialData.sumIncomes;

  return (
    <Grid
      container
      rowSpacing={4.5}
      columnSpacing={2.75}
      sx={styles[".css-dasaed-MuiGrid-root"]}
    >
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h1" sx={styles.h1}>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} sx={{ pl: 0 }}>
        <AnalyticEcommerce
          title="Total Sales"
          count={`$${financialData.sumIncomes}`}
          colorB="var(--secondery-green)"
          percentage={25.16}
          extra="$1,126"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <AnalyticEcommerce
          title="Total Expences"
          count={`$${financialData.sumExpenses}`}
          isLoss
          colorB="var(--third-green)"
          percentage={57.89}
          less="$1,760"
          isExpences="true"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <AnalyticEcommerce
          title="Total Profits"
          count={`$${financialData.profit}`}
          colorB="var(--secondery-green);"
          percentage={41.84}
          extra="$236"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <AnalyticEcommerce
          title="Goal To Reach"
          count={`$${lastGoalValue}`}
          colorB="var(--secondery-green)"
          remainingToGoal={`$${remainingToGoal}`}
          percentage={percentageCompleted}
          isGoal="true"
        />
      </Grid>

      {/* row 2 */}
      <Grid item xs={12} md={6} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" sx={styles[".title"]}>
              Sales Overview
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot("week")}
                sx={styles[".buttons"]}
                variant={slot === "week" ? "outlined" : "text"}
              >
                Week
              </Button>
              <Button
                size="small"
                onClick={() => setSlot("month")}
                sx={styles[".buttons"]}
                variant={slot === "month" ? "outlined" : "text"}
              >
                Month
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" sx={styles[".title"]}>
              Week Sales
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ fontSize: "17px", color: "white" }}
              >
                This Week Statistics
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: "25px", m: "7px", color: "white" }}
              >
                $7,650
              </Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, "& .MuiListItemButton-root": { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Finance Growth" sx={{ color: "white" }} />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Expenses Ratio" sx={{ color: "white" }} />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Risk Cases" sx={{ color: "white" }} />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Transactions</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable transactionsData={transactionsData} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
