"use client";

import { COMPARISON } from "@/content/site";
import { RevealSection } from "./RevealSection";
import { Icon } from "./Icon";

export function ComparisonTable() {
  return (
    <RevealSection className="section-padding bg-surface-elevated" id="compare">
      <div className="container-landing">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Compare</p>
          <h2 className="section-headline mb-4">Compare fairly.</h2>
          <p className="text-body text-muted max-w-xl mx-auto">
            See how Nile POS stacks up against typical alternatives.
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                {COMPARISON.headers.map((h, i) => (
                  <th
                    key={h}
                    className={`text-left py-4 px-4 text-sm font-semibold ${
                      i === 1
                        ? "text-accent bg-accent/5 rounded-t-xl"
                        : "text-fg"
                    } ${i === 0 ? "w-1/4" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-border/20 hover:bg-white/50 transition-colors"
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-3.5 px-4 text-sm ${
                        j === 1 ? "bg-accent/5" : ""
                      } ${j === 0 ? "font-medium text-fg" : ""} ${
                        i === COMPARISON.rows.length - 1 && j === 1
                          ? "rounded-b-xl"
                          : ""
                      }`}
                    >
                      {typeof cell === "boolean" ? (
                        cell ? (
                          <span className="text-accent">
                            <Icon name="check" size={18} />
                          </span>
                        ) : (
                          <span className="text-border">
                            <Icon name="x" size={18} />
                          </span>
                        )
                      ) : (
                        <span className={`${j > 0 ? "text-muted" : ""}`}>
                          {cell}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </RevealSection>
  );
}
