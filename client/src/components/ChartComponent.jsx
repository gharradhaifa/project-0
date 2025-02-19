import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { color } from "@mui/system";
import BarChartIcon from "@mui/icons-material/BarChart";
import DoughnutChart from "./dashboard/DoughnutChart.jsx";
import BarChart from "./dashboard/BarChart.jsx";
import ChartLine from "./dashboard/ChartLine.jsx";
// import ListProduct from './ListProduct.jsx';
import Tabuser from "./Tabuser.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChartComponent = (props) => {
  const drawerWidth = 240;
  const color = "#7d69ac";

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: 464,
            height: 326,
            margin: "169px 52px",
          }}
        >
          <DoughnutChart />
        </Box>
        <Box
          sx={{
            width: 464,
            height: 297,
            margin: " 169px 52px",
          }}
        >
          <ChartLine />
        </Box>
        <Box
          sx={{
            width: 464,
            height: 297,
            margin: "493px -516px",
          }}
        >
          <BarChart />
        </Box>
      </Box>
    </div>
  );
};

export default ChartComponent;
