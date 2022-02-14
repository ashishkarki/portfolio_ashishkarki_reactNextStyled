import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillProfile,
} from 'react-icons/ai'
import { NEXT_APP_LINK_URLS } from '../../constants/myConstants'
import { windowOpener } from '../../constants/myUtils'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +977-9861487950">+977-9861487950</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ashish.karki3@gmail.com">
            ashish.karki3@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Building tools that work for the users and not the other way
            around..
          </Slogan>
        </CompanyContainer>

        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
