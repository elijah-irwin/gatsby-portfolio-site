import React from 'react';
import { GitHub, Link } from 'react-feather';

// Styles
import { Wrapper, Top, Links, Desc, Name } from './ProjectCard.styles';

const ProjectCard = ({ project }) => {
  return (
    <Wrapper>
      <Top>
        <h3>
          {project.tags[0]} / {project.tags[1]}
        </h3>
        <Links>
          {project.github && (
            <a href={project.github} target='_blank' rel='noopener noreferrer'>
              <GitHub />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target='_blank' rel='noopener noreferrer'>
              <Link />
            </a>
          )}
        </Links>
      </Top>
      <Name>{project.title}</Name>
      <Desc>{project.description}</Desc>
    </Wrapper>
  );
};

export default ProjectCard;
