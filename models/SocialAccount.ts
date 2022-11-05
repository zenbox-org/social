import { z } from 'zod'
import { toUidFromSchema } from 'zenbox-util/uid'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { SocialNetworkSchema, SocialNetworkUidSchema } from './SocialNetwork'
import { SocialUsernameSchema } from './SocialUsername'

export const SocialAccountSchema = z.object({
  username: SocialUsernameSchema,
  network: SocialNetworkSchema,
})

export const SocialAccountsSchema = z.array(SocialAccountSchema)
  .superRefine(getDuplicatesRefinement('SocialAccount', getSocialAccountUid))

export const SocialAccountUidSchema = z.object({
  username: SocialAccountSchema.shape.username,
  network: SocialNetworkUidSchema,
})

export type SocialAccount = z.infer<typeof SocialAccountSchema>

export type SocialAccountUid = z.infer<typeof SocialAccountUidSchema>

export function validateSocialAccount(account: SocialAccount): SocialAccount {
  return SocialAccountSchema.parse(account)
}

export function validateSocialAccounts(accounts: SocialAccount[]): SocialAccount[] {
  return SocialAccountsSchema.parse(accounts)
}

export function getSocialAccountUid(accountUid: SocialAccountUid) {
  return toUidFromSchema(accountUid, SocialAccountUidSchema)
}
