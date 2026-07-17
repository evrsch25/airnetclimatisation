import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { contactInfo } from "@/constants/contact";

export function ContactCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold">Nos coordonnées</h3>

      <div className="mt-6 space-y-4">
        <a
          href={`tel:${contactInfo.phone}`}
          className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary"
        >
          <Phone size={18} className="text-primary shrink-0" aria-hidden="true" />
          {contactInfo.phoneDisplay}
        </a>

        <a
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary"
        >
          <Mail size={18} className="text-primary shrink-0" aria-hidden="true" />
          {contactInfo.email}
        </a>

        <div className="flex items-start gap-3 text-sm text-text-secondary">
          <MapPin size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
          {contactInfo.address.full}
        </div>

        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <Clock size={18} className="text-primary shrink-0" aria-hidden="true" />
          {contactInfo.hours.value}
        </div>
      </div>
    </Card>
  );
}
