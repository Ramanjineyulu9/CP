import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      
      {/* Simple CTA / Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your next project?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how Zustnext can help you achieve your business goals with our cutting-edge technology solutions.
          </p>
          <div className="max-w-md mx-auto">
            <a 
              href="mailto:zustnext.com@gmail.com"
              className="inline-flex items-center justify-center w-full px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Get in Touch via Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
