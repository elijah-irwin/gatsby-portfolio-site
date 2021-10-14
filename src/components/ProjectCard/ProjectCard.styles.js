import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 250px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  background-color: ${p => p.theme.resume.card};
  background-size: cover;
  padding: 40px;
  color: ${p => p.theme.white};
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & h3 {
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${p => p.theme.text.header};
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    text-decoration: none;
    color: ${p => (p.dark ? p.theme.text.color : p.theme.white)};
    margin-left: 20px;
  }

  & svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
    color: ${p => p.theme.color1};
  }
`;

export const Name = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: ${p => p.theme.text.header};
`;

export const Desc = styled.div`
  font-size: 1.1em;
  padding-top: 15px;
  color: ${p => p.theme.text.color};
`;

export const Chips = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
`;

export const Chip = styled.div`
  padding: 5px 12px;
  font-weight: 600;
  border-radius: 7px;
  background: ${p => p.theme.color1};
  margin-right: 10px;
  letter-spacing: 0.5px;
`;
