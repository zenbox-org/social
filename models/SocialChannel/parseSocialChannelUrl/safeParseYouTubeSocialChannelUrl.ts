import { YouTubeChannel } from '../../../data/allSocialChannelTypes'
import { getSocialParserFailureResult, SocialChannelUrlParser } from '../parseSocialChannelUrl'

export const safeParseYouTubeSocialChannelUrl: SocialChannelUrlParser = (url) => {
  const [zeroth, first, second] = url.pathname.split('/')
  if (first === 'c' || first === 'channel') {
    return {
      success: true,
      data: {
        slug: second,
        type: YouTubeChannel,
      },
    }
  }
  return getSocialParserFailureResult(url)
}
