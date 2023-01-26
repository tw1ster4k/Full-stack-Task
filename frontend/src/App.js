import React from "react";
import Messages from "./components/Messages/Messages";
import "./App.css"
import { cn } from "@bem-react/classname";



function App() {
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
      <Messages />
    </div>
  );
}

export default App;
