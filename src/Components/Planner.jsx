import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LuArrowRight, LuMinus, LuPlus, LuRotateCcw } from "react-icons/lu";
import { WAHANA, wahanaPackageKey } from "../data/content";
import { formatRupiah } from "../lib/api";
import { SectionHead } from "./ui";

const MAX_PEOPLE = 50;
const stepClass =
  "grid size-11 place-items-center rounded-full bg-white text-lg shadow-card ring-1 ring-ink/10 transition hover:bg-sea hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-ink";

export default function Planner() {
  const { t } = useTranslation();
  const [counts, setCounts] = useState({});

  const rows = WAHANA.filter((item) => item.prices).flatMap((item) =>
    item.prices.map((price) => ({
      id: `${item.key}-${price.amount}`,
      item,
      amount: price.amount,
      label: `${t(`wahana.items.${item.key}.name`)}${price.label ? ` (${t(`wahana.${price.label}`)})` : ""}`,
    }))
  );
  const chosen = rows.filter((row) => counts[row.id] > 0);
  const total = chosen.reduce((sum, row) => sum + row.amount * counts[row.id], 0);
  const change = (id, delta) =>
    setCounts((c) => ({ ...c, [id]: Math.min(Math.max((c[id] ?? 0) + delta, 0), MAX_PEOPLE) }));
  const note = `${chosen.map((row) => `${row.label} x${counts[row.id]}`).join(", ")}. ${t("planner.estimate")}: ${formatRupiah(total)}`;

  return (
    <section id="biaya" className="wrap pb-16 md:pb-24">
      <SectionHead title={t("planner.title")} lead={t("planner.lead")} />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <ul className="rounded-3xl bg-sand-2 p-3 md:p-5">
          {rows.map((row) => {
            const count = counts[row.id] ?? 0;
            return (
              <li key={row.id} className="flex items-center justify-between gap-3 border-b border-ink/10 p-3 last:border-0">
                <div className="min-w-0">
                  <strong className="block font-display text-lg leading-tight">{row.label}</strong>
                  <span className="text-[0.9375rem] text-muted">{formatRupiah(row.amount)}</span>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    data-step="minus"
                    className={stepClass}
                    disabled={count === 0}
                    onClick={() => change(row.id, -1)}
                    aria-label={`${t("planner.remove")} ${row.label}`}
                  >
                    <LuMinus aria-hidden="true" />
                  </button>
                  <span className="w-7 text-center font-display text-xl font-bold tabular-nums">{count}</span>
                  <button
                    type="button"
                    data-step="plus"
                    className={stepClass}
                    disabled={count === MAX_PEOPLE}
                    onClick={() => change(row.id, 1)}
                    aria-label={`${t("planner.add")} ${row.label}`}
                  >
                    <LuPlus aria-hidden="true" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="flex flex-col self-start rounded-3xl bg-sea-deep p-6 text-white shadow-lift md:p-8 lg:sticky lg:top-24">
          <h3 className="text-2xl">{t("planner.summary")}</h3>
          <div aria-live="polite" className="mt-3 min-h-16">
            {chosen.length === 0 ? (
              <p className="text-white/75">{t("planner.empty")}</p>
            ) : (
              <ul className="space-y-1.5">
                {chosen.map((row) => (
                  <li key={row.id} className="flex justify-between gap-3">
                    <span>
                      {row.label} × {counts[row.id]}
                    </span>
                    <span className="whitespace-nowrap">{formatRupiah(row.amount * counts[row.id])}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 flex items-baseline justify-between border-t border-white/25 pt-4">
              <span className="font-semibold">{t("planner.total")}</span>
              <strong data-planner-total className="font-display text-[2rem] leading-none text-sun">
                {formatRupiah(total)}
              </strong>
            </div>
          </div>
          <p className="mt-3 mb-5 text-sm text-white/75">{t("planner.note")}</p>
          {chosen.length > 0 && (
            <>
              <Link
                to="/#contact"
                state={{ pkg: wahanaPackageKey(chosen[0].item), note }}
                data-planner-reserve
                className="btn btn-sun"
              >
                {t("planner.reserve")} <LuArrowRight aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => setCounts({})}
                className="mt-3 inline-flex items-center justify-center gap-2 py-1.5 text-sm font-semibold text-white/85 hover:text-sun"
              >
                <LuRotateCcw aria-hidden="true" /> {t("planner.reset")}
              </button>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
