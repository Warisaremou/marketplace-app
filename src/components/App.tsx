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
  SellProduct,
  Categories,
  MemberProfile,
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
                <Route path="categories/item/:id/member/:id" element={<MemberProfile />} />
                <Route path="categories" element={<Categories />} />
                <Route path="categories/item/:id" element={<Product />} />
                <Route path="sell-product" element={<SellProduct />} />
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
