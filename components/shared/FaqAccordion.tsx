"use client";

import { useCallback, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, id: string, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(id);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = items[index + 1];
      if (next) document.getElementById(`faq-trigger-${next.id}`)?.focus();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = items[index - 1];
      if (prev) document.getElementById(`faq-trigger-${prev.id}`)?.focus();
    }
  };

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border" role="list">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-answer-${item.id}`;

        return (
          <div key={item.id} role="listitem">
            <h3>
              <button
                id={triggerId}
                type="button"
                onClick={() => toggle(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id, index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-medium text-text-primary">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "shrink-0 text-text-secondary transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn("pb-5", !isOpen && "hidden")}
            >
              <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
