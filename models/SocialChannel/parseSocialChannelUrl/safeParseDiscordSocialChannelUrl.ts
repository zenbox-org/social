import { isUndefined } from 'lodash-es'
import { isDiscordInviteId } from '../../../../discord/models/DiscordInviteUrl'
import { DiscordServer } from '../../../data/allSocialChannelTypes'
import { getSocialParserFailureResult, SocialChannelUrlParser } from '../parseSocialChannelUrl'

/**
 * TODO: This is not a channel url parser, this is an invite parser
 */
export const safeParseDiscordSocialChannelUrl: SocialChannelUrlParser = (url) => {
  const [zeroth, first, second] = url.pathname.split('/')
  if (first === 'invite' && isDiscordInviteId(second)) {
    return {
      success: true,
      data: {
        oid: second,
        slug: second, // TODO: Discord doesn't provide a slug
        type: DiscordServer,
      },
    }
  }
  if (isDiscordInviteId(first) && isUndefined(second)) {
    return {
      success: true,
      data: {
        oid: first,
        slug: first, // TODO: Discord doesn't provide a slug
        type: DiscordServer,
      },
    }
  }
  return getSocialParserFailureResult(url)
}
