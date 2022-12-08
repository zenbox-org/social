import { z } from 'zod'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { DomainSchema } from '../../dns/models/Domain'
import { isEqualByD } from 'libs/utils/lodash'

export const SocialNetworkSchema = z.object({
  name: z.string().min(1),
  domain: DomainSchema,
})

export const SocialNetworksSchema = z.array(SocialNetworkSchema)
  .superRefine(getDuplicatesRefinement('SocialNetwork', parseSocialNetworkUid))

export const SocialNetworkUidSchema = SocialNetworkSchema.pick({
  domain: true,
})

export type SocialNetwork = z.infer<typeof SocialNetworkSchema>

export type SocialNetworkUid = z.infer<typeof SocialNetworkUidSchema>

export function parseSocialNetwork(network: SocialNetwork): SocialNetwork {
  return SocialNetworkSchema.parse(network)
}

export function parseSocialNetworks(networks: SocialNetwork[]): SocialNetwork[] {
  return SocialNetworksSchema.parse(networks)
}

export function parseSocialNetworkUid(networkUid: SocialNetworkUid): SocialNetworkUid {
  return SocialNetworkUidSchema.parse(networkUid)
}

export const isEqualSocialNetwork = (a: SocialNetwork) => (b: SocialNetwork) => isEqualByD(a, b, parseSocialNetworkUid)
