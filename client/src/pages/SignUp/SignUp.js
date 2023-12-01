import React, { useState } from "react";
import style from "./SignUp.module.css";
import signupimg from "../../assets/signup.png";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  FormControl,
  Typography,
} from "@mui/material";

const SignUp = () => {
  const [pass, setPass] = useState(true);
  let see = "";
  if (pass) {
    see = "password";
  } else {
    see = "text";
  }
  const passHandler = () => {
    setPass(!pass);
  };

  return (
    <>
      <section className={style.wrapper}>
        <aside className={style.left}>
          <Typography variant="h1" component="h1">
            Company Name {/* needs to be changed when we fetch */}
          </Typography>
          <Typography variant="h2" component="h2">
            Empower your team , sign up now !
          </Typography>
          <FormControl className={style.signupForm}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    "& input::placeholder": { color: "var(--secondery-green)" },
                    "& label": { color: "var(--secondery-green)" },
                    "& .MuiInputBase-input": {
                      color: "var(--primary-green)",
                    },
                    "& fieldset": { borderColor: "var(--secondery-green)" },
                  }}
                  label="Name"
                  placeholder="Enter your Name"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  className={style.signupInp}
                />
              </Grid>

              <Grid item xs={12}>
                <Select
                  labelId="select-label"
                  label="Role"
                  required
                  fullWidth
                  className={style.selection}
                  sx={{
                    color: "var(--primary-green)",
                    "& label": { color: "var(--secondery-green)" },
                    "& input": {
                      color: "var(--primary-green)",
                    },
                    "& fieldset": { borderColor: "var(--secondery-green)" },
                  }}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="financial manager">
                    Financial Manager
                  </MenuItem>
                  <MenuItem value="accountant">Accountant</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    "& input::placeholder": { color: "var(--secondery-green)" },
                    "& label": { color: "var(--secondery-green)" },
                    "& .MuiInputBase-input": {
                      color: "var(--primary-green)",
                    },
                    "& fieldset": { borderColor: "var(--secondery-green)" },
                  }}
                  label="Email"
                  placeholder="Enter your Email"
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  className={style.signupInp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    "& input::placeholder": { color: "var(--secondery-green)" },
                    "& label": { color: "var(--secondery-green)" },
                    "& .MuiInputBase-input": {
                      color: "var(--primary-green)",
                    },
                    "& fieldset": { borderColor: "var(--secondery-green)" },
                  }}
                  label="Password"
                  placeholder="Enter your Password"
                  variant="outlined"
                  type={see}
                  required
                  fullWidth
                  className={style.signupInp}
                />
              </Grid>
            </Grid>
          </FormControl>
          <button onClick={passHandler}>try me</button>
        </aside>
        <aside className={style.right}>
          <img
            src={signupimg}
            height="700px"
            width="600px"
            alt="sigun up page"
          />
        </aside>
      </section>
    </>
  );
};
export default SignUp;
