import { NEXT_APP_LINK_URLS } from './myConstants'

export const windowOpener = (
  url = NEXT_APP_LINK_URLS.ABOUT_ME,
  evt = null,
  target = '_blank',
) => {
  if (evt) {
    evt.preventDefault()
  }

  window.open(url, target, 'noopener,noreferrer')
}
