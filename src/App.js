
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Blogs from './Pages/Blogs/Blogs'
import AddProducts from './Pages/Dashboard/AddProducts'
import Dashboard from './Pages/Dashboard/Dashboard'
import DashboardReview from './Pages/Dashboard/DashboardReview'
import ExtraDshboard from './Pages/Dashboard/ExtraDshboard'
import ManageProducts from './Pages/Dashboard/ManageProducts'
import MyOrder from './Pages/Dashboard/MyOrder'
import MyProfile from './Pages/Dashboard/MyProfile'
import Payment from './Pages/Dashboard/Payment'
import User from './Pages/Dashboard/User'
// import UpdateProfile from './Pages/Dashboard/UpdateProfile'


import Home from './Pages/Home/Home'
// import Review from './Pages/Home/Review'
import ToolsDetails from './Pages/Home/ToolsDetails'
import Login from './Pages/Login/Login'
import RequareAdmin from './Pages/Login/RequareAdmin'
import RequireAuth from './Pages/Login/RequireAuth'
import Signin from './Pages/Login/Signin'
import Notfound from './Pages/Notfound/Notfound'
import Protfolio from './Pages/Protfolio/Protfolio'
import Footer from './Pages/Share/Footer'
// import Footer from './Pages/Share/Footer'
import Navbar from './Pages/Share/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/protfolio" element={<Protfolio />} />


        <Route path="/dashboard" element={
          <RequireAuth> <Dashboard /></RequireAuth>
        } >
          <Route index element={<ExtraDshboard></ExtraDshboard>}></Route>

          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='review' element={<DashboardReview></DashboardReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>

          <Route path='addProducts' element={

            <RequareAdmin> <AddProducts></AddProducts></RequareAdmin>

          }></Route>

          <Route path='manageProdcts' element={
            <RequareAdmin><ManageProducts></ManageProducts></RequareAdmin>
          }></Route>
          <Route path='allusers' element={
            <RequareAdmin><User></User></RequareAdmin>
          }></Route>
        </Route>

        <Route path="/tool/:id" element={
          <RequireAuth>  <ToolsDetails /></RequireAuth>


        } />
        <Route path='*' element={<Notfound></Notfound>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>
  )
}

export default App
