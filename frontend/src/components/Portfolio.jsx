import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import mockPortfolioData from '../mock';

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
      setData(mockPortfolioData);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-slate-300">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero data={data.personal} about={data.about} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Experience 
          data={data.experience} 
          education={data.education} 
          certifications={data.certifications}
          achievements={data.achievements}
          involvement={data.involvement}
        />
        <Contact data={data.personal} />
      </main>
      <Footer data={data.personal} />
    </div>
  );
};

export default Portfolio;