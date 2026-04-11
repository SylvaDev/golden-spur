'use client';

import Image from 'next/image';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type SyntheticEvent } from 'react';

const INTERVAL_MS = 4000;

/** Property exterior plus updated guest-room photos. */
const SLIDES = [
  { src: '/outside.jpg', alt: 'Golden Spur Motor Inn exterior on Highway 2' },
  { src: '/updated-rooms.jpg', alt: 'Updated guest room at Golden Spur Motor Inn' },
  { src: '/updated-room2.jpg', alt: 'Guest room interior at Golden Spur Motor Inn' },
  { src: '/updated-single.jpg', alt: 'Single guest room at Golden Spur Motor Inn' },
  { src: '/updated-single2.jpg', alt: 'Guest room layout at Golden Spur Motor Inn' },
  { src: '/updated-bathroom.jpg', alt: 'Updated guest bathroom at Golden Spur Motor Inn' },
] as const;

type NaturalMap = Record<string, { w: number; h: number }>;

function maxCarouselHeightPx(viewportH: number) {
  return Math.min(viewportH * 0.38, 400);
}

type HeroCarouselProps = {
  /** On large screens, grow to fill flex space so the column aligns with the intro panel beside it. */
  fillColumn?: boolean;
};

export function HeroCarousel({ fillColumn = false }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [natural, setNatural] = useState<NaturalMap>({});
  const [containerWidth, setContainerWidth] = useState(0);
  const [viewportH, setViewportH] = useState(800);
  const [isLg, setIsLg] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const apply = () => setIsLg(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onResize = () => setViewportH(window.innerHeight);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useLayoutEffect(() => {
    if (fillColumn && isLg) return;
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setContainerWidth(el.getBoundingClientRect().width);
    });
    ro.observe(el);
    setContainerWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, [fillColumn, isLg]);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance, reduceMotion]);

  const recordNatural = useCallback((src: string, w: number, h: number) => {
    if (w <= 0 || h <= 0) return;
    setNatural((prev) => ({ ...prev, [src]: { w, h } }));
  }, []);

  const slide = SLIDES[index];
  const maxH = maxCarouselHeightPx(viewportH);

  const ratio = useMemo(() => {
    const dim = natural[slide.src];
    if (dim && dim.h > 0) return dim.w / dim.h;
    return 4 / 3;
  }, [natural, slide.src]);

  const frameHeightPx = useMemo(() => {
    if (containerWidth <= 0) return 180;
    return Math.min(containerWidth / ratio, maxH);
  }, [containerWidth, ratio, maxH]);

  const heightStyle = Math.max(frameHeightPx, 148);

  const useFillLayout = fillColumn && isLg;

  const frame = (
    <>
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={
            'absolute inset-0 px-2 transition-opacity duration-700 ease-out sm:px-3 ' +
            (i === index ? 'z-[1] opacity-100' : 'z-0 opacity-0 pointer-events-none')
          }
          aria-hidden={i !== index}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            className="object-contain object-center"
            sizes="(min-width: 1536px) 640px, (min-width: 1024px) 48vw, 100vw"
            priority={i === 0}
            onLoad={(e: SyntheticEvent<HTMLImageElement>) => {
              const el = e.currentTarget;
              recordNatural(s.src, el.naturalWidth, el.naturalHeight);
            }}
          />
        </div>
      ))}
    </>
  );

  if (useFillLayout) {
    return (
      <div className="relative flex min-h-[11rem] w-full min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-brandGold/35 bg-[#e8e3d9]/95 shadow-lg shadow-black/10 ring-1 ring-black/[0.06]">
        <div className="relative min-h-0 flex-1">
          {frame}
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-14 bg-gradient-to-t from-black/25 to-transparent sm:h-16"
          aria-hidden
        />

        <div
          className="absolute bottom-2.5 left-0 right-0 z-[3] flex justify-center gap-2 sm:bottom-3"
          role="tablist"
          aria-label="Guest room photos"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${s.alt}`}
              className={
                'pointer-events-auto h-2.5 rounded-full transition-all duration-300 ' +
                (i === index ? 'w-8 bg-brandRed' : 'w-2.5 bg-white/95 shadow-sm hover:bg-white')
              }
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {SLIDES.length}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-brandGold/35 bg-[#e8e3d9]/95 shadow-lg shadow-black/10 ring-1 ring-black/[0.06] backdrop-blur-[2px]">
      <div
        ref={containerRef}
        className="relative mx-auto w-full overflow-hidden transition-[height] duration-500 ease-out motion-reduce:transition-none"
        style={{ height: `${heightStyle}px` }}
      >
        {frame}
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-14 bg-gradient-to-t from-black/25 to-transparent sm:h-16"
        aria-hidden
      />

      <div
        className="absolute bottom-2.5 left-0 right-0 z-[3] flex justify-center gap-2 sm:bottom-3"
        role="tablist"
        aria-label="Guest room photos"
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show slide ${i + 1}: ${s.alt}`}
            className={
              'pointer-events-auto h-2.5 rounded-full transition-all duration-300 ' +
              (i === index ? 'w-8 bg-brandRed' : 'w-2.5 bg-white/95 shadow-sm hover:bg-white')
            }
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {SLIDES.length}
      </p>
    </div>
  );
}
