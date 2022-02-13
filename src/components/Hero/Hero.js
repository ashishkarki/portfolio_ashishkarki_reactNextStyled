import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'
import { NEXT_APP_LINK_URLS } from '../../constants/myConstants'

const Hero = (props) => {
  const onActionBtnClick = (evt) => {
    evt.preventDefault()
    window.open(NEXT_APP_LINK_URLS.ABOUT_ME, '_blank')
  }

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Ashish Karki's Portfolio
        </SectionTitle>

        <SectionText>
          Experienced Software Developer with seven years' experience designing
          and building enterprise level software.
        </SectionText>

        <Button onClick={onActionBtnClick}>Learn More</Button>
      </LeftSection>
    </Section>
  )
}

export default Hero
