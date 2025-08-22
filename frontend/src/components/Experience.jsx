import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, CheckCircle, Users, Code } from 'lucide-react';
import { Badge } from './ui/badge';

const Experience = ({ data, education, certifications, achievements, involvement }) => {
  const experiences = data || [];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional <span className="text-cyan-400">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Calendar className="mr-3 text-cyan-400" />
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {/* Timeline Line */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-slate-600"></div>
                    )}
                    
                    <div className="flex items-start space-x-6">
                      {/* Timeline Dot */}
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-slate-900 shadow-lg">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Experience Card */}
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 flex-1 hover:border-cyan-400/50 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                            <h5 className="text-lg text-cyan-400 font-semibold">{exp.company}</h5>
                          </div>
                          <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                            <div className="flex items-center text-slate-300 text-sm mb-1">
                              <Calendar size={14} className="mr-1" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center text-slate-300 text-sm">
                              <MapPin size={14} className="mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {/* Achievements */}
                        <div className="mb-4">
                          <h6 className="text-white font-semibold mb-2">Key Achievements:</h6>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-slate-300 text-sm">
                                <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Technologies */}
                        <div>
                          <h6 className="text-white font-semibold mb-2">Technologies:</h6>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                className="bg-slate-700/50 text-slate-300 border-slate-600 hover:border-cyan-400/50"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Involvement & Activities */}
              {involvement && involvement.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <Users className="mr-3 text-cyan-400" />
                    Leadership & Involvement
                  </h3>
                  
                  <div className="space-y-6">
                    {involvement.map((activity, index) => (
                      <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-bold text-white">{activity.role}</h4>
                          <span className="text-slate-400 text-sm">{activity.duration}</span>
                        </div>
                        <h5 className="text-cyan-400 font-semibold mb-3">{activity.organization}</h5>
                        <p className="text-slate-300 mb-4 text-sm leading-relaxed">{activity.description}</p>
                        
                        <ul className="space-y-1">
                          {activity.activities.map((act, actIndex) => (
                            <li key={actIndex} className="flex items-start space-x-2 text-slate-300 text-sm">
                              <CheckCircle size={12} className="text-emerald-400 mt-1 flex-shrink-0" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Education and Certifications Sidebar */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <GraduationCap className="mr-3 text-cyan-400" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education?.map((edu, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                      <h4 className="text-white font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-cyan-400 mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 text-sm">{edu.year}</span>
                        {edu.gpa && (
                          <span className="text-emerald-400 text-sm font-semibold">{edu.gpa}</span>
                        )}
                      </div>
                      {edu.location && (
                        <p className="text-slate-400 text-xs">{edu.location}</p>
                      )}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center space-x-2 mt-1">
                              <Award size={12} className="text-yellow-400" />
                              <span className="text-slate-300 text-xs">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="mr-3 text-cyan-400" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications?.map((cert, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-cyan-400/50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              {achievements && achievements.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Code className="mr-3 text-cyan-400" />
                    Achievements
                  </h3>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                        <div className="flex items-start space-x-3">
                          <Award size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Focus */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                <h4 className="text-white font-semibold mb-3">Current Focus</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Pursuing B.Tech in IT with 9.0+ CGPA while gaining practical experience through internships 
                  and research projects. Currently exploring advanced MLOps, IoT integration, and contributing 
                  to open-source projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;