import React from "react";
import { NoteProvider } from "./context/NoteContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { Navbar } from "./components/organism/Navbar";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="h-screen">
      <NoteProvider>
        <Router>
          <Navbar/>
          <AppRoutes />
          <ToastContainer />
        </Router>
      </NoteProvider>
    </div>
  );
};

export default App;
