import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

// Project Details
import { projects } from './projects-details';

// Components
import Header from '../../theme/Header/Header';
import ProjectCard from '../ProjectCard/ProjectCard';

// Hooks
import { usePageWidth } from '../../hooks/usePageWidth';

// Styles
import {
  Wrapper,
  Cards,
  Row1,
  Row2,
  ViewAllCard,
  Top,
  Name,
  Icon,
} from './Work.styles';
import { sizeNumber } from '../../theme/breakPoints';

const Work = () => {
  const width = usePageWidth();

  return (
    <Wrapper id='work'>
      <Header text='.work' />
      <Cards>
        <Row1>
          <ProjectCard project={projects.rateMyRotation} />
          <ProjectCard project={projects.chatApp} />
        </Row1>
        <Row2>
          {width > sizeNumber.tablet && (
            <ProjectCard project={projects.eComm} />
          )}
          <ViewAllCard>
            <div>
              <Top>10+ projects</Top>
              <Name>
                View The
                <br /> Archive
              </Name>
            </div>
            <Icon>
              <FiArrowRightCircle />
            </Icon>
          </ViewAllCard>
        </Row2>
      </Cards>
    </Wrapper>
  );
};

export default Work;
