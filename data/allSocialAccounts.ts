import { SocialAccount, SocialAccountSchema } from '../models/SocialAccount'
import { Twitter } from './allSocialNetworks'

export const SocialAccounts: SocialAccount[] = []

export function addSocialAccount($account: Partial<SocialAccount>) {
  const account = SocialAccountSchema.parse($account)
  const duplicate = SocialAccounts.find(a => getSocialAccountMoniker(a) === getSocialAccountMoniker(account))
  if (duplicate) throw new Error(`Duplicate SocialPost found: ${getSocialAccountMoniker(duplicate)}`)
  SocialAccounts.push(account)
  return account
}

export function getSocialAccountMoniker(account: SocialAccount) {
  return `${account.username}@${account.network.domain}`
}

export const ShieldFinanceTwitter = addSocialAccount({
  username: 'ShieldFinance',
  network: Twitter,
  // archetype: '/project',
})

export const SBFTwitter = addSocialAccount({
  username: 'SBF_FTX',
  network: Twitter,
  // archetype: '/ceo',
})

export const HsakaTwitter = addSocialAccount({
  username: 'HsakaTrades',
  network: Twitter,
  // archetype: '/expert',
})

export const NomadTwitter = addSocialAccount({
  username: 'IamNomad',
  network: Twitter,
  // archetype: '/expert',
})

export const WiceTwitter = addSocialAccount({
  username: 'AWice',
  network: Twitter,
  // archetype: '/expert',
})

export const LoomdartTwitter = addSocialAccount({
  username: 'loomdart',
  network: Twitter,
  // archetype: '/expert',
})

export const MacroscopeTwitter = addSocialAccount({
  username: 'MacroScope17',
  network: Twitter,
  // archetype: '/expert',
})

export const AshWSBTwitter = addSocialAccount({
  username: 'ashwsbreal',
  network: Twitter,
  // archetype: '/expert',
})

export const Error385Twitter = addSocialAccount({
  username: 'error385',
  network: Twitter,
  // archetype: '/peer',
})

export const NgetraderTwitter = addSocialAccount({
  username: 'ngetrader',
  network: Twitter,
  // archetype: '/peer',
})

export const ArtyTwitter = addSocialAccount({
  username: 'arty_f',
  network: Twitter,
  // archetype: '/peer',
})
