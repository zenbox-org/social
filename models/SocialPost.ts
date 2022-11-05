import { z } from 'zod'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { SocialNetworkSchema } from './SocialNetwork'
import { SocialAccountSchema } from './SocialAccount'

export const SocialPostSchema = z.object({
  url: z.string().url().min(1),
  text: z.string().optional(),
  image: z.string().optional(),
  network: SocialNetworkSchema,
  account: SocialAccountSchema,
}).describe('SocialPost')

export const SocialPostsSchema = z.array(SocialPostSchema)
  .superRefine(getDuplicatesRefinement('SocialPost', parseSocialPostUid))

export const SocialPostUidSchema = SocialPostSchema.pick({
  url: true,
})

export type SocialPost = z.infer<typeof SocialPostSchema>

export type SocialPostUid = z.infer<typeof SocialPostUidSchema>

export function parseSocialPost(post: SocialPost): SocialPost {
  return SocialPostSchema.parse(post)
}

export function parseSocialPosts(posts: SocialPost[]): SocialPost[] {
  return SocialPostsSchema.parse(posts)
}

export function parseSocialPostUid(postUid: SocialPostUid): SocialPostUid {
  return SocialPostUidSchema.parse(postUid)
}
