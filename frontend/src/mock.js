// Smriti Jha's Portfolio Data - Based on actual resume information

export const mockPortfolioData = {
  // Personal Information
  personal: {
    name: "Smriti Jha",
    title: "B.Tech IT Student | Full-Stack Developer | Data Science Enthusiast",
    tagline: "Motivated B.Tech (IT) student with expertise in full-stack development, AI/ML modeling, and IoT systems. Passionate about creating innovative solutions using modern technologies.",
    email: "sjha58101@gmail.com",
    phone: "09764400681",
    location: "Bhubaneswar, India",
    linkedin: "https://linkedin.com/in/smriti-j-917797202",
    github: "https://github.com/jha-smriti",
    website: "https://smriti-portfolio.dev"
  },

  // About Section
  about: {
    summary: "A motivated third-year B.Tech student specializing in Information Technology with a 9.0 CGPA, consistently keeping abreast of the latest industry trends and technological advancements. Demonstrates strong foundation in full-stack development, AI/ML modeling, and IoT systems with proven ability to work in Agile environments.",
    highlights: [
      "Maintaining 9.0+ CGPA and Dean's List recognition",
      "Boosted approval flow efficiency by 35% at Providence India",
      "Improved environmental monitoring accuracy by 95% in IoT projects",
      "Active contributor to research in digital health and smart agriculture",
      "Successfully completed multiple internships with measurable impact"
    ]
  },

  // Skills
  skills: {
    programming: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frontend: ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript ES6+"],
    backend: ["Node.js", "Django", "Flask", "REST APIs", "Express.js"],
    cloudDevOps: ["AWS", "Microsoft Azure", "Docker", "CI/CD", "Terraform"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "SQL Server"],
    dataScience: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    tools: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Jupyter", "PyCharm", "IntelliJ IDEA"]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "Cloud Revive: Asset Management System",
      description: "Built secure full-stack cloud platform with OAuth 2.0 authentication, role-based UI routing, and seamless API integration using React, TypeScript, and Microsoft Azure.",
      technologies: ["React", "TypeScript", "MSAL", "Azure", "REST APIs", "SQL", "Terraform", "SSMS"],
      features: [
        "OAuth 2.0 and session-based authentication",
        "Role-based UI routing and access control",
        "Secure login flows with token renewal",
        "Seamless session management"
      ],
      metrics: {
        accuracy: "98% login success rate",
        efficiency: "35% boost in approval flow efficiency",
        deployment: "Production deployment on Azure"
      },
      githubUrl: "https://github.com/jha-smriti/cloud-revive",
      category: "Full-Stack Development",
      duration: "May 2024 – Jul 2024"
    },
    {
      id: 2,
      title: "AI-Powered Smart Resume Screener",
      description: "Developed an AI-powered resume screening system that automates the hiring process by analyzing, ranking, and shortlisting resumes using NLP and Machine Learning techniques.",
      technologies: ["Python", "NLP", "Machine Learning", "TensorFlow", "NLTK", "Flask"],
      features: [
        "Natural Language Processing for resume analysis",
        "ML-based candidate ranking system",
        "Automated skill and experience matching",
        "Job description compatibility scoring"
      ],
      metrics: {
        automation: "100% automated screening process",
        accuracy: "Advanced NLP matching algorithms",
        scalability: "Handles multiple resume formats"
      },
      githubUrl: "https://github.com/jha-smriti/resume-screener",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "RetireWell: Financial Planning Tool",
      description: "Built ML-based retirement planner with predictive modeling, user authentication, personalized financial tips, and interactive dashboard for tracking retirement savings goals.",
      technologies: ["Python", "scikit-learn", "React", "Flask", "Node.js", "Express.js", "MongoDB", "JWT", "Docker", "AWS"],
      features: [
        "ML-based retirement prediction modeling",
        "Interactive financial dashboard",
        "Personalized investment recommendations",
        "User authentication and data security"
      ],
      metrics: {
        accuracy: "90% prediction accuracy",
        features: "Comprehensive financial planning",
        deployment: "Cloud deployment with Docker"
      },
      githubUrl: "https://github.com/jha-smriti/retirewell",
      liveUrl: "https://retirewell-demo.com",
      category: "Full-Stack Development",
      duration: "Jan 2024 – Continued"
    },
    {
      id: 4,
      title: "Student Registration Chatbot",
      description: "Developing a chatbot to automate student registration queries for academic management systems using NLP and Flask, targeting 500+ queries with 85% accuracy.",
      technologies: ["Python", "NLP", "NLTK", "Flask", "REST APIs"],
      features: [
        "Natural Language Processing for query understanding",
        "Automated response generation",
        "RESTful API integration",
        "Academic system integration"
      ],
      metrics: {
        target: "500+ queries support",
        accuracy: "85% accuracy goal",
        integration: "RESTful API integration"
      },
      githubUrl: "https://github.com/jha-smriti/student-chatbot",
      category: "AI/ML",
      duration: "In Progress"
    },
    {
      id: 5,
      title: "FBI Crime Data Analytics",
      description: "A simple web application for exploring FBI crime statistics with basic data visualization and filtering capabilities.",
      technologies: ["R", "Shiny", "Data Visualization"],
      features: [
        "Basic crime data charts and graphs",
        "Simple data filtering options",
        "Clean, user-friendly interface"
      ],
      metrics: {
        simplicity: "Easy-to-use interface",
        data: "FBI crime statistics",
        teamwork: "Team collaboration"
      },
      githubUrl: "https://github.com/jha-smriti/fbi-crime-analytics",
      category: "Data Science"
    }
  ],

  // Experience
  experience: [
    {
      id: 1,
      company: "Providence India",
      role: "Service Engineer Intern",
      duration: "May 2024 – July 2024",
      location: "Remote",
      description: "Developed Cloud Revive using React (TSX), MSAL, OAuth 2.0, and Microsoft Azure with focus on secure authentication and user experience optimization.",
      achievements: [
        "Developed Cloud Revive using React, TypeScript, and Microsoft Azure",
        "Built role-based UI with secure login flows and token renewal mechanisms",
        "Resolved CORS, redirect URI, and token expiration issues",
        "Boosted approval flow efficiency by 35% through optimization"
      ],
      technologies: ["React", "TypeScript", "MSAL", "OAuth 2.0", "Microsoft Azure", "REST APIs"]
    },
    {
      id: 2,
      company: "KIIT University - Student Research Centre",
      role: "Student Research Intern",
      duration: "Aug 2024 – Mar 2025",
      location: "Bhubaneswar, India",
      description: "Leading IoT-based aquaponic monitoring research using Python, sensors, and real-time analytics with focus on environmental monitoring and system efficiency.",
      achievements: [
        "Developed IoT-based aquaponic monitoring using Python and sensors",
        "Improved environmental monitoring accuracy by 95%",
        "Enhanced system efficiency by 30% through optimization",
        "Led biodegradation study identifying 3 potent microbes",
        "Presented research findings at KIIT Student Research Symposium"
      ],
      technologies: ["Python", "IoT", "Sensors", "Real-time Analytics", "Research Methodologies"]
    },
    {
      id: 3,
      company: "AICTE (Govt. of India)",
      role: "Virtual Intern",
      duration: "Nov 2024 – Jan 2025",
      location: "Remote",
      description: "Built AWS-based automated plant growth monitoring system with IoT sensors, implementing cloud analytics for agricultural automation.",
      achievements: [
        "Built AWS-based automated plant growth monitoring system",
        "Implemented cloud analytics via AWS IoT Core and S3",
        "Achieved 98% system uptime through reliable architecture",
        "Integrated IoT sensors for real-time plant monitoring"
      ],
      technologies: ["AWS", "IoT Core", "S3", "IoT Sensors", "Cloud Analytics"]
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "KIIT University",
      year: "2022 – 2026",
      location: "Bhubaneswar, India",
      gpa: "9.0 CGPA",
      achievements: ["Dean's List - Consistent 9.0+ CGPA"]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Chinmaya Vidyalaya Tarapur",
      year: "2022",
      gpa: "85.6%"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Chinmaya Vidyalaya Tarapur",
      year: "2020",
      gpa: "95.6%"
    }
  ],

  // Certifications and Achievements
  certifications: [
    "AWS Cloud Architecting and Foundations - Amazon Web Services",
    "IBM DevOps and Software Engineering Certificate - IBM",
    "Cisco Networking Certificate - Cisco Systems",
    "AICTE Virtual Internship Certificate - KIIT University"
  ],

  achievements: [
    "Dean's List - Consistent 9.0+ CGPA",
    "Research Presenter - KIIT Student Research Symposium",
    "Myntra HackerRamp Challenge Participant",
    "Social Summer of Code Contributor - Firefox DevTools",
    "Infosys Pragati: Path to Future Cohort 2.0 Graduate"
  ],

  // Involvement & Activities
  involvement: [
    {
      role: "Member",
      organization: "KIIT Industry 4.0 Technology-Based Product Design and Development Society",
      duration: "August 2024 - Present",
      description: "Collaborating on interdisciplinary projects focused on Industry 4.0 technologies, including IoT, AI, and robotics.",
      activities: [
        "Participated in design and development of innovative products for smart manufacturing",
        "Engaged in workshops and seminars on technology-driven product design",
        "Collaborated on automation and robotics solutions"
      ]
    },
    {
      role: "Volunteer",
      organization: "KIIT Robotics Society",
      duration: "2023 - 2024",
      description: "Participated in robotics systems development and programming with focus on ML and NLP applications.",
      activities: [
        "Participated in development and programming of robotics systems",
        "Gained hands-on experience with datasets and Kaggle competitions",
        "Developed skills in NLP, prompt engineering, and ML concepts",
        "Contributed to automation and robotics solutions"
      ]
    }
  ]
};

export default mockPortfolioData;