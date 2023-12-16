import Dashboard from '../../components/dashboard/Dashboard'
import DashboardSidBar from '../../components/dashboard/DashboardSidBar'
const DashboardPage = () => {
  return (
    <div className="grid grid-cols-7">
        <div className="col-span-1">
          <DashboardSidBar />
        </div>
        <div className="col-span-6">
          <Dashboard/>
        </div>
      </div>
  )
}

export default DashboardPage