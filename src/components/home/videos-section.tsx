import { VideoEmbed } from "@/components/products/video-embed";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Video } from "@/data/videos";

export function VideosSection({ videos }: { videos: Video[] }) {
  if (videos.length === 0) return null;

  return (
    <section aria-labelledby="videos-heading" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="videos-heading"
          eyebrow="See it in use"
          title="Watch the scraper in action"
          description="Videos by independent creators and media. Videos load only when you press play."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <VideoEmbed key={video.youtubeId} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
