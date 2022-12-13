import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'

export const SocialDraftSchema = z.object({
  text: z.string(),
  image: z.string().optional(),
}).describe('SocialDraft')

export const SocialDraftsSchema = z.array(SocialDraftSchema)
  .superRefine(getDuplicatesRefinement('SocialDraft', parseSocialDraftUid))

export const SocialDraftUidSchema = SocialDraftSchema

export type SocialDraft = z.infer<typeof SocialDraftSchema>

export type SocialDraftUid = z.infer<typeof SocialDraftUidSchema>

export function parseSocialDraft(draft: SocialDraft): SocialDraft {
  return SocialDraftSchema.parse(draft)
}

export function parseSocialDrafts(drafts: SocialDraft[]): SocialDraft[] {
  return SocialDraftsSchema.parse(drafts)
}

export function parseSocialDraftUid(draftUid: SocialDraftUid): SocialDraftUid {
  return SocialDraftUidSchema.parse(draftUid)
}
