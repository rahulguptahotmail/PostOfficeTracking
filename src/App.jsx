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
        time: "2025-11-12 08:10 AM",
      },
      {
        location: "Reached Patna",
        status: "In Transit",
        time: "2025-11-11 03:45 PM",
      },
      {
        location: "Arrived Jamshedpur",
        status: "Arrived",
        time: "2025-11-10 09:20 AM",
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
