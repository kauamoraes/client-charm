import { createContext, useContext, useState, ReactNode } from "react";

export interface FinanceAccount {
    id: number;
    type: "a-pagar" | "a-receber";
    companyName: string;
    clientName: string;
    description: string;
    amount: number;
    dueDate: string;
    status: "pendente" | "pago" | "atrasado";
    createdAt: string;
}

interface FinanceContextType {
    accounts: FinanceAccount[];
    addAccount: (account: Omit<FinanceAccount, "id" | "createdAt">) => void;
    removeAccount: (id: number) => void;
    updateAccount: (id: number, account: Partial<FinanceAccount>) => void;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export function FinanceProvider({ children }: { children: ReactNode }) {
    const [accounts, setAccounts] = useState<FinanceAccount[]>([
        {
            id: 1,
            type: "a-receber",
            companyName: "TechSolutions Inc",
            clientName: "João Silva",
            description: "Desenvolvimento de Sistema",
            amount: 5000,
            dueDate: "2026-04-20",
            status: "pendente",
            createdAt: "2026-04-01"
        },
        {
            id: 2,
            type: "a-pagar",
            companyName: "Hosting Pro",
            clientName: "Cloud Services",
            description: "Hospedagem Mensal",
            amount: 500,
            dueDate: "2026-04-15",
            status: "pago",
            createdAt: "2026-04-01"
        },
        {
            id: 3,
            type: "a-receber",
            companyName: "Design Corp",
            clientName: "Ana Costa",
            description: "Layout UI/UX",
            amount: 3500,
            dueDate: "2026-04-25",
            status: "atrasado",
            createdAt: "2026-03-20"
        },
        {
            id: 4,
            type: "a-pagar",
            companyName: "Software License",
            clientName: "JetBrains",
            description: "Licença Anual",
            amount: 1200,
            dueDate: "2026-05-01",
            status: "pendente",
            createdAt: "2026-04-05"
        },
        {
            id: 5,
            type: "a-receber",
            companyName: "Mobile App Project",
            clientName: "Carlos Mendes",
            description: "Desenvolvimento App Mobile",
            amount: 7500,
            dueDate: "2026-04-30",
            status: "pendente",
            createdAt: "2026-04-01"
        }
    ]);

    const addAccount = (account: Omit<FinanceAccount, "id" | "createdAt">) => {
        const newAccount: FinanceAccount = {
            ...account,
            id: Date.now(),
            createdAt: new Date().toISOString().split('T')[0]
        };
        setAccounts([...accounts, newAccount]);
    };

    const removeAccount = (id: number) => {
        setAccounts(accounts.filter(account => account.id !== id));
    };

    const updateAccount = (id: number, updates: Partial<FinanceAccount>) => {
        setAccounts(accounts.map(account =>
            account.id === id ? { ...account, ...updates } : account
        ));
    };

    return (
        <FinanceContext.Provider value={{ accounts, addAccount, removeAccount, updateAccount }}>
            {children}
        </FinanceContext.Provider>
    );
}

export function useFinance() {
    const context = useContext(FinanceContext);
    if (context === undefined) {
        throw new Error("useFinance must be used within a FinanceProvider");
    }
    return context;
}
