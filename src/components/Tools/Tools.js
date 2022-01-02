import React from 'react';
import { DiMongodb } from 'react-icons/di';
import {
  SiFirebase,
  SiGatsby,
  SiTypescript,
  SiAdobexd,
  SiRedux,
  SiExpress,
} from 'react-icons/si';
import { FaReact, FaSass, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';

// Components
import Header from '../../theme/Header/Header';
import Tool from '../../theme/Tool/Tool';

// Styles
import { Wrapper, Inline, ResumeBtn } from './Tools.styles';

const Tools = () => {
  const tools = [
    { icon: <FaReact />, text: 'React' },
    { icon: <SiRedux />, text: 'Redux' },

    {
      icon: <SiTypescript style={{ borderRadius: '10%' }} />,
      text: 'Typescript',
    },
    { icon: <FaSass />, text: 'Sass' },
    { icon: <FaNodeJs />, text: 'Node' },
    { icon: <SiExpress />, text: 'Express' },
    { icon: <DiMongodb />, text: 'Mongo' },
    { icon: <SiFirebase />, text: 'Firebase' },
    { icon: <SiGatsby />, text: 'Gatsby' },
    { icon: <FaGitAlt />, text: 'Git' },
    { icon: <FaFigma />, text: 'Figma' },
    { icon: <SiAdobexd />, text: 'Adobe Xd' },
  ];

  return (
    <Wrapper id='skills'>
      <Header text='.skills' />
      <Inline>
        {tools.map(tool => (
          <Tool key={tool.text} icon={tool.icon} text={tool.text} />
        ))}
      </Inline>
      <ResumeBtn to='/resume/'>
        <div>view full resume</div>
      </ResumeBtn>
    </Wrapper>
  );
};

export default Tools;
