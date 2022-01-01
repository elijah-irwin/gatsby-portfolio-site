import React from 'react';
import styled from 'styled-components';
import { FiCircle } from 'react-icons/fi';

const Wrap = styled.div`
  margin-bottom: 20px;
`;

const Header = styled.div`
  color: ${p => p.theme.color1};
  font-size: 1.8rem;
  margin-bottom: 5px;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.8px;
  color: ${p => p.theme.text.color};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px;

  & svg {
    stroke: ${p => p.theme.color1};
    fill: ${p => p.theme.color1};
  }
`;

// const Span = styled.span`
//   color: ${p => p.theme.color1};
// `;

const TechnicalJots = ({ header, items }) => {
  return (
    <Wrap>
      <Header>{header}</Header>
      <Items>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <Item>{item}</Item>
            {i !== items.length - 1 && (
              <Icon>
                <FiCircle size={5} />
              </Icon>
            )}
          </React.Fragment>
        ))}
        {/* {items.map((item, i) => (
          <React.Fragment key={i}>
            <Item>
              {item}
              {i !== items.length - 1 && <Span>,&nbsp;</Span>}
            </Item>
          </React.Fragment>
        ))} */}
      </Items>
    </Wrap>
  );
};

export default TechnicalJots;
