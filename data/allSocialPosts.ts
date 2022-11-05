import { parseSocialPostUid, SocialPost, SocialPostSchema } from '../models/SocialPost'
import { getFinder, getInserter, getName } from 'zenbox-util/zod'
import { Twitter } from './allSocialNetworks'
import { AshWSBTwitter, HsakaTwitter, LoomdartTwitter, MacroscopeTwitter } from './allSocialAccounts'

export const allSocialPosts: SocialPost[] = []

export const addSocialPost = getInserter<SocialPost>(getName(SocialPostSchema), SocialPostSchema, parseSocialPostUid, allSocialPosts)

export const findSocialPost = getFinder(parseSocialPostUid, allSocialPosts)

addSocialPost({
  url: 'https://twitter.com/HsakaTrades/status/1438045386367586307',
  text: `
    Is Solana back up or still down? Can't be arsed to keep track anymore.
  
    Schrodingers uptime.
  `,
  network: Twitter,
  account: HsakaTwitter,
})

addSocialPost({
  url: 'https://twitter.com/loomdart/status/1438135193689370630',
  text: `
    turns out we were the real product at opensea
  `,
  network: Twitter,
  account: LoomdartTwitter,
})

addSocialPost({
  url: 'https://twitter.com/MacroScope17/status/1437950947339145219',
  text: `
    Based on public info, Cohen (or his firm) so far has made a few small crypto investments including today's Radkl news.
  
    Cohen watcher for decades. 100% sure that when he feels strongly as below, a lot more happening behind scenes. He'll tell you about BTC when he's all set.
  `,
  network: Twitter,
  account: MacroscopeTwitter,
})

addSocialPost({
  url: 'https://twitter.com/ashwsbreal/status/1437297042632560641',
  text: `
  $1000 USDT giveaway to 10 people White heavy check mark

  Follow the steps below 
  
  1️⃣ Join this google form ( important )
  
  https://docs.google.com/forms/d/e/1FAIpQLSfrfp70Usrz6PdPe5a8WKTKFeZ-hGTJptR1z_wCBU1SSgBHkQ/viewform
  
  2️⃣ Retweet and Tag 3 friends 
  
  #ELFIN #Play2Earn #NFTs
  `,
  network: Twitter,
  account: AshWSBTwitter,
})

addSocialPost({
  url: 'https://twitter.com/ashwsbreal/status/1437663672873013248',
  text: `
    Hit like if you love crypto
  `,
  network: Twitter,
  account: AshWSBTwitter,
})

addSocialPost({
  url: 'https://twitter.com/ashwsbreal/status/1438013073432858625',
  text: `
    Bears are getting rekt
  `,
  network: Twitter,
  account: AshWSBTwitter,
})

addSocialPost({
  url: 'https://twitter.com/ashwsbreal/status/1437470644577333251',
  text: `
    #Bitcoin to $120k in 2021
  `,
  network: Twitter,
  account: AshWSBTwitter,
})

addSocialPost({
  url: 'https://twitter.com/ashwsbreal/status/1437462648556113923',
  text: `
    $30 to Tobias Rocket
  `,
  image: 'https://pbs.twimg.com/media/E_LkqGfUYAANRf7?format=jpg&name=900x900',
  network: Twitter,
  account: AshWSBTwitter,
})

addSocialPost({
  url: 'https://twitter.com/ashwsbreal/status/1412841203276697601',
  text: `
    Banks don't like #Bitcoin.
    Taxis don't like Uber.
    Hotels don't like AirBnB.
    Bookstores don't like Amazon.
    Cinemas don't like Netflix.
    9-5's don't like remote work.
    
    Innovation is not always liked.
  `,
  network: Twitter,
  account: AshWSBTwitter,
})

addSocialPost({
  url: 'https://twitter.com/ashwsbreal/status/1437395527738421258',
  text: `
    If someone sent you $100,000 which crypto would you buy?
  `,
  network: Twitter,
  account: AshWSBTwitter,
})
