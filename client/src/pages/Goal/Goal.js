import React from "react";
import { motion } from "framer-motion";
import style from "./Goal.module.css";
import { Link } from "react-router-dom";

function Goal() {
  return (
    <div className={style.wrapper}>
      <Link to="/createGoal" className={style.goal}>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 1 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 3,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.3,
            x: { duration: 1 },
          }}
          whileHover={{
            backgroundColor: "var(--white)",
            boxShadow: "1px 1px 6px 10px var(--grey-color) ",
            scale: 3.5,
          }}
          className={style.createGoal}
        >
          Create Goal
        </motion.div>
      </Link>
    </div>
  );
}
export default Goal;
