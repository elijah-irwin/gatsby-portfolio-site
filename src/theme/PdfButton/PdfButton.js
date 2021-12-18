import React from 'react';
import styled from 'styled-components';
import { FiFileText } from 'react-icons/fi';
import cv from '../../assets/mirwin-resume.pdf';

const Pdf = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${p => p.theme.white};
  padding: 8px 15px;
  border-radius: 10px;
  background-color: ${p => p.theme.color1};
  text-transform: lowercase;
  font-weight: 600;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px);
  }

  & div {
    margin-right: 8px;
  }
`;

const PdfButton = ({ ...rest }) => {
  return (
    <Pdf href={cv} target='_blank' rel='noopener noreferrer' {...rest}>
      <div>view as pdf</div>
      <FiFileText />
    </Pdf>
  );
};

export default PdfButton;
