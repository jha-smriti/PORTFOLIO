import React from 'react';
import { Code, Database, Cloud, Cpu, BarChart3, GitBranch, Wrench } from 'lucide-react';

const Skills = ({ data }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: data?.programming || ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
      color: "cyan"
    },
    {
      title: "Frontend Development",
      icon: <Database className="h-6 w-6" />,
      skills: data?.frontend || ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript ES6+"],
      color: "emerald"
    },
    {
      title: "Backend Development",
      icon: <Cpu className="h-6 w-6" />,
      skills: data?.backend || ["Node.js", "Django", "Flask", "REST APIs", "Express.js"],
      color: "purple"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: data?.cloudDevOps || ["AWS", "Microsoft Azure", "Docker", "CI/CD", "Terraform"],
      color: "blue"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: data?.databases || ["MySQL", "MongoDB", "PostgreSQL", "SQL Server"],
      color: "orange"
    },
    {
      title: "Data Science & ML",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: data?.dataScience || ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      color: "pink"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: data?.tools || ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Jupyter", "PyCharm", "IntelliJ"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: "text-cyan-400 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10",
      emerald: "text-emerald-400 border-emerald-400/30 hover:border-emerald-400 hover:bg-emerald-400/10",
      purple: "text-purple-400 border-purple-400/30 hover:border-purple-400 hover:bg-purple-400/10",
      blue: "text-blue-400 border-blue-400/30 hover:border-blue-400 hover:bg-blue-400/10",
      orange: "text-orange-400 border-orange-400/30 hover:border-orange-400 hover:bg-orange-400/10",
      pink: "text-pink-400 border-pink-400/30 hover:border-pink-400 hover:bg-pink-400/10",
      indigo: "text-indigo-400 border-indigo-400/30 hover:border-indigo-400 hover:bg-indigo-400/10"
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A comprehensive toolkit built through academic excellence, internships, and hands-on project experience 
              in full-stack development, AI/ML, and IoT systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`${getColorClasses(category.color).split(' ')[0]} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 ${getColorClasses(category.color)} cursor-default hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Skill Count */}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <span className="text-slate-400 text-sm">
                    {category.skills.length} technologies
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-slate-300 max-w-3xl mx-auto">
                As a dedicated B.Tech student maintaining a 9.0+ CGPA, I'm constantly exploring new technologies 
                and methodologies. Currently deepening my knowledge in advanced cloud architectures, MLOps practices, 
                and IoT integration while contributing to research projects and open-source communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;