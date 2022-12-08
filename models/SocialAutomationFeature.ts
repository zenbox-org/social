import { z } from 'zod'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { identity } from 'lodash-es'

export const SocialAutomationFeatureSchema = z.enum([
  'PublishTwitterTweet',
  'PublishTwitterThread',
  'PublishTelegramMessage',
  'PublishInstagramPost',
  'PublishDiscordPost',
  'PublishRedditPost',
  'PublishMediumArticle',
]).describe('SocialAutomationFeature')

export const SocialAutomationFeaturesSchema = z.array(SocialAutomationFeatureSchema)
  .superRefine(getDuplicatesRefinement('SocialAutomationFeature', identity))

export type SocialAutomationFeature = z.infer<typeof SocialAutomationFeatureSchema>

export function parseSocialAutomationFeature(feature: SocialAutomationFeature): SocialAutomationFeature {
  return SocialAutomationFeatureSchema.parse(feature)
}

export function parseSocialAutomationFeatures(features: SocialAutomationFeature[]): SocialAutomationFeature[] {
  return SocialAutomationFeaturesSchema.parse(features)
}

export const isEqualSocialAutomationFeature = (a: SocialAutomationFeature) => (b: SocialAutomationFeature) => a === b
