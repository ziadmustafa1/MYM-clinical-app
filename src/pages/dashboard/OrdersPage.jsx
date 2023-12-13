import DashboardSidBar from '../../components/dashboard/DashboardSidBar'
import Orders from '../../components/dashboard/Orders'
const OrdersPage = () => {
  return (
    <div className="grid grid-cols-7">
        <div className="col-span-1">
          <DashboardSidBar />
        </div>
        <div className="col-span-6">
          <Orders/>
        </div>
      </div>
  )
}

export default OrdersPage
