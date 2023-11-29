import React from "react";
import style from "./YearlyGoal.module.css";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function YearlyGoal() {
  const [goal, setGoal] = useState();
  const [year, setYear] = useState();
  const [isPending, setIsPending] = useState(false);

  const thisYear = new Date().getFullYear();
  const allYears = [];
  const maxYears = 10;
  for (let i = 0; i < maxYears; i++) {
    allYears.push(thisYear + i);
  }
  console.log(thisYear);

  const yearList = allYears.map((i) => {
    return <option key={i}>{i}</option>;
  });

  const navigate = useNavigate();

  const notify = () => toast("Yearly Goal Submitted");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    axios
      .post("http://localhost:5000/goals/create", {
        Value: goal,
        Status: false,
        Start_Date: start,
        End_Date: end,
      })
      .then(() => {
        setIsPending(false);
        notify();
        navigate("/");
      });
  };
  let start = { thisYear },
    end = { thisYear };

  return (
    <motion.div
      className={style.wrapper}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.8 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.0],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <h1 className={style.header}>Enter Yearly Goal</h1>
      <form className={style.yearlyForm} onSubmit={handleSubmit}>
        <motion.input
          className={style.inp}
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
          placeholder="Enter your Yearly goal"
          whileHover={{
            border: "1px solid var(--primary-green)",
            placeholderColor: "var(--primary-green)",
          }}
        />
        <motion.select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className={style.selection}
          whileHover={{ border: "1px solid var(--primary-green)" }}
        >
          {yearList}
        </motion.select>
        {!isPending && (
          <motion.button
            className={style.btn}
            whileHover={{
              border: "1px solid var(--primary-green)",
              borderRadius: "16px",
              backgroundColor: "var(--secondery-green)",
              color: "var(--main-background-color)",
            }}
          >
            Submit
          </motion.button>
        )}
        {isPending && (
          <motion.button
            disabled
            className={style.btn}
            whileHover={{
              border: "1px solid var(--primary-green)",
              borderRadius: "16px",
              backgroundColor: "var(--secondery-green)",
              color: "var(--main-background-color)",
              cursor: "not-allowed",
            }}
          >
            adding goal
          </motion.button>
        )}
      </form>
      <ToastContainer
        position="top-left"
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
    </motion.div>
  );
}

export default YearlyGoal;
