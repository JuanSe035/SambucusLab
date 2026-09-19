import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import PageLoader from "./components/PageLoader";
import MouseGlow from "./components/MouseGlow";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

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