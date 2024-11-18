
import './App.css'
import { Banner, Benefits, Events, Footer, Team, Tutorial } from './components'


function App() {


  return (
    <div className='container mx-auto'>
     <Banner/>
     <Tutorial/>
     <Benefits/>
     <Events/>
     <Team/>
     <Footer/>
    </div>
  )
}

export default App
