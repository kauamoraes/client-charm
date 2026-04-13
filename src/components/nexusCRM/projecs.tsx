import { AsideBar } from "./asideBar";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { useProjects } from "../../context/ProjectsContext";
import { useClients } from "@/context/clientsContext";


export function Projecs() {
    const { projects, setProjects } = useProjects();
    const { clients: clientsList } = useClients()

    const [search, setSearch] = useState("");
    const [name, setName] = useState("")
    const [clients, setClients] = useState("")
    const [status, setStatus] = useState("")
    const [deadLine, setDeadLine] = useState("")

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
    );

    //Now switch
    function handleAddProject() {
        const newProject = {
            id: Date.now(),
            name,
            description: clients,
            progress: 50,
            hours: "5h/10",
            deadline: deadLine,
            status
        }

        if (!name.trim() || !clients.trim() || !status.trim() || !deadLine.trim()) {
            alert("Preencha todos os itens corretamente para avançar")
            return
        }

        setProjects([...projects, newProject])

        setName("")
        setClients("")
        setStatus("")
        setDeadLine("")
    }

    return (
        <div className="bg-[#0B1220] flex">
            <div>
                <AsideBar />
            </div>

            <div className="w-full">
                <section>
                    <section className="flex items-start justify-between mt-4">
                        <h2 className="text-white font-bold text-2xl ml-4">Projetos</h2>

                        <Dialog>
                            <DialogTrigger
                                className="text-white bg-purple-600 p-2 rounded-md mr-4"
                            >
                                + Novo Projeto
                            </DialogTrigger>

                            <DialogContent className="bg-[#0B1220] text-white border-none">
                                <DialogHeader>
                                    <DialogTitle>Novo Projeto</DialogTitle>
                                </DialogHeader>

                                <div className="flex flex-col">
                                    <label htmlFor="">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Nome do Projeto"
                                        className="p-2 bg-transparent outline border-none outline-purple-800 rounded-md mt-2"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <label htmlFor="" className="mt-4">Cliente</label>
                                    <Select onValueChange={setClients}>
                                        <SelectTrigger className="bg-transparent border border-purple-800">
                                            <SelectValue
                                                placeholder="Selecione o Cliente"
                                            />
                                        </SelectTrigger>

                                        <SelectContent className="bg-[#0B1220] text-white">
                                            <SelectGroup>
                                                <SelectLabel
                                                    className="font-bold"
                                                >
                                                    Clientes
                                                </SelectLabel>

                                                {clientsList.map((client) => (
                                                    <SelectItem key={client.id} value={client.name}>
                                                        {client.name} - {client.company}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                    <label className="mt-4" htmlFor="">Status</label>
                                    <Select onValueChange={setStatus}>
                                        <SelectTrigger className="bg-transparent border border-purple-800">
                                            <SelectValue
                                                placeholder="Status"
                                            />
                                        </SelectTrigger>

                                        <SelectContent className="bg-[#0B1220] text-white">
                                            <SelectGroup>
                                                <SelectLabel
                                                    className="font-bold"
                                                >
                                                    Status
                                                </SelectLabel>

                                                <SelectItem
                                                    value="Em andamento"
                                                >
                                                    Em andamento
                                                </SelectItem>

                                                <SelectItem
                                                    value="Pausado"
                                                >
                                                    Pausado
                                                </SelectItem>

                                                <SelectItem
                                                    value="Concluido"
                                                >
                                                    Concluido
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                    <label className="mt-4" htmlFor="">Prazo</label>
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        className="p-2 bg-transparent outline border-none outline-purple-800 rounded-md mt-2"
                                        value={deadLine}
                                        onChange={(e) => setDeadLine(e.target.value)}
                                    />
                                </div>

                                <DialogClose>
                                    <Button
                                        onClick={handleAddProject}
                                        className="bg-purple-700 hover:bg-purple-600"
                                    >
                                        Adcionar Projeto
                                    </Button>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    </section>

                    <input
                        type="text"
                        placeholder="Procurar projeto"
                        className="p-2 w-96 bg-[#111827] m-4 rounded-md border text-white border-gray-700 focus:border-purple-600 outline-none transition-colors"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </section>

                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 p-4">
                        {filteredProjects.map((project) => (
                            <section
                                key={project.id}
                                className="border p-4 rounded-md bg-[#111827] border-gray-700 hover:border-purple-600 cursor-pointer transition-all duration-300"
                            >
                                <section className="flex justify-between">
                                    <h2 className="text-white text-xl">{project.name}</h2>
                                    <span className="border border-blue-500/30 text-blue-500 rounded-full pl-2 pr-2 bg-blue-500/15 text-sm">
                                        {project.status}
                                    </span>
                                </section>

                                <section>
                                    <span className="text-gray-500">{project.description}</span>
                                </section>
                                <div>
                                    <section className="flex justify-between text-white mt-4">
                                        <p>Progress</p>
                                        <span>{project.hours}</span>
                                    </section>
                                    <Progress
                                        value={project.progress}
                                        className="mt-3 h-3 rounded-full bg-[#1f2937]"
                                        indicatorClassName="bg-purple-600"
                                    />
                                    <div className="mt-2 text-gray-600">
                                        <span>Prazo: {project.deadline}</span>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-64">
                        <p className="text-gray-400 text-lg">Nenhum projeto encontrado para "{search}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}
