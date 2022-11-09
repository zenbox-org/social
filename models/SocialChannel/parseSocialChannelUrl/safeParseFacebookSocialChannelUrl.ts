import { YouTubeChannel } from '../../../data/allSocialChannelTypes'
import { getSocialParserFailureResult, SocialChannelUrlParser } from '../parseSocialChannelUrl'

export const safeParseFacebookSocialChannelUrl: SocialChannelUrlParser = (url) => {
  const [zeroth, first, second] = url.pathname.split('/')
  const isIntegerString = (v: string) => v === parseInt(v).toString()
  if (first === 'groups' && isIntegerString(second)) {
    return {
      success: true,
      data: {
        oid: second,
        slug: second, // TODO: Facebook doesn't provide a slug
        type: YouTubeChannel,
      },
    }
  }
  return getSocialParserFailureResult(url)
}
