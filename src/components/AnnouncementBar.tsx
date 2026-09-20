"use client";

import { useState } from "react";
import { SITE } from "@/content/site";
import { Icon } from "./Icon";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-fg text-white text-center text-sm py-2.5 px-4 relative z-[60]">
      <a href="#pricing" className="hover:underline underline-offset-4 transition-all">
        {SITE.announcement}
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}
