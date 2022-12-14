import { z } from 'zod'

/**
 * Archetype defines the generator & validator for account messages
 */

export const SocialArchetypeSchema = z.enum([
  '/project', // seller
  '/expert', // aggregator
  '/peer', // buyer
  '/ceo', // seller representative
])

export type SocialArchetype = z.infer<typeof SocialArchetypeSchema>
