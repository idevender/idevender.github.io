import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hello,
          <br />
          I am <span className='about__name'>{name}.</span>
        </h1>

      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <div className='resume-container'>
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          </div>
        )}

        {social && (
          <div className='social-container'>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        )}
      </div>

    </div>
  )
}

export default About
