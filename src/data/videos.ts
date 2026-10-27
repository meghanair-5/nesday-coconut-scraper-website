export type Video = {
  youtubeId: string;
  title: string;
  /** Who published the video. All current videos are third-party coverage, not official Nesday productions. */
  source: string;
  language: string;
  thumbnail: string;
};

export const videos: Video[] = [
  {
    youtubeId: "XNPrpjhsQHk",
    title: "Electronic coconut scraper: a home kitchen review",
    source: "jancy's paradise (YouTube)",
    language: "Malayalam",
    thumbnail: "/images/videos/XNPrpjhsQHk.jpg",
  },
  {
    youtubeId: "_PzUdyGXDFk",
    title: "News report on the electronic coconut scraper",
    source: "News18 Kerala",
    language: "Malayalam",
    thumbnail: "/images/videos/_PzUdyGXDFk.jpg",
  },
];
