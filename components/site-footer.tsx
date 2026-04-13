import Link from 'next/link';
import { Car, Facebook, Landmark, ShieldCheck } from 'lucide-react';
import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-6 sm:py-8">
      <div className="section-shell flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-slate-950 sm:text-lg">Golden Spur Motor Inn</p>
          <p className="mt-1.5 text-sm text-slate-700">{site.address}</p>
          <Link href="/contact" className="mt-2 inline-block text-sm font-medium text-brandRed underline decoration-brandGold/40 underline-offset-2 hover:opacity-90">
            Contact & directions
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 sm:gap-3 sm:text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-2.5 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
            <Car className="h-3.5 w-3.5 shrink-0 text-brandRed sm:h-4 sm:w-4" /> Huge truck parking
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-2.5 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brandRed sm:h-4 sm:w-4" /> Remodeled rooms
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-2.5 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
            <Landmark className="h-3.5 w-3.5 shrink-0 text-brandRed sm:h-4 sm:w-4" /> City of Flags
          </span>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-2.5 py-1.5 transition hover:bg-white sm:gap-2 sm:px-3 sm:py-2"
          >
            <Facebook className="h-3.5 w-3.5 shrink-0 text-brandRed sm:h-4 sm:w-4" /> Follow on Facebook
          </a>
        </div>
      </div>
      <div className="section-shell mt-5 flex flex-col gap-3 border-t border-black/[0.06] pt-4">
        <p className="max-w-3xl text-center text-[11px] leading-relaxed text-slate-500 sm:text-xs md:text-left">
          This is an independent concept redesign created for demonstration purposes only. All branding and content belong to their respective owners. Not
          affiliated with or endorsed by Golden Spur Motor Inn.
        </p>
        <p className="text-center text-[11px] text-slate-500 sm:text-xs md:text-left">
          <a
            href={site.exovaraLabsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 underline decoration-black/15 underline-offset-2 transition hover:text-brandRed hover:decoration-brandGold/40"
          >
            Powered by Exovara Labs
          </a>
        </p>
      </div>
    </footer>
  );
}
