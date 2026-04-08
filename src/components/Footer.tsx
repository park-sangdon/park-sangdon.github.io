import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Brain } from "lucide-react";
import { LAB_INFO } from "../constants";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Lab Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                {LAB_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              {LAB_INFO.fullName} at {LAB_INFO.university}.
              Advancing the frontiers of bio-computing and machine learning.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{LAB_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href={`mailto:${LAB_INFO.email}`} className="hover:text-blue-600 transition-colors">
                  {LAB_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{LAB_INFO.phone}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Quick Links</h3>
            <ul className="space-y-2">
              {["Research", "Publications", "Members", "News"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* University */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">University</h3>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <p className="text-sm font-medium text-slate-900">{LAB_INFO.university}</p>
              <p className="text-xs text-slate-500 mt-1">{LAB_INFO.department}</p>
              <a
                href="https://www.hanyang.ac.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 font-semibold mt-3 inline-block hover:underline"
              >
                Visit University Website →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {LAB_INFO.name} Lab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
