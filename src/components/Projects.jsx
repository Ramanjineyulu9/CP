import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Zustserve',
      category: 'SaaS Platform',
      description: 'A comprehensive restaurant management POS system built to streamline operations, manage billing, and integrate seamless payments (Cashfree) for modern dining establishments.',
      features: ['Table Management', 'QR Code Payments', 'Inventory Tracking', 'Real-time Analytics'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
      link: '#', // The user will provide the link later
      color: 'blue'
    },
    {
      id: 2,
      title: 'Scuzy AI',
      category: 'AI Platform',
      description: 'An advanced AI agent dashboard that provides deep insights and automated task execution capabilities, integrated with cutting edge LLMs.',
      features: ['Automated Workflows', 'Custom AI Agents', 'API Integration', 'Data Visualization'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      link: '#',
      color: 'indigo'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</h3>
          <p className="text-slate-400 text-lg">
            Discover how we transform ideas into powerful digital products that drive real business results.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl">
                  <div className="aspect-[4/3] w-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className={`inline-block px-4 py-1.5 rounded-full bg-${project.color}-500/10 border border-${project.color}-500/20 text-${project.color}-400 font-medium text-sm mb-6`}>
                  {project.category}
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className={`w-5 h-5 text-${project.color}-400 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={project.link}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-${project.color}-600 hover:bg-${project.color}-500 text-white font-medium transition-colors`}
                >
                  View Live Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
