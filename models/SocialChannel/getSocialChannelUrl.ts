import { replaceUrlPattern } from '../../../generic/models/UrlPattern/replaceUrlPattern'

export function getSocialChannelUrl(channel: { slug: string, type: { urlPattern: string } }) {
  return replaceUrlPattern(channel.type.urlPattern, { slug: channel.slug })
}
