import React from 'react';
import { navigate } from 'gatsby-link';
import { FiArrowRightCircle } from 'react-icons/fi';

// Project Details
import { projects } from './projects-details';

// Components
import Header from '../../theme/Header/Header';
import ProjectCard from '../ProjectCard/ProjectCard';
import SlideIn from '../../animations/SlideIn';

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
  const isTablet = width > sizeNumber.tablet;
  const isDesktop = width > sizeNumber.laptop;

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
          <SlideIn delay={isDesktop ? 300 : 0} flex>
            <ProjectCard project={projects.chatApp} />
          </SlideIn>
        </Row1>

        <Row2>
          {isTablet && (
            <SlideIn flex>
              <ProjectCard project={projects.eComm} />
            </SlideIn>
          )}

          <SlideIn delay={isDesktop ? 300 : 0} flex>
            <ViewAllCard onClick={() => navigate('/projects')}>
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
          </SlideIn>
        </Row2>
      </Cards>
    </Wrapper>
  );
};

export default Work;
