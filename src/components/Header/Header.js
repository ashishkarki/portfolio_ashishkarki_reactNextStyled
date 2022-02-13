import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillProfile } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import {
  NEXT_APP_ELEMENT_STRINGS,
  NEXT_APP_LINK_URLS,
  NEXT_APP_ROUTE_NAMES,
} from '../../constants/myConstants'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href={NEXT_APP_ROUTE_NAMES.HOME}>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <DiCssdeck size="3rem" />
          <span>{NEXT_APP_ELEMENT_STRINGS.PORTFOLIO_BRAND}</span>
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
      <SocialIcons href={NEXT_APP_LINK_URLS.GITHUB}>
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href={NEXT_APP_LINK_URLS.LINKEDIN}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href={NEXT_APP_LINK_URLS.ABOUT_ME}>
        <AiFillProfile size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
