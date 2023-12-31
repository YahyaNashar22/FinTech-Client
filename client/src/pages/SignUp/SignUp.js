import React, { useState } from "react";
import style from "./SignUp.module.css";
import signupimg from "../../assets/signup.png";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  Typography,
  Input,
  FormControl,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import logo from "../../assets/Vectorlogo.png";
import open from "../../assets/open.png";
import closed from "../../assets/close.png";
import finishSignUp from "../../assets/finishSignUp.png";

const SignUp = () => {
  const [pass, setPass] = useState(true);
  const [Picture, setPicture] = useState(null);
  const [role, setRole] = useState("accountant");
  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [layout, setLayout] = useState(style.wrapper);
  const [layout2, setLayout2] = useState(style.layout2);
  //////////////////////////////////////////////////////////////
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   role: "accountant",
  //   image: null,
  // });
  ///////////////////////////////////////////////////////////////
  /* REGEX */

  let passPattern =
    /^(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){3})(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>/?])(?=(?:.*\d){2})[A-Za-z\d!@#$%^&*()_+[\]{}|;:'",.<>/?]{8,}$/;
  const validatePass = (password) => {
    return passPattern.test(password);
  };

  /* used to handle show/hide password */

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

  /* used to upload pictures */

  const handlePictureChange = (e) => {
    console.log(e.target.files[0]);
    setPicture(e.target.files[0]);
  };

  /* used to handle the select role feature */

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  /////////////////////////////////////////////
  // const handleChange = (event) => {
  //   let { name, value } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  ////////////////////////////////////////////////

  ////////////////////////////////////////////////
  // const handleChangeField = (event) => {
  //   console.log("file", event.target.files[0]);
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     image: event.target.files[0],
  //   }));
  // };
  //////////////////////////////////////////////

  /* used to handle the post request */

  const notify = () => toast("Account created successfully !");
  const passnotify = () => toast("Password did not meet the criteria !");
  const handleSubmit = async (e) => {
    e.preventDefault();
    ////////////////////////////////////////////////////////////
    // const userData = new FormData();
    // Object.keys(formData).forEach((key) => {
    //   if (key !== "image") {
    //     userData.append(key, formData[key]);
    //   }
    // });
    // if (formData.image) {
    //   userData.append("Picture", formData.image);
    // }
    // for (let [key, value] of userData.entries()) {
    //   console.log(key, value);
    // }
    //////////////////////////////////////////////////////////////
    if (validatePass(password)) {
      setIsPending(true);
      axios
        .post(
          "http://localhost:5000/users/create",
          {
            Name: name,
            Role: role,
            Email: email,
            Password: password,
            Picture: Picture,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
          setIsPending(false);
          notify();
          setLayout(style.wrapperv2);
          setLayout2(style.layout2v2);
          notify();
        });
    } else {
      passnotify();
    }
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
        className={layout}
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
            sx={{ fontSize: "48px" }}
            className={style.subtitle}
          >
            Empower Your Team , Sign Up Now !
          </Typography>
          <Typography variant="p" component="p" className={style.fillForm}>
            Fill the form below to create an account
          </Typography>
          <form onSubmit={handleSubmit} className={style.signupForm}>
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
                  label="Name"
                  onChange={handleName}
                  value={name}
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
                  onChange={handleRole}
                  value={role}
                  required
                  fullWidth
                  className={style.selection}
                  sx={{
                    color: "var(--main-background-color)",
                    "& input": {
                      color: "var(--main-background-color)",
                    },
                    "& fieldset": { borderColor: "var(--grey-color)" },
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
                    "& input::placeholder": { color: "var(--grey-color)" },
                    "& label": { color: "var(--grey-color)" },
                    "& .MuiInputBase-input": {
                      color: "var(--main-background-color)",
                    },
                    "& fieldset": { borderColor: "var(--grey-color)" },
                  }}
                  label="Email"
                  onChange={handleEmail}
                  value={email}
                  placeholder="Enter your Email"
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  className={style.signupInp}
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
                    onChange={handlePassword}
                    value={password}
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
                  {validatePass(password) && (
                    <Typography
                      variant="p"
                      component="p"
                      sx={{
                        color: "green",
                        fontSize: "12px",
                        display: "block",
                        py: 1,
                      }}
                    >
                      password accepted
                    </Typography>
                  )}
                  {!validatePass(password) && (
                    <Typography
                      variant="p"
                      component="p"
                      sx={{
                        color: "red",
                        fontSize: "12px",
                        display: "block",
                        py: 1,
                      }}
                    >
                      password needs to have at least 2 capital characters, 3
                      lower case characters, 1 special character, 2 numbers
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="p" component="p" className={style.imgTxt}>
                  Kindly Upload Your Image
                </Typography>
                <Input
                  label="Upload Your Image"
                  name="Picture"
                  type="file"
                  onChange={handlePictureChange}
                  sx={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    fontSize: "16px",
                    "&:focus": {
                      outline: "none",
                      borderColor: "var(--main-background-color)",
                    },
                  }}
                />
              </Grid>
            </Grid>

            {isPending && (
              <button disabled className={style.pendingSubmit}>
                SIGN UP
              </button>
            )}
            {!isPending && <button className={style.submitter}>SIGN UP</button>}
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "var(--grey-color)",
                textAlign: "center",
              }}
            >
              Already have an account ?
              <Link to="/signin" className={style.signIn}>
                Sign in
              </Link>
            </Typography>
          </form>
        </aside>
        <aside className={style.right}>
          <img
            src={signupimg}
            height="700px"
            width="600px"
            alt="sigun up page"
          />
        </aside>
      </motion.section>
      <motion.section
        className={layout2}
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
            sx={{ fontSize: "48px" }}
            className={style.subtitle}
          >
            Your Account Has Been Successfully Created
          </Typography>
          <Typography variant="p" component="p" className={style.fillForm}>
            You Can Now Access The Dashboard !
          </Typography>
          <p className={style.finishSignUpP}>
            <Link to="/signin" className={style.finishSignUpL}>
              Finish
            </Link>
          </p>
        </aside>
        <aside className={style.right}>
          <img
            src={finishSignUp}
            height="600px"
            width="500px"
            alt="finish sign up"
          />
        </aside>
      </motion.section>
    </>
  );
};
export default SignUp;
