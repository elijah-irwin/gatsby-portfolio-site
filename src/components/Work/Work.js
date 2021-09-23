import React from 'react';

// Project Details
import { projects } from './projects-details';

// Components
import Header from '../../theme/Header/Header';
import ProjectCard from '../ProjectCard/ProjectCard';

// Styles
import { Wrapper, Cards, Row1, Row2, Archive } from './Work.styles';

const Work = () => {
  return (
    <Wrapper>
      <Header text='.work' />
      <Cards>
        <Row1>
          <ProjectCard project={projects.tbd} />
          <ProjectCard project={projects.chatApp} />
        </Row1>
        <Row2>
          <ProjectCard project={projects.eComm} />
          <ProjectCard project={projects.rateMyRotation} />
        </Row2>
      </Cards>
      <Archive>view the archive</Archive>
    </Wrapper>
  );
};

export default Work;
