import aryanPhoto from '../assets/aryan_photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Your Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={aryanPhoto}
                alt="Aryan - Mechanical Engineering Student"
                className="w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl shadow-white/30 hover:shadow-white/50 transition-all duration-300"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full opacity-40 animate-pulse"></div>
            </div>
          </div>

          {/* Bio content */}
          <div className="text-white">
            <h3 className="text-2xl font-semibold text-white mb-6">Hello! I'm Aryan</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I'm Aryan, a highly driven Mechanical Engineering student at Netaji Subhash University of Technology. 
                I'm passionate about bridging the gap between technical innovation and real-world business solutions.
              </p>
              <p>
                My experience as a co-founder and consultant has given me a strong foundation in strategic thinking 
                and project management, while my hands-on technical work in robotics and data analysis has honed 
                my problem-solving skills.
              </p>
              <p>
                I'm a continuous learner, always exploring new technologies and seeking opportunities to translate 
                complex ideas into meaningful, tangible results.
              </p>
            </div>

            {/* Skills/Interests */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Areas of Interest</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Business Strategy', 
                  'Data Analysis & Machine Learning', 
                  'Robotics & Automation', 
                  'Stock Investing & Financial Markets'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-black border border-white text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-200 hover:shadow-lg hover:shadow-white/20"
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
