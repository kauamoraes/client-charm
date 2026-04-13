import { useClients } from "@/context/clientsContext";
import { AsideBar } from "./asideBar";
import { useState } from "react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../ui/dialog";

import { Button } from "../ui/button";

export function Clients() {

    const { clients, setClients } = useClients();
    const [searchTerm, setSearchTerm] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")

    const filteredClients = clients.filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.company.toLowerCase().includes(searchTerm.toLowerCase()));

    function handleAddClient() {
        const newClient = {
            id: Date.now(),
            name,
            email,
            phone,
            company
        }

        if (!name || !email || !phone || !company) {
            alert("Preencha todos os campos para adicionar um cliente.")
            return;
        }

        setClients([...clients, newClient])

        setName("")
        setEmail("")
        setPhone("")
        setCompany("")
    }

    return (
        <div className="flex">
            <AsideBar />

            <section className="bg-[#0B1220] w-full">
                <section className=" flex items-start justify-between p-4">
                    <h2 className="text-white text-2xl font-bold ">Clientes</h2>


                    <Dialog>
                        <DialogTrigger
                            className="text-white bg-purple-600 p-2 rounded-md mr-4"
                        >
                            + Adcionar Clientes
                        </DialogTrigger>

                        <DialogContent className="bg-[#0B1220] text-white border-none">
                            <DialogHeader>
                                <DialogTitle>Novo Cliente</DialogTitle>
                            </DialogHeader>

                            <div className="flex flex-col gap-2 p-2">
                                <label htmlFor="">Nome</label>
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    className="p-2 bg-transparent outline border-none outline-purple-800 rounded-md mt-2"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <label htmlFor="" className="mt-4">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="p-2 bg-transparent outline border-none outline-purple-800 rounded-md mt-2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label htmlFor="" className="mt-4">Telefone</label>
                                <input
                                    type="text"
                                    placeholder="Telefone"
                                    className="p-2 bg-transparent outline border-none outline-purple-800 rounded-md mt-2"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <label htmlFor="" className="mt-4">Empresa</label>
                                <input
                                    type="text"
                                    placeholder="Empresa"
                                    className="p-2 bg-transparent outline border-none outline-purple-800 rounded-md mt-2"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>

                            <DialogClose>
                                <Button
                                    className="bg-purple-700 hover:bg-purple-600"
                                    onClick={handleAddClient}
                                >
                                    Adcionar Cliente
                                </Button>
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
                </section>

                <section className="p-4">
                    <input
                        type="text"
                        placeholder="Buscar cliente..."
                        className="bg-[#1F2937] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 p-2 w-96 rounded-md"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </section>

                {filteredClients.length > 0 ? (
                    <section className="grid grid-cols-3 mt-4">
                        {filteredClients.map((client) => (
                            <div key={client.id} className="bg-[#111827] text-white p-4 rounded-md mb-4 mx-4 hover:border border-purple-700 transition-all duration-100 cursor-pointer">
                                <h3 className="text-lg font-bold">{client.name}</h3>
                                <p className="text-gray-400">{client.company}</p>
                            </div>
                        ))}
                    </section>
                ) : (
                    <p className="text-gray-400 p-4 text-center mt-8">Nenhum cliente encontrado.</p>
                )}
            </section>
        </div >
    )
}

