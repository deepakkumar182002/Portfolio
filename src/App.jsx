import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import { WEBSITE_SERVICES, SIMPLE_TAGLINE } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout footerProps={{ tagline: SIMPLE_TAGLINE, services: WEBSITE_SERVICES }}>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout footerProps={{ tagline: SIMPLE_TAGLINE, services: WEBSITE_SERVICES }}>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
