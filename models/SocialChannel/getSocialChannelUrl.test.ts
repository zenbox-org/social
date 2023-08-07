import { expect } from 'libs/chai/init'
import { TelegramChannel } from '../../data/allSocialChannelTypes'
import { validateSocialChannel } from '../SocialChannel'
import { getSocialChannelUrl } from './getSocialChannelUrl'

const testChannel = validateSocialChannel({
  id: 'Test',
  oid: 'Test',
  name: 'Test',
  slug: 'test',
  followerCount: 100,
  followerCountEstimatedAt: new Date('1970-01-01'),
  type: TelegramChannel,
})

test(getSocialChannelUrl.name, function () {
  expect(getSocialChannelUrl(testChannel)).to.equal('https://t.me/test')
})
