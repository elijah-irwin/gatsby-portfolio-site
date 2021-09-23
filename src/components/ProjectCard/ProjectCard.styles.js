import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 275px;
  border-radius: 20px;
  box-shadow: ${p => p.theme.shadow};
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${p => p.bgImage}) center no-repeat;
  background-size: cover;
  padding: 15px 20px;
  color: ${p => p.theme.white};
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;

  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;
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
  }
`;

export const Desc = styled.div`
  font-size: 1.1em;
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
`;
