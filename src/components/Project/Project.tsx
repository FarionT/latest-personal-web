import './Project.scss'
import concise from '../../assets/concise.svg'
import tvonair from '../../assets/tvonair.jpg'
import ananta from '../../assets/ananta.jpg'
import bem from '../../assets/bem.jpg'
import g2x from '../../assets/g2x.jpg'
import jayamas from '../../assets/jayamas.jpg'
import omb from '../../assets/omb.jpg'

const Project = () => {
  const experience = [
    {
      job: 'Back End Engineer',
      company: 'PT Ganda Visi Jayatama',
      position: 'Part Time',
      jobdesc: [
        'Gathering the user requirements',
        'Develop some modules into the system',
        'Develop REST API based on the requirements gathered',
        'Doing optimization of the existing code',
        'Communicate with frontend team while integrating API',
        'Perform application testing based on the existing test cases'
      ],
      duration: 'Jul 2024 - Present',
      image: concise
    },
    {
      job: 'Front End Engineer',
      company: 'PT Ganda Visi Jayatama',
      position: 'Internship',
      jobdesc: [
        'Developed the company\'s boilerplate',
        'Developed the company\'s Human Resource Information System',
        'Communicate with backend team while integrating the API',
        'Conduct discussion with design team about the design system',
        'Perform testing on the project',
        'Doing optimization of the existing code'
      ],
      duration: 'Jan 2024 - Jul 2024',
      image: concise
    },
  ]

  const projects = [
    {
      job: 'Web Developer Coordinator',
      scope: 'Organization Project',
      jobdesc: [
        'Leading a group of 9 members',
        'Developed the website using React JS',
        'Brainstorming the website design and developed it'
      ],
      duration: 'Jul 2023 - Sep 2023',
      image: ananta
    },
    {
      job: 'Web Developer Coordinator',
      scope: 'Organization Project',
      jobdesc: [
        'Leading a group of 9 members',
        'Developed the website using React JS',
        'Developed the open recruitment page, interview   result page, and OMB UMN 2023 main pages'
      ],
      duration: 'Jan 2023 - Sep 2023',
      image: omb
    },
    {
      job: 'Front End Engineer',
      scope: 'Organization Project',
      jobdesc: [
        'Solo project',
        'Developed the website using React JS, bootstrap',
      ],
      duration: 'Jul 2023 - Oct 2023',
      image: bem
    },
    {
      job: 'Front End Engineer',
      scope: 'Organization Project',
      jobdesc: [
        'Working in a team consist of 7 members',
        'Developed the website using Laravel',
        'Developed the term and coditions page'
      ],
      duration: 'Nov 2022 - May 2023',
      image: tvonair
    },
    {
      job: 'Front End Engineer',
      scope: 'Course Project',
      jobdesc: [
        'Working in a team consist of 8 members',
        'Developed the website using Laravel',
        'Developed the some pages of the website'
      ],
      duration: 'Oct 2022 - Dec 2022',
      image: jayamas
    },
    {
      job: 'Front End Engineer',
      scope: 'Organization Project',
      jobdesc: [
        'Leading a group of 5 members',
        'Developed the website using HTML, CSS, JS, PHP',
        'Developed the Webinar Page and Competition Page'
      ],
      duration: 'Jul 2022 - Dec 2022',
      image: g2x
    },
  ]


  return (
    <div className='project-container'>
      <div className='project-header' id='experiences'>
        <div className='project-header-text'> Work Experiences</div>
        {/* <div className='project-header-line'></div> */}
      </div>
      <div className='project-experiences'>
        {experience.map((item, index) => (
          <div className='project-experiences-item' key={index}>
            <div>
              <div className='project-experiences-item-left'>
                <img src={item.image} alt='company' className='project-experiences-item-image' />
              </div>
            </div>
            <div className='project-experiences-item-right'>
              <div className='project-experiences-item-job'>{item.job} - {item.position}</div>
              <div className='project-experiences-item-company'>{item.company}</div>
              <ul className='project-experiences-item-list'>
              {item.jobdesc.map((task, index2) => (
                <li key={index2}>{task}</li>
              ))}
              </ul>
              <div className='project-experiences-item-duration'>{item.duration}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='project-header' id='projects'>
        <div className='project-header-text'>Projects</div>
        {/* <div className='project-header-line'></div> */}
      </div>
      <div className='project-projects'>
        {projects.map((item, index) => (
          <div className='project-projects-item' key={index}>
          <div>
            <div className='project-projects-item-left'>
              <img src={item.image} alt='company' className='project-projects-item-image' />
            </div>
          </div>
          <div className='project-projects-item-right'>
            <div className='project-projects-item-job'>{item.job}</div>
            <div className='project-projects-item-scope'>{item.scope}</div>
            <ul className='project-projects-item-list'>
              {item.jobdesc.map((task, index2) => (
                <li key={index2}>{task}</li>
              ))}
            </ul>
            <div className='project-projects-item-duration'>{item.duration}</div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Project