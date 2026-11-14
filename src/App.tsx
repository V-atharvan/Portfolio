import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/ui/ResumeModal';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F7F7F2] text-[#303632]">
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenResume={() => setResumeModalOpen(true)} />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer onOpenResume={() => setResumeModalOpen(true)} />

        <ResumeModal 
          isOpen={resumeModalOpen} 
          onClose={() => setResumeModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
