import Navbar from './components/Navbar'
import BlueprintIntro from './components/BlueprintIntro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarBackground from './components/StarBackground'

function App() {
  return (
    <div className="min-h-screen relative">
      <StarBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <BlueprintIntro />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
