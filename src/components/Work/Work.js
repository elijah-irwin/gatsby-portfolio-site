import React from 'react';
import { navigate } from 'gatsby-link';
import { FiArrowRightCircle } from 'react-icons/fi';

// Project Details
import { projects } from './projects-details';

// Components
import Header from '../../theme/Header/Header';
import ProjectCard from '../ProjectCard/ProjectCard';
import SlideIn from '../../animations/SlideIn';

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

const Work = () => {
  return (
    <Wrapper id='work'>
      <SlideIn flex>
        <Header text='.work' />
      </SlideIn>

      <Cards>
        <Row1>
          <SlideIn flex>
            <ProjectCard project={projects.rateMyRotation} />
          </SlideIn>
          <SlideIn flex>
            <ProjectCard project={projects.eComm} />
          </SlideIn>
        </Row1>

        <Row2>
          <SlideIn flex>
            <ProjectCard project={projects.chatApp} />
          </SlideIn>

          <SlideIn flex>
            <ViewAllCard onClick={() => navigate('/projects/')}>
              <div>
                <Top>15+ projects</Top>
                <Name>
                  View The
                  <br /> Archive
                </Name>
              </div>
              <Icon>
                <FiArrowRightCircle />
              </Icon>
            </ViewAllCard>
          </SlideIn>
        </Row2>
      </Cards>
    </Wrapper>
  );
};

export default Work;
