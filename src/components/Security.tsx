"use client";

import { Activity, HardDrive, KeyRound, Lock, type LucideIcon } from "lucide-react";
import { SECURITY } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Lock,
  HardDrive,
  KeyRound,
  Activity,
};

export function Security() {
  return (
    <section id="security" className="section-padding border-b border-border">
      <div className="container-landing">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Security & reliability</p>
          <h2 className="section-headline mb-4">
            Your books deserve the same care as your cash drawer.
          </h2>
          <p className="text-body-lg text-muted">
            Encryption, backups, permissions, and uptime—so you can focus on running the business.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-4">
          {SECURITY.map((item) => {
            const Icon = ICONS[item.icon] || Lock;
            return (
              <StaggerItem key={item.title}>
                <div className="flex gap-4 rounded-card border border-border bg-surface p-5 sm:p-6 h-full">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-fg mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
