import React from 'react'
import SideBar from '../../Components/Dashboard/SideBar'
import TopBar from '../../Components/Dashboard/TopBar'
import { Outlet } from 'react-router-dom'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="dashboard d-flex">
      <SideBar />

      <div className="d-flex flex-column w-100 p-3 " >
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard
