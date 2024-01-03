import React from 'react';
import PartnerRegister from './Component/PartnerRegister/PartnerRegister';
import {Routes,Route} from 'react-router-dom'
import SearchBook from './Component/SearchBook/SearchBook';
import PartnerLogin from './Component/PartnerLogin/PartnerLogin';
import RegisterPage from './Pages/RegisterPage'
import AdminLogin from './Component/AdminLogin/AdminLogin';
import TopRated from './Component/TopReated/TopRated';
import LoginPage from './Pages/LoginPage'
import Home from './Component/Home'
// import Turf from './Component/Turf/Turf'
import Banner from './Component/Banner/Banner';
import TurfList from './Component/TurfList/TurfList';
import Turf from './Component/Turf/Turf';
import ViewCourt from './Component/ViewCourt/ViewCourt';
import UserReviewRating from './Component/UserReviewRating/UserReviewRating';
import SelectSlotBooking from './Component/SelectSlotBooking/SelectSlotBooking';
import Payment from './Component/Payment/Payment';
import UserProfile from './Component/UserProfile/UserProfile';
import HubProfile from './Component/HubProfile/HubProfile';
import HubBooking from './Component/HubBooking/HubBooking';
import AddHubProfile from './Component/AddHubProfile/AddHubProfile';
import EditHubProfile from './Component/EditHubProfile/EditHubProfile';
import Register from './Component/Register/Register';
import './App.css'
import Login from './Component/Login/Login';
import HomePage from './Pages/HomePage';
import TurfListPage from './Pages/TurfListPage';
import ViewCourtPage from './Pages/ViewCourtPage';
import HubBookingPage from './Pages/HubBookingPage';
import PaymentPage from './Pages/PaymentPage';
import PartnerLoginPage from './Pages/PartnerLoginPage';
import PartnerRegisterPage from './Pages/PartnerRegisterPage';
import AdminloginPage from './Pages/AdminloginPage';

function App() {
  
  return (
    <div className="App">
      <Routes>
       <Route path='/Register' element={<RegisterPage/>}/>
       <Route path='/Login' element={<LoginPage/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/create' element={<Turf/>}/>
       <Route path='/banner' element={<Banner/>}/>
       <Route path='/List' element={<TurfList/>}  />

       {/* <Route path='/' element={<HomePage/>}  /> */}
       <Route path='/turflist'  element={<TurfListPage/>} />
       <Route path='/viewcourt' element={<ViewCourtPage/>}/>
       <Route path='/slotbooking' element={<HubBookingPage/>}/>
       <Route path='/payment' element={<PaymentPage/>}/>
       <Route path='/register' element={<RegisterPage/>}/>
       <Route path='/partnerlogin' element={<PartnerLoginPage/>} />
       <Route path='/partnerRegister' element={<PartnerRegisterPage/>} />
      </Routes>
       {/* <SearchBook/> */}
       {/* <PartnerLogin/> */}
       {/* <PartnerRegister/> */}
       {/* <RegisterPage/> */}
       {/* <Register/> */}
       {/* <AdminLogin/> */}
       {/* <TopRated/> */}
       {/* <TurfList/> */}
       {/* <ViewCourt/> */}
       {/* <Payment/> */}
       {/* <UserReviewRating/> */}
       {/* <SelectSlotBooking/> */}
       {/* <UserProfile/> */}
       {/* <HubProfile/> */}
       {/* <HubBooking/> */}
       <AddHubProfile/>
       {/* <EditHubProfile/> */}
       {/* <Login/> */}
       {/* <Turf/> */}


       {/* <HomePage/> */}
       {/* <TurfListPage/> */}
       {/* <ViewCourtPage/> */}
       {/* <HubBookingPage/> */}
       {/* <PaymentPage/> */}
       {/* <LoginPage/> */}
       {/* <RegisterPage/> */}
       {/* <PartnerLoginPage/> */}
       {/* <PartnerRegisterPage/> */}
       {/* <AdminloginPage/> */}
    </div>
  );
}

export default App;
