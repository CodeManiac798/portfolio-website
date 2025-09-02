const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Engineering Solution",
      description: "An innovative mechanical engineering project that combines traditional engineering principles with modern technology to solve complex problems.",
      technologies: ["CAD Design", "3D Modeling", "Prototyping"],
      status: "In Progress"
    },
    {
      id: 2,
      title: "Entrepreneurial Venture",
      description: "A startup idea focused on sustainable engineering solutions for small businesses, combining my engineering knowledge with business acumen.",
      technologies: ["Business Planning", "Market Research", "Product Development"],
      status: "Planning Phase"
    },
    {
      id: 3,
      title: "Innovation Challenge Project",
      description: "A competition-winning project that addresses real-world engineering challenges through creative problem-solving and innovative design thinking.",
      technologies: ["Problem Solving", "Design Thinking", "Presentation"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Future Tech Initiative",
      description: "An exploratory project investigating emerging technologies in mechanical engineering and their potential applications in various industries.",
      technologies: ["Research", "Technology Analysis", "Future Planning"],
      status: "Concept Stage"
    }
  ];

  const handleViewProject = (projectId) => {
    alert(`Viewing project: ${projects.find(p => p.id === projectId)?.title}\n\nThis is a placeholder. In a real implementation, this would navigate to a detailed project page or open a modal with more information.`);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've been working on, ranging from engineering solutions to entrepreneurial ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-600 text-green-100' 
                    : project.status === 'In Progress'
                    ? 'bg-blue-600 text-blue-100'
                    : 'bg-yellow-600 text-yellow-100'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleViewProject(project.id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Project
              </button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
