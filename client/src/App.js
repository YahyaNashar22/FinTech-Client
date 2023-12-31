import "./App.css";
import "@fontsource/roboto";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import userContext from "./AuthContext";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);
  console.log(user);

  axios.defaults.withCredentials = true;
  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <AppRoutes />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </userContext.Provider>
  );
}

export default App;
