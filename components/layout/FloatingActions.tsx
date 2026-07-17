"use client";

import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ctaConfig } from "@/constants/cta";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 md:bottom-6 md:right-6">
      <Button
        variant="primary"
        size="icon"
        href={ctaConfig.secondary.href}
        aria-label="Appeler Air Net Climatisation"
        className="shadow-md lg:hidden"
      >
        <Phone size={20} />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        href={ctaConfig.primary.href}
        aria-label="Demander un devis"
        className="shadow-md lg:hidden"
      >
        <MessageSquare size={20} />
      </Button>
    </div>
  );
}
