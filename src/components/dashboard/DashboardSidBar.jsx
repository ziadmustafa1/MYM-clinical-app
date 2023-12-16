import { Link } from 'react-router-dom'
import sid1 from '../../assets/dashboard/sid1.svg'
import sid2 from '../../assets/dashboard/sid2.svg'
import sid3 from '../../assets/dashboard/sid3.svg'
import sid4 from '../../assets/dashboard/sid4.svg'
import sid5 from '../../assets/dashboard/sid5.svg'
import sid6 from '../../assets/dashboard/sid6.svg'
import sid7 from '../../assets/dashboard/sid7.svg'
const DashboardSidBar = () => {
  return (
    <div className='pl-10 sticky top-28'>
      <Link to="/" className='flex justify-start items-center py-2'>
      <div className='flex justify-start items-center py-2'>
        <img src={sid1} alt="logo" className='w-5 h-5'/>
      <div>
      <h1 className="text px-3"> Home Page </h1>
    </div>
    </div>
    </Link>
      <Link to="/dashboard" className='flex justify-start items-center py-2'>
      <div className='flex justify-start items-center py-2'>
        <img src={sid1} alt="logo" className='w-5 h-5'/>
      <div>
      <h1 className="text px-3"> Dashboard </h1>
    </div>
    </div>
    </Link>
    <div className='flex justify-start items-center py-2'>
      <Link to="/dashboard/orders" className='flex justify-start items-center py-2'>
        <img src={sid2} alt="logo" className='w-5 h-5'/>
      <div>
      <h1 className="text px-3"> Orders </h1>
    </div>
    </Link>
    </div>
    <div className='flex justify-start items-center py-2'>
      <Link to="/dashboard/analytics" className='flex justify-start items-center py-2'>
        <img src={sid3} alt="logo" className='w-5 h-5'/>
      <div>
      <h1 className="text px-3"> Analytics </h1>
    </div></Link>
    </div>
    <div className='flex justify-start items-center py-2'>
      <Link to="/dashboard/chats" className='flex justify-start items-center py-2'>
        <img src={sid4} alt="logo" className='w-5 h-5'/>
      <div>
      <h1 className="text px-3"> Chat with Visitors </h1>
    </div></Link>
    </div>
    <div className='flex justify-start items-center py-2'>
      <Link to="/dashboard/customers" className='flex justify-start items-center py-2'>
        <img src={sid5} alt="logo" className='w-5 h-5'/>
      <div>
      <h1 className="text px-3"> Customers </h1>
    </div></Link>
    </div>
    <div className='flex justify-start items-center py-2'>
        <img src={sid6} alt="logo" className='w-5 h-5'/>
      <div>
      <h1 className="text px-3"> Help Center </h1>
    </div>
    </div>
    <div className='flex justify-start items-center py-2'>
        <Link to="/dashboard/inventory" className='flex justify-start items-center py-2'>
        <img src={sid7} alt="logo" className='w-5 h-5'/>
      <div>
      <h1 className="text px-3"> Inventory </h1>
    </div>
    </Link>
    </div>
    </div>
  )
}

export default DashboardSidBar
