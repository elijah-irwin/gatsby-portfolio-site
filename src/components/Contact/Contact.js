import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// Components
import Header from '../../theme/Header/Header';
import SlideIn from '../../animations/SlideIn';

// Styles
import {
  Wrapper,
  P,
  Options,
  ContactHeader,
  Item,
  WebIcons,
  Icon,
} from './Contact.styles';

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <SlideIn>
        <Header text='.contact' />
        <P>
          Learn about something new in tech recently? Working on a cool project?
          I'd love to hear about it!
        </P>
        <Options>
          <div>
            <ContactHeader>email</ContactHeader>
            <Item href='mailto:irwinmck@gmail.com'>irwinmck@gmail.com</Item>
          </div>
          <div>
            <ContactHeader>phone</ContactHeader>
            <Item href='tel:519-217-4051'>519 217 4051</Item>
          </div>
          <div>
            <ContactHeader>around the web</ContactHeader>
            <WebIcons>
              <Icon>
                <FaLinkedinIn />
              </Icon>
              <Icon>
                <FaGithub />
              </Icon>
            </WebIcons>
          </div>
        </Options>
      </SlideIn>
    </Wrapper>
  );
};

export default Contact;
