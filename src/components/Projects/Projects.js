import React from 'react';
import styled from 'styled-components';

// Components
import Header from '../../theme/Header/Header';
import ArchiveLinks from '../../theme/ArchiveLinks/ArchiveLinks';

// Styles
const Wrap = styled.div`
  padding-top: 100px;
`;

const Projects = () => {
  return (
    <Wrap>
      <Header text='.archive' />
      <ArchiveLinks />
    </Wrap>
  );
};

export default Projects;
