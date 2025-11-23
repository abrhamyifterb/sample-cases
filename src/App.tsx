import { useState } from "react";
import SensorsView from "./ui/SensorsView";
import DatasetsView from "./ui/DatasetsView";

type Tab = "datasets" | "sensors";

export default function App() {
  const [tab, setTab] = useState<Tab>("datasets");
  return (
    <div className="app">
      <div className="toolbar">
        <h3 style={{ margin: 0 }}>Data ------- Spec (JSON Schema)</h3>
        <div style={{ marginLeft: "auto" }} className="tabs">
          <button className={"tab " + (tab === "datasets" ? "active" : "")} onClick={() => setTab("datasets")}>
            Datasets
          </button>
          <button className={"tab " + (tab === "sensors" ? "active" : "")} onClick={() => setTab("sensors")}>
            Sensors
          </button>
        </div>
      </div>
      {tab === "datasets" ? <DatasetsView /> : <SensorsView />}
    </div>
  );
}
