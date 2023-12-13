import DashboardNav from "../../components/dashboard/DashboardNav";
import "./dashboard.css";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
