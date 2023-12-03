import "./App.css";
import "@fontsource/roboto";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
    <AppRoutes />
    <ToastContainer position="top-right" autoClose={3000} />
  </div>
  )
}

export default App;
