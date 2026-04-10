import { DollarSign, FolderKanban, LayoutDashboard, PanelLeftClose, SquareCheckBig, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function AsideBar() {

    const [colapsed, setColapsed] = useState(false)

    return (
        <div className={`h-screen bg-[#111827] p-4 transition-all duration-300 ${colapsed ? "w-[100px] " : "w-[250px]"
            }`}>
            <section>
                <section className="flex items-center gap-2 ">
                    <div className="bg-purple-600 p-2 rounded-md">
                        <Zap className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex justify-between items-center w-full">
                        {!colapsed && (
                            <h2 className="text-white text-xl font-bold">Nexus CRM</h2>
                        )}

                        <button
                            onClick={() => setColapsed(!colapsed)}
                            className="p-2 rounded-md hover:bg-purple-600 cursor-pointer"
                        >
                            <PanelLeftClose size={20} className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </section>

                <nav className="mt-8">
                    <ul className="flex flex-col gap-4">
                        <li
                            className={`text-white p-1 cursor-pointer hover:bg-[#1F2937] rounded-xl flex gap-2 ${!colapsed ? "items-center" : "justify-center" }`}
                        >
                            <div>
                                <LayoutDashboard size={20} />
                            </div>

                            {!colapsed && (
                                <Link to="/nexus/dashboard/home">Home</Link>
                            )}
                        </li>

                        <li
                            className={`text-white p-1 cursor-pointer hover:bg-[#1F2937] rounded-2xl flex items-center gap-2 ${!colapsed ? "items-center" : "justify-center" }`}
                        >
                            <div>
                                <FolderKanban size={20} />
                            </div>

                            {!colapsed && (
                                <Link to="/nexus/dashboard/projects">Projetos</Link>
                            )}
                        </li>

                        <li
                            className={`text-white p-1 cursor-pointer hover:bg-[#1F2937] rounded-2xl flex items-center gap-2 ${!colapsed ? "items-center" : "justify-center" }`}
                        >
                            <div>
                                <SquareCheckBig size={20} />
                            </div>

                            {!colapsed && (
                                <Link to="#">Tarefas</Link>
                            )}
                        </li>

                        <li
                            className={`text-white p-1 cursor-pointer hover:bg-[#1F2937] rounded-2xl flex items-center gap-2 ${!colapsed ? "items-center" : "justify-center" }`}
                        >
                            <div>
                                <Users size={20} />
                            </div>

                            {!colapsed && (
                                <Link to="#">Clientes</Link>

                            )}
                        </li>

                        <li
                            className={`text-white p-1 cursor-pointer hover:bg-[#1F2937] rounded-2xl flex items-center gap-2 ${!colapsed ? "items-center" : "justify-center" }`}
                        >
                            <div>
                                <DollarSign size={20} />
                            </div>

                            {!colapsed && (
                                <Link to="#">Financeiro</Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}
