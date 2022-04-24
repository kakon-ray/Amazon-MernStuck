import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipping = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const email = user.email;
  const handleShipping = (event) => {
    event.preventDefault();
    const valueOfShippingPage = { name, address, email, phone };
    console.log(valueOfShippingPage);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>

        <form onSubmit={handleShipping} style={{ paddingBottom: "20px" }}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="name" name="name" onBlur={handleNameBlur} required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              onBlur={handleNameBlur}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Address</label>
            <input
              type="address"
              name="address"
              onBlur={handleAddressBlur}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Phone</label>
            <input
              type="phone"
              name="password"
              onBlur={handlePhoneBlur}
              required
            />
          </div>

          <input className="form-submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
