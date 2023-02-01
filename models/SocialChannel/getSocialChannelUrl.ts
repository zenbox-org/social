import { fromTemplateToString } from '../../../utils/string/fromTemplateToString'

export function getSocialChannelUrl(channel: { slug: string, type: { urlPattern: string } }) {
  return fromTemplateToString(channel.type.urlPattern, { slug: channel.slug })
}
