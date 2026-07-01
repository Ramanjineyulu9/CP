import { Rocket, Globe, MessageSquare, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Zustnext
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Transforming businesses with cutting-edge technology solutions. We build robust, scalable, and innovative digital products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-100 mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">App Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-100 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Our Projects</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Zustnext. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
