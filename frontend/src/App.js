import React from "react";
import Messages from "./components/Messages/Messages";
import Average from "./components/Average/Average";
import "./App.css"
import { cn } from "@bem-react/classname";
import { Route, Routes, Link } from "react-router-dom";



function App() {
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
      <div className={cnApp("Navbar")}>
    <Link to='/'>Сообщения</Link>
     <Link to="/average">Среднее число</Link>
      </div>
<Routes>
      <Route path="/" element={<Messages />} />
      <Route path="/average" element={<Average />} />
</Routes>
    </div>
  );
}

export default App;
