import React from "react";
import style from "./MonthlyGoal.module.css";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function MonthlyGoal() {
  const [goal, setGoal] = useState();
  const [month, setMonth] = useState();
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const notify = () => toast("Monthly Goal Submitted");

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
  let start, end;
  switch (month) {
    case "January":
      start = new Date("January 1");
      break;
    case "February":
      start = new Date("February 1");
      break;
    case "March":
      start = new Date("March 1");
      break;
    case "April":
      start = new Date("April 1");
      break;
    case "May":
      start = new Date("May 1");
      break;
    case "June":
      start = new Date("June 1");
      break;
    case "July":
      start = new Date("July 1");
      break;
    case "August":
      start = new Date("August 1");
      break;
    case "September":
      start = new Date("September 1");
      break;
    case "October":
      start = new Date("October 1");
      break;
    case "November":
      start = new Date("November 1");
      break;
    case "December":
      start = new Date("December 1");
      break;
    default:
      start = new Date();
  }
  switch (month) {
    case "January":
      end = new Date("January 31");
      break;
    case "February":
      end = new Date("February 28");
      break;
    case "March":
      end = new Date("March 31");
      break;
    case "April":
      end = new Date("April 30");
      break;
    case "May":
      end = new Date("May 31");
      break;
    case "June":
      end = new Date("June 30");
      break;
    case "July":
      end = new Date("July 31");
      break;
    case "August":
      end = new Date("August 31");
      break;
    case "September":
      end = new Date("September 30");
      break;
    case "October":
      end = new Date("October 31");
      break;
    case "November":
      end = new Date("November 30");
      break;
    case "December":
      end = new Date("December 31");
      break;
    default:
      end = new Date();
  }

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
          damping: 10,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <h1 className={style.header}>Enter Monthly Goal</h1>
      <form className={style.monthlyForm} onSubmit={handleSubmit}>
        <motion.input
          className={style.inp}
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
          placeholder="Enter your monthly goal"
          whileHover={{
            border: "1px solid var(--primary-green)",
            placeholderColor: "var(--primary-green)",
          }}
        />
        <motion.select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className={style.selection}
          whileHover={{ border: "1px solid var(--primary-green)" }}
        >
          <option className={style.opt} value="January">
            January
          </option>
          <option className={style.opt} value="February">
            February
          </option>
          <option className={style.opt} value="March">
            March
          </option>
          <option className={style.opt} value="April">
            April
          </option>
          <option className={style.opt} value="May">
            May
          </option>
          <option className={style.opt} value="June">
            June
          </option>
          <option className={style.opt} value="July">
            July
          </option>
          <option className={style.opt} value="August">
            August
          </option>
          <option className={style.opt} value="September">
            September
          </option>
          <option className={style.opt} value="October">
            October
          </option>
          <option className={style.opt} value="November">
            November
          </option>
          <option className={style.opt} value="December">
            December
          </option>
        </motion.select>
        {!isPending && (
          <motion.button
            className={style.btn}
            whileHover={{
              border: "1px solid var(--primary-green)",
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

export default MonthlyGoal;
