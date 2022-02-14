import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 130, text: 'GitHub Projects' },
  { number: 7, text: 'Years Professional Work Experience' },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>

    <Boxes>
      {data.map((card, idx) => (
        <Box key={idx}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
