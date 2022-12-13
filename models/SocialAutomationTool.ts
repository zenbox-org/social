import { isEqualByD } from 'libs/utils/lodash'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { NotesSchema } from '../../generic/models/Notes'
import { UrlSchema } from '../../generic/models/Url'
import { SocialAutomationFeaturesSchema } from './SocialAutomationFeature'

export const SocialAutomationToolSchema = z.object({
  url: UrlSchema,
  apiDocsUrl: UrlSchema,
  features: SocialAutomationFeaturesSchema,
  notes: NotesSchema,
}).describe('SocialAutomationTool')

export const SocialAutomationToolsSchema = z.array(SocialAutomationToolSchema)
  .superRefine(getDuplicatesRefinement('SocialAutomationTool', parseSocialAutomationToolUid))

export const SocialAutomationToolUidSchema = SocialAutomationToolSchema.pick({
  url: true,
})

export type SocialAutomationTool = z.infer<typeof SocialAutomationToolSchema>

export type SocialAutomationToolUid = z.infer<typeof SocialAutomationToolUidSchema>

export function parseSocialAutomationTool(tool: SocialAutomationTool): SocialAutomationTool {
  return SocialAutomationToolSchema.parse(tool)
}

export function parseSocialAutomationTools(tools: SocialAutomationTool[]): SocialAutomationTool[] {
  return SocialAutomationToolsSchema.parse(tools)
}

export function parseSocialAutomationToolUid(toolUid: SocialAutomationToolUid): SocialAutomationToolUid {
  return SocialAutomationToolUidSchema.parse(toolUid)
}

export const isEqualSocialAutomationTool = (a: SocialAutomationTool) => (b: SocialAutomationTool) => isEqualByD(a, b, parseSocialAutomationToolUid)
