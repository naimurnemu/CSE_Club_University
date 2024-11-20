
import './App.css'
import { Banner, Benefits, Blogs, Events, Footer, Team, Tutorial } from './components'


function App() {


  return (
    <div className='container mx-auto'>
     <Banner/>
     <Tutorial/>
     <Benefits/>
     <Events/>
     <Team/>
     <Blogs/>
     <Footer/>
    </div>
  )
}

export default App
