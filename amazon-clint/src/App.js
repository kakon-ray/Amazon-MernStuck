import Header from "./component/Header.js/Header";
import Shop from "./component/Shop/Shop";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import Error from "./component/404/Error";
import Order from "./component/Order/Order";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Shipping from "./component/Shipping/Shipping";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="order" element={<Order />} />
        <Route
          path="shiping"
          element={
            <RequireAuth>
              <Shipping />
            </RequireAuth>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
