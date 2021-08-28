import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageMe = styled.a`
  margin: 30px;
  padding: 15px 40px;
  font-size: 1.6em;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: 0.5px;
  border-radius: 50px;
  background-color: ${p => p.theme.color1};
  color: ${p => p.theme.buttonText};
  box-shadow: 0px 2px 6px rgba(0,0,0,0.25);

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;

  & svg {
    height: 25px;
    width: 25px;
    cursor: pointer;

    &:first-child {
      margin-right: 20px;
    }
  }
`;