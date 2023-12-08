import React from 'react';
//import FontAwesomeIcon from './FontAwesomeIcon';
//import { config } from '@fortawesome/fontawesome-svg-core';
//import '@fortawesome/fontawesome-svg-core/styles.css';
//import { faGithub } from '@fortawesome/free-brands-svg-icons';
//import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
//config.autoAddCss = false;
const FinalFooter = () => {
  const teamMembers = [
    { name: 'Noor Alrai', github: 'https://github.com/Noor-Alrai', linkedin: 'https://www.linkedin.com/in/noor-alrai/' },
    { name: 'Lubna Abdalkhaliq', github: 'teammate1-github-link', linkedin: 'teammate1-linkedin-link' },
    { name: 'Wajd Al-Kayyali', github: 'teammate2-github-link', linkedin: 'teammate2-linkedin-link' },
    { name: 'Lin Daaboul', github: 'teammate2-github-link', linkedin: 'teammate2-linkedin-link' },

  ];

  return (
    <footer>
      <div className="bg-teal-500" style={{ position:"fixed", bottom:1 , width:"100vw"}}>
        <ul style={{display:"flex", flexWrap:"wrap", padding:"16px"}}>
          {teamMembers.map((member, index) => (
            <li key={index} style={{width:"25%"}}>
              {member.name} -{' '}
              <a href={member.github} target="_blank" rel="noopener noreferrer">
               GitHub
              </a>{' '}
              |{' '}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">

               LinkedIn
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default FinalFooter;