/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

function Badge({ children }: { children: React.ReactNode }) {
    return <span className="badge type">{children}</span>;
}

export default function SchemaPanel({ schema }: { schema: any }) {
    const req = new Set<string>(schema.required ?? []);
    const props: [string, any][] = Object.entries(schema.properties ?? {});

    return (
        <div>
        <div className="row" style={{ borderBottom: "1px solid #eee" }}>
            <div>
            <strong>{schema.title ?? "Specification"}</strong>{" "}
            <span className="muted">({schema.$id ?? "no id"})</span>
            </div>
            <span className="pill">
            {Array.isArray(schema.type) ? schema.type.join("|") : schema.type ?? "object"}
            </span>
        </div>

        {schema.description && <p className="muted">{schema.description}</p>}

        {props.length === 0 && <p className="muted">No properties</p>}
        {props.map(([name, s]) => {
            const t = Array.isArray(s.type) ? s.type.join("|") : s.type;
            const isReq = req.has(name);
            return (
            <div key={name} className="row">
                <div>
                <code>{name}</code>{" "}
                <span className="muted">{isReq ? "(required)" : "(optional)"}</span>
                </div>
                <div>
                {t && <Badge>{t}</Badge>}{" "}
                {s.format && <Badge>format: {s.format}</Badge>}
                </div>
            </div>
            );
        })}

        <details style={{ marginTop: 12 }}>
            <summary>Show raw JSON Schema</summary>
            <pre>{JSON.stringify(schema, null, 2)}</pre>
        </details>
        </div>
    );
}
