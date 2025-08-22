import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = data || [];
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getMetricIcon = (key) => {
    const iconMap = {
      performance: <TrendingUp className="h-4 w-4" />,
      accuracy: <Zap className="h-4 w-4" />,
      impact: <Users className="h-4 w-4" />,
      default: <ChevronRight className="h-4 w-4" />
    };
    return iconMap[key] || iconMap.default;
  };

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A showcase of innovative data engineering and machine learning projects that solve real-world problems
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400'
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/30">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600 hover:border-cyan-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-slate-300">
                          <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Project Metrics</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center space-x-2 bg-slate-700/30 rounded-lg p-3"
                          >
                            <div className="text-cyan-400">
                              {getMetricIcon(key)}
                            </div>
                            <div>
                              <div className="text-white font-medium text-sm">{value}</div>
                              <div className="text-slate-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Interested in More Projects?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                These are just a few highlights from my portfolio. I have many more projects showcasing 
                different aspects of data engineering, machine learning, and software development.
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
                View All Projects on GitHub
                <Github className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;