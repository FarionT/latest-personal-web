import './Navigation.scss'

import AboutSvg from '../../icons/About'
import WorkSvg from '../../icons/Work'
import ProjectSvg from '../../icons/Project'
import { useLocation } from 'react-router-dom'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navigation = () => {
  const location = useLocation()
  const currTheme = localStorage.getItem('default-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')


  const options = [
    {
      src: <AboutSvg className='navigation-item-image' fill={currTheme === 'light' ? '' : 'white'} />,
      caption: 'About',
      link: '#about'
    },
    {
      src: <WorkSvg className='navigation-item-image' fill={currTheme === 'light' ? '' : 'white'} />,
      caption: 'Experiences',
      link: '#experiences'
    },
    {
      src: <ProjectSvg className='navigation-item-image' fill={currTheme === 'light' ? '' : 'white'} />,
      caption: 'Projects',
      link: '#projects'
    },
  ]

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

  return (
    <div className='navigation-container'>
      {options.map((item, index) => (
        <a key={index} href={item.link} onClick={() => handleScroll(item.link)} className={`navigation-item ${location.hash === item.link ? 'navigation-item-active' : location.hash === '' && index === 0 ? 'navigation-item-active' : ''}`} >
          {/* <img src={item.src} alt='options' className='navigation-item-image' /> */}
          {item.src}
          <div className='navigation-item-caption'>{item.caption}</div>
        </a>
      ))}
    </div>
  )
}

export default Navigation