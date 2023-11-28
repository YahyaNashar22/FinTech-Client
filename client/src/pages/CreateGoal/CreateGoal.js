import React from "react";
import style from "./CreateGoal.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function CreateGoal() {
  return (
    <motion.div
      className={style.wrapper}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <h1 className={style.header}>Choose Goal Type</h1>
      <ul className={style.types}>
        <Link to="/monthlygoal" className={style.links}>
          <motion.li
            className={style.type}
            whileHover={{ scale: 1.3, color: "var(--primary-green)" }}
          >
            Monthly
          </motion.li>
        </Link>
        <Link to="quarterlygoal" className={style.links}>
          <motion.li
            className={style.type}
            whileHover={{ scale: 1.3, color: "var(--primary-green)" }}
          >
            Quarterly
          </motion.li>
        </Link>
        <Link to="yearlygoal" className={style.links}>
          <motion.li
            className={style.type}
            whileHover={{ scale: 1.3, color: "var(--primary-green)" }}
          >
            Yearly
          </motion.li>
        </Link>
      </ul>
    </motion.div>
  );
}

export default CreateGoal;
