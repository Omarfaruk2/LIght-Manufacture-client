
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Blogs from './Pages/Blogs/Blogs'
import Dashboard from './Pages/Dashboard/Dashboard'
import DashboardReview from './Pages/Dashboard/DashboardReview'
import ExtraDshboard from './Pages/Dashboard/ExtraDshboard'
import MyOrder from './Pages/Dashboard/MyOrder'
import MyProfile from './Pages/Dashboard/MyProfile'
// import UpdateProfile from './Pages/Dashboard/UpdateProfile'
// import UpdateProfile from './Pages/Dashboard/UpdateProfile'
// import MyOrder from './Pages/Dashboard/MyOrder'
import Home from './Pages/Home/Home'
// import Review from './Pages/Home/Review'
import ToolsDetails from './Pages/Home/ToolsDetails'
import Login from './Pages/Login/Login'
import RequireAuth from './Pages/Login/RequireAuth'
import Signin from './Pages/Login/Signin'
import Footer from './Pages/Share/Footer'
// import Footer from './Pages/Share/Footer'
import Navbar from './Pages/Share/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signin />} />
        <Route path="/blogs" element={<Blogs />} />


        <Route path="/dashboard" element={
          <RequireAuth> <Dashboard /></RequireAuth>
        } >
          <Route index element={<ExtraDshboard></ExtraDshboard>}></Route>

          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<DashboardReview></DashboardReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path="/tool/:id" element={<ToolsDetails />} />

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>
  )
}

export default App
