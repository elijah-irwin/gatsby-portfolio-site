import React from 'react';
import { GitHub, Link } from 'react-feather';

// Styles
import { Wrapper, Top, Links, Desc, Chips, Chip } from './ProjectCard.styles';

const ProjectCard = ({ project }) => {
  return (
    <Wrapper bgImage={project.bgImage}>
      <Top>
        <h3>{project.title}</h3>
        <Links>
          {project.demo && (
            <a href={project.demo} target='_blank' rel='noopener noreferrer'>
              <Link />
            </a>
          )}
          {project.github && (
            <a href={project.github} target='_blank' rel='noopener noreferrer'>
              <GitHub />
            </a>
          )}
        </Links>
      </Top>
      <Desc>{project.description}</Desc>
      <Chips>
        {project.tags.map(tag => (
          <Chip key={tag.name}>{tag}</Chip>
        ))}
      </Chips>
    </Wrapper>
  );
};

export default ProjectCard;
