import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-medium text-primary">Erreur 404</p>
        <h1 className="mt-4">Page introuvable</h1>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button variant="primary" href="/" className="mt-8">
          Retour à l&apos;accueil
        </Button>
        <p className="mt-4">
          <Link href="/contact" className="text-sm text-primary hover:underline">
            Nous contacter
          </Link>
        </p>
      </Container>
    </section>
  );
}
