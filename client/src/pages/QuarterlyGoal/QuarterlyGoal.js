import React from "react";
import style from "./QuarterlyGoal.module.css";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function QuarterlyGoal() {
  const [goal, setGoal] = useState();
  const [month, setMonth] = useState();
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const notify = () => toast("Quarterly Goal Submitted");

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
    case "firstQuarter":
      start = new Date("January 1");
      break;
    case "seconQuarter":
      start = new Date("April 1");
      break;
    case "thirdQuarter":
      start = new Date("July 1");
      break;
    case "fourthQuarter":
      start = new Date("October 1");
      break;
    default:
      start = new Date();
  }
  switch (month) {
    case "firstQuarter":
      end = new Date("March 31");
      break;
    case "seconQuarter":
      end = new Date("June 30");
      break;
    case "thirdQuarter":
      end = new Date("September 30");
      break;
    case "fourthQuarter":
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
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <h1 className={style.header}>Enter Quarterly Goal</h1>
      <form className={style.monthlyForm} onSubmit={handleSubmit}>
        <motion.input
          className={style.inp}
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
          placeholder="Enter your Quarterly goal"
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
          <option className={style.opt} value="firstQuarter">
            First Quarter
          </option>
          <option className={style.opt} value="secondQuarter">
            Second Quarter
          </option>
          <option className={style.opt} value="thirdQuarter">
            Third Quarter
          </option>
          <option className={style.opt} value="fourthQuarter">
            Fourth Quarter
          </option>
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

export default QuarterlyGoal;
