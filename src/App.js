import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage";
import WhoWeAre from "./pages/WhoWeAre";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import RegisterForEvent from "./pages/RegisterForEvents";
import Contact from "./pages/Contact";
import SupportUs from "./pages/SupportUs";

import GeneralProvider from "./hooks/GeneralContext";
import RegisterProvider from "./hooks/RegisterContext";

export default function App() {
  return (
    <GeneralProvider>
      <RegisterProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Homepage />} index />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/support-us" element={<SupportUs/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/register" element={<RegisterForEvent />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </RegisterProvider>
    </GeneralProvider>
  );
}
