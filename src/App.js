import { BrowserRouter, Routes } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import GeneralProvider from "./hooks/GeneralContext";
export default function App() {
  return (
    <GeneralProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>

      </Routes>
    </BrowserRouter>
    </GeneralProvider>
  );
}
