import { useState, useMemo, useCallback } from "react";
import { AsideBar } from "./asideBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFinance } from "@/context/FinanceContext";
import { Plus, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 8;

export function Finance() {
    const { accounts, addAccount, removeAccount } = useFinance();
    const [filterType, setFilterType] = useState<"all" | "a-receber" | "a-pagar">("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        type: "a-receber" as "a-receber" | "a-pagar",
        companyName: "",
        clientName: "",
        description: "",
        amount: "",
        dueDate: "",
        status: "pendente" as "pendente" | "pago" | "atrasado",
    });

    // Calcular métricas financeiras
    const metrics = useMemo(() => {
        const incoming = accounts
            .filter(acc => acc.type === "a-receber")
            .reduce((sum, acc) => sum + acc.amount, 0);

        const outgoing = accounts
            .filter(acc => acc.type === "a-pagar")
            .reduce((sum, acc) => sum + acc.amount, 0);

        return {
            incoming,
            outgoing,
            balance: incoming - outgoing
        };
    }, [accounts]);

    // Filtrar contas
    const filteredAccounts = useMemo(() => {
        if (filterType === "all") return accounts;
        return accounts.filter(acc => acc.type === filterType);
    }, [accounts, filterType]);

    // Paginação
    const totalPages = Math.ceil(filteredAccounts.length / ITEMS_PER_PAGE);
    const paginatedAccounts = useMemo(() => {
        const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredAccounts.slice(startIdx, startIdx + ITEMS_PER_PAGE);
    }, [filteredAccounts, currentPage]);

    const handleAddAccount = useCallback(() => {
        if (!formData.companyName || !formData.clientName || !formData.amount || !formData.dueDate) {
            alert("Preencha todos os campos!");
            return;
        }

        addAccount({
            type: formData.type,
            companyName: formData.companyName,
            clientName: formData.clientName,
            description: formData.description,
            amount: Number(formData.amount),
            dueDate: formData.dueDate,
            status: formData.status,
        });

        setFormData({
            type: "a-receber",
            companyName: "",
            clientName: "",
            description: "",
            amount: "",
            dueDate: "",
            status: "pendente",
        });
        setShowForm(false);
        setCurrentPage(1);
    }, [formData, addAccount]);

    const getStatusColor = useCallback((status: string) => {
        switch (status) {
            case "pago":
                return "bg-green-500/10 text-green-400 border-green-500/30";
            case "pendente":
                return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
            case "atrasado":
                return "bg-red-500/10 text-red-400 border-red-500/30";
            default:
                return "bg-gray-500/10 text-gray-400 border-gray-500/30";
        }
    }, []);

    const formatCurrency = useCallback((value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value);
    }, []);

    const formatDate = useCallback((date: string) => {
        return new Date(date).toLocaleDateString("pt-BR");
    }, []);

    return (
        <div className="flex bg-[#0B1220] h-screen">
            <AsideBar />

            <main className="flex-1 overflow-auto">
                {/* HEADER */}
                <header className="border-b border-[#374151] sticky top-0 z-10 bg-[#0B1220]">
                    <div className="flex items-center justify-between p-4">
                        <h1 className="text-white text-2xl font-bold">Financeiro</h1>
                        <div className="flex items-center gap-2">
                            <span className="rounded-md h-8 w-8 flex items-center justify-center text-white bg-purple-700">
                                US
                            </span>
                        </div>
                    </div>
                </header>

                {/* MAIN CONTENT */}
                <section className="p-6 space-y-6">
                    {/* CARDS DE MÉTRICAS */}
                    <section className="grid grid-cols-3 gap-4">
                        {/* Card Entradas */}
                        <article className="rounded-lg p-6 bg-[#111827] border border-green-500/20">
                            <p className="text-gray-400 text-sm mb-2">Entradas</p>
                            <p className="text-green-400 text-3xl font-bold">{formatCurrency(metrics.incoming)}</p>
                            <p className="text-gray-500 text-xs mt-4">Total a receber</p>
                        </article>

                        {/* Card Saídas */}
                        <article className="rounded-lg p-6 bg-[#111827] border border-red-500/20">
                            <p className="text-gray-400 text-sm mb-2">Saídas</p>
                            <p className="text-red-400 text-3xl font-bold">{formatCurrency(metrics.outgoing)}</p>
                            <p className="text-gray-500 text-xs mt-4">Total a pagar</p>
                        </article>

                        {/* Card Saldo */}
                        <article className="rounded-lg p-6 bg-[#111827] border border-green-500/20">
                            <p className="text-gray-400 text-sm mb-2">Saldo</p>
                            <p className={`text-3xl font-bold ${metrics.balance >= 0 ? "text-green-400" : "text-red-400"}`}>
                                {formatCurrency(metrics.balance)}
                            </p>
                            <p className="text-gray-500 text-xs mt-4">Saldo líquido</p>
                        </article>
                    </section>

                    {/* SEÇÃO DE FILTROS E BOTÃO ADICIONAR */}
                    <section className="flex items-center justify-between gap-4">
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setFilterType("all"); setCurrentPage(1); }}
                                className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${filterType === "all"
                                        ? "bg-purple-600 text-white"
                                        : "bg-[#111827] text-gray-400 hover:text-white border border-gray-700"
                                    }`}
                            >
                                Todas
                            </button>
                            <button
                                onClick={() => { setFilterType("a-receber"); setCurrentPage(1); }}
                                className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${filterType === "a-receber"
                                        ? "bg-green-600 text-white"
                                        : "bg-[#111827] text-gray-400 hover:text-white border border-gray-700"
                                    }`}
                            >
                                A Receber
                            </button>
                            <button
                                onClick={() => { setFilterType("a-pagar"); setCurrentPage(1); }}
                                className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${filterType === "a-pagar"
                                        ? "bg-red-600 text-white"
                                        : "bg-[#111827] text-gray-400 hover:text-white border border-gray-700"
                                    }`}
                            >
                                A Pagar
                            </button>
                        </div>

                        <Button
                            onClick={() => setShowForm(!showForm)}
                            className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
                        >
                            <Plus size={18} />
                            Adicionar Conta
                        </Button>
                    </section>

                    {/* FORMULÁRIO DE ADIÇÃO */}
                    {showForm && (
                        <article className="bg-[#111827] border border-gray-700 rounded-lg p-6 space-y-4">
                            <h3 className="text-white font-bold text-lg mb-4">Nova Conta</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm font-medium">Tipo</label>
                                    <select
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value as "a-receber" | "a-pagar" })}
                                        className="w-full bg-[#0B1220] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                                    >
                                        <option value="a-receber">A Receber</option>
                                        <option value="a-pagar">A Pagar</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm font-medium">Status</label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value as "pendente" | "pago" | "atrasado" })}
                                        className="w-full bg-[#0B1220] border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                                    >
                                        <option value="pendente">Pendente</option>
                                        <option value="pago">Pago</option>
                                        <option value="atrasado">Atrasado</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="Nome da Empresa"
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    className="bg-[#0B1220] border-gray-700 text-white placeholder-gray-500 text-sm"
                                />
                                <Input
                                    placeholder="Cliente"
                                    value={formData.clientName}
                                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                                    className="bg-[#0B1220] border-gray-700 text-white placeholder-gray-500 text-sm"
                                />
                            </div>

                            <Input
                                placeholder="Descrição"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="bg-[#0B1220] border-gray-700 text-white placeholder-gray-500 text-sm"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="number"
                                    placeholder="Valor"
                                    value={formData.amount}
                                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                    className="bg-[#0B1220] border-gray-700 text-white placeholder-gray-500 text-sm"
                                />
                                <Input
                                    type="date"
                                    value={formData.dueDate}
                                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                                    className="bg-[#0B1220] border-gray-700 text-white placeholder-gray-500 text-sm"
                                />
                            </div>

                            <div className="flex gap-2 pt-2">
                                <Button
                                    onClick={handleAddAccount}
                                    className="bg-green-600 hover:bg-green-700 text-white flex-1"
                                >
                                    Adicionar
                                </Button>
                                <Button
                                    onClick={() => setShowForm(false)}
                                    className="bg-gray-700 hover:bg-gray-600 text-white flex-1"
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </article>
                    )}

                    {/* TABELA DE CONTAS */}
                    <article className="bg-[#111827] border border-gray-700 rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-700 bg-[#0B1220]">
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            Empresa
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            Cliente
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            Descrição
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            Valor
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            Vencimento
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    {paginatedAccounts.length > 0 ? (
                                        paginatedAccounts.map((account) => (
                                            <tr key={account.id} className="hover:bg-[#0B1220] transition-colors">
                                                <td className="px-6 py-4 text-sm text-white font-medium">{account.companyName}</td>
                                                <td className="px-6 py-4 text-sm text-gray-400">{account.clientName}</td>
                                                <td className="px-6 py-4 text-sm text-gray-400">{account.description}</td>
                                                <td className={`px-6 py-4 text-sm font-bold ${account.type === "a-receber" ? "text-green-400" : "text-red-400"}`}>
                                                    {account.type === "a-receber" ? "+" : "-"}{formatCurrency(account.amount)}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-400">{formatDate(account.dueDate)}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(account.status)}`}>
                                                        {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button
                                                        onClick={() => removeAccount(account.id)}
                                                        className="text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-500/10 rounded"
                                                        aria-label="Deletar conta"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={7} className="px-6 py-8 text-center text-gray-400">
                                                Nenhuma conta encontrada
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* PAGINAÇÃO */}
                        {totalPages > 1 && (
                            <nav className="flex items-center justify-between px-6 py-4 border-t border-gray-700 bg-[#0B1220]" aria-label="Pagination">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Página anterior"
                                >
                                    <ChevronLeft size={18} />
                                    Anterior
                                </button>

                                <div className="flex gap-2">
                                    {Array.from({ length: totalPages }).map((_, idx) => (
                                        <button
                                            key={idx + 1}
                                            onClick={() => setCurrentPage(idx + 1)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === idx + 1
                                                    ? "bg-purple-600 text-white"
                                                    : "bg-[#111827] text-gray-400 hover:text-white hover:bg-gray-800"
                                                }`}
                                            aria-current={currentPage === idx + 1 ? "page" : undefined}
                                        >
                                            {idx + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Próxima página"
                                >
                                    Próximo
                                    <ChevronRight size={18} />
                                </button>
                            </nav>
                        )}
                    </article>
                </section>
            </main>
        </div>
    );
}

