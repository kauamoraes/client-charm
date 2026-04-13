
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AsideBar } from "./asideBar";
import { useProjects } from "@/context/ProjectsContext";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: "todo" | "in-progress" | "done";
    hours: string;
    deadline: string;
}

export function Tasks() {
    const { projects, setProjects } = useProjects();
    const [draggedTask, setDraggedTask] = useState<Task | null>(null);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const columns = [
        { id: "todo", title: "A Fazer", color: "border-blue-500 bg-blue-500/5", titleColor: "text-blue-400", statusMap: "Pausado" },
        { id: "in-progress", title: "Em Progresso", color: "border-yellow-500 bg-yellow-500/5", titleColor: "text-yellow-400", statusMap: "Em andamento" },
        { id: "done", title: "Feito", color: "border-green-500 bg-green-500/5", titleColor: "text-green-400", statusMap: "Concluído" },
    ];

    // Converte projetos para tasks
    const projectsAsTask: Task[] = projects.map(project => ({
        id: project.id,
        title: project.name,
        description: project.description,
        status: mapStatusToTask(project.status),
        hours: project.hours,
        deadline: project.deadline,
    }));

    function mapStatusToTask(status: string): "todo" | "in-progress" | "done" {
        switch (status) {
            case "Em andamento":
                return "in-progress";
            case "Concluído":
                return "done";
            default:
                return "todo";
        }
    }

    function mapTaskToStatus(taskStatus: "todo" | "in-progress" | "done"): string {
        switch (taskStatus) {
            case "in-progress":
                return "Em andamento";
            case "done":
                return "Concluído";
            default:
                return "Pausado";
        }
    }

    const getTasksByStatus = (status: "todo" | "in-progress" | "done") => {
        return projectsAsTask.filter(task => task.status === status);
    };

    const handleDragStart = (task: Task) => {
        setDraggedTask(task);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (status: "todo" | "in-progress" | "done") => {
        if (!draggedTask) return;

        const newStatus = mapTaskToStatus(status);
        setProjects(projects.map(project =>
            project.id === draggedTask.id ? { ...project, status: newStatus } : project
        ));

        setDraggedTask(null);
    };

    const handleAddTask = (status: "todo" | "in-progress" | "done") => {
        if (!newTaskTitle.trim()) return;

        const newProject = {
            id: Date.now(),
            name: newTaskTitle,
            description: "",
            progress: 0,
            hours: "0h/10",
            deadline: new Date().toLocaleDateString("pt-BR"),
            status: mapTaskToStatus(status),
        };

        setProjects([...projects, newProject]);
        setNewTaskTitle("");
    };

    return (
        <div className="w-full h-full flex bg-[#0B1220]">
            <AsideBar />

            <div className="flex-1 flex flex-col px-6 py-4 overflow-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-white mb-2">Tarefas</h1>
                    <p className="text-gray-400">Organizando tarefas do seu projeto</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {columns.map((column) => (
                        <div
                            key={column.id}
                            className={`border-2 ${column.color} rounded-lg p-4 min-h-[600px] flex flex-col`}
                        >
                            {/* Header da Coluna */}
                            <div className={`flex items-center gap-2 mb-4 pb-4 border-b border-gray-700`}>
                                <h2 className={`text-lg font-bold ${column.titleColor}`}>{column.title}</h2>
                                <span className="text-gray-400 text-sm">
                                    ({getTasksByStatus(column.id as "todo" | "in-progress" | "done").length})
                                </span>
                            </div>
                            {/* Drop Zone */}
                            <div
                                onDragOver={handleDragOver}
                                onDrop={() => handleDrop(column.id as "todo" | "in-progress" | "done")}
                                className="flex-1 space-y-3 mb-4"
                            >
                                {getTasksByStatus(column.id as "todo" | "in-progress" | "done").map((task) => (
                                    <div
                                        key={task.id}
                                        draggable
                                        onDragStart={() => handleDragStart(task)}
                                        className={`p-3 bg-[#111827] border border-gray-700 rounded-lg cursor-grab active:cursor-grabbing hover:border-purple-600 transition-all duration-200 ${draggedTask?.id === task.id ? "opacity-50" : ""
                                            }`}
                                    >
                                        <p className="text-white font-medium text-sm">{task.title}</p>
                                        {task.description && (
                                            <p className="text-gray-400 text-xs mt-1">{task.description}</p>
                                        )}
                                        <div className="text-gray-500 text-xs mt-2 space-y-1">
                                            <p>⏱️ {task.hours}</p>
                                            <p>📅 {task.deadline}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Adicionar Nova Tarefa */}
                            <div className="space-y-2 mt-auto pt-4 border-t border-gray-700">
                                {column.id === "todo" && (
                                    <>
                                        <Input
                                            type="text"
                                            placeholder="Adicionar tarefa..."
                                            className="bg-[#111827] border-gray-700 text-white placeholder-gray-500 text-sm"
                                            value={newTaskTitle}
                                            onChange={(e) => setNewTaskTitle(e.target.value)}
                                            onKeyPress={(e) => {
                                                if (e.key === "Enter") {
                                                    handleAddTask(column.id as "todo" | "in-progress" | "done");
                                                }
                                            }}
                                        />
                                        <Button
                                            onClick={() => handleAddTask(column.id as "todo" | "in-progress" | "done")}
                                            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm"
                                        >
                                            + Adicionar
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}