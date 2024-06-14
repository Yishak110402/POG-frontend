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
    },
    {
      name: "Event Name",
      location: "Location is TBD",
      time: "Time is TBD",
    },
    {
      name: "Event Name",
      location: "Location is TBD",
      time: "Time is TBD",
    },
    {
      name: "Event Name",
      location: "Location is TBD",
      time: "Time is TBD",
    },
  ]);

  return (
    <GeneralContext.Provider
      value={{
        navOpen,
        setNavOpen,
        events,
        setEvents,
      }}>
      {children}
    </GeneralContext.Provider>
  );
}
