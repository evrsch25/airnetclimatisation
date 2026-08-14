import {
  type LucideIcon,
  AirVent,
  BadgeEuro,
  Box,
  Clock,
  Droplets,
  FlaskConical,
  Gauge,
  Heart,
  Layers,
  MapPin,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Snowflake,
  Sparkles,
  SprayCan,
  Thermometer,
  ThumbsUp,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  AirVent,
  BadgeEuro,
  Box,
  Clock,
  Droplets,
  FlaskConical,
  Gauge,
  Heart,
  Layers,
  MapPin,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Snowflake,
  Sparkles,
  SprayCan,
  Thermometer,
  ThumbsUp,
  Wind,
  Wrench,
  Zap,
};

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className }: IconProps) {
  const LucideIconComponent = iconMap[name];

  if (!LucideIconComponent) return null;

  return (
    <LucideIconComponent
      size={size}
      strokeWidth={1.75}
      className={cn("text-primary shrink-0", className)}
      aria-hidden="true"
    />
  );
}
