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
import SocialCollection from '../SocialCollection/SocialCollection'

import {
  Anchor,
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
          <Anchor href={`#${NEXT_APP_ROUTE_NAMES.HOME}`}>
            {/* <DiCssdeck size="3rem" /> */}
            <Span>{NEXT_APP_ELEMENT_STRINGS.PORTFOLIO_BRAND}</Span>
          </Anchor>
        </Link>
      </Div1>

      <Div2>
        <li>
          <Link href={`#${NEXT_APP_ROUTE_NAMES.PROJECTS}`}>
            <NavLink>{NEXT_APP_ELEMENT_STRINGS.PROJECTS}</NavLink>
          </Link>
        </li>

        <li>
          <Link href={`#${NEXT_APP_ROUTE_NAMES.TECHNOLOGIES}`}>
            <NavLink>{NEXT_APP_ELEMENT_STRINGS.TECHNOLOGIES}</NavLink>
          </Link>
        </li>

        <li>
          <Link href={`#${NEXT_APP_ROUTE_NAMES.ABOUT}`}>
            <NavLink>{NEXT_APP_ELEMENT_STRINGS.ABOUT}</NavLink>
          </Link>
        </li>

        <li>
          <Link href={`#${NEXT_APP_ROUTE_NAMES.CONTACT}`}>
            <NavLink>{NEXT_APP_ELEMENT_STRINGS.CONTACT}</NavLink>
          </Link>
        </li>
      </Div2>

      <Div3>
        <SocialCollection />
      </Div3>
    </Container>
  )
}

export default Header
