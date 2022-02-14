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
import { windowOpener } from '../../constants/myUtils'

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

            <CardInfo>{project.description}</CardInfo>

            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, idx) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
              </TagList>
            </div>

            <UtilityList>
              <ExternalLinks
                onClick={(evt) => windowOpener(project.source, evt)}
              >
                Code
              </ExternalLinks>
              <ExternalLinks
                onClick={(evt) => windowOpener(project.visit, evt)}
              >
                Demo
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  )
}

export default Projects
