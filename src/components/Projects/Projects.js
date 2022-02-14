import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'
import { NEXT_APP_ELEMENT_STRINGS } from '../../constants/myConstants'

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionDivider />

      <SectionTitle>{NEXT_APP_ELEMENT_STRINGS.PROJECTS}</SectionTitle>

      <GridContainer>
        {projects.map((project, index) => (
          <BlogCard key={`${project.id}-${index}`}>
            <Img src={project.image} alt={project.title} />
            <TitleContent>
              <HeaderThree title>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>

            <CardInfo>Description</CardInfo>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  )
}

export default Projects
