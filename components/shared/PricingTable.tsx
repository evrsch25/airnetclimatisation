import { Card } from "@/components/ui/Card";
import { discountRules, pricingNotes, pricingRows } from "@/constants/pricing";

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

      <Card className="bg-surface">
        <h4 className="text-sm font-semibold text-text-primary">Remises dégressives mono-split</h4>
        <ul className="mt-3 space-y-2">
          {discountRules.map((rule) => (
            <li key={rule.count} className="text-sm text-text-secondary">
              <span className="font-medium text-text-primary">{rule.count}</span> — {rule.discount}
            </li>
          ))}
        </ul>
      </Card>

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
