import "./App.css";
import "@fontsource/roboto";
import AppRoutes from "./Routes/AppRoutes";
import  SideBar from "./layout/Sidebar/Sidebar";

function App() {
  return (
  <div className="grid-container">
    <AppRoutes>
    < SideBar/> 
      </AppRoutes>

  </div>
  )
}

export default App;