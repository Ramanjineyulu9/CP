import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Successful Projects', value: '5+' },
    { label: 'Happy Clients', value: '5+' },
    { label: 'Years Experience', value: '1+' },
    { label: 'Team Members', value: '10+' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">About Zustnext</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pioneering the next generation of digital experiences.
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              At Zustnext, we believe in the power of technology to solve complex problems.
              Our team of expert engineers, designers, and strategists work together to deliver
              scalable, high-performance software tailored to your specific business needs.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg h-fit">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-100 mb-2">Agile & Fast</h4>
                  <p className="text-slate-500">Rapid development cycles without compromising on quality or security.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-indigo-500/10 p-2 rounded-lg h-fit">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-100 mb-2">Result-Oriented</h4>
                  <p className="text-slate-500">Every line of code we write is aimed at driving measurable business growth.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="text-4xl font-extrabold text-white mb-2 bg-gradient-to-br from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
