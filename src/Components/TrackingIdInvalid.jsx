import React from "react";
import { useNavigate } from "react-router-dom";

export default function TrackingIdInvalid() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 text-center">
      <div>
        <h1 className="text-7xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-lg text-gray-600">Tracking ID Invalid</p>
        <p className="mt-2 text-sm text-gray-500">
          The page you are looking for does not exist.
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
