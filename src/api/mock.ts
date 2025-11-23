/* eslint-disable @typescript-eslint/no-explicit-any */
export type RequestInitLite = { method?: string; body?: any };

async function delay(ms:number) {
    return new Promise(res => setTimeout(res, ms));
}

export async function mockRequest<T = any>(url: string, init?: RequestInitLite): Promise<T> {
    await delay(250); 
    const res = await fetch(url, { method: init?.method ?? "GET" });
    return res.json();
}

export async function fetchData(name: "datasets" | "sensors"): Promise<any[]> {
    return mockRequest<any[]>(`/data/${name}.json`, {
        method: "GET",
        body: JSON.stringify({ limit: 100 })
    });
}

export async function fetchSchema(name: "dataset" | "sensor"): Promise<any> {
    return mockRequest<any>(`/schema/${name}.json`, { method: "GET" });
}
