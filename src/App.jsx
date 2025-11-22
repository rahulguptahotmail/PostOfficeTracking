import React from "react";
import TrackingPage from "./Components/TrackingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Components/Search.jsx";
import NotFound404 from "./Components/NotFound.jsx";

const TRACKING_UPDATES = [
  {
    id: "P995342812IN",
    product: "Parcel - 2 Laptops, 1 Watch.",
    history: [
      {
        location: "Dispatch Gorakhpur",
        status: "Out for Delivery",
        time: "2025-11-18 10:10 AM",
      },
      {
        location: "Reached Motihari",
        status: "In Transit",
        time: "2025-11-18 04:50 PM",
      },
       {
        location: "Reached Sitamarhi",
        status: "In Transit",
        time: "2025-11-19 10:15 AM",
      },
      {
        location: "Reached Muzaffarpur",
        status: "In Transit",
        time: "2025-11-19 03:10 PM",
      },
      {
        location: "Reached Patna...",
        status: "In Transit",
        time: "2025-11-20 09:20 AM",
      },
       {
        location: "Dispatch from Patna...",
        status: "Patna to Ranchi Route Cleared.",
        time: "2025-11-21 09:40 AM",
      },
      {
        location: "Reached Saharsha",
        status: "In Transit",
        time: "2025-11-21 02:30 PM",
      },
      {
        location: "Reached Begusarai",
        status: "In Transit",
        time: "2025-11-22 09:00 AM",
      },
      {
        location: "Reached Rajgir",
        status: "In Transit",
        time: "2025-11-22 01:20 PM",
      },
    ],
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route
          path="/tracking/:id"
          element={<TrackingPage trackingUpdates={TRACKING_UPDATES} />}
        />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default App;
