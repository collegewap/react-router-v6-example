import React from "react";
import { Routes, Link, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
        <li>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export const Profile = () => {
  return <div>Profile</div>;
};
export const Orders = () => {
  return <div>Orders</div>;
};
export const Quotes = () => {
  return <div>Quotes</div>;
};

export default Dashboard;
