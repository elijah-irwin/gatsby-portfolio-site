import React from 'react';
import styled from 'styled-components';

// Components
import Header from '../../theme/Header/Header';
import ArchiveLinks from '../../theme/ArchiveLinks/ArchiveLinks';
import ProjectsTable from './ProjectsTable';

// Styles
const Wrap = styled.div`
  padding-top: 100px;
`;

/******************************
 * - Projects.js -
 *****************************/
const Projects = () => {
  return (
    <Wrap>
      <Header text='.archive' />
      <ArchiveLinks />
      <ProjectsTable />
    </Wrap>
  );
};

export default Projects;
