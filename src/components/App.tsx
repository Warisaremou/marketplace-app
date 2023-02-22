import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import {
  Home,
  Error,
  Notifications,
  Cart,
  Orders,
  UserProfile,
  Product,
  Register,
  Login,
} from "../pages";
import Footer from "./Footer";
import { LoaderContextProvider } from "../context/LoaderContext";

function App() {
  return (
    <div className="font-poppins">
      <LoaderContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="home" index element={<Home />} />
              <Route path="notifications" element={<Notifications />} />
              {/* <Route path="products" element={<Products />} /> */}
              <Route path="products/:id" element={<Product />} />
              {/* <Route path="products/sell-product" element={<SellProductPage />} /> */}
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<Orders />} />
              {/* <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} /> */}
              <Route path="profile" element={<UserProfile />} />
            </Route>
            {/* <Route path="confirm-email" element={<PrivateRoute />} />
          <Route path="confirm-email/*" element={<ConfirmMailRoute />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />
            <Route path="register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </LoaderContextProvider>
    </div>
  );
}

export default App;
