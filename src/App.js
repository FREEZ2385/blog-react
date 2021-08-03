import React from 'react';

import { SectionsContainer, Section } from 'react-fullpage';
import './App.css';
import Top from './components/pages/Top';
import MainHeader from './components/organisms/MainHeader';

let options = {
  sectionClassName: 'section',
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
  scrollBar: true,
  scrollingSpeed: 50,
  navigation: true,
  verticalAlign: true,
  arrowNavigation: true,
};

function App() {
  return (
    <div>
      <MainHeader />
      <SectionsContainer className="container" {...options}>
        <Section>
          <Top />
        </Section>
        <Section color="#A7DBD8">Page 2</Section>
        <Section color="#E0E4CC">Page 3</Section>
        <Section>Page 4</Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
