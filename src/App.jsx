import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ParticlesBackground from "./components/ParticlesBackground";
import MouseTrail from "./components/MouseTrail";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] relative">
      {/* =====================================================
          EFECTOS GLOBALES
      ===================================================== */}

      <ScrollProgress />

      <ParticlesBackground />

      <MouseTrail />

      {/* =====================================================
          NAVEGACIÓN
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ===================================================== */}

      <main className="flex-grow relative z-10">
        <AppRouter />
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </div>
  );
}

export default App; 