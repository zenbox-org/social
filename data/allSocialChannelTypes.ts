import { getFinder, getInserter } from 'zenbox-util/zod'
import { getSocialChannelTypeUid, SocialChannelType, SocialChannelTypeSchema } from '../models/SocialChannelType'
import { Anchor, Discord, Facebook, GitHub, Instagram, LinkedIn, Medium, Reddit, Telegram, TikTok, Twitch, Twitter, Vkontakte, YouTube } from './allSocialNetworks'

export const allSocialChannelTypes: SocialChannelType[] = []

export const addSocialChannelType = getInserter('SocialChannelType', SocialChannelTypeSchema, getSocialChannelTypeUid, allSocialChannelTypes)

export const findSocialChannelType = getFinder(getSocialChannelTypeUid, allSocialChannelTypes)

export const TelegramGroup = addSocialChannelType({
  name: 'group',
  network: Telegram,
  // TODO: Some groups use "https://t.me/joinchat/{{slug}}" pattern
  urlPattern: 'https://t.me/{{slug}}',
})

export const TelegramChannel = addSocialChannelType({
  name: 'channel',
  network: Telegram,
  urlPattern: 'https://t.me/{{slug}}',
})

export const TwitterProfile = addSocialChannelType({
  name: 'profile',
  network: Twitter,
  urlPattern: 'https://twitter.com/{{slug}}',
})

export const YouTubeChannel = addSocialChannelType({
  name: 'channel',
  network: YouTube,
  urlPattern: 'https://www.youtube.com/channel/{{slug}}',
})

export const TwitchProfile = addSocialChannelType({
  name: 'profile',
  network: Twitch,
  urlPattern: 'https://www.twitch.tv/{{slug}}',
})

export const DiscordServer = addSocialChannelType({
  name: 'server',
  network: Discord,
  urlPattern: 'https://discord.gg/{{slug}}',
})

export const RedditSubreddit = addSocialChannelType({
  name: 'subreddit',
  network: Reddit,
  urlPattern: 'https://www.reddit.com/r/{{slug}}',
})

export const MediumProfile = addSocialChannelType({
  name: 'profile',
  network: Medium,
  urlPattern: 'https://{{slug}}.medium.com/',
})

export const MediumPublication = addSocialChannelType({
  name: 'publication',
  network: Medium,
  urlPattern: 'https://medium.com/{{slug}}',
})

export const GitHubProfile = addSocialChannelType({
  name: 'profile',
  network: GitHub,
  urlPattern: 'https://github.com/{{slug}}',
})

export const GitHubOrganization = addSocialChannelType({
  name: 'organization',
  network: GitHub,
  urlPattern: 'https://github.com/{{slug}}',
})

export const AnchorPodcast = addSocialChannelType({
  name: 'podcast',
  network: Anchor,
  urlPattern: 'https://anchor.fm/{{slug}}',
})

export const LinkedInCompany = addSocialChannelType({
  name: 'company',
  network: LinkedIn,
  urlPattern: 'https://www.linkedin.com/company/{{slug}}',
})

export const InstagramProfile = addSocialChannelType({
  name: 'profile',
  network: Instagram,
  urlPattern: 'https://www.instagram.com/{{slug}}/',
})

export const TikTokProfile = addSocialChannelType({
  name: 'profile',
  network: TikTok,
  urlPattern: 'https://tiktok.com/{{slug}}',
})

export const FacebookPage = addSocialChannelType({
  name: 'page',
  network: Facebook,
  urlPattern: 'https://facebook.com/{{slug}}',
})

export const VkontaktePublic = addSocialChannelType({
  name: 'public',
  network: Vkontakte,
  urlPattern: 'https://vk.com/{{slug}}',
})
