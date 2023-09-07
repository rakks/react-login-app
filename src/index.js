import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { ProSidebarProvider } from "react-pro-sidebar";
import CPODashboard from "./Pages/CPODashboard.js";
import VColorCPO from "./Pages/VColorCPO.js";
import LTADashboard from "./Pages/LTADashboard.js";
import ESVEDashboard from "./Pages/ESVEDashboard.js";
import TNBDashboard from "./Pages/TNBDashboard.js";

import Layout from './Pages/Layout';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Navigation from "./Pages/Navigation";
import Dashboard from "./Pages/Dashboard";
import App from "./App";
import DashboardMain from './Pages/DashboardMain';
import background from "./images/login-bg.png";

ReactDOM.render(
  <React.StrictMode>
        <ProSidebarProvider>
    {/* <ThemeProvider theme={studioTheme}> */}
    <BrowserRouter>
        <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Layout> <DashboardMain/></Layout>} />
        <Route path="CPODashboard" element={<Layout><CPODashboard /> </Layout>} />
        <Route path="VColorCPO" element={<Layout><VColorCPO /> </Layout>} />
        <Route path="LTADashboard" element={<Layout><LTADashboard /> </Layout>} />
        <Route path="ESVEDashboard" element={<Layout><ESVEDashboard /> </Layout>} />
        <Route path="TNBDashboard" element={<Layout><TNBDashboard /></Layout>} />
        </Routes>
    </BrowserRouter>
    {/* </ThemeProvider> */}
    </ProSidebarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
