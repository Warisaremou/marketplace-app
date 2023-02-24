import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  ConfirmMailRoute,
} from "../pages";
import { LoaderContextProvider } from "../context/LoaderContext";
import Layout from "./Layout";
import { UserLoggedContextProvider } from "../context/UserLoggedContext";
import PrivateRoute from "../utils/PrivateRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="font-poppins">
      <UserLoggedContextProvider>
        <LoaderContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index path="home" element={<Home />} />
                <Route path="notifications" element={<Notifications />} />
                {/* <Route path="products" element={<Products />} /> */}
                <Route path="products/:id" element={<Product />} />
                {/* <Route path="products/sell-product" element={<SellProductPage />} /> */}
                <Route path="cart" element={<Cart />} />
                <Route path="orders" element={<Orders />} />
                <Route path="profile" element={<UserProfile />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="confirm-email" element={<PrivateRoute />} />
              <Route path="confirm-email/*" element={<ConfirmMailRoute />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </LoaderContextProvider>
      </UserLoggedContextProvider>
      <Toaster />
    </div>
  );
}

export default App;
