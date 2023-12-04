import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from '../MainCard/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';


const style = {
  ".box": {
    pr: "20px",
    backgroundColor: "var(--page-background-color)"
  },
  ".title": {
    color: "white"
  },
  ".paragraph": {
    pt: 2.25,
    color: "white"
  },
  ".count": {
    color: "white"
  },
  ".extraNumber": {
    color: "#0794D5",
    fontWeight: "bold",
    fontSize: "13.5px"
    }
}

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ color, title, count, percentage, isLoss, extra, colorB }) => (
  <MainCard contentSX={style['.box']}>
    <Stack spacing={0.5}>
      <Typography variant="h6" sx={style['.title']}>
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" sx={style['.count']}>
            {count}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              icon={
                <>
                  {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                  {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1, background: colorB, color: "white" }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
    <Box sx={style['.paragraph']}>
      <Typography variant="caption">
        You made an extra{' '}
        <Typography component="span" variant="caption" sx={style['.extraNumber']}>
          {extra}
        </Typography>{' '}
        this year
      </Typography>
    </Box>
  </MainCard>
);

// AnalyticEcommerce.propTypes = {
//   color: PropTypes.string,
//   title: PropTypes.string,
//   count: PropTypes.string,
//   percentage: PropTypes.number,
//   isLoss: PropTypes.bool,
//   extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
// };

// AnalyticEcommerce.defaultProps = {
//   color: 'primary'
// };

export default AnalyticEcommerce;
