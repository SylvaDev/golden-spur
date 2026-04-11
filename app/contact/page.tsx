import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Facebook, MapPinned, Phone, Printer } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact | Golden Spur Motor Inn | Newport, WA',
  description:
    'Call, email, or visit Golden Spur Motor Inn on Highway 2 in Newport, Washington. Local and toll-free numbers, fax, and directions.',
};

export default function ContactPage() {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

  return (
    <main className="min-h-screen brand-bg">
      <SiteHeader />

      <div className="section-shell py-8 sm:py-10 md:py-12">
        <p className="text-sm uppercase tracking-[0.3em] text-brandRed">Contact</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Get in touch</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
          We’re on Highway 2 in Newport with a huge truck lot and clear signage. Call anytime—our motel is open 24 hours a day, year-round—or send an email
          and we’ll get back to you as soon as we can.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <div className="panel p-5 shadow-panel-light sm:p-6">
              <h2 className="text-lg font-semibold text-slate-950">Address</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700">{site.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}`}
                className="mt-4 inline-flex text-sm font-medium text-brandRed underline decoration-brandGold/40 underline-offset-2 hover:opacity-90"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={site.phoneHref}
                className="panel flex flex-col p-4 shadow-panel-light transition hover:shadow-md sm:p-5"
              >
                <Phone className="h-5 w-5 text-brandRed" />
                <p className="mt-3 text-sm text-slate-600">Local phone</p>
                <p className="text-lg font-medium text-slate-950">{site.phoneDisplay}</p>
                <p className="mt-2 text-xs text-slate-500">Toll-free {site.tollFreeDisplay}</p>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="panel flex flex-col p-4 shadow-panel-light transition hover:shadow-md sm:p-5"
              >
                <Coffee className="h-5 w-5 text-brandRed" />
                <p className="mt-3 text-sm text-slate-600">Reservation email</p>
                <p className="break-all text-base font-medium text-slate-950">{site.email}</p>
              </a>

              <a href={site.faxHref} className="panel flex flex-col p-4 shadow-panel-light transition hover:shadow-md sm:p-5">
                <Printer className="h-5 w-5 text-brandRed" />
                <p className="mt-3 text-sm text-slate-600">Fax</p>
                <p className="text-lg font-medium text-slate-950">{site.faxDisplay}</p>
              </a>

              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="panel flex flex-col p-4 shadow-panel-light transition hover:shadow-md sm:p-5"
              >
                <Facebook className="h-5 w-5 text-brandRed" />
                <p className="mt-3 text-sm text-slate-600">Facebook</p>
                <p className="text-lg font-medium text-slate-950">Golden Spur Motor Inn</p>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#e8e3d9] shadow-panel-light sm:aspect-video">
              <Image
                src="/office.jpg"
                alt="Front office at Golden Spur Motor Inn"
                fill
                className="object-contain object-center p-2 sm:p-3"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
            </div>

            <div className="panel overflow-hidden p-2 shadow-panel-light">
              <div className="flex items-center gap-2 border-b border-black/10 px-3 py-2 text-sm text-slate-600">
                <MapPinned className="h-4 w-4 text-brandRed" />
                Map
              </div>
              <iframe
                title="Golden Spur Motor Inn map"
                src={mapEmbed}
                loading="lazy"
                className="h-[min(55vh,420px)] w-full min-h-[240px] rounded-[1.25rem] border-0 sm:min-h-[280px] sm:rounded-[1.4rem]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-slate-600">
          <Link href="/" className="font-medium text-brandRed underline decoration-brandGold/40 underline-offset-2 hover:opacity-90">
            ← Back to home
          </Link>
        </p>
      </div>

      <SiteFooter />
    </main>
  );
}
