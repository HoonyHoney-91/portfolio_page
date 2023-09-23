import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import './style/App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 1200);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <BrowserRouter>
      <div className={`Header ${menuOpen ? 'HeaderMenu' : ''}`}>
        <Header />
      </div>
      <div className={`MenuToggle ${menuOpen ? 'MenuOpen' : ''}`}>
        <button className="MenuToggleButton" onClick={toggleMenu}>
          <img src="src/image/menuToggle.png" alt="" />
        </button>
      </div>

      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
      <main className={`Content ${menuOpen ? 'ContentMenuOpen' : ''}`}>
        <Routes>
          <Route path="/portfolio_page/" element={<About />} />
          <Route index element={<About />} />
          <Route path="/portfolio_page/About" element={<About />} />
          <Route path="/portfolio_page/Portfolio" element={<Portfolio />} />
          <Route path="/portfolio_page/Contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;