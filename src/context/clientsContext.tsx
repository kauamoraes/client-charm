import { createContext, useContext, useState, ReactNode } from "react";

export interface Clients {
    id: number;
    name: string;
    company: string;
}

interface ClientsContextType {
    clients: Clients[];
    setClients: (clients: Clients[]) => void;
}

const ClientsContext = createContext<ClientsContextType | undefined>(undefined);

export function ClientsProvider({ children }: { children: ReactNode }) {
    const [clients, setClients] = useState<Clients[]>([
        {
            id: 1,
            name: "E-Commerce Redesign",
            company: "EnterpriseInternacional"
        },
        {
            id: 2,
            name: "Dashboard Analytics",
            company: "Only"
        },
        {
            id: 3,
            name: "Blog Platform",
            company: "CCB"
        },
    ]);

    return (
        <ClientsContext.Provider value={{ clients, setClients }}>
            {children}
        </ClientsContext.Provider>
    );
}

export function useClients() {
    const context = useContext(ClientsContext);
    if (context === undefined) {
        throw new Error("useClients must be used within a ClientsProvider");
    }
    return context;
}
