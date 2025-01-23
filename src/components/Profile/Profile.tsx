import './Profile.scss'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import profile from '../../assets/profile.jpg'
import cv from '../../assets/FARION TEKKRY-resume.pdf'
import PhoneSvg from '../../icons/Phone'
import EmailSvg from '../../icons/Email'
import LocationSvg from '../../icons/Location'

const Profile = () => {
  const currTheme = localStorage.getItem('default-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

  const socialData = [
    {
      src: instagram,
      link: 'https://www.instagram.com/farionwang/'
    },
    {
      src: linkedin,
      link: 'https://www.linkedin.com/in/farion-tekkry-663220239/'
    }
  ]

  const contactData = [
    {
      src: <PhoneSvg className='profile-contact-item-left-image' fill={currTheme === 'light' ? '' : 'white'} />,
      header: 'Phone',
      body: '+62 853 8385 8390'
    },
    {
      src: <EmailSvg className='profile-contact-item-left-image' fill={currTheme === 'light' ? '' : 'white'} />,
      header: 'Email',
      body: 'farion2803@gmail.com'
    },
    {
      src: <LocationSvg className='profile-contact-item-left-image' fill={currTheme === 'light' ? '' : 'white'} />,
      header: 'Location',
      body: 'Tangerang'
    }
  ]

  return (
    <div className='profile-container'>
      <img src={profile} alt='Profile Picture' className='profile-photo' />
      <div className='profile-name'>Farion Tekkry</div>
      <div className='profile-job'>Web Developer</div>
      <div className='profile-social'>
        {socialData.map((item, index) => (
          <a key={index} className='profile-social-item' href={item.link} target='__blank'>
            <img src={item.src} alt='Social' className='profile-social-item-image' /> 
            {/* {item.src} */}
          </a>
        ))}
      </div>
      <div className='profile-contact'>
        {contactData.map((item, index) => (
          <div key={index} className='profile-contact-item'>
            <div className='profile-contact-item-left'>
              {/* <img src={item.src} className='profile-contact-item-left-image' />  */}
              {item.src}
            </div>
            <div className='profile-contact-item-right'>
              <div className='profile-contact-item-right-header'>{item.header}</div>
              <div className='profile-contact-item-right-body'>{item.body}</div>
            </div>
          </div>
        ))}
      </div>
      <a href={cv} download className='profile-download'>Download CV</a>
    </div>
  )
}

export default Profile