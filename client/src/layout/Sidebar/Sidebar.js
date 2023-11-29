
import styles from '../../layout/Sidebar/Sidebar.module.css'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import { useState ,useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUsers,  faSignOutAlt, faBullseye, faFileAlt, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';



const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FontAwesomeIcon icon={faChartBar} />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    path: "/report",
    name: "Reports",
    icon: <FontAwesomeIcon icon={faFileAlt} />,
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon:< FontAwesomeIcon icon={faExchangeAlt} />,
  },
  {
    path: "/goal",
    name: "Goal",
    icon: <  FontAwesomeIcon icon={faBullseye} />,
   
  },
 
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
  },
  {
    path: "/saved",
    name: "Log Out",
    icon: < FontAwesomeIcon icon={faSignOutAlt} />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleResize = () => {
      // Check the screen width and set the initial state accordingly
      const isResponsiveMode = window.innerWidth <= 768; // You can adjust this threshold as needed
      setIsOpen(!isResponsiveMode);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  


  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className={styles.maincontainer}>
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={styles.sidebar}
        >
          <div className={styles.topsection}>
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className={styles.logo}
                >
                  DoSomeCoding
                </motion.h1>
              )}
            </AnimatePresence>

            <div className={styles.bars}>
              <FaBars onClick={toggle} />
            </div>
          </div>
          {}
          <section className={styles.routes}>
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className={styles.link}
                  activeClassName="active"
                >
                  <div className={styles.icon}>{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={styles.linktext}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;

