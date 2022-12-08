import { parseSocialNetworkStatUid, SocialNetworkStat, SocialNetworkStatSchema } from '../models/SocialNetworkStat'
import { getFinder, getInserter, getName } from 'libs/utils/zod'
import { Telegram, Twitter } from './allSocialNetworks'

export const allSocialNetworkStats: SocialNetworkStat[] = []

export const addSocialNetworkStat = getInserter<SocialNetworkStat>(getName(SocialNetworkStatSchema), SocialNetworkStatSchema, parseSocialNetworkStatUid, allSocialNetworkStats)

export const findSocialNetworkStat = getFinder(parseSocialNetworkStatUid, allSocialNetworkStats)

addSocialNetworkStat({
  network: Twitter,
  accountsPerPhoneNumber: 10,
})

addSocialNetworkStat({
  network: Telegram,
  accountsPerPhoneNumber: 1,
})
