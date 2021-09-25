import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import {
  FaReact,
  FaSass,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaAdobe,
} from 'react-icons/fa';

// Components
import Header from '../../theme/Header/Header';
import Tool from '../../theme/Tool/Tool';

// Styles
import { Wrapper, Inline } from './Tools.styles';

const Tools = () => {
  const tools = [
    { icon: <FaReact />, text: 'React' },
    { icon: <FaSass />, text: 'Sass' },
    { icon: <FaJsSquare />, text: 'Javascript' },
    { icon: <FaNodeJs />, text: 'Node' },
    { icon: <DiMongodb />, text: 'Mongo' },
    { icon: <SiFirebase />, text: 'Firebase' },
    { icon: <FaGitAlt />, text: 'Git' },
    { icon: <FaFigma />, text: 'Figma' },
    { icon: <FaAdobe />, text: 'Adobe XD' },
  ];

  return (
    <Wrapper>
      <Header text='.tools' />
      <Inline>
        {tools.map(tool => (
          <Tool key={tool.text} icon={tool.icon} text={tool.text} />
        ))}
      </Inline>
    </Wrapper>
  );
};

export default Tools;
