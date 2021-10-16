import React from 'react';
import styled from 'styled-components';
import { FiCode, FiPieChart, FiCircle } from 'react-icons/fi';
import { MdSchool } from 'react-icons/md';

const Wrap = styled.div`
  border-radius: 10px;
  background-color: ${p => p.theme.resume.card};
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.3rem;
  color: ${p => p.theme.text.header};
  margin-bottom: 5px;
`;
const Icon = styled.div`
  color: ${p => p.theme.color1};
  display: flex;
`;

const Location = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-bottom: 15px;

  > :first-child {
    min-width: 50%;
  }

  > :last-child {
    font-family: 'Caveat', sans-serif;
    font-size: 1.2rem;
  }
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Pill = styled.div`
  padding: 2px 10px;
  border-radius: 7px;
  color: ${p => p.theme.white};
  background: ${p => p.theme.color1};
`;

const Bullets = styled.ul`
  list-style-position: inside;
  margin-top: 20px;
`;

const Flex = styled.div`
  display: flex;
  margin: 10px 0px;
  color: ${p => p.theme.text.header};

  :first-child {
    margin-top: 0px;
  }

  :last-child {
    margin-bottom: 0px;
  }
`;

const BulletIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  & svg {
    stroke: ${p => p.theme.color1};
    fill: ${p => p.theme.color1};
  }
`;

const Bullet = ({ children }) => (
  <Flex>
    <BulletIcon>
      <FiCircle size={7} />
    </BulletIcon>
    <div>{children}</div>
  </Flex>
);

const Card = ({ entry }) => {
  const renderIcon = () => {
    if (entry.analyst) return <FiPieChart size={30} />;
    if (entry.edu) return <MdSchool size={30} />;
    return <FiCode size={30} />;
  };

  return (
    <Wrap>
      <Header>
        <div>{entry.title}</div>
        <Icon>{renderIcon()}</Icon>
      </Header>
      <Location>
        <div>{entry.location}</div>
        <div>{entry.duration}</div>
      </Location>
      <Pills>
        {entry.pills.map(pill => (
          <Pill key={pill}>{pill}</Pill>
        ))}
      </Pills>
      {entry.notes && (
        <Bullets>
          {entry.notes.map((note, i) => (
            <Bullet key={i}>{note}</Bullet>
          ))}
        </Bullets>
      )}
    </Wrap>
  );
};

export default Card;
