import { getFinder, getInserter } from '../../utils/zod'
import { parseSocialNetworkUid, SocialNetwork, SocialNetworkSchema } from '../models/SocialNetwork'

export const allSocialNetworks: SocialNetwork[] = []

export const addSocialNetwork = getInserter('SocialNetwork', SocialNetworkSchema, parseSocialNetworkUid, allSocialNetworks)

export const findSocialNetwork = getFinder(parseSocialNetworkUid, allSocialNetworks)

export const Facebook = addSocialNetwork({
  name: 'Facebook',
  domain: 'facebook.com',
})

export const Twitter = addSocialNetwork({
  name: 'Twitter',
  domain: 'twitter.com',
})

export const Telegram = addSocialNetwork({
  name: 'Telegram',
  domain: 'telegram.org',
})

export const Discord = addSocialNetwork({
  name: 'Discord',
  domain: 'discord.com',
})

export const Instagram = addSocialNetwork({
  name: 'Instagram',
  domain: 'instagram.com',
})

export const Pinterest = addSocialNetwork({
  name: 'Pinterest',
  domain: 'pinterest.com',
})

export const YouTube = addSocialNetwork({
  name: 'YouTube',
  domain: 'youtube.com',
})

export const TikTok = addSocialNetwork({
  name: 'TikTok',
  domain: 'tiktok.com',
})

export const Twitch = addSocialNetwork({
  name: 'Twitch',
  domain: 'twitch.tv',
})

export const Reddit = addSocialNetwork({
  name: 'Reddit',
  domain: 'reddit.com',
})

export const Medium = addSocialNetwork({
  name: 'Medium',
  domain: 'medium.com',
})

export const GitHub = addSocialNetwork({
  name: 'GitHub',
  domain: 'github.com',
})

export const LinkedIn = addSocialNetwork({
  name: 'LinkedIn',
  domain: 'linkedin.com',
})

export const Anchor = addSocialNetwork({
  name: 'Anchor',
  domain: 'anchor.fm',
})

export const Vkontakte = addSocialNetwork({
  name: 'Vkontakte',
  domain: 'vk.com',
})

export const Patreon = addSocialNetwork({
  name: 'Patreon',
  domain: 'patreon.com',
})

export const Snapchat = addSocialNetwork({
  name: 'Snapchat',
  domain: 'snapchat.com',
})
