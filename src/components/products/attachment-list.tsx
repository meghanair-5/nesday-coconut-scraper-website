import Image from "next/image";
import type { Attachment } from "@/types/product";

export function AttachmentList({ attachments }: { attachments: Attachment[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {attachments.map((attachment) => (
        <li
          key={attachment.id}
          className="overflow-hidden rounded-card border border-line bg-white shadow-card"
        >
          {attachment.image ? (
            <div className="relative aspect-[3/2] bg-sand">
              <Image
                src={attachment.image.src}
                alt={attachment.image.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-contain"
              />
            </div>
          ) : null}
          <div className="p-3.5 sm:p-5">
            <h3 className="font-sans text-sm font-semibold text-obsidian sm:text-base">
              {attachment.name}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted sm:mt-1.5 sm:text-sm">
              {attachment.use}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
