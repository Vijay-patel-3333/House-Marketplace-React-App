import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Navbar from "./components/Navbar";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Explore/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/category/:categoryName" element={<Category/>}/>
      <Route path="/profile" element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
      <Route path="/Sign-In" element={<SignIn/>}/>
      <Route path="/Sign-Up" element={<SignUp/>}/>
      <Route path="/ForgotPassword" element={<ForgotPass/>}/>
      <Route path="/create-listing" element={<CreateListing/>}/>
      <Route path="/edit-listing/:listingId" element={<EditListing/>}/>
      <Route path="/category/:categoryName/:listingId" element={<Listing/>}/>
      <Route path="/contact/:landlordId" element={<Contact/>}/>
      

    </Routes>
    <Navbar/>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
