import { z } from 'zod'
import { getDuplicatesRefinement } from 'zenbox-util/zod'

export const SocialUsernameSchema = z.string().min(1).describe('SocialUsername')

export const SocialUsernamesSchema = z.array(SocialUsernameSchema)
  .superRefine(getDuplicatesRefinement('SocialUsername', parseSocialUsernameUid))

export const SocialUsernameUidSchema = SocialUsernameSchema

export type SocialUsername = z.infer<typeof SocialUsernameSchema>

export type SocialUsernameUid = z.infer<typeof SocialUsernameUidSchema>

export function parseSocialUsername(username: SocialUsername): SocialUsername {
  return SocialUsernameSchema.parse(username)
}

export function parseSocialUsernames(usernames: SocialUsername[]): SocialUsername[] {
  return SocialUsernamesSchema.parse(usernames)
}

export function parseSocialUsernameUid(usernameUid: SocialUsernameUid): SocialUsernameUid {
  return SocialUsernameUidSchema.parse(usernameUid)
}
