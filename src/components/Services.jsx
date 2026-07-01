import { motion } from 'framer-motion';
import { Smartphone, Globe, Cloud, Layout, Bot, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Application Development',
      description: 'Custom, responsive web applications built with modern frameworks like React and Next.js for high performance.',
      color: 'blue'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile experiences that engage users on both iOS and Android devices.',
      color: 'indigo'
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Intuitive, beautiful interfaces designed to provide seamless user journeys and increase conversion rates.',
      color: 'purple'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Chatbots',
      description: 'Intelligent conversational AI solutions that automate customer support, lead generation, and user engagement.',
      color: 'emerald'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Cloud migration, DevOps, and scalable infrastructure deployment on AWS, Azure, or Google Cloud.',
      color: 'sky'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Automations',
      description: 'Streamline your operations with custom automated workflows, seamless API integrations, and smart data processing.',
      color: 'rose'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Services We Offer</h3>
          <p className="text-slate-400 text-lg">
            End-to-end digital solutions designed to help your business thrive in a competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-slate-700 transition-all group"
            >
              <div className={`w-16 h-16 rounded-xl bg-${service.color}-500/10 text-${service.color}-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${service.color}-500 group-hover:text-white transition-all duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
