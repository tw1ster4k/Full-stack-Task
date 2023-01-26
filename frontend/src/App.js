import React from "react";
import Messages from "./components/Messages/Messages";
import Average from "./components/Average/Average";
import "./App.css"
import { cn } from "@bem-react/classname";
import { Route, Routes } from "react-router-dom";



function App() {
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
<Routes>
      <Route path="/" element={<Messages />} />
      <Route path="/average" element={<Average />} />
</Routes>
    </div>
  );
}

export default App;
