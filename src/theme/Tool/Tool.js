import React from 'react';
import styled from 'styled-components';

const Tool = ({ icon, text }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Icon = styled.div`
    margin-bottom: 15px;

    & svg {
      fill: ${p => p.theme.color1};
      height: 80px;
      width: 80px;
    }
  `;

  const Text = styled.div`
    font-weight: bold;
    font-family: 'Caveat', cursive;
    font-size: 1.5rem;
  `;

  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Tool;
