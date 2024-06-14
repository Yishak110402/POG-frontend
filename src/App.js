import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import GeneralProvider from "./hooks/GeneralContext";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
import WhoWeAre from "./pages/WhoWeAre";
import Events from "./pages/Events";
export default function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Homepage />} index />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/events" element={<Events/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </GeneralProvider>
  );
}
