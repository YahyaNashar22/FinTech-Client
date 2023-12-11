import { useState } from 'react';
import style from './Dashboard.module.css'

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material';


// Components

import AnalyticEcommerce from "../../components/AnalyticEcommerce/AnalyticEcommerce"
import OrdersTable from '../../components/OrdersTable/OrdersTable';
import IncomeAreaChart from '../../components/IncomeAreaChart/IncomeAreaChart';
import MonthlyBarChart from '../../components/ MonthlyBarChart/MonthlyBarChart';
import MainCard from '../../components/MainCard/MainCard';
import ReportAreaChart from '../../components/ReportAreaChart/ReportAreaChart';

const styles = {
  h1: {
    color: "white",
    fontSize: "50px",
    fontWeight: 'bold',
  },
  ".css-dasaed-MuiGrid-root":{
    mt: "0",
    pr: "22px",
    m: "20px",
    backgroundColor: '#25282C',
    width: "initial"
  },
  ".MuiCardContent-root": {
    backgroundColor: '#25282C',
  },
  ".title": {
    color: "white",
  },
  ".buttons": {
    color: "#24B3F5"
  },
}


const Dashboard = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={styles['.css-dasaed-MuiGrid-root']}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h1" sx={styles.h1}>Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} sx={{ pl: 0}}>
        <AnalyticEcommerce title="Total Sales" count="$4,000" colorB="#228EBE" percentage={59.3} extra="$3,000"/>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <AnalyticEcommerce title="Total Profits" count="$1,000" isLoss colorB="var(--secondery-green);" percentage={70.5} extra="$8,900"/>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <AnalyticEcommerce title="Total Expences" count="$2,000" colorB="#228EBE" percentage={27.4} extra="$1,943" />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <AnalyticEcommerce title="Total Goal" count="$1,000" percentage={27.4} isLoss colorB="var(--secondery-green)" extra="$2,395" />
      </Grid>

      {/* row 2 */}
      <Grid item xs={12} md={6} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" sx={styles['.title']}>Sales Overview</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
            <Button
                size="small"
                onClick={() => setSlot('week')}
                sx={styles['.buttons']}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                sx={styles['.buttons']}
                variant={slot === 'month' ? 'outlined' : 'text'}
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
            <Typography variant="h5" sx={styles['.title']}>Week Sales</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0}}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary" sx={{fontSize: "17px", color: "white"}}>
                This Week Income
              </Typography>
              <Typography variant="h3" sx={{fontSize:"25px", m: "7px", color: "white"}}>$7,650</Typography>
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
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Finance Growth" sx={{color: "white"}} />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Expenses Ratio" sx={{color: "white"}} />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Risk Cases" sx={{color: "white"}}/>
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
          <OrdersTable />
        </MainCard>
      </Grid>

    </Grid>
  );
};

export default Dashboard;
