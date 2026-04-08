import { motion } from "motion/react";
import { 
  Dna, 
  Brain, 
  Activity, 
  Database, 
  ArrowRight, 
  Mail, 
  Users, 
  BookOpen, 
  ChevronRight,
  Globe,
  Award
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { LAB_INFO } from "./constants";
import { cn } from "./lib/utils";

const iconMap: Record<string, any> = {
  Dna,
  Brain,
  Activity,
  Database
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                  Research Excellence at {LAB_INFO.university}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Smart <span className="text-blue-600">Bio-Computing</span> & Machine Learning
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                We bridge the gap between biological complexity and computational intelligence to solve the world's most pressing healthcare challenges.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#research" 
                  className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-slate-200"
                >
                  Explore Research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats / Highlights */}
        <section className="py-12 border-y border-slate-100 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Publications", value: "50+", icon: BookOpen },
                { label: "Researchers", value: "15+", icon: Users },
                { label: "Global Partners", value: "10+", icon: Globe },
                { label: "Awards", value: "5+", icon: Award },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section id="research" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Research Areas</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Pioneering the future of computational biology</h3>
              <p className="text-slate-600 text-lg">Our lab focuses on four core pillars of innovation, combining advanced algorithms with deep biological insights.</p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {LAB_INFO.researchAreas.map((area, i) => {
                const Icon = iconMap[area.icon] || Brain;
                return (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h4>
                    <p className="text-slate-600 leading-relaxed mb-6">{area.description}</p>
                    <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:gap-2 transition-all">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] -z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">Publications</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Recent Scientific Contributions</h3>
                <p className="text-slate-400 text-lg">We regularly publish our findings in top-tier journals and conferences in computer science and bioinformatics.</p>
              </div>
              <a href="#" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                View All Publications
              </a>
            </div>

            <div className="space-y-6">
              {LAB_INFO.publications.map((pub, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                          pub.type === 'Journal' ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400"
                        )}>
                          {pub.type}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{pub.year}</span>
                      </div>
                      <h4 className="text-lg font-bold group-hover:text-blue-400 transition-colors mb-1">{pub.title}</h4>
                      <p className="text-sm text-slate-400">{pub.authors}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold text-slate-300 italic">{pub.venue}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Members */}
        <section id="members" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Our Team</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Meet the Researchers</h3>
              <p className="text-slate-600 text-lg">A diverse group of passionate individuals dedicated to computational innovation.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {LAB_INFO.members.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-100">
                    <img 
                      src={`https://picsum.photos/seed/${member.name.replace(" ", "")}/600/600`} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                          <Globe className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">{member.role}</p>
                  <p className="text-sm text-slate-500 mt-3 line-clamp-2">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Interested in joining our lab?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              We are always looking for talented and motivated students to join our research team. If you're passionate about AI and biology, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`mailto:${LAB_INFO.email}`}
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl"
              >
                Apply Now
              </a>
              <a 
                href="#contact"
                className="bg-blue-700 text-white border border-blue-500 px-10 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
