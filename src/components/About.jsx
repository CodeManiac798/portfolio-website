import aryanPhoto from '../assets/aryan_photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Your Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={aryanPhoto}
                alt="Aryan - Mechanical Engineering Student"
                className="w-80 h-80 object-cover rounded-full border-4 border-blue-400 shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Bio content */}
          <div className="text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Hello! I'm Aryan</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I'm a passionate Mechanical Engineering student with a keen interest in innovation and entrepreneurship. 
                My journey in engineering has taught me the importance of problem-solving, critical thinking, and 
                continuous learning.
              </p>
              <p>
                As a budding entrepreneur, I'm always exploring new opportunities to create solutions that can make 
                a positive impact. I believe in the power of technology and engineering to solve real-world problems 
                and improve people's lives.
              </p>
              <p>
                When I'm not studying or working on projects, you can find me exploring new technologies, reading 
                about successful entrepreneurs, or brainstorming ideas for my next venture.
              </p>
            </div>

            {/* Skills/Interests */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Areas of Interest</h4>
              <div className="flex flex-wrap gap-3">
                {['Mechanical Engineering', 'Entrepreneurship', 'Innovation', 'Problem Solving', 'Technology', 'Leadership'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
