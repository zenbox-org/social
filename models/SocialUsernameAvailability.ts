import { z } from 'zod'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { SocialUsername, SocialUsernameSchema } from './SocialUsername'
import { SocialNetwork, SocialNetworkSchema } from './SocialNetwork'

export const SocialUsernameAvailabilitySchema = z.object({
  network: SocialNetworkSchema,
  username: SocialUsernameSchema,
  isAvailable: z.boolean(),
  checkedAt: z.date(),
}).describe('SocialUsernameAvailability')

export const SocialUsernameAvailabilitiesSchema = z.array(SocialUsernameAvailabilitySchema)
  .superRefine(getDuplicatesRefinement('SocialUsernameAvailability', parseSocialUsernameAvailabilityUid))

export const SocialUsernameAvailabilityUidSchema = SocialUsernameAvailabilitySchema.pick({
  username: true,
  checkedAt: true,
})

export type SocialUsernameAvailability = z.infer<typeof SocialUsernameAvailabilitySchema>

export type SocialUsernameAvailabilityUid = z.infer<typeof SocialUsernameAvailabilityUidSchema>

export function parseSocialUsernameAvailability(availability: SocialUsernameAvailability): SocialUsernameAvailability {
  return SocialUsernameAvailabilitySchema.parse(availability)
}

export function parseSocialUsernameAvailabilities(availabilities: SocialUsernameAvailability[]): SocialUsernameAvailability[] {
  return SocialUsernameAvailabilitiesSchema.parse(availabilities)
}

export function parseSocialUsernameAvailabilityUid(availabilityUid: SocialUsernameAvailabilityUid): SocialUsernameAvailabilityUid {
  return SocialUsernameAvailabilityUidSchema.parse(availabilityUid)
}

export function availability(network: SocialNetwork, username: SocialUsername, isAvailable: boolean, checkedAt: Date) {
  return parseSocialUsernameAvailability({
    network,
    username,
    isAvailable,
    checkedAt,
  })
}

export function availabilities(networks: SocialNetwork[], username: SocialUsername, isAvailable: boolean, checkedAt: Date) {
  return networks.map(network => availability(network, username, isAvailable, checkedAt))
}
