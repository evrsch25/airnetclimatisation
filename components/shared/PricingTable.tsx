import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import {
  discountRules,
  paymentMethods,
  paymentNote,
  pricingNotes,
  pricingRows,
} from "@/constants/pricing";

export function PricingTable() {
  return (
    <div className="space-y-6">
      {/* Version mobile : cartes */}
      <div className="space-y-4 md:hidden">
        {pricingRows.map((row) => (
          <Card key={row.id}>
            <h4 className="text-sm font-semibold text-text-primary">{row.name}</h4>
            <p className="mt-2 text-sm text-text-secondary">{row.detail}</p>
            <p className="mt-3 text-sm font-medium text-primary">{row.price}</p>
          </Card>
        ))}
      </div>

      {/* Version desktop : tableau */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary">
                Prestation
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary">
                Détail
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary">
                Tarif TTC
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row) => (
              <tr key={row.id} className="border-b border-border-light">
                <td className="px-4 py-4 text-sm font-medium text-text-primary">{row.name}</td>
                <td className="px-4 py-4 text-sm text-text-secondary">{row.detail}</td>
                <td className="px-4 py-4 text-sm font-medium text-primary">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-surface">
          <h4 className="text-sm font-semibold text-text-primary">
            Forfaits plusieurs mono-split
          </h4>
          <p className="mt-1.5 text-sm text-text-secondary">
            Tarif global pour plusieurs installations nettoyées lors d&apos;une même
            intervention.
          </p>
          <ul className="mt-4 space-y-2">
            {discountRules.map((rule) => (
              <li
                key={rule.count}
                className="flex items-baseline justify-between gap-4 border-b border-border-light pb-2 last:border-0 last:pb-0"
              >
                <span className="text-sm text-text-secondary">Forfait {rule.count}</span>
                <span className="text-sm font-semibold text-primary">{rule.discount}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-surface">
          <h4 className="text-sm font-semibold text-text-primary">Moyens de paiement</h4>
          <p className="mt-1.5 text-sm text-text-secondary">{paymentNote}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <li
                key={method.id}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-text-primary"
              >
                <Icon name={method.icon} size={16} />
                {method.label}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="space-y-2">
        {pricingNotes.map((note) => (
          <p key={note.text} className="text-sm text-text-muted">
            * {note.text}
          </p>
        ))}
      </div>
    </div>
  );
}
