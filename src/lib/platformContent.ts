import type { PlatformId } from "./types";

/**
 * Per-platform hub content. Each hub targets a platform keyword cluster
 * ("instagram scraper api") and leads with a self-contained answer block so it
 * is extractable by AI answer engines as well as readable by humans.
 */
export interface PlatformContent {
  id: PlatformId;
  slug: string;
  title: string;
  description: string;
  h1: string;
  tagline: string;
  intro: string;
  dataTypes: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const PLATFORM_CONTENT: Record<
  "instagram" | "linkedin" | "twitter" | "facebook" | "tiktok" | "reddit",
  PlatformContent
> = {
  instagram: {
    id: "instagram",
    slug: "instagram-scraper-api",
    title: "Instagram Scraper API",
    description:
      "Instagram scraper APIs for profiles, posts, reels, comments, followers and hashtags. No login or cookies. Structured JSON, pay per result.",
    h1: "Instagram scraper API",
    tagline: "Profiles, posts, reels, comments, followers and hashtags — no login.",
    intro:
      "dataslayer publishes Instagram scraper APIs that return clean, structured JSON from public Instagram data. Send one request with a profile, post or hashtag URL and get typed rows back — posts, comments, profile details, reels, followers and search results. No Instagram login or cookies are required, and you pay per result.",
    dataTypes: [
      { title: "Profiles", body: "Public profile details: bio, follower and following counts, post count, verification, business category and profile picture." },
      { title: "Posts & carousels", body: "A profile's or hashtag's posts with captions, media URLs, likes, comments, timestamps and tagged users." },
      { title: "Reels", body: "A profile's reel feed and reels by audio, with play counts, likes, comments and media URLs." },
      { title: "Comments", body: "Public comments on a post or reel, with author, text, likes and reply threads." },
      { title: "Followers & following", body: "Follower and following lists for a public account, with usernames and profile summaries." },
      { title: "Hashtags & search", body: "Hashtag and keyword search across users, hashtags and places, with ranked results." },
    ],
    faqs: [
      { q: "Do I need an Instagram login to use the API?", a: "No. Every dataslayer Instagram scraper reads public data only, so there is no login, no session to keep alive and no cookie of yours at risk." },
      { q: "What data can I scrape from Instagram?", a: "Public profiles, posts and carousels, reels, comments, followers, following, hashtags, mentions and user, hashtag or place search results." },
      { q: "How much does an Instagram scraper API cost?", a: "You pay per result returned, at each scraper's published rate through your Apify account. There is no subscription or seat fee." },
      { q: "What format does the data come back in?", a: "Typed JSON records by default. You can also download the run's dataset as CSV or Excel, or stream it into your own stack." },
    ],
  },
  linkedin: {
    id: "linkedin",
    slug: "linkedin-scraper-api",
    title: "LinkedIn Scraper API",
    description:
      "LinkedIn scraper APIs for profiles, companies, jobs and posts. No login or cookies. Structured JSON, pay per result.",
    h1: "LinkedIn scraper API",
    tagline: "Profiles, companies, jobs and posts — no login.",
    intro:
      "dataslayer publishes LinkedIn scraper APIs that return structured JSON from public LinkedIn data. Send a profile, company or search URL and get typed rows back — profile details, company data, job postings and posts. No LinkedIn login or cookies are required, and you pay per result.",
    dataTypes: [
      { title: "Profiles", body: "Public profile data: headline, experience, education, skills, location, company and follower counts." },
      { title: "Companies", body: "Company pages with industry, size, headquarters, specialties, website and description." },
      { title: "Jobs", body: "Public job postings by keyword, company or location, with title, description and posting metadata." },
      { title: "Posts & engagement", body: "Company and profile posts with reactions, comments, shares and author details." },
      { title: "People & company search", body: "Search public profiles and companies by industry, location, headcount, title and technology filters." },
      { title: "Engagers", body: "Everyone who reacted to or commented on a post, deduplicated into one list." },
    ],
    faqs: [
      { q: "Do I need a LinkedIn login to use the API?", a: "No. dataslayer LinkedIn scrapers read public data only — no login, no session and no cookie of yours is used." },
      { q: "What LinkedIn data can I scrape?", a: "Public profiles, companies, job postings, posts, reactions and comments, plus people and company search with filters." },
      { q: "Can I build a lead list with it?", a: "Yes. Combine people and company search with profile enrichment to build and filter prospect lists, then export as JSON, CSV or Excel." },
      { q: "How is it priced?", a: "Per result, at each scraper's published rate through your Apify account. No subscription and no seat minimum." },
    ],
  },
  twitter: {
    id: "twitter",
    slug: "twitter-scraper-api",
    title: "X (Twitter) Scraper API",
    description:
      "X (Twitter) scraper APIs for tweets, profiles, followers, search and comments. No login or cookies. Structured JSON, pay per result.",
    h1: "X (Twitter) scraper API",
    tagline: "Tweets, profiles, followers, search and comments — no login.",
    intro:
      "dataslayer publishes X (Twitter) scraper APIs that return structured JSON from public posts. Send a handle, tweet URL or search query and get typed rows back — tweets, profiles, followers, replies and search results. No X login or cookies are required, and you pay per result.",
    dataTypes: [
      { title: "Tweets", body: "An account's tweets with text, likes, retweets, replies, quotes, media and timestamps." },
      { title: "Profiles", body: "Public profile data: bio, follower and following counts, location, verification and account age." },
      { title: "Search", body: "Keyword, hashtag and advanced-operator search across public posts, exporting unique results only." },
      { title: "Comments & replies", body: "Replies and comments on a tweet, with author profiles, likes and thread context." },
      { title: "Followers", body: "Follower and following lists for a public account, with usernames and profile summaries." },
      { title: "Engaged audiences", body: "Everyone who engaged with a tweet, deduplicated into one exportable list." },
    ],
    faqs: [
      { q: "Do I need an X (Twitter) login to use the API?", a: "No. Every dataslayer X scraper reads public data only — no login, no session and no cookie of yours is used." },
      { q: "What X (Twitter) data can I scrape?", a: "Public tweets, profiles, followers, following, replies and comments, and keyword, hashtag or operator-based search results." },
      { q: "Does it support advanced search operators?", a: "Yes. Search scrapers accept documented advanced operators so you can narrow results by phrase, mention, hashtag or account." },
      { q: "How is it priced?", a: "Per result, at each scraper's published rate through your Apify account. No subscription and no seat minimum." },
    ],
  },
  facebook: {
    id: "facebook",
    slug: "facebook-scraper-api",
    title: "Facebook Scraper API",
    description:
      "Facebook scraper APIs for pages, posts, Marketplace listings, ads and public profiles. No login or cookies. Structured JSON, pay per result.",
    h1: "Facebook scraper API",
    tagline: "Pages, posts, Marketplace, ads and public profiles — no login.",
    intro:
      "dataslayer publishes Facebook scraper APIs that return structured JSON from public Facebook data. Send a page, listing or search URL and get typed rows back — page details, posts, Marketplace listings and Ads Library records. No Facebook login or cookies are required, and you pay per result.",
    dataTypes: [
      { title: "Pages", body: "Public page data: name, category, follower count, verification, contact details and profile image." },
      { title: "Posts", body: "Page and profile posts with text, reactions, comments, shares, media and timestamps." },
      { title: "Marketplace", body: "Marketplace listings with title, price, condition, location, seller details and images." },
      { title: "Ads Library", body: "Public ad records from the Meta Ads Library, with creative text, page, dates and status." },
      { title: "Profiles", body: "Public profile details, without login or cookies." },
      { title: "Page search", body: "Discover public pages by keyword, with IDs, URLs, verification and follower counts." },
    ],
    faqs: [
      { q: "Do I need a Facebook login to use the API?", a: "No. dataslayer Facebook scrapers read public data only — no login, no session and no cookie of yours is used." },
      { q: "What Facebook data can I scrape?", a: "Public pages, posts, Marketplace listings, Ads Library records, public profiles and keyword page search." },
      { q: "Can I monitor competitor ads?", a: "Yes. The Ads Library scraper returns public ad records for a page, including creative text and run dates." },
      { q: "How is it priced?", a: "Per result, at each scraper's published rate through your Apify account. No subscription and no seat minimum." },
    ],
  },
  tiktok: {
    id: "tiktok",
    slug: "tiktok-scraper-api",
    title: "TikTok Scraper API",
    description:
      "TikTok scraper APIs for profiles, videos, comments, search and trending content. No login or cookies. Structured JSON, pay per result.",
    h1: "TikTok scraper API",
    tagline: "Profiles, videos, comments, search and trending content — no login.",
    intro:
      "dataslayer publishes TikTok scraper APIs that return structured JSON from public TikTok data. Send a username, video URL or keyword and get typed rows back — profile details, videos, comments, search results and trending content. No TikTok login or cookies are required, and you pay per result.",
    dataTypes: [
      { title: "Profiles", body: "Public profile data: nickname, bio, follower and following counts, likes, verification and avatar." },
      { title: "Videos", body: "A user's videos with description, play count, likes, comments, shares, duration, music and media URLs." },
      { title: "Comments", body: "Public comments on a video, with author, text, likes and reply threads." },
      { title: "Search", body: "Keyword video search and hashtag search, with ranked results and engagement." },
      { title: "Trending & discovery", body: "Trending and content-discovery feeds across topics and sounds." },
      { title: "Video details", body: "Single-video metadata by URL, including engagement counts and author details." },
    ],
    faqs: [
      { q: "Do I need a TikTok login to use the API?", a: "No. dataslayer TikTok scrapers read public data only — no login, no session and no cookie of yours is used." },
      { q: "What TikTok data can I scrape?", a: "Public profiles, videos, comments, keyword and hashtag search, trending content and single-video details." },
      { q: "Can I track trending sounds and content?", a: "Yes. Trending and discovery scrapers surface popular content and sounds by topic." },
      { q: "How is it priced?", a: "Per result, at each scraper's published rate through your Apify account. No subscription and no seat minimum." },
    ],
  },
  reddit: {
    id: "reddit",
    slug: "reddit-scraper-api",
    title: "Reddit Scraper API",
    description:
      "Reddit scraper APIs for subreddit posts, search and post details with comments. No login or cookies. Structured JSON, pay per result.",
    h1: "Reddit scraper API",
    tagline: "Subreddit posts, search and post details with comments — no login.",
    intro:
      "dataslayer publishes Reddit scraper APIs that return structured JSON from public Reddit data. Send a subreddit, query or post URL and get typed rows back — posts, search results and full post details with comments. No Reddit login or cookies are required, and you pay per result.",
    dataTypes: [
      { title: "Subreddit posts", body: "Posts from a subreddit with title, body, author, score, comment count, flair and timestamps." },
      { title: "Search", body: "Keyword search across public posts, with score, subreddit and engagement metadata." },
      { title: "Post details", body: "Full details of a post: title, body, author, score, comment count and metadata." },
      { title: "Comments", body: "The comment tree for a post, with authors, scores and nesting." },
    ],
    faqs: [
      { q: "Do I need a Reddit login to use the API?", a: "No. dataslayer Reddit scrapers read public data only — no login, no session and no cookie of yours is used." },
      { q: "What Reddit data can I scrape?", a: "Public subreddit posts, keyword search results, and full post details including the comment tree." },
      { q: "Can I monitor a subreddit over time?", a: "Yes. Schedule the subreddit scraper on Apify to collect posts on a recurring basis and store the results." },
      { q: "How is it priced?", a: "Per result, at each scraper's published rate through your Apify account. No subscription and no seat minimum." },
    ],
  },
};

export type HubPlatformId = keyof typeof PLATFORM_CONTENT;
