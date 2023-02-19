import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { Home, Error, Notifications } from "../pages";

function App() {
  return (
    <div className="font-poppins">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route path="home" index element={<Home />} />
            <Route path="notifications" element={<Notifications />} />
            {/* <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="products/sell-product" element={<SellProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user-profile" element={<UserProfile />} /> */}
          </Route>
          {/* <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="confirm-email" element={<PrivateRoute />} />
          <Route path="confirm-email/*" element={<ConfirmMailRoute />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
