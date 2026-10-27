"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import type { Video } from "@/data/videos";

/** Loads the YouTube iframe only after the visitor chooses to play, so no third-party requests happen on page load. */
export function VideoEmbed({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="overflow-hidden rounded-card border border-line bg-white shadow-card">
      <div className="relative aspect-video bg-obsidian">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full"
            aria-label={`Play video: ${video.title}`}
          >
            <Image
              src={video.thumbnail}
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-ivory/95 text-button shadow-lift transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none">
                <Play aria-hidden className="ml-1 size-7 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-5">
        <p className="font-medium text-obsidian">{video.title}</p>
        <p className="mt-1 text-sm text-muted">
          {video.source} · {video.language}
        </p>
      </figcaption>
    </figure>
  );
}
