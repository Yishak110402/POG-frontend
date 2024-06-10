import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import GeneralProvider from "./hooks/GeneralContext";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <GeneralProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Homepage/>} index/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </GeneralProvider>
  );
}
