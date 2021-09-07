import React from 'react';
import { GitHub, Link } from 'react-feather';

// Styles
import { Wrapper, Top, Links, Desc } from './ProjectCard.styles';

const ProjectCard = ({ project }) => {
  return (
    <Wrapper bgImage={project.bgImage}>
      <Top>
        <h3>{project.title}</h3>
        <Links>
          <a href={project.demo} target='_blank' rel='noopener noreferrer'>
            <Link />
          </a>
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            <GitHub />
          </a>
        </Links>
      </Top>
      <Desc>{project.description}</Desc>
      <div>chips</div>
    </Wrapper>
  );
};

export default ProjectCard;
