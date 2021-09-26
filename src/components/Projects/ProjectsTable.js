import React from 'react';
import styled from 'styled-components';

// Data
import { projectData } from './project-data';

// Components
import ProjectItem from './ProjectItem';

// Styles
const Wrap = styled.div`
  margin-top: 60px;
`;

const Headers = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 3fr 2fr 5fr 1fr;
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 25px;
  margin-right: 0.5rem;

  & div {
    white-space: nowrap;
  }
`;

const Projects = styled.div`
  max-height: 50vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.main.bgColor};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.sidenav.bgColor};
    border-radius: 5px;
  }
`;

/*******************************
 * - ProjectsTable.js -
 ******************************/
const ProjectsTable = () => {
  return (
    <Wrap>
      <Headers>
        <div>year</div>
        <div>name</div>
        <div>made at</div>
        <div>built with</div>
        <div>links</div>
      </Headers>
      <Projects>
        {projectData.map(project => (
          <ProjectItem project={project} key={project.name} />
        ))}
      </Projects>
    </Wrap>
  );
};

export default ProjectsTable;
