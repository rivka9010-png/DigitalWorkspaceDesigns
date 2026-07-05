import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FeedReport from "../home/Reports/FeedReport";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-slate-100 p-6">
      <FeedReport />
    </div>
  </React.StrictMode>
);
