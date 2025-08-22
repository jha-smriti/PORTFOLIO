import React from 'react';
import { Code2, Database, Brain, Zap } from 'lucide-react';

const About = ({ data }) => {
  const highlights = data?.highlights || [
    "Built and maintained data pipelines processing 100M+ records daily",
    "Deployed ML models serving 10M+ predictions per month",
    "Reduced data processing time by 70% through optimization",
    "Led cross-functional teams in data-driven product development"
  ];

  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering",
      description: "Building scalable data pipelines and infrastructure that process millions of records efficiently"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Developing and deploying ML models that drive business decisions and improve user experiences"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Software Development",
      description: "Creating robust, maintainable applications using modern development practices and technologies"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Optimizing systems and processes to achieve maximum efficiency and cost-effectiveness"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {data?.summary || "Passionate Data Engineer and Data Scientist with 5+ years of experience building scalable data pipelines, implementing machine learning models, and driving data-driven decision making. Expertise in Python, SQL, cloud platforms, and modern data stack technologies."}
              </p>

              {/* Key Achievements */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white mb-4">Key Achievements</h3>
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-16 border-t border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">100M+</div>
                <div className="text-slate-300">Records Processed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-slate-300">ML Models Deployed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;