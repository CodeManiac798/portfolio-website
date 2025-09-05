const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Waste to Fuel MarketPlace",
      description: "A collaborative Python-based marketplace developed as part of a team project that provides real-time buying and selling rates for various types of fuels, including waste-derived fuels. As a key contributor, I worked on integrating data metrics like calorific value to provide comprehensive, transparent information. Our team designed a user-friendly interface to display complex data in an accessible format.",
      technologies: ["Python", "Data Analysis", "Backend Development", "Frontend Design", "API Integration", "Team Collaboration"],
      status: "Completed",
      link: "https://www.linkedin.com/posts/aryan-mittal-5762941b9_industrialideathon2025-circulareconomy-wastetofuel-activity-7365453117947072512-aJ-t?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLD3yoBt7EVvAZo00tOsUjzrSHvbo-1qs8"
    },
    {
      id: 2,
      title: "AdPulse",
      description: "A machine learning-driven tool I am currently developing to analyze ad data from multiple CSV files. The tool will generate a comprehensive dashboard visualizing key metrics and performance indicators. Its primary purpose is to help users identify successful ad campaigns and optimize ad spend.",
      technologies: ["Python", "Machine Learning", "Data Visualization", "Data Science", "Regression Models", "GenAI"],
      status: "In Development",
      link: "https://github.com/CodeManiac798/AdPulse"
    },
    {
      id: 3,
      title: "Jarvis Smart Voice Assistant",
      description: "A voice-controlled assistant I developed using features from Eleven Labs for natural language processing. The project successfully engineered a voice-responsive system that accurately responds to user commands, showcasing my skills in programming and API integration.",
      technologies: ["Python", "Eleven Labs API", "Natural Language Processing (NLP)", "API Integration"],
      status: "Completed",
      link: null // No link provided for this project
    }
  ];

  const handleViewProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (project && project.link) {
      window.open(project.link, '_blank');
    } else {
      alert(`${project?.title}\n\nMore details coming soon! This project is still being documented.`);
    }
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Here are some of the projects I've been working on, ranging from engineering solutions to entrepreneurial ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black border border-white hover:border-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/20 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-white text-black border border-white' 
                    : project.status === 'In Development'
                    ? 'bg-white text-black border border-white'
                    : project.status === 'In Progress'
                    ? 'bg-white text-black border border-white'
                    : 'bg-white text-black border border-white'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-white mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black border border-white text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleViewProject(project.id)}
                className="w-full bg-white text-black hover:bg-black hover:text-white border border-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/30 flex items-center justify-center gap-2"
              >
                {project.link ? (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {project.id === 2 ? 'View on GitHub' : 'View Project'}
                  </>
                ) : (
                  'More Details Soon'
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-white mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-black border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
