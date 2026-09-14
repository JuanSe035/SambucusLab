import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff]">

      <Navbar />

      <main className="pt-20 flex-grow">
        <AppRouter />
      </main>

      <Footer />

    </div>
  );
}

export default App;