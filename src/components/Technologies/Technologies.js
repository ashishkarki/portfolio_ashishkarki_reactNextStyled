import React from 'react'
import { DiFirebase, DiJenkins, DiReact } from 'react-icons/di'
import {
  NEXT_APP_ELEMENT_STRINGS,
  NEXT_APP_ROUTE_NAMES,
} from '../../constants/myConstants'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id={NEXT_APP_ROUTE_NAMES.TECHNOLOGIES}>
    <SectionDivider />
    <br />
    <SectionTitle>{NEXT_APP_ELEMENT_STRINGS.TECHNOLOGIES}</SectionTitle>

    <SectionText>
      I have worked in various aspects of software development including but not
      limited to front-end, back-end, planning, documentation, desgin, testing,
      deployment and maintenance.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Angular, JavaScript, TypeScript and Css/Sass/Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Express, Nest.js, Java, Rest & GraphQL APIs and Databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJenkins size='3rem' />
        <ListContainer>
          <ListTitle>Tools/Concepts</ListTitle>
          <ListParagraph>
            Experience with <br />
            MS Azure, AWS, Docker, Jenkins, Git/GitHub, Jira, Testing, Agile,
            Project planning and Team work.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
