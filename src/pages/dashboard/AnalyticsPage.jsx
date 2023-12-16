import Analytics from "../../components/dashboard/Analytics/Analytics"
import DashboardSidBar from "../../components/dashboard/DashboardSidBar"

const AnalyticsPage = () => {
  return (
    <div className="grid grid-cols-7">
        <div className="col-span-1">
          <DashboardSidBar />
        </div>
        <div className="col-span-6">
          <Analytics/>
        </div>
      </div>
  )
}

export default AnalyticsPage
