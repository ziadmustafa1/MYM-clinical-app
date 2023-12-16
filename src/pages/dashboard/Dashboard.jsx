import DashboardNav from "../../components/dashboard/DashboardNav";
import "./dashboard.css";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sticky top-0 z-20 dashboard">
      <DashboardNav />
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
