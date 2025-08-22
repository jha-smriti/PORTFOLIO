import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data, about }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = async () => {
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/resume/download`);
      
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/pdf')) {
          // Actual PDF file download
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'RESUME_SDE.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } else {
          // JSON response (mock for now)
          const result = await response.json();
          console.log('Resume download response:', result);
          // Show a message that resume download is not yet configured
          alert('Resume download will be available once the PDF file is uploaded to the server.');
        }
      } else {
        throw new Error('Failed to download resume');
      }
    } catch (error) {
      console.error('Resume download error:', error);
      alert('Resume download temporarily unavailable. Please contact directly via email.');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Floating particles animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-slate-300 bg-clip-text text-transparent">
              {data?.name || 'Smriti Jha'}
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 font-medium mb-4">
              {data?.title || 'B.Tech IT Student | Full-Stack Developer | Data Science Enthusiast'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {data?.tagline || about?.summary || 'Motivated B.Tech (IT) student with expertise in full-stack development, AI/ML modeling, and IoT systems. Passionate about creating innovative solutions using modern technologies.'}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">9.0</div>
              <div className="text-slate-300">CGPA</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-slate-300">Monitoring Accuracy</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-slate-300">Internships</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleDownloadResume}
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href={data?.github || 'https://github.com/jha-smriti'} 
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href={data?.linkedin || 'https://linkedin.com/in/smriti-j-917797202'} 
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${data?.email || 'sjha58101@gmail.com'}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Hero;