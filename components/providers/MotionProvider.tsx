"use client";

import { MotionConfig } from "motion/react";

/**
 * reducedMotion="user" laisse Motion désactiver lui-même les transformations
 * quand l'utilisateur a activé « réduire les animations ». Faire ce test dans
 * les composants provoquerait un écart d'hydratation : le serveur ne connaît
 * pas la préférence et le HTML resterait figé à opacity: 0.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
