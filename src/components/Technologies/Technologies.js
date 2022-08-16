import React from 'react';
import { DiFirebase, DiMongodb, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  {/* <br /> */}
    <SectionText>
      I'm familiar with many tools and technologies related to web development and software engineering. Databases: MySQL and MongoDB + MySQL Workbench. API testing: Postman, Thunder Client. IDE's: VSCode, Spring Boot, Xcode. Product: Balsamiq, Figma.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js | NPM | Bootstrap <br />
            Sass | Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End </ListTitle>
          <ListParagraph>
            Experience with: <br />
            Node.js | Flask | Django <br />
            Spring Boot 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with: <br />
            MySQL | MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      
    </List>
 </Section>

);

export default Technologies;
