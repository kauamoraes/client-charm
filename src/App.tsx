import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

import { Dashboard } from "./components/nexusCRM/dashboard.tsx";
import { Projecs } from "./components/nexusCRM/projecs.tsx";
import { ProjectsProvider } from "./context/ProjectsContext.tsx";
import { ClientsProvider } from "./context/clientsContext.tsx";
import { FinanceProvider } from "./context/FinanceContext.tsx";
import { Tasks } from "./components/nexusCRM/tasks.tsx";
import { Clients } from "./components/nexusCRM/clients.tsx";
import { Finance } from "./components/nexusCRM/finance.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ProjectsProvider>
        <ClientsProvider>
          <FinanceProvider>
            <Toaster />
            <Sonner />

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/nexus/dashboard" element={<Dashboard />} />
                <Route path="/nexus/dashboard/home" element={<Dashboard />} />
                <Route path="/nexus/dashboard/projects" element={<Projecs />} />
                <Route path="/nexus/dashboard/tasks" element={<Tasks />} />
                <Route path="/nexus/dashboard/clients" element={<Clients />} />
                <Route path="/nexus/dashboard/finance" element={<Finance />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </FinanceProvider>
        </ClientsProvider>
      </ProjectsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
