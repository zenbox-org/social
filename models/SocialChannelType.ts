import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { NameSchema } from '../../generic/models/Name'
import { NotesSchema } from '../../generic/models/Notes'
import { UrlPatternSchema } from '../../generic/models/UrlPattern'
import { SocialNetworkSchema, SocialNetworkUidSchema } from './SocialNetwork'

export const SocialChannelTypeSchema = z.object({
  name: NameSchema,
  network: SocialNetworkSchema,
  urlPattern: UrlPatternSchema,
  notes: NotesSchema,
})

export const SocialChannelTypesSchema = z.array(SocialChannelTypeSchema)
  .superRefine(getDuplicatesRefinement('SocialChannelType', getSocialChannelTypeUid))

export const SocialChannelTypeUidSchema = z.object({
  name: SocialChannelTypeSchema.shape.name,
  network: SocialNetworkUidSchema,
})

export type SocialChannelType = z.infer<typeof SocialChannelTypeSchema>

export type SocialChannelTypeUid = z.infer<typeof SocialChannelTypeUidSchema>

export function validateSocialChannelType(type: SocialChannelType): SocialChannelType {
  return SocialChannelTypeSchema.parse(type)
}

export function validateSocialChannelTypes(types: SocialChannelType[]): SocialChannelType[] {
  return SocialChannelTypesSchema.parse(types)
}

export function getSocialChannelTypeUid(typeUid: SocialChannelTypeUid) {
  return SocialChannelTypeUidSchema.parse(typeUid)
}
