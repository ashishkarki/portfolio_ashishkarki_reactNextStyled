import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillProfile } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import {
  NEXT_APP_ELEMENT_STRINGS,
  NEXT_APP_LINK_URLS,
  NEXT_APP_ROUTE_NAMES,
} from '../../constants/myConstants'
import { windowOpener } from '../../constants/myUtils'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles'

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href={NEXT_APP_ROUTE_NAMES.HOME}>
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '17px',
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>{NEXT_APP_ELEMENT_STRINGS.PORTFOLIO_BRAND}</Span>
          </a>
        </Link>
      </Div1>

      <Div2>
        <li>
          <Link href={NEXT_APP_ROUTE_NAMES.PROJECTS}>
            <NavLink>{NEXT_APP_ELEMENT_STRINGS.PROJECTS}</NavLink>
          </Link>
        </li>

        <li>
          <Link href={NEXT_APP_ROUTE_NAMES.PROJECTS}>
            <NavLink>{NEXT_APP_ELEMENT_STRINGS.TECHNOLOGIES}</NavLink>
          </Link>
        </li>

        <li>
          <Link href={NEXT_APP_ROUTE_NAMES.PROJECTS}>
            <NavLink>{NEXT_APP_ELEMENT_STRINGS.ABOUT}</NavLink>
          </Link>
        </li>
      </Div2>

      <Div3>
        <SocialIcons
          onClick={(evt) => windowOpener(NEXT_APP_LINK_URLS.GITHUB, evt)}
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons
          onClick={(evt) => windowOpener(NEXT_APP_LINK_URLS.LINKEDIN, evt)}
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons
          onClick={(evt) => windowOpener(NEXT_APP_LINK_URLS.ABOUT_ME, evt)}
        >
          <AiFillProfile size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  )
}

export default Header
