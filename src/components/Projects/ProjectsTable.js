import React from 'react';
import styled from 'styled-components';
import { GitHub, Link } from 'react-feather';
import Fade from 'react-reveal/Fade';

// Hooks
import { usePageWidth } from '../../hooks/usePageWidth';

// Data
import { projectData } from './project-data';

// Styles
import { sizeNumber, breaks } from '../../theme/breakPoints';

const Wrap = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${breaks.mobileL} {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 25px 25px;
  grid-template-columns: 1fr 3fr 1fr;
  font-size: 1.7rem;

  @media ${breaks.mobileL} {
    grid-template-columns: 1fr 3fr 2fr 1fr;
  }

  @media ${breaks.laptop} {
    gap: 25px 25px;
    grid-template-columns: 1fr 3fr 2fr 5fr 1fr;
  }

  & div {
    white-space: nowrap;
  }
`;

const Header = styled.div`
  font-weight: 600;
`;

const Year = styled.div`
  color: ${p => p.theme.color1};
  font-size: 1.3rem;
  font-family: 'Roboto Mono', sans-serif;
`;

const Name = styled.div`
  color: ${p => p.theme.projectTable.name};
  font-size: 1.3rem;
  font-weight: 600;
`;

const MadeAt = styled.div`
  font-size: 1.2rem;
`;

const BuiltWith = styled.div`
  font-size: 1rem;
  display: flex;
`;

const Tool = styled.div`
  &:after {
    font-size: 1.2rem;
    content: '·';
    margin: 6px;
    color: ${p => p.theme.color1};
  }

  &:last-child:after {
    content: '';
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  & a {
    cursor: pointer;
    transition: 0.2s color ease-in;
    margin-right: 15px;
    color: ${p => p.theme.text.color};

    &:hover {
      color: ${p => p.theme.color1};
    }
  }
`;

/*******************************
 * - ProjectsTable.js -
 ******************************/
const ProjectsTable = () => {
  const width = usePageWidth();
  const isLaptop = width >= sizeNumber.laptop;
  const isMobile = width >= sizeNumber.mobileL;

  return (
    <Wrap>
      <Grid>
        {/* <Fade bottom> */}
        <Header>year</Header>
        <Header>name</Header>
        {isMobile && <Header>made at</Header>}
        {isLaptop && <Header>built with</Header>}
        <Header>links</Header>
        {/* </Fade> */}

        {projectData.map(project => (
          <>
            <Year>{project.year}</Year>
            <Name>{project.name}</Name>
            {isMobile && <MadeAt>{project.madeAt}</MadeAt>}
            {isLaptop && (
              <BuiltWith>
                {project.builtWith.map(tool => (
                  <Tool key={tool}>{tool}</Tool>
                ))}
              </BuiltWith>
            )}
            <Links>
              <a
                href={project.links.demo}
                target='_blank'
                rel='noopener noreferrer'>
                <Link />
              </a>
              <a
                href={project.links.github}
                target='_blank'
                rel='noopener noreferrer'>
                <GitHub />
              </a>
            </Links>
          </>
        ))}
      </Grid>
    </Wrap>
  );
};

export default ProjectsTable;
