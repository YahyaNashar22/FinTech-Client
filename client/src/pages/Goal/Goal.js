import React from "react";
import { motion } from "framer-motion";
import style from "./Goal.module.css";
import { Link } from "react-router-dom";

function Goal() {
  return (
    <>
      <motion.div className={style.particle1} whileHover={{ rotate: 35 }} />
      <motion.div className={style.particle2} whileHover={{ rotate: -45 }} />
      <motion.div className={style.particle3} whileHover={{ rotate: 45 }} />
      <motion.div className={style.particle4} whileHover={{ rotate: -45 }} />
      <motion.div className={style.particle5} whileHover={{ rotate: 45 }} />
      <motion.div className={style.particle6} whileHover={{ rotate: -45 }} />
      <motion.div className={style.particle7} whileHover={{ rotate: 45 }} />
      <motion.div className={style.particle8} whileHover={{ rotate: -45 }} />
      <motion.div className={style.particle9} whileHover={{ rotate: 45 }} />
      <motion.div className={style.particle10} whileHover={{ rotate: -45 }} />
      <motion.div className={style.particle11} whileHover={{ rotate: 45 }} />
      <motion.div className={style.particle12} whileHover={{ rotate: -45 }} />
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
    </>
  );
}
export default Goal;
