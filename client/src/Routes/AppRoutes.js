import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Transactions from "../pages/Transactions/Transactions";
import Report from "../pages/Report/Report";
import Users from "../pages/Users/Users";
import Goal from "../pages/Goal/Goal";
import EditUser from "../pages/EditUser/EditUser";
import EditCompany from "../pages/EditCompany/EditCompany";
import Settings from "../pages/Settings/Settings";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Start from "../pages/Start/Start";

import LayoutWithHeaderSidebar from "./LayoutWithHeaderSidebar";
import LayoutWithoutHeaderSidebar from "./LayoutWithoutHeaderSidebar";
import CreateGoal from "../pages/CreateGoal/CreateGoal";
import MonthlyGoal from "../pages/MonthlyGoal/MonthlyGoal";
import QuarterlyGoal from "../pages/QuarterlyGoal/QuarterlyGoal";
import YearlyGoal from "../pages/YearlyGoal/YearlyGoal";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Routes that have the header and the sidebar */}
          <Route
            index
            element={
              <LayoutWithHeaderSidebar>
                <Dashboard />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/"
            element={
              <LayoutWithHeaderSidebar>
                <Dashboard />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/transactions"
            element={
              <LayoutWithHeaderSidebar>
                <Transactions />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/report"
            element={
              <LayoutWithHeaderSidebar>
                <Report />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/users"
            element={
              <LayoutWithHeaderSidebar>
                <Users />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/goal"
            element={
              <LayoutWithHeaderSidebar>
                <Goal />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/creategoal"
            element={
              <LayoutWithHeaderSidebar>
                <CreateGoal />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/monthlygoal"
            element={
              <LayoutWithHeaderSidebar>
                <MonthlyGoal />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/quarterlygoal"
            element={
              <LayoutWithHeaderSidebar>
                <QuarterlyGoal />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/yearlygoal"
            element={
              <LayoutWithHeaderSidebar>
                <YearlyGoal />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/edituser"
            element={
              <LayoutWithHeaderSidebar>
                <EditUser />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/settings"
            element={
              <LayoutWithHeaderSidebar>
                <Settings />
              </LayoutWithHeaderSidebar>
            }
          />
          <Route
            path="/editcompany"
            element={
              <LayoutWithHeaderSidebar>
                <EditCompany />
              </LayoutWithHeaderSidebar>
            }
          />

          {/* Routes that doesn't have the header and the sidebar */}
          <Route
            path="/start"
            element={
              <LayoutWithoutHeaderSidebar>
                <Start />
              </LayoutWithoutHeaderSidebar>
            }
          />
          <Route
            path="/signup"
            element={
              <LayoutWithoutHeaderSidebar>
                <SignUp />
              </LayoutWithoutHeaderSidebar>
            }
          />
          <Route
            path="/signin"
            element={
              <LayoutWithoutHeaderSidebar>
                <SignIn />
              </LayoutWithoutHeaderSidebar>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
