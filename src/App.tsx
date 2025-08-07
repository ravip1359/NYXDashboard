import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Index from '@/pages/Index';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router basename="/Dashboard">
        <div className="min-h-screen bg-gradient-to-b from-[#0A0B14] via-[#1A0B2E] to-[#0A0B14]">
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;