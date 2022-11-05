import { parseSocialNetworkUid, SocialNetwork } from '../SocialNetwork'
import { SocialUsername } from '../SocialUsername'
import { SocialUsernameAvailability } from '../SocialUsernameAvailability'
import { isEqualBy } from 'zenbox-util/lodash'
import { last, sortBy } from 'lodash-es'

export function findFreshAvailability(network: SocialNetwork, username: SocialUsername, checkedAtMin: Date, availabilities: SocialUsernameAvailability[]) {
  const $availabilities = availabilities
    .filter(a => {
      return isEqualBy(a.network, network, parseSocialNetworkUid) &&
        a.username === username &&
        a.checkedAt >= checkedAtMin
    })
  return last(sortBy($availabilities, a => a.checkedAt))
}
