import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { reviews, reviewsSummary } from "@/constants/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={16}
          className={index < rating ? "fill-warning text-warning" : "text-border"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="mx-auto flex max-w-md flex-col items-center gap-2 rounded-[var(--radius-card)] border border-border bg-background px-6 py-5 text-center shadow-sm">
          <p className="text-4xl font-bold tracking-tight text-text-primary">
            {reviewsSummary.average}
          </p>
          <Stars rating={5} />
          <p className="text-sm text-text-secondary">
            {reviewsSummary.count} {reviewsSummary.source}
          </p>
        </div>
      </Reveal>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <li key={review.id} className="h-full">
            <Reveal delay={index * 0.04} className="h-full">
              <Card hover className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <Stars rating={review.rating} />
                  <Quote
                    size={22}
                    className="shrink-0 text-primary-light"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                </div>

                {review.headline && (
                  <p className="mt-4 text-sm font-semibold text-text-primary">
                    {review.headline}
                  </p>
                )}

                <blockquote
                  className={review.headline ? "mt-1.5 text-sm" : "mt-4 text-sm"}
                >
                  <p>{review.text}</p>
                </blockquote>

                {review.author && (
                  <p className="mt-auto pt-4 text-sm font-medium text-text-primary">
                    {review.author}
                  </p>
                )}
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="text-center text-sm text-text-muted">
        Avis déposés par nos clients sur notre fiche Google, reproduits sans modification.
      </p>
    </div>
  );
}
