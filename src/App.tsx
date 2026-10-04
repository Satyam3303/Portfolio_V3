import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const chRef   = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setCoords({ x, y });
      if (dotRef.current)  { dotRef.current.style.left  = x + 'px'; dotRef.current.style.top  = y + 'px'; }
      if (chRef.current)   { chRef.current.style.left   = x + 'px'; chRef.current.style.top   = y + 'px'; }
      // Ring lags slightly
      const lag = () => {
        rx += (x - rx) * 0.12;
        ry += (y - ry) * 0.12;
        if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px'; }
        if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) requestAnimationFrame(lag);
      };
      requestAnimationFrame(lag);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="min-h-screen relative grid-bg" style={{ background: 'var(--bg)' }}>
      {/* Scan line */}
      <div className="scanline" />

      {/* Custom cursor */}
      <div ref={dotRef}  className="cursor cursor-dot"  style={{ position: 'fixed' }} />
      <div ref={ringRef} className="cursor cursor-ring" style={{ position: 'fixed' }} />
      <div ref={chRef}   className="cursor-crosshair"   style={{ position: 'fixed' }} />

      {/* Live coord HUD */}
      <div className="fixed bottom-4 right-4 z-50 hud text-right pointer-events-none">
        <div>X: {coords.x.toString().padStart(4,'0')}</div>
        <div>Y: {coords.y.toString().padStart(4,'0')}</div>
      </div>

      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;