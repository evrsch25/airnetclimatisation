import {
  type LucideIcon,
  AirVent,
  Box,
  Clock,
  FlaskConical,
  Gauge,
  Heart,
  Layers,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Sparkles,
  Thermometer,
  ThumbsUp,
  Wind,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  AirVent,
  Box,
  Clock,
  FlaskConical,
  Gauge,
  Heart,
  Layers,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Sparkles,
  Thermometer,
  ThumbsUp,
  Wind,
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
