import React from 'react';

// Project Details
import { projects } from './projects-details';

// Components
import Header from '../../theme/Header/Header';
import ProjectCard from '../ProjectCard/ProjectCard';
import CustomLink from '../../theme/CustomLink/CustomLink';

// Hooks
import { usePageWidth } from '../../hooks/usePageWidth';

// Styles
import { Wrapper, Cards, Row1, Row2, Archive } from './Work.styles';
import { sizeNumber } from '../../theme/breakPoints';

const Work = () => {
  const width = usePageWidth();

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
          {width > sizeNumber.tablet && (
            <ProjectCard project={projects.rateMyRotation} />
          )}
        </Row2>
      </Cards>
      <Archive>
        <CustomLink to='/projects'>view the archive</CustomLink>
      </Archive>
    </Wrapper>
  );
};

export default Work;
