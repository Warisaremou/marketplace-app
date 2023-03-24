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
  Followers,
  Followings,
  UpdateProfile,
} from "../pages";
import { LoaderContextProvider } from "../context/LoaderContext";
import Layout from "./Layout";
import { UserLogged, UserLoggedContextProvider } from "../context/UserLoggedContext";
import PrivateRoute from "../utils/PrivateRoute";
import { Toaster } from "react-hot-toast";
import { CartContextProvider } from "../context/CartContext";
import { UserFollowContextProvider } from "../context/UserFollowsContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const { getItem } = useLocalStorage();
  const userToken = getItem("accessToken");

  return (
    <div className="font-poppins">
      <UserLoggedContextProvider>
        <CartContextProvider>
          <UserFollowContextProvider>
            <LoaderContextProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index path="home" element={<Home />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="member/:id" element={<MemberProfile />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="categories/item/:id" element={<Product />} />
                    <Route path="sell-product" element={<SellProduct />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="orders" element={<Orders />} />
                    <Route
                      path={`profile${userToken ? "/:userId" : ""}`}
                      element={<UserProfile />}
                    />
                    <Route path="profile/:userId/followers" element={<Followers />} />
                    <Route path="profile/:userId/followings" element={<Followings />} />
                    <Route path="profile/:userId/edit" element={<UpdateProfile />} />
                  </Route>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="confirm-email" element={<PrivateRoute />} />
                  <Route path="confirm-email/*" element={<ConfirmMailRoute />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </Router>
            </LoaderContextProvider>
          </UserFollowContextProvider>
        </CartContextProvider>
      </UserLoggedContextProvider>
      <Toaster />
    </div>
  );
}

export default App;
