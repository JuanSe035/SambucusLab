import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20 flex-grow">
        <AppRouter />
      </div>

      <Footer />
    </div>
  );
}

export default App;