import { createContext, useState } from "react";

export const GeneralContext = createContext();
export default function GeneralProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      name: "Dinner Event for Butajira Hospital",
      location: "San Francisco",
      time: "Time is TBD",
      description:
        "Join us for a special dinner in support of the Butajira Hospital donation drive. Your presence will help raise funds for essential medical equipment and supplies to benefit the local community.",
      date: {
        date: 14,
        month: "June",
        year: 2024,
      },
    },
    {
      name: "Collecting Used Equipments From Hospitals In Dallas",
      location: "Dallas",
      time: "Time is TBD",
      description:
        "Join us for an impactful community event focused on gathering and repurposing used medical equipment from hospitals across Dallas. This initiative aims to support healthcare facilities in under-resourced regions and contribute to sustainable healthcare practices.",
      date: {
        date: 14,
        month: "July",
        year: 2024,
      },
    },
    {
      name: "Fundraising in the Coming Summer",
      location: "Location is TBD",
      time: "Time is TBD",
      description:
        "Get ready for a season of fun and philanthropy with our Summer Fundraising Extravaganza! This event is designed to bring the community together to support Providence of Grace, while enjoying a variety of exciting activities under the summer sun.",
      date: {
        date: 25,
        month: "July",
        year: 2024,
      },
    },
    {
      name: "Carnival for Care",
      date: { date: "15", month: "July", year: "2024" },
      description:
        "Join us for a day of fun and philanthropy at our Carnival for Care. Enjoy carnival games, rides, food stalls, and live entertainment. All proceeds support the collection and shipment of medical equipment to rural areas in Ethiopia, enhancing healthcare access for underserved communities.",
      location: "Location is TBD",
      time: "Time is TBD",
    },
    {
      name: "Sunset Beach Medical Aid Fundraiser",
      date: { date: "5", month: "August", year: "2024" },
      location: "Location is TBD",
      time: "Time is TBD",
      description:
        "Spend an evening at our Sunset Beach Medical Aid Fundraiser, featuring a bonfire, and a silent auction. Funds raised will go towards collecting and sending vital medical equipment to rural Ethiopian clinics, improving healthcare delivery in remote regions.",
    },
    {
      name: "Community BBQ for Ethiopia's Health",
      date: { date: "30", month: "June", year: "2024" },
      location: "Location is TBD",
      time: "Time is TBD",
      description:
        "Attend our Community BBQ for Ethiopia's Health for delicious food, live music, and family-friendly activities. Proceeds will benefit efforts to collect and refurbish medical equipment, ensuring rural Ethiopian healthcare facilities receive the tools they need to serve their communities effectively.",
    },
  ]);

  function sendMessage(e) {
    e.preventDefault();
    alert("Message Sent");
  }
  return (
    <GeneralContext.Provider
      value={{
        navOpen,
        setNavOpen,
        events,
        setEvents,
        sendMessage,
      }}>
      {children}
    </GeneralContext.Provider>
  );
}
