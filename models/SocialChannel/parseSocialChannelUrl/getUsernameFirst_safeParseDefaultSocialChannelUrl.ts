import { SocialChannelType } from '../../SocialChannelType'
import { cleanUsername } from '../cleanUsername'
import { getSocialParserFailureResult, SocialChannelUrlParser } from '../parseSocialChannelUrl'

export const getUsernameFirst_safeParseDefaultSocialChannelUrl = (type: SocialChannelType): SocialChannelUrlParser => (url) => {
  const [zeroth, first] = url.pathname.split('/')
  const username = cleanUsername(first ?? '')
  if (username) {
    return {
      success: true,
      data: {
        slug: username,
        type,
      },
    }
  }
  return getSocialParserFailureResult(url)
}
