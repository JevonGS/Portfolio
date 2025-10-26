import Navbar from './Components/Navbar/Navbar.jsx'
import About from './Components/About/About.jsx'
import Project from './Components/Project/Project.jsx'

function App() {
  return(
    <>
      <div>
        <Navbar></Navbar>
        <div className='hero grid md:grid-cols-2 xl:gap-0 gap-6 mt-10 items-center' data-aos="fade-up">
          <img src="/Assets/profil.jpg" alt="Profile" className='w-[500px] object-cover object-top rounded-3xl mr-auto'/>
          <div>
              <div>
                <h1 className='xl:text-6xl text-4xl font-bold mb-6' data-aos="fade-up">Hello, I'm Jevon Geraldo Setiawan</h1>
                <p className='xl:text-xl text-base text-gray-200 opacity-50 md:mt-5 lg:mt-15' data-aos="fade-up">Student at Bina Nusantara University majoring in Computer Science. I am interested in this field because I have an interest in various areas of technology and enjoy discovering new things. My ability to adapt and my curiosity drive me to continue learning, developing my skills, and facing challenges with creative solutions.</p>
                <div data-aos="fade-up" className='flex md:justify-between gap-5 md:mt-5 lg:mt-15 mt-10' style={{width:'100%'}}>
                  <a href="/public/CV - Jevon Geraldo Setiawan.pdf" download className='w-full'><button className='bg-white text-gray-900 w-full rounded-xl text-base font-bold cursor-pointer hover:bg-transparent hover:text-white' style={{padding: 20, border:"solid white 1px"}}>Download CV</button></a>
                  <a href="#Project" className='w-full'><button className='bg-gray-900 w-full rounded-xl text-base font-bold hover:bg-white hover:text-black cursor-pointer' style={{padding: 20, border:"solid white 1px"}}>Project </button></a>
                </div>
              </div>
          </div>
        </div>
        <About></About>
        <Project></Project>
      </div>
    </>

  )
}

export default App
