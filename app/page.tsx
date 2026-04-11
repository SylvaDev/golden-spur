import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPinned, Star } from 'lucide-react';
import { HeroCarousel } from '@/components/hero-carousel';
import { amenityIcons } from '@/components/icons';
import { Reveal } from '@/components/reveal';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site } from '@/lib/site';

const roomCards = [
  {
    title: 'Queen rooms',
    description:
      'Single- and double-queen layouts with colour cable TV, premium movie channels, in-room coffee, telephone, refrigerator, and microwave.',
    imageSrc: '/updated-rooms.jpg',
    imageAlt: 'Updated queen guest room at Golden Spur Motor Inn',
  },
  {
    title: 'King rooms',
    description:
      'Spacious double-king setups—ideal when you want extra sleeping space after a long haul on Highway 2.',
    imageSrc: '/updated-room2.jpg',
    imageAlt: 'Updated king guest room at Golden Spur Motor Inn',
  },
  {
    title: 'Rooms with kitchen facilities',
    description:
      'Kitchen-unit options for guests who prefer more in-room meal flexibility; ask about availability when you call.',
    imageSrc: '/updated-single2.jpg',
    imageAlt: 'Guest room with kitchen facilities at Golden Spur Motor Inn',
  },
];

const nearbySpots = [
  'Newport—the City of Flags—at the center of Pend Oreille County',
  'Some fifty-five lakes in the county plus the Pend Oreille River—fishing, boating, hunting, hiking, and camping nearby',
  'Northeast Washington with Canada to the north and Idaho to the east—great for regional travel',
  'On Highway 2 near Newport’s business district, restaurants, and shops',
];

export default function HomePage() {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: site.name,
    sameAs: [site.facebookUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '924 W. Highway 2',
      addressLocality: 'Newport',
      addressRegion: 'WA',
      postalCode: '99156',
      addressCountry: 'US',
    },
    telephone: '+1-509-447-3823',
    faxNumber: '+1-509-447-2060',
    email: site.email,
    amenityFeature: site.amenities.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
  };

  return (
    <main className="min-h-screen brand-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <section id="top" className="relative isolate overflow-hidden">
        {/*
          Full-section bleed: light wash so the night photo stays visible; stronger tint only toward the bottom
          for a smooth handoff to the cream page background. Copy lives on opaque panels, so contrast is fine.
        */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/night_outside.jpg"
            alt=""
            fill
            className="object-cover object-center sm:object-[center_35%]"
            sizes="100vw"
            quality={92}
            priority
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#f9f5ef]/20 via-[#f9f5ef]/10 to-[#f9f5ef]/55 sm:from-[#f9f5ef]/15 sm:via-[#f9f5ef]/5 sm:to-[#f9f5ef]/60 lg:bg-gradient-to-br lg:from-[#f9f5ef]/18 lg:via-[#f9f5ef]/8 lg:to-[#f9f5ef]/58"
            aria-hidden
          />
        </div>

        <div className="section-shell relative z-10 grid gap-6 pb-12 pt-6 sm:gap-8 sm:pb-14 sm:pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)] lg:items-stretch lg:gap-8 lg:pb-12 lg:pt-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.22fr)]">
          <div className="panel min-w-0 self-start p-5 shadow-panel-light sm:p-6 md:p-8">
            <div className="hero-animate mb-4 inline-flex items-center gap-2 rounded-full border border-brandGold/35 bg-brandGold/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.28em] text-brandRed sm:mb-5 sm:px-3 sm:text-xs sm:tracking-[0.3em]">
              <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Your stop on Highway 2
            </div>
            <h1 className="hero-animate hero-animate-delay-1 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl sm:leading-tight lg:text-[2.35rem] xl:text-4xl">
              Comfortable lodging in Newport—easy access, friendly service, great value.
            </h1>
            <p className="hero-animate hero-animate-delay-2 mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:mt-5 sm:text-base sm:leading-8 lg:mt-4 lg:text-[0.9375rem] lg:leading-7">
              The Golden Spur Motor Inn sits in Newport, Washington—the City of Flags—on Highway 2 near the business district. Pend Oreille County offers some
              fifty-five lakes, not counting the Pend Oreille River; fishing, boating, hunting, hiking, and camping are favorites spring through fall. Stay with
              us for newly remodeled rooms, free wireless internet, and a huge truck lot. Reserve by phone or email.
            </p>

            <div className="hero-animate hero-animate-delay-3 mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:gap-4 lg:mt-5">
              <a
                href={site.phoneHref}
                className="group inline-flex items-center justify-center rounded-full bg-brandRed px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brandRed/25 transition hover:-translate-y-0.5 hover:opacity-90 sm:px-6 sm:py-3"
              >
                Call to reserve <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brandGold/40 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-brandGold/60 hover:bg-white sm:px-6 sm:py-3"
              >
                Contact us
              </Link>
            </div>

            <div className="hero-animate hero-animate-delay-4 mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:mt-6">
              {[
                { label: 'Front desk', value: 'Open 24/7, year-round' },
                { label: 'Location', value: '924 W. Highway 2' },
                { label: 'Parking', value: 'Huge lot for trucks' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-black/10 bg-white/90 p-4 shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-xs text-slate-600 sm:text-sm">{item.label}</p>
                  <p className="mt-1 text-base font-medium text-slate-950 sm:mt-1.5 sm:text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal
            delayMs={120}
            className="flex min-h-0 min-w-0 w-full flex-col gap-3 sm:gap-4 lg:min-h-0 lg:min-w-[min(100%,22rem)] lg:h-full"
          >
            <div className="flex min-h-0 min-w-0 flex-1 flex-col lg:min-h-0">
              <HeroCarousel fillColumn />
            </div>
            <div className="panel gold-border shrink-0 p-4 shadow-panel-light transition-shadow duration-300 hover:shadow-lg sm:p-4">
              <p className="text-xs uppercase tracking-[0.32em] text-brandRed sm:text-sm sm:tracking-[0.35em]">Guest favorites</p>
              <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                {amenityIcons.slice(0, 4).map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl border border-black/10 bg-white/80 px-3 py-2 transition-transform duration-300 hover:translate-x-0.5 sm:gap-3 sm:px-3.5 sm:py-2"
                  >
                    <div className="shrink-0 rounded-lg bg-brandGold/20 p-1.5 text-brandRed sm:rounded-xl sm:p-1.5">
                      <Icon className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" />
                    </div>
                    <span className="min-w-0 flex-1 text-xs font-medium leading-snug text-slate-800 sm:text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-brandGold/25 bg-white/80 p-3 sm:mt-4 sm:p-4">
                <p className="text-xs text-slate-600 sm:text-sm">Reservations</p>
                <a href={site.phoneHref} className="mt-1 block text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  {site.phoneDisplay}
                </a>
                <p className="mt-2 text-xs text-slate-700 sm:text-sm">Toll-free: {site.tollFreeDisplay}</p>
                <Link
                  href="/contact"
                  className="mt-2 inline-block text-xs font-medium text-brandRed underline decoration-brandGold/40 underline-offset-2 sm:text-sm"
                >
                  Full contact details →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="amenities" className="section-shell pt-10 pb-16 sm:pt-12">
        <Reveal>
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brandRed">Amenities</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:mt-3 sm:text-3xl">Everything you need for a comfortable night</h2>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenityIcons.map(({ icon: Icon, label, description }, i) => (
            <Reveal key={label} delayMs={Math.min(i * 50, 200)}>
              <div className="panel h-full p-5 shadow-panel-light transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex rounded-2xl bg-brandGold/15 p-3 text-brandRed">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-slate-950">{label}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="rooms" className="section-shell pb-16">
        <Reveal>
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brandRed">Rooms</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:mt-3 sm:text-3xl">
              Queen, king, and kitchen options—shown here with photos from the property.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {roomCards.map((room, i) => (
            <Reveal key={room.title} delayMs={i * 80}>
              <div className="panel overflow-hidden shadow-panel-light transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-52 w-full bg-[#e8e3d9] sm:h-56">
                  <Image
                    src={room.imageSrc}
                    alt={room.imageAlt}
                    fill
                    className="object-contain object-center p-2 sm:p-3"
                    sizes="(min-width: 1024px) 360px, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-950">{room.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{room.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="panel overflow-hidden shadow-panel-light">
              <div className="relative h-56 w-full bg-[#e8e3d9] sm:h-60">
                <Image
                  src="/updated-single.jpg"
                  alt="Single queen guest room"
                  fill
                  className="object-contain object-center p-2 sm:p-3"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <p className="border-t border-black/10 px-4 py-3 text-sm font-medium text-slate-800">Single queen layout</p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="panel overflow-hidden shadow-panel-light">
              <div className="relative h-56 w-full bg-[#e8e3d9] sm:h-60">
                <Image
                  src="/updated-rooms.jpg"
                  alt="Double queen guest room"
                  fill
                  className="object-contain object-center p-2 sm:p-3"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <p className="border-t border-black/10 px-4 py-3 text-sm font-medium text-slate-800">Double queen layout</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="location" className="section-shell pb-12 sm:pb-14">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-5">
          <Reveal className="lg:flex lg:h-full lg:min-h-0 lg:flex-col">
            <div className="panel flex flex-col p-5 shadow-panel-light transition-shadow duration-300 hover:shadow-lg md:p-6 lg:h-full lg:min-h-0">
              <p className="text-sm uppercase tracking-[0.3em] text-brandRed">Location</p>
              <h2 className="mt-1.5 text-xl font-semibold text-slate-950 sm:mt-2 sm:text-2xl md:text-3xl">
                Easy to find on Highway 2 in Newport
              </h2>
              <div className="relative mt-3 h-36 w-full overflow-hidden rounded-2xl border border-black/10 bg-[#e8e3d9] shadow-inner sm:mt-4 sm:h-40 md:h-44">
                <Image
                  src="/office.jpg"
                  alt="Front office and lobby at Golden Spur Motor Inn"
                  fill
                  className="object-contain object-center p-1.5 sm:p-2"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:leading-7">
                We’re conveniently located on Highway 2 near Newport’s business district at {site.address.split(',')[0]}. Huge truck parking, clear signage,
                and an easy hop back onto the highway.
              </p>

              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700 sm:mt-4 sm:space-y-2 sm:leading-7">
                {nearbySpots.map((spot) => (
                  <div key={spot} className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-0.5 sm:gap-2.5">
                    <div className="mt-0.5 shrink-0 rounded-full bg-brandGold/20 p-1 text-brandRed">
                      <MapPinned className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>
                    <span>{spot}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-brandGold/30 bg-brandGold/10 p-3.5 sm:mt-5 sm:p-4 lg:mt-auto">
                <p className="text-sm font-medium text-slate-800">Phone, email, fax, and Facebook</p>
                <p className="mt-1 text-sm leading-snug text-slate-600">
                  Visit our contact page for numbers, reservation email, directions link, office photo, and map.
                </p>
                <Link
                  href="/contact"
                  className="mt-2.5 inline-flex rounded-full bg-brandRed px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Contact & directions
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="lg:flex lg:h-full lg:min-h-0 lg:flex-col">
            <div className="panel flex min-h-[min(36vh,260px)] flex-col overflow-hidden p-1.5 shadow-panel-light transition-shadow duration-300 hover:shadow-lg sm:min-h-[min(38vh,300px)] sm:p-2 lg:h-full lg:min-h-0 lg:flex-1">
              <iframe
                title="Golden Spur Motor Inn map"
                src={mapEmbed}
                loading="lazy"
                className="h-[min(36vh,260px)] w-full min-h-[180px] rounded-[1.15rem] border-0 saturate-100 sm:min-h-[220px] sm:h-[min(38vh,300px)] sm:rounded-[1.4rem] lg:h-full lg:min-h-0 lg:flex-1"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-14 sm:pb-16 md:pb-20">
        <Reveal>
          <div className="panel gold-border overflow-hidden shadow-panel-light transition-shadow duration-300 hover:shadow-xl">
            <div className="grid gap-5 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(156,23,37,0.12)),linear-gradient(90deg,#fff5e8,#f5dfbc)] p-6 sm:gap-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:p-9">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brandRed sm:text-sm">Plan your visit</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:mt-3 sm:text-3xl">Rates, dates, and questions</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-700">
                  Call anytime or reach us through the contact page—we’re happy to help with availability and directions.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3 md:flex-col">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-brandRed px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brandRed/25 transition hover:-translate-y-0.5 hover:opacity-90 sm:px-6 sm:py-3"
                >
                  Call to book
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white sm:px-6 sm:py-3"
                >
                  Contact page
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
