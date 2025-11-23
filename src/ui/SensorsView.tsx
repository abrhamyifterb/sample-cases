/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import SchemaPanel from "./SchemaPanel";
import { fetchData, fetchSchema } from "../api/mock";

export default function SensorsView() {
    const [data, setData] = useState<any | null>(null);
    const [schema, setSchema] = useState<any | null>(null);

    useEffect(() => {
        fetchData("sensors").then(setData);
        fetchSchema("sensor").then(setSchema);
    }, []);

    return (
        <div className="container">
        <div className="panel">
            <h4>Data (mock API)</h4>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading…</p>}
        </div>
        <div className="panel">
            <h4>Specification (JSON Schema)</h4>
            {schema ? <SchemaPanel schema={schema} /> : <p>Loading…</p>}
        </div>
        </div>
    );
}
