import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex flex-col gap-2.5 py-2.5 sm:gap-3 sm:py-3 md:flex-row md:items-center md:justify-between md:gap-4 md:py-3.5">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 sm:gap-4 md:gap-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandGold/60 focus-visible:ring-offset-2"
        >
          <Image
            src={site.logoUrl}
            alt="Golden Spur Motor Inn — Newport, WA"
            width={220}
            height={88}
            className="h-[3.75rem] w-auto shrink-0 rounded-lg bg-white p-1 shadow-md ring-1 ring-black/[0.06] transition group-hover:shadow-lg sm:h-[4.5rem] sm:rounded-xl sm:p-1.5 md:h-[5.25rem] md:p-2"
            priority
          />
          <p className="hidden max-w-[13rem] text-[10px] font-medium uppercase leading-snug tracking-[0.26em] text-brandRed sm:block sm:max-w-none sm:border-l sm:border-black/10 sm:pl-4 sm:text-[11px] sm:tracking-[0.3em] md:pl-5 md:text-xs">
            Newport, WA — The City of Flags
          </p>
        </Link>

        <nav
          className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 border-t border-black/[0.06] pt-2.5 text-xs sm:gap-x-3 sm:gap-y-2 sm:text-sm md:shrink-0 md:justify-end md:border-t-0 md:pt-0"
          aria-label="Primary"
        >
          <Link href="/#rooms" className="text-slate-700 transition hover:text-brandRed">
            Rooms
          </Link>
          <Link href="/#amenities" className="text-slate-700 transition hover:text-brandRed">
            Amenities
          </Link>
          <Link href="/#location" className="text-slate-700 transition hover:text-brandRed">
            Location
          </Link>
          <Link href="/contact" className="text-slate-700 transition hover:text-brandRed">
            Contact
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-full border border-brandGold/40 bg-brandRed px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-90 sm:px-3.5 sm:py-2 sm:text-sm"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
