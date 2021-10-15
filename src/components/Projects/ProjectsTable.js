import React from 'react';
import styled from 'styled-components';
import { GitHub, Link } from 'react-feather';
import Fade from 'react-reveal/Fade';

// Data
import { projectData } from './project-data';

// Styles
const Wrap = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  gap: 25px 50px;
  grid-template-columns: 1fr 3fr 2fr 5fr 1fr;
  font-size: 1.7rem;

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
  return (
    <Wrap>
      <Grid>
        <Fade bottom>
          <Header>year</Header>
          <Header>name</Header>
          <Header>made at</Header>
          <Header>built with</Header>
          <Header>links</Header>
        </Fade>

        {projectData.map(project => (
          <Fade bottom delay={800}>
            <Year>{project.year}</Year>
            <Name>{project.name}</Name>
            <MadeAt>{project.madeAt}</MadeAt>
            <BuiltWith>
              {project.builtWith.map(tool => (
                <Tool key={tool}>{tool}</Tool>
              ))}
            </BuiltWith>
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
          </Fade>
        ))}
      </Grid>
    </Wrap>
  );
};

export default ProjectsTable;
