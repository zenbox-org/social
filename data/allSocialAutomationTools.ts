import { parseSocialAutomationToolUid, SocialAutomationTool, SocialAutomationToolSchema } from '../models/SocialAutomationTool'
import { getFinder, getInserter, getName } from 'libs/utils/zod'

export const allSocialAutomationTools: SocialAutomationTool[] = []

export const addSocialAutomationTool = getInserter<SocialAutomationTool>(getName(SocialAutomationToolSchema), SocialAutomationToolSchema, parseSocialAutomationToolUid, allSocialAutomationTools)

export const findSocialAutomationTool = getFinder(parseSocialAutomationToolUid, allSocialAutomationTools)

const HootSuite = addSocialAutomationTool({
  url: 'https://www.hootsuite.com/',
  apiDocsUrl: 'https://platform.hootsuite.com/docs/api/index.html',
  features: [
    'PublishTwitterTweet',
    // 'PublishTwitterThread', - ?
    'PublishInstagramPost',
  ],
  notes: `
    * The following social profile types are supported via the Hootsuite API: Twitter, Facebook, Facebook Page, Facebook Group, LinkedIn, Linkedin Group, Linkedin Company, Instagram
  `,
})

const Ayrshare = addSocialAutomationTool({
  url: 'https://www.ayrshare.com/',
  apiDocsUrl: 'https://docs.ayrshare.com/',
  features: [
    'PublishTwitterTweet',
    'PublishTwitterThread',
    'PublishTelegramMessage',
    'PublishInstagramPost',
    'PublishRedditPost',
  ],
  notes: `
    * No Medium, Discord
  `,
})

const Zapier = addSocialAutomationTool({
  url: 'https://zapier.com/',
  apiDocsUrl: 'https://platform.zapier.com/docs/zapier-intro',
  features: [],
})

// const Publer = addSocialAutomationTool({
//   url: 'https://publer.io/',
//   features: [],
//   notes: `
//     * No API
//   `,
// })
//
// const SocialBee = addSocialAutomationTool({
//   url: 'https://app.socialbee.io/',
//   features: [],
//   notes: `
//     * No API
//   `,
// })
//
// const AgoraPulse = addSocialAutomationTool({
//   url: 'https://www.agorapulse.com/',
//   features: [],
//   notes: `
//     * No API
//   `,
// })
//
// const MissingLettr = addSocialAutomationTool({
//   url: 'https://missinglettr.com/',
//   features: [],
//   notes: `
//     * No API
//   `,
// })
//
// const PromoRepublic = addSocialAutomationTool({
//   url: 'https://promorepublic.com/',
//   features: [],
// })
//
// const Sendible = addSocialAutomationTool({
//   url: 'https://www.sendible.com/',
//   features: [],
// })
//
// const SproutSocial = addSocialAutomationTool({
//   url: 'https://sproutsocial.com/',
//   features: [],
// })
//
// const SocialPilot = addSocialAutomationTool({
//   url: 'https://www.socialpilot.co/',
//   features: [],
// })
