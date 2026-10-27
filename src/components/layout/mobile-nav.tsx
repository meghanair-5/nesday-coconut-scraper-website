"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ButtonAnchor } from "@/components/ui/button";
import { NavLinks } from "./nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="inline-flex size-11 items-center justify-center rounded-lg text-obsidian hover:bg-sand lg:hidden"
        aria-label="Open menu"
      >
        <Menu aria-hidden className="size-6" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-obsidian/40" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-ivory shadow-lift focus:outline-none">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Dialog.Title className="text-xl font-semibold text-obsidian">Menu</Dialog.Title>
            <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
            <Dialog.Close
              className="inline-flex size-11 items-center justify-center rounded-lg hover:bg-sand"
              aria-label="Close menu"
            >
              <X aria-hidden className="size-6" />
            </Dialog.Close>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
            <NavLinks
              items={siteConfig.mainNav}
              orientation="vertical"
              onNavigate={() => setOpen(false)}
            />
          </nav>
          <div className="border-t border-line p-5">
            <ButtonAnchor href={siteConfig.phone.href} size="lg" className="w-full">
              <Phone aria-hidden />
              Call to order
            </ButtonAnchor>
            <p className="mt-3 text-center text-sm text-muted">{siteConfig.supportHours}</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
