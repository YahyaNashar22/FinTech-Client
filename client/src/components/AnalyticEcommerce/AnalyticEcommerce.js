// material-ui
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// project import
import MainCard from "../MainCard/MainCard";

// assets
import { RiseOutlined, FallOutlined } from "@ant-design/icons";

const style = {
  ".box": {
    pr: "20px",
    backgroundColor: "var(--page-background-color)",
  },
  ".title": {
    color: "white",
  },
  ".paragraph": {
    pt: 2.25,
    color: "white",
  },
  ".count": {
    color: "white",
  },
  ".GoalCount": {
    color: "white",
    mt: "23px",
  },
  ".number": {
    // color: "#0794D5",
    color: "var(--primary-green)",
    fontWeight: "bold",
    fontSize: "13.5px",
  },
};

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({
  color,
  title,
  count,
  percentage,
  isLoss,
  extra,
  less,
  colorB,
  isExpences,
  isGoal,
}) => (
  <MainCard contentSX={style[".box"]}>
    <Stack spacing={0.5}>
      <Typography variant="h6" sx={style[".title"]}>
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          {!isGoal ? (
            <Typography variant="h4" sx={style[".count"]}>
              {count}
            </Typography>
          ) : (
            <Typography variant="h4" sx={style[".GoalCount"]}>
              {count}
            </Typography>
          )}
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              icon={
                <>
                  {!isLoss && (
                    <RiseOutlined
                      style={{ fontSize: "0.75rem", color: "inherit" }}
                    />
                  )}
                  {isLoss && (
                    <FallOutlined
                      style={{ fontSize: "0.75rem", color: "inherit" }}
                    />
                  )}
                </>
              }
              label={`${percentage}%`}
              sx={{
                ml: 1.25,
                pl: 1,
                background: colorB,
                color: "white",
                fontWeight: "bold",
              }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
    <Box sx={style[".paragraph"]}>
      {isGoal ? (
        ""
      ) : isExpences ? (
        <Typography variant="caption">
          You spend{" "}
          <Typography component="span" variant="caption" sx={style[".number"]}>
            {less}
          </Typography>{" "}
          less this year
        </Typography>
      ) : (
        <Typography variant="caption">
          You made an extra{" "}
          <Typography component="span" variant="caption" sx={style[".number"]}>
            {extra}
          </Typography>{" "}
          this year
        </Typography>
      )}
    </Box>
  </MainCard>
);

export default AnalyticEcommerce;
