import React from 'react';
import styled from 'styled-components';

// Components
import Header from '../../theme/Header/Header';
import ArchiveLinks from '../../theme/ArchiveLinks/ArchiveLinks';
import Card from './Card';
import TechnicalJots from './TechnicalJots';
import SlideIn from '../../animations/SlideIn';

// Context
import { experience, education, technical, soft, interests } from './content';

// Styles
import { breaks } from '../../theme/breakPoints';

const Wrap = styled.div`
  @media ${breaks.tablet} {
    padding-top: 100px;
    padding-bottom: 40px;
  }
`;

const Grid = styled.div`
  margin-top: 50px;
  display: grid;

  @media ${breaks.laptop} {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`;

const SubHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${props => props.theme.text.header};
`;

const MarginBottom = styled.div`
  margin-bottom: 60px;
`;

const SoftPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & div {
    background-color: ${p => p.theme.color1};
    padding: 5px 10px;
    border-radius: 5px;
    color: ${p => p.theme.white};
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const InterestItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 20px;
  font-size: 1.3rem;
  color: ${p => p.theme.text.header};
`;

const Resume = () => {
  return (
    <Wrap>
      <Header text='.archive' />
      <ArchiveLinks />
      <Grid>
        <div style={{ marginBottom: '30px' }}>
          <SlideIn>
            <SubHeader>.experience</SubHeader>
            {experience.map(entry => (
              <Card key={entry.title} entry={entry} />
            ))}
          </SlideIn>
        </div>

        <div>
          <SlideIn delay={600}>
            <MarginBottom>
              <SubHeader>.education</SubHeader>
              <Card entry={education} />
            </MarginBottom>

            <MarginBottom>
              <SubHeader>.technical</SubHeader>
              <TechnicalJots header='code' items={technical.code} />
              <TechnicalJots header='tools' items={technical.tools} />
            </MarginBottom>

            <MarginBottom>
              <SubHeader>.soft</SubHeader>
              <SoftPills>
                {soft.map(item => (
                  <div key={item}>{item}</div>
                ))}
              </SoftPills>
            </MarginBottom>

            <MarginBottom>
              <SubHeader>.interests</SubHeader>
              <InterestItem>
                {interests.map(item => (
                  <div key={item}>{item}</div>
                ))}
              </InterestItem>
            </MarginBottom>
          </SlideIn>
        </div>
      </Grid>
    </Wrap>
  );
};

export default Resume;
