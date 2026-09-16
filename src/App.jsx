import { useEffect, useState } from "react";

import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import PageLoader from "./components/PageLoader";
import MouseGlow from "./components/MouseGlow";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <MouseGlow />

      <Navbar />

      <AppRouter />

      <Footer />
    </>
  );
}