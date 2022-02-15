import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillProfile,
  AiFillQuestionCircle,
  AiFillRedditCircle,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { FaQuora } from 'react-icons/fa'
import { NEXT_APP_LINK_URLS } from '../../constants/myConstants'
import { windowOpener } from '../../constants/myUtils'
import { SocialIcons } from '../Header/HeaderStyles'

const SocialCollection = () => {
  return (
    <div>
      <SocialIcons
        onClick={(evt) => windowOpener(NEXT_APP_LINK_URLS.LINKEDIN, evt)}
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons
        onClick={(evt) => windowOpener(NEXT_APP_LINK_URLS.GITHUB, evt)}
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons
        onClick={(evt) => windowOpener(NEXT_APP_LINK_URLS.LINKEDIN, evt)}
      >
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>

      <SocialIcons
        onClick={(evt) => windowOpener(NEXT_APP_LINK_URLS.QUORA, evt)}
      >
        <FaQuora size="3rem" />
      </SocialIcons>

      <SocialIcons
        onClick={(evt) => windowOpener(NEXT_APP_LINK_URLS.REDDIT, evt)}
      >
        <AiFillRedditCircle size="3rem" />
      </SocialIcons>
    </div>
  )
}

export default SocialCollection
