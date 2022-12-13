import { getDuplicatesRefinement } from 'libs/utils/zod'
import { identity } from 'lodash-es'
import { z } from 'zod'

export const SocialDraftTypeSchema = z.enum(['Rant', 'Info', 'Target', 'GiveawayAnnouncement', 'GiveawayResult', 'EngagementFarming', 'Inspiration', 'Proclamation']).describe('SocialDraftType')

// export const { Rant, Info, Target, GiveawayAnnouncement, GiveawayResult, EngagementFarming, Inspiration, Proclamation } = SocialDraftTypeSchema.enum

export const SocialDraftTypesSchema = z.array(SocialDraftTypeSchema)
  .superRefine(getDuplicatesRefinement('SocialDraftType', identity))

export type SocialDraftType = z.infer<typeof SocialDraftTypeSchema>

export function parseSocialDraftType(socialDraftType: SocialDraftType): SocialDraftType {
  return SocialDraftTypeSchema.parse(socialDraftType)
}

export function parseSocialDraftTypes(socialDraftTypes: SocialDraftType[]): SocialDraftType[] {
  return SocialDraftTypesSchema.parse(socialDraftTypes)
}
