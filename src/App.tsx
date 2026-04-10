import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

import { Dashboard } from "./components/nexusCRM/dashboard.tsx";
import { Projecs } from "./components/nexusCRM/projecs.tsx";
import { AsideBar } from "./components/nexusCRM/asideBar.tsx";
import { ProjectsProvider } from "../context/ProjectsContext.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ProjectsProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nexus/dashboard" element={<Dashboard />} />
            <Route path="/nexus/dashboard/home" element={<Dashboard />} />
            <Route path="/nexus/dashboard/projects" element={<Projecs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProjectsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
