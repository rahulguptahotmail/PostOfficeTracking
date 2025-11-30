import React from "react";
import { motion } from "framer-motion";
import TrackingIdInvalid from "./TrackingIdInvalid";
import { useNavigate } from "react-router-dom";

export default function TrackingPage(props) {
    const navigate = useNavigate();
    console.log(props.trackingUpdates);
  return props.trackingUpdates[0].id ==
    window.location.pathname.split("/")[2] ? (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700"
      >
        Go Home
      </button>
      <h1 className="text-3xl font-bold mb-8 text-blue-700 tracking-wide text-center drop-shadow">
        Fast Delivery Shipment. 
      </h1>

       <div className="space-y-6">
        {props.trackingUpdates.map((pkg) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 bg-white rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="font-mono text-xs text-gray-500">
              Tracking ID: <span className="text-blue-600">{pkg.id}</span>
            </div>

            <div className="text-xl font-semibold mb-4 text-gray-900">
              {pkg.product}
            </div>

            <div className="mb-4 ms-3">
              <div className="inline-block w-1/2 mb-3">
                <h1 className="font-semibold text-gray-700">
                  From: <span className="text-blue-500">Gorakhpur</span>
                </h1>
                <h1 className="font-semibold text-gray-700">
                  To: <span className="text-blue-500">Jamshedpur</span>
                </h1>
              </div>
              <div className="inline-block w-1/2">
                <h1 className="text-gray-700">
                  Weight: <span className="font-medium">5 Kg</span>
                </h1>
                <h1 className="text-gray-700">
                  Dimensions: <span className="font-medium">15x10x8</span>
                </h1>
              </div>

              <hr className="my-3" />

              <div className="mt-2 text-gray-700">
                <h1>
                  Sender:{" "}
                  <span className="font-semibold text-blue-600">
                    Rahul Gupta
                  </span>{" "}
                  → <span className="font-medium">8127610905</span>
                </h1>
                <h1>
                  Receiver:{" "}
                  <span className="font-semibold text-blue-600">
                    Priya Yadav
                  </span>{" "}
                  → <span className="font-medium">7061336537</span>
                </h1>
              </div>
            </div>

            <hr />

            <div className="border-l-4 border-blue-400 ml-4 pl-5 space-y-5 mt-5">
              {pkg.history.map((h, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-600 rounded-full shadow"></div>
                  <div className="text-lg font-medium text-gray-900">
                    {h.location}
                  </div>
                  <div className="text-sm text-gray-600">
                    Status: {h.status}
                  </div>
                  <div className="text-xs text-gray-500">{h.time}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ) : (
    <TrackingIdInvalid />
  );
}
