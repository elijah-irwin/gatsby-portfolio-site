import React from 'react';
import { GitHub, Link } from 'react-feather';
import Fade from 'react-reveal/Fade';

// Hooks
import { usePageWidth } from '../../hooks/usePageWidth';

// Data
import { projectData } from './project-data';

// Styles
import { sizeNumber } from '../../theme/breakPoints';
import {
  Wrap,
  Grid,
  Header,
  Year,
  Name,
  MadeAt,
  BuiltWith,
  Tool,
  Links,
} from './ProjectsTable.styles';

/*******************************
 * - ProjectsTable.js -
 ******************************/
const ProjectsTable = () => {
  const width = usePageWidth();
  const isLaptop = width >= sizeNumber.laptop;
  const isMobile = width >= sizeNumber.mobileL;

  return (
    <Wrap>
      <Fade bottom distance='100px'>
        <Grid>
          <Header>year</Header>
          <Header>project</Header>
          {isMobile && <Header>made at</Header>}
          {isLaptop && <Header>built with</Header>}
          <Header>links</Header>

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
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <GitHub />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Link />
                  </a>
                )}
              </Links>
            </>
          ))}
        </Grid>
      </Fade>
    </Wrap>
  );
};

export default ProjectsTable;
