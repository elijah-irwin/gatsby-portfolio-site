import React from 'react';
import styled from 'styled-components';
import { GitHub, Link } from 'react-feather';

// Styles
const Item = styled.div`
  display: grid;
  align-items: center;
  gap: 50px;
  grid-template-columns: 1fr 3fr 2fr 5fr 1fr;
  font-size: 1.3rem;
  margin: 25px 0px;

  &:first-child {
    margin-top: 0px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

const Year = styled.div`
  color: ${p => p.theme.color1};
`;

const Name = styled.div`
  color: ${p => p.theme.projectTable.name};
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

/*********************************
 * - ProjectItem.js -
 ********************************/
const ProjectItem = ({ project }) => {
  return (
    <Item>
      <Year>{project.year}</Year>
      <Name>{project.name}</Name>
      <MadeAt>{project.madeAt}</MadeAt>
      <BuiltWith>
        {project.builtWith.map(tool => (
          <Tool key={tool}>{tool}</Tool>
        ))}
      </BuiltWith>
      <Links>
        <a href={project.links.demo} target='_blank' rel='noopener noreferrer'>
          <Link />
        </a>
        <a
          href={project.links.github}
          target='_blank'
          rel='noopener noreferrer'>
          <GitHub />
        </a>
      </Links>
    </Item>
  );
};

export default ProjectItem;
