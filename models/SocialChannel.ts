import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { IdSchema } from '../../generic/models/Id'
import { NameSchema } from '../../generic/models/Name'
import { NotesSchema } from '../../generic/models/Notes'
import { OriginalIdSchema } from '../../generic/models/OriginalId'
import { OriginalSlugSchema } from '../../generic/models/OriginalSlug'
import { SocialChannelTypeSchema, SocialChannelTypeUidSchema } from './SocialChannelType'

export const SocialChannelSchema = z.object({
  id: IdSchema,
  oid: OriginalIdSchema,
  name: NameSchema,
  slug: OriginalSlugSchema,
  type: SocialChannelTypeSchema,
  followerCount: z.number().int().nonnegative(),
  followerCountEstimatedAt: z.date(),
  notes: NotesSchema,
})

export const SocialChannelsSchema = z.array(SocialChannelSchema)
  .superRefine(getDuplicatesRefinement('SocialChannel', getSocialChannelUid))

export const SocialChannelUidSchema = z.object({
  slug: SocialChannelSchema.shape.slug,
  type: SocialChannelTypeUidSchema,
})

export type SocialChannel = z.infer<typeof SocialChannelSchema>

export type SocialChannelUid = z.infer<typeof SocialChannelUidSchema>

export function validateSocialChannel(channel: SocialChannel): SocialChannel {
  return SocialChannelSchema.parse(channel)
}

export function validateSocialChannels(channels: SocialChannel[]): SocialChannel[] {
  return SocialChannelsSchema.parse(channels)
}

export function getSocialChannelUid(channelUid: SocialChannelUid) {
  return SocialChannelUidSchema.parse(channelUid)
}
