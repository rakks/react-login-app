import React from 'react';
import Header from './Navbar';
import Navigation from './Navigation';
import styled from 'styled-components';
import DashboardMain from './DashboardMain';
import { Link } from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

// component styles
const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        top: 64px;
        position: relative;
        height: calc(100% - 64px);
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`;
const Main = styled.main`
    position: fixed;
    height: calc(100% - 185px);
    width: 100%;
    padding: 1em;
    overflow-y: scroll;
    @media (min-width: 700px) {
        flex: 1;
        margin-left: 220px;
        height: calc(100% - 64px);
        width: calc(100% - 220px);
    }
`;
const Layout = ({children}) => {
    return (
        <div>
        <Header />
    {/* <React.Fragment> */}

        <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1" component={<Link to="/dashboard" className="link" />} icon={<MenuRoundedIcon />}>
            <h2>DASHBOARD</h2>
          </MenuItem>
          <SubMenu label="Charging Point Operator">
            <MenuItem component={<Link to="/CPODashboard" className="link" />} > CPO Dashboard </MenuItem>
            <MenuItem component={<Link to="/VColorCPO" className="link" />} > VColor CPO Dashboard </MenuItem>
            <MenuItem component={<Link to="/LTADashboard" className="link" />} > LTA Dashboard </MenuItem>
            <MenuItem component={<Link to="/ESVEDashboard" className="link" />} > ESVE Dashboard </MenuItem>
            <MenuItem component={<Link to="/TNBDashboard" className="link" />} > TNB Dashboard </MenuItem>
            <MenuItem> Monitoring </MenuItem>
          </SubMenu>
          <SubMenu label="E-Mobility Provider">
            <MenuItem> Quicksight Dashboard </MenuItem>
            <MenuItem> Monitoring </MenuItem>
          </SubMenu>
          <SubMenu label="Facility">
            <MenuItem> Dashboard </MenuItem>
            <MenuItem> Monitoring </MenuItem>
          </SubMenu>
          <SubMenu label="Fleet Operator">
            <MenuItem> Dashboard </MenuItem>
            <MenuItem> Monitoring </MenuItem>
          </SubMenu>
          <SubMenu label="Utility Provider">
            <MenuItem> Dashboard </MenuItem>
            <MenuItem> Monitoring </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>

            {/* <Navigation /> */}
            <main>{children}</main>

    {/* </React.Fragment> */}
    </div>
    </div>
    );
};
export default Layout;