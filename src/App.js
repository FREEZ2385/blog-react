import React from 'react';
import logo from './logo.svg';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import './App.css';
import Top from './components/pages/Top';

let options = {
  sectionClassName:     'section',
  anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
  scrollBar:            true,
  scrollingSpeed:       50,
  navigation:           true,
  verticalAlign:        true,
  arrowNavigation:      true,
};

function App() {
  return (
    <div>
        <Header>
          <a href="#sectionOne">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
        </Header>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section"><Top/></Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
  );
}

export default App;
