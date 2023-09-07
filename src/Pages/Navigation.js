

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Navigation = () => {

  
  return (
    <div style={{ display: "flex", height: "100vh" }}>

      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
            <h2>DASHBOARD</h2>
          </MenuItem>
          <SubMenu label="Charging Point Operator">
            <MenuItem> Quicksight Dashboard </MenuItem>
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
    </div>
  );
}

export default Navigation;