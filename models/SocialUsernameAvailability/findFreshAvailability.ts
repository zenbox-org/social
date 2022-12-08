import { parseSocialNetworkUid, SocialNetwork } from '../SocialNetwork'
import { SocialUsername } from '../SocialUsername'
import { SocialUsernameAvailability } from '../SocialUsernameAvailability'
import { isEqualByD } from 'libs/utils/lodash'
import { last, sortBy } from 'lodash-es'

export function findFreshAvailability(network: SocialNetwork, username: SocialUsername, checkedAtMin: Date, availabilities: SocialUsernameAvailability[]) {
  const $availabilities = availabilities
    .filter(a => {
      return isEqualByD(a.network, network, parseSocialNetworkUid) &&
        a.username === username &&
        a.checkedAt >= checkedAtMin
    })
  return last(sortBy($availabilities, a => a.checkedAt))
}
