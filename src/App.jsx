import Cookies from "js-cookie";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/dashboard";
import GantiPassword from "./dashboard/GantiPassword";
import Create from "./dashboard/layout/Create";
import Edit from "./dashboard/layout/edit";
import Layout from "./dashboard/layout/layout";
import Profiles from "./dashboard/layout/profiles";
import LayoutDash from "./dashboard/layoutDashboard/LayoutDash";
import Profile from "./dashboard/profile";
import Info from "./Detail Informasi/info";
import LandingPage from "./landing page/LandingPage";
import Navbar from "./layout/Navbar/navbar";
import Register from "./layout/register/register";
import Login from "./login/Login";

function App() {
  const DashboardRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return props.children;
    } else if (Cookies.get("token") === undefined) {
      return <Navigate to={"/"} />;
    }
  };

  const LoginRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    } else if (Cookies.get("token") === undefined) {
      return props.children;
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/info/:id"
            element={
              <Layout>
                <Info />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <LoginRoute>
                  <Login />
                </LoginRoute>
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <LoginRoute>
                  <Register />
                </LoginRoute>
              </Layout>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <LayoutDash>
                <DashboardRoute>
                  <Profiles />
                </DashboardRoute>
              </LayoutDash>
            }
          />
          <Route
            path="/dashboard/gantipw"
            element={
              <LayoutDash>
                <DashboardRoute>
                  <GantiPassword />
                </DashboardRoute>
              </LayoutDash>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardRoute>
                <Dashboard />
              </DashboardRoute>
            }
          />
          <Route
            path="/dashboard/edit/:id"
            element={
              <DashboardRoute>
                <Edit />
              </DashboardRoute>
            }
          />
          <Route
            path="/dashboard/create"
            element={
              <DashboardRoute>
                <Create />
              </DashboardRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
