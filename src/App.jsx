import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        {/* Minimal spacer section for visual rhythm */}
        <section className="bg-black py-8" aria-hidden>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
