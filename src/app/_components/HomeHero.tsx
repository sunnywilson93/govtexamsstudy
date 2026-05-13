'use client'

import Link from 'next/link'
import { HeroAutoVisualizer } from '@/components/visualizers/polity/BillVisualizer'

export function HomeHero() {
  return (
    <section className="hero-gradient">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Left: copy + CTAs */}
          <div>
            <div
              className="mono mb-3 text-[10.5px] font-bold uppercase sm:mb-4 sm:text-[11px]"
              style={{
                color: 'var(--indigo-700)',
                letterSpacing: '.12em',
              }}
            >
              For UPSC · SSC · IBPS · RRB · CDS · State PSC
            </div>
            <h1
              className="text-[clamp(32px,7vw,64px)] font-extrabold"
              style={{
                margin: 0,
                color: 'var(--ink)',
                letterSpacing: '-.03em',
                lineHeight: 0.98,
              }}
            >
              Don&rsquo;t memorize.
              <br />
              <span style={{ color: 'var(--indigo-600)' }}>Watch it happen.</span>
            </h1>
            <p
              className="mt-4 max-w-[520px] text-[15px] leading-[1.55] sm:mt-5 sm:text-[17px]"
              style={{ color: 'var(--ink-2)' }}
            >
              Every concept on every government exam, taught as an interactive visual you can
              step through. Free, ad-light, and built for slow 4G on a five-year-old phone.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <Link
                href="/polity"
                className="inline-flex items-center gap-2 no-underline"
                style={{
                  padding: '14px 18px',
                  borderRadius: 12,
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                  fontWeight: 700,
                  fontSize: 14.5,
                }}
              >
                Start with Polity →
              </Link>
              <Link
                href="#subjects"
                className="inline-flex items-center gap-2 no-underline"
                style={{
                  padding: '14px 18px',
                  borderRadius: 12,
                  background: 'transparent',
                  color: 'var(--ink)',
                  fontWeight: 600,
                  fontSize: 14.5,
                  border: '.5px solid var(--rule-2)',
                }}
              >
                Browse visualizers
              </Link>
            </div>
            <div
              className="mono mt-6 flex flex-wrap gap-x-4 gap-y-1 text-[11px]"
              style={{
                color: 'var(--ink-3)',
                letterSpacing: '.06em',
              }}
            >
              <span>NO SIGNUP · COOKIE-BASED PROGRESS</span>
              <span style={{ color: 'var(--ink-4)' }}>·</span>
              <span>WORKS ON 4G · &lt; 200KB PER PAGE</span>
            </div>
          </div>

          {/* Right: live visualizer */}
          <div>
            <HeroAutoVisualizer />
            <div
              className="mt-2.5 flex items-center justify-between text-xs"
              style={{ color: 'var(--ink-3)' }}
            >
              <span className="mono" style={{ letterSpacing: '.04em' }}>
                ▶ LIVE PREVIEW · POLITY · ART. 107–111
              </span>
              <Link
                href="/polity/parliament"
                className="font-bold no-underline"
                style={{ color: 'var(--indigo-600)' }}
              >
                Open visualizer →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
