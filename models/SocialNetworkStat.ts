import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { SocialNetworkSchema, SocialNetworkUidSchema } from './SocialNetwork'

export const SocialNetworkStatSchema = z.object({
  network: SocialNetworkSchema,
  accountsPerPhoneNumber: z.number().int().positive().optional(),
}).describe('SocialNetworkStat')

export const SocialNetworkStatsSchema = z.array(SocialNetworkStatSchema)
  .superRefine(getDuplicatesRefinement('SocialNetworkStat', parseSocialNetworkStatUid))

export const SocialNetworkStatUidSchema = z.object({
  network: SocialNetworkUidSchema,
})

export type SocialNetworkStat = z.infer<typeof SocialNetworkStatSchema>

export type SocialNetworkStatUid = z.infer<typeof SocialNetworkStatUidSchema>

export function parseSocialNetworkStat(stat: SocialNetworkStat): SocialNetworkStat {
  return SocialNetworkStatSchema.parse(stat)
}

export function parseSocialNetworkStats(stats: SocialNetworkStat[]): SocialNetworkStat[] {
  return SocialNetworkStatsSchema.parse(stats)
}

export function parseSocialNetworkStatUid(statUid: SocialNetworkStatUid): SocialNetworkStatUid {
  return SocialNetworkStatUidSchema.parse(statUid)
}
