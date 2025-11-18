import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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
        location: "Reached Motihari",
        status: "In Transit",
        time: "2025-11-11 03:45 PM",
      },
      {
        location: "Reached Sitamarhi",
        status: "In Transit",
        time: "2025-11-10 09:20 AM",
      }, {
        location: "Reached Muzaffarpur",
        status: "In Transit",
        time: "2025-11-12 08:10 AM",
      },
      {
        location: "Reached Patna...",
        status: "In Transit...",
        time: "2025-11-11 03:45 PM",
      },
      {
        location: "Reached Saharsha",
        status: "In Transit",
        time: "2025-11-10 09:20 AM",
      }, {
        location: "Reached Begusarai",
        status: "In Transit",
        time: "2025-11-12 08:10 AM",
      },
      {
        location: "Reached Rajgir",
        status: "In Transit",
        time: "2025-11-11 03:45 PM",
      },
      {
        location: "Reached Koderma",
        status: "In Transit",
        time: "2025-11-10 09:20 AM",
      }, {
        location: "Reached Hazaribagh",
        status: "In Transit",
        time: "2025-11-12 08:10 AM",
      },
      {
        location: "Reached Ranchi...",
        status: "In Transit...",
        time: "2025-11-11 03:45 PM",
      },
      {
        location: "Reached Khunti",
        status: "In Transit",
        time: "2025-11-10 09:20 AM",
      },
      {
        location: "Reached Chakradharpur",
        status: "In Transit",
        time: "2025-11-10 09:20 AM",
      },
      {
        location: "Reached Chaibasa",
        status: "In Transit",
        time: "2025-11-10 09:20 AM",
      },
      {
        location: "Reached Rajnagar",
        status: "In Transit",
        time: "2025-11-10 09:20 AM",
      },
      {
        location: "Reached Potka",
        status: "In Transit",
        time: "2025-11-10 09:20 AM",
      },
      {
        location: "Arrived Jamshedpur",
        status: "Arrived",
        time: "2025-11-10 09:20 AM",
      },
    ],
  },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
