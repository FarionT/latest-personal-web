import { useEffect, useState } from "react"
import { Content, Profile } from "../../components"
import './Home.scss'
import DarkSvg from "../../icons/Dark";
import LightSvg from "../../icons/Light";

const Home = () => {
  const [currTheme, setCurrTheme] = useState<string | null>(
    localStorage.getItem('default-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  // const isBrowserDefaulDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  // let currSetTheme = localStorage.getItem('default-theme')

  const toggleTheme = () => {
    localStorage.setItem('default-theme', currTheme === 'light' ? 'dark' : 'light')
    setCurrTheme(currTheme === 'light' ? 'dark' : 'light')
  }

  // useEffect(() => {
  //   if (!currSetTheme) {
  //     localStorage.setItem('default-theme', isBrowserDefaulDark ? 'dark' : 'light')
  //     currSetTheme = localStorage.getItem('default-theme')
  //   } 
  //   setCurrTheme(currSetTheme)
  // }, [])

  useEffect(() => {
    if (currTheme) {
      localStorage.setItem('default-theme', currTheme);
    }
  }, [currTheme]);

  return (
    <div className={`theme theme-${currTheme || 'light'}`}>
      <div className='container'>
        <div className={`container-toggle container-toggle-${currTheme || 'light'}`} onClick={() => toggleTheme()}>
          {currTheme === 'light' ? <DarkSvg className='container-toggle-icon' /> : <LightSvg className='container-toggle-icon' stroke="#bf980a" /> }
        </div>
        <div className="container-content">
          <Profile/>
          <Content />
          {/* <Navigation /> */}
        </div>
      </div>
    </div>
  )
}

export default Home