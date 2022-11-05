import { ensureGet } from 'zenbox-util/ensure'
import { getBaseDomainFromHostname } from 'zenbox-util/url'
import { ZodError, ZodIssueCode } from 'zod'
import { SafeParseError, SafeParseReturnType } from 'zod/lib/types'
import { toUnsafeParse } from '../../../../utils/zod/toUnsafeParse'
import { DiscordServer, InstagramProfile, TelegramChannel, TikTokProfile, TwitchProfile, TwitterProfile, VkontaktePublic } from '../../data/allSocialChannelTypes'
import { SocialChannelType } from '../SocialChannelType'
import { getUsernameFirst_safeParseDefaultSocialChannelUrl } from './parseSocialChannelUrl/getUsernameFirst_safeParseDefaultSocialChannelUrl'
import { safeParseYouTubeSocialChannelUrl } from './parseSocialChannelUrl/safeParseYouTubeSocialChannelUrl'

export interface SocialChannelInfo {
  oid?: string
  slug: string
  type: SocialChannelType
}

export type SocialChannelUrlParser = (url: URL) => SafeParseReturnType<URL, SocialChannelInfo>

export type SocialChannelUrlParsers = Record<string, SocialChannelUrlParser>

export const get_safeParseSocialChannelUrl = (parsers: SocialChannelUrlParsers) => (url: string) => {
  const $url = new URL(url)
  const parser = ensureGet(parsers, getBaseDomainFromHostname($url.hostname))
  return parser($url)
}

/**
 * TODO: Move to allSocialNetworks?
 */
export const safeParseSocialChannelUrlRecord: SocialChannelUrlParsers = {
  'youtube.com': safeParseYouTubeSocialChannelUrl,
  'instagram.com': getUsernameFirst_safeParseDefaultSocialChannelUrl(InstagramProfile),
  'tiktok.com': getUsernameFirst_safeParseDefaultSocialChannelUrl(TikTokProfile),
  'twitter.com': getUsernameFirst_safeParseDefaultSocialChannelUrl(TwitterProfile),
  'twitch.tv': getUsernameFirst_safeParseDefaultSocialChannelUrl(TwitchProfile),
  't.me': getUsernameFirst_safeParseDefaultSocialChannelUrl(TelegramChannel), // NOTE: some urls that match the pattern https://t.me/{{first}} are TelegramGroup, or just Telegram users
  'vk.com': getUsernameFirst_safeParseDefaultSocialChannelUrl(VkontaktePublic),
  'discord.gg': getUsernameFirst_safeParseDefaultSocialChannelUrl(DiscordServer), // NOTE: it's an invite url, not a server url
}

export const safeParseSocialChannelUrl = get_safeParseSocialChannelUrl(safeParseSocialChannelUrlRecord)

export const parseSocialChannelUrl = toUnsafeParse(safeParseSocialChannelUrl)

export function getSocialParserFailureResult(url: URL): SafeParseError<URL> {
  return {
    success: false,
    error: new ZodError([
      {
        code: ZodIssueCode.custom,
        path: [],
        message: 'Cannot parse a social channel url',
        params: { url: url.toString() },
      },
    ]),
  }
}
