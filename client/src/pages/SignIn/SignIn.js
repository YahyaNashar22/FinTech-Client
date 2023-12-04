import React, { useState } from "react";
import style from "./SignIn.module.css";
import { motion } from "framer-motion";
import loginpic from "../../assets/loginpic.png";
import logo from "../../assets/Vectorlogo.png";
import { TextField, Grid, Typography, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import open from "../../assets/open.png";
import closed from "../../assets/close.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [pass, setPass] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const notify = () => toast("Sign in successfull !");

  let see = "";
  let openClose = "";
  if (pass) {
    see = "password";
    openClose = closed;
  } else {
    see = "text";
    openClose = open;
  }
  const passHandler = () => {
    setPass(!pass);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <motion.section
        className={style.wrapper}
        initial={{ x: -200, opacity: 0 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
      >
        <aside className={style.left}>
          <img src={loginpic} alt="login" height="700px" width="100%" />
        </aside>
        <aside className={style.right}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: "32px" }}
            className={style.companyName}
          >
            <span className={style.companyLogo}>
              <img src={logo} height="30px" width="30px" alt="company logo" />{" "}
              {/* needs to be changed when we fetch */}
            </span>
            Company Name {/* needs to be changed when we fetch */}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontSize: "48px", marginBottom: "50px" }}
            className={style.subtitle}
          >
            Good To See You Again !
          </Typography>
          <Typography
            variant="p"
            component="p"
            className={style.fillForm}
            sx={{ marginBottom: "50px" }}
          >
            Fill the form below to create an account
          </Typography>
          <form onSubmit={handleSubmit} className={style.signinForm}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    "& input::placeholder": { color: "var(--grey-color)" },
                    "& label": { color: "var(--grey-color)" },
                    "& .MuiInputBase-input": {
                      color: "var(--main-background-color)",
                    },
                    "& fieldset": { borderColor: "var(--grey-color)" },
                  }}
                  label="Email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Enter your Email"
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  className={style.signinInp}
                />
              </Grid>
              <Grid item xs={12} className={style.passContainer}>
                <FormControl fullWidth>
                  <TextField
                    sx={{
                      "& input::placeholder": { color: "var(--grey-color)" },
                      "& label": { color: "var(--grey-color)" },
                      "& .MuiInputBase-input": {
                        color: "var(--main-background-color)",
                      },
                      "& fieldset": { borderColor: "var(--grey-color)" },
                    }}
                    label="Password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="Enter your Password"
                    variant="outlined"
                    type={see}
                    required
                    fullWidth
                    className={style.passInp}
                  />
                  <span className={style.passEye} onClick={passHandler}>
                    <img
                      src={openClose}
                      height="20px"
                      width="20px"
                      alt="open close eye"
                    />
                  </span>
                </FormControl>
              </Grid>
            </Grid>

            {isPending && (
              <button disabled className={style.pendingSubmit}>
                SIGN IN
              </button>
            )}
            {!isPending && <button className={style.submitter}>SIGN IN</button>}
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "var(--grey-color)",
                textAlign: "center",
              }}
            >
              Don't have an account ?
              <Link to="/signup" className={style.signUp}>
                Sign up
              </Link>
            </Typography>
          </form>
        </aside>
      </motion.section>
    </>
  );
};

export default SignIn;
