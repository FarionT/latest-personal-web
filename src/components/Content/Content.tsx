import { About } from '../About'
import { Navigation } from '../Navigation'
import { Project } from '../Project'
import './Content.scss'

const Content = () => {

  return (
    <div className='content'>
      <div className='content-container'>
        <About />
        <Project />
      </div>
      <Navigation />
    </div>
  )
}

export default Content