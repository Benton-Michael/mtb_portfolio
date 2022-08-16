import React from 'react';
// the application-wide styled components
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
// hero specific styled component
import { LeftSection } from './HeroStyles';
import { useRouter } from 'next/router';

const Hero = (props) => (
  


  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, I'm Michael! <br />
        Welcome to my Portfolio!
      </SectionTitle>
      <SectionText>
        I'm a full-stack developer. I graduated from Coding Dojo and hold a BS in Computer Science and Political Science, as well as an MSc in International Development.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mbenton002@gmail.com'}>
      
        Get in touch
      </Button>


    </LeftSection>


  </Section>



);

export default Hero;