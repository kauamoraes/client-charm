import { createContext, useContext, useState, ReactNode } from "react";

export interface Project {
    id: number;
    name: string;
    description: string;
    progress: number;
    hours: string;
    deadline: string;
    status: string;
}

interface ProjectsContextType {
    projects: Project[];
    setProjects: (projects: Project[]) => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export function ProjectsProvider({ children }: { children: ReactNode }) {
    const [projects, setProjects] = useState<Project[]>([
        {
            id: 1,
            name: "App Eccomerce",
            description: "Loja Virtual Pro",
            progress: 90,
            hours: "18h/20",
            deadline: "14/04/2026",
            status: "Em andamento",
        },
        {
            id: 2,
            name: "Dashboard Analytics",
            description: "Sistema de Análise",
            progress: 75,
            hours: "15h/20",
            deadline: "15/04/2026",
            status: "Em andamento",
        },
        {
            id: 3,
            name: "Blog Platform",
            description: "Plataforma de Conteúdo",
            progress: 60,
            hours: "12h/20",
            deadline: "20/04/2026",
            status: "Em andamento",
        },
        {
            id: 4,
            name: "Sistema de Gerenciamento",
            description: "Plataforma de Gestão",
            progress: 45,
            hours: "9h/20",
            deadline: "25/04/2026",
            status: "Em andamento",
        }
    ]);

    return (
        <ProjectsContext.Provider value={{ projects, setProjects }}>
            {children}
        </ProjectsContext.Provider>
    );
}

export function useProjects() {
    const context = useContext(ProjectsContext);
    if (context === undefined) {
        throw new Error("useProjects must be used within a ProjectsProvider");
    }
    return context;
}
