import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/common/ResumeModal';
import { HomePage } from './pages/HomePage';

// Route-level code splitting for production performance
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#F7F7F2]">
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-portfolio-border shadow-subtle text-xs font-mono text-portfolio-muted">
      <span className="w-2.5 h-2.5 rounded-full bg-portfolio-forest animate-pulse" />
      <span>Loading specification...</span>
    </div>
  </div>
);

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F7F7F2] text-[#303632]">
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        <main className="flex-1">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage onOpenResume={() => setResumeModalOpen(true)} />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
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
