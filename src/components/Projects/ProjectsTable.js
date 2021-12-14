import React from 'react';
import { GitHub, Link } from 'react-feather';
import Fade from 'react-reveal/Fade';

// Data
import { projectData } from './project-data';

// Styles
import {
  Wrap,
  Grid,
  Header,
  MobileHeader,
  LaptopHeader,
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
  return (
    <Wrap>
      <Fade bottom distance='100px'>
        <Grid>
          <MobileHeader>year</MobileHeader>
          <Header>project</Header>
          <MobileHeader>made at</MobileHeader>
          <LaptopHeader>built with</LaptopHeader>
          <Header>links</Header>

          {projectData.map((project, i) => (
            <React.Fragment key={i}>
              <Year>{project.year}</Year>
              <Name>{project.name}</Name>
              <MadeAt>{project.madeAt}</MadeAt>
              <BuiltWith>
                {project.builtWith.map(tool => (
                  <Tool key={tool}>{tool}</Tool>
                ))}
              </BuiltWith>
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
            </React.Fragment>
          ))}
        </Grid>
      </Fade>
    </Wrap>
  );
};

export default ProjectsTable;
