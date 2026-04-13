import { DollarSign, FolderKanban, SquareCheckBig } from "lucide-react";
import { AsideBar } from "./asideBar";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useProjects } from "../../context/ProjectsContext";
import { useFinance } from "@/context/FinanceContext";

export function Dashboard() {
    const { projects } = useProjects();
    const { accounts } = useFinance();

    // Filtrar tarefas que estão em progresso
    const tasksInProgress = projects.filter(project => project.status === "Em andamento");

    // Calcular saldo: entradas - saídas
    const incoming = accounts
        .filter(acc => acc.type === "a-receber")
        .reduce((sum, acc) => sum + acc.amount, 0);

    const outgoing = accounts
        .filter(acc => acc.type === "a-pagar")
        .reduce((sum, acc) => sum + acc.amount, 0);

    const balance = incoming - outgoing;

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value);
    };

    const data = [
        { month: 'Jan', revenue: 4000 },
        { month: 'Feb', revenue: 3000 },
        { month: 'Mar', revenue: 5000 },
        { month: 'Apr', revenue: 4500 },
        { month: 'May', revenue: 6000 },
        { month: 'Jun', revenue: 5500 },
        { month: 'Jul', revenue: 7000 },
        { month: 'Aug', revenue: 6500 },
        { month: 'Sep', revenue: 8000 },
        { month: 'Oct', revenue: 7500 },
        { month: 'Nov', revenue: 9000 },
        { month: 'Dec', revenue: 8500 },
    ];

    return (
        <div className="bg-[#0B1220] h-screen flex">
            <AsideBar />

            <main className="flex-1">
                {/* HEADER */}
                <div className="border-b border-[#374151]">
                    <div className="flex items-center p-[17px]">

                        <h3 className="text-white">User</h3>

                        <span className="rounded-md h-8 w-8 flex items-center justify-center text-white bg-purple-700">
                            US
                        </span>
                    </div>
                </div>

                <section>
                    <h1 className="text-white text-2xl font-bold p-4">Dashboard</h1>
                </section>

                <section className="grid grid-cols-3 gap-4 p-3 ">
                    <section className="rounded-md w-auto p-4 bg-[#111827]">
                        <div className="flex justify-between">
                            <p className="text-gray-400">Faturamento do (mês) </p>
                            <DollarSign className="text-green-600" />
                        </div>
                        <h2 className="text-white mt-4 font-bold text-3xl">{formatCurrency(balance)}</h2>
                    </section>

                    <section className="rounded-md w-auto p-4 bg-[#111827]">
                        <div className="flex justify-between">
                            <p className="text-gray-400">Projetos ativos </p>
                            <FolderKanban className="text-purple-600" />
                        </div>
                        <h2 className="text-white mt-4 font-bold text-3xl">{projects.length}</h2>
                    </section>

                    <section className="rounded-md w-auto p-4 bg-[#111827]">
                        <div className="flex justify-between">
                            <p className="text-gray-400">Tarefas pendentes</p>
                            <SquareCheckBig className="text-yellow-400" />
                        </div>
                        <h2 className="text-white mt-4 font-bold text-3xl">{tasksInProgress.length}</h2>
                    </section>
                </section>

                <section className="grid grid-cols-2 gap-12 ">
                    <section className="p-4">
                        <h2 className="text-white text-xl font-bold">Faturamento por Mês</h2>
                        <ChartContainer config={{}} className="h-[400px] mt-2">
                            <BarChart data={data}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="revenue" fill="#8b5cf6" />
                            </BarChart>
                        </ChartContainer>
                    </section>

                    <section className="rounded-md h-auto ml-28 mt-2 m-20 flex flex-col gap-4 p-4 bg-[#111827]">
                        <h2 className="text-white text-2xl font-bold mb-4">últimas concluidas</h2>
                        <section className="border border-gray-500 rounded-md p-2">
                            <h3 className="text-white flex gap-2"><SquareCheckBig className="text-green-500" />Design do carrinho</h3>
                            <span className="text-gray-400">App-eccomerc Ana Oliveira</span>
                        </section>

                        <section className="border border-gray-500 rounded-md p-2">
                            <h3 className="text-white flex gap-2"><SquareCheckBig className="text-green-500" />Design do carrinho</h3>
                            <span className="text-gray-400">App-eccomerc Ana Oliveira</span>
                        </section>

                        <section className="border border-gray-500 rounded-md p-2">
                            <h3 className="text-white flex gap-2"><SquareCheckBig className="text-green-500" />Design do carrinho</h3>
                            <span className="text-gray-400">App-eccomerc Ana Oliveira</span>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    );
}