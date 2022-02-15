import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'
import { NEXT_APP_LINK_URLS } from '../../constants/myConstants'
import { windowOpener } from '../../constants/myUtils'

const Hero = (props) => {
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

        <Button>
          <a
            href="/files/Resume-AshishKarki-Updated.pdf"
            download="AshishKarki-Resume.pdf"
            alt="Ashish Karki Resume"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
            }}
          >
            Get Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  )
}

export default Hero
