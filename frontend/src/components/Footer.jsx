import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: data?.github || "#",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: data?.linkedin || "#",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${data?.email || "contact@example.com"}`,
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand/Name Column */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                {data?.name || 'Alex Johnson'}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                {data?.tagline || 'Transforming raw data into actionable insights through scalable engineering solutions'}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-cyan-400/50"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300">
                <p className="text-sm">{data?.location || 'San Francisco, CA'}</p>
                <a 
                  href={`mailto:${data?.email || 'contact@example.com'}`}
                  className="text-sm hover:text-cyan-400 transition-colors block"
                >
                  {data?.email || 'contact@example.com'}
                </a>
                {data?.phone && (
                  <a 
                    href={`tel:${data.phone}`}
                    className="text-sm hover:text-cyan-400 transition-colors block"
                  >
                    {data.phone}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                <p className="flex items-center">
                  © {currentYear} {data?.name || 'Alex Johnson'}. Built with
                  <Heart className="h-4 w-4 text-red-500 mx-1" />
                  using React & FastAPI
                </p>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Additional Footer Note */}
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-xs">
              This portfolio showcases my professional experience and projects. 
              All project descriptions and metrics are based on real work experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;