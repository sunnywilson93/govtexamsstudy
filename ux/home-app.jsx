/* global React, ReactDOM, MobileHome, DesktopHome, WordmarkProposals,
   useTweaks, TweaksPanel, TweakSection, TweakRadio */
// home-app.jsx — composes Home into a design_canvas with mobile + desktop +
// the wordmark proposals, plus the global Tweaks panel.

const TWEAK_DEFAULTS_HOME = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "density": "regular",
  "motion": "regular",
  "personality": "studious"
}/*EDITMODE-END*/;

function PhoneShellH({ children, width = 400, height = 820 }) {
  return (
    <div style={{
      width, height, background: '#0c0a09', borderRadius: 44, padding: 10,
      boxShadow: '0 30px 60px -24px rgba(28,25,23,.25), inset 0 0 0 1px rgba(255,255,255,.06)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)',
        width: 96, height: 28, borderRadius: 999, background: '#000', zIndex: 10,
      }}/>
      <div style={{ width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden', background: 'var(--paper)', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 44,
          padding: '14px 28px 0', display: 'flex',
          alignItems: 'flex-start', justifyContent: 'space-between',
          fontSize: 13, fontWeight: 600, color: 'var(--ink)',
          zIndex: 6, pointerEvents: 'none',
        }} className="mono">
          <span>9:41</span>
          <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center' }}>
            <svg width="16" height="10" viewBox="0 0 16 10"><g fill="currentColor"><rect x="0" y="6" width="3" height="4"/><rect x="4" y="4" width="3" height="6"/><rect x="8" y="2" width="3" height="8"/><rect x="12" y="0" width="3" height="10"/></g></svg>
            <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0" y="0" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="2" y="2" width="13" height="6" fill="currentColor"/><rect x="19" y="3" width="2" height="4" rx=".6" fill="currentColor"/></svg>
          </span>
        </div>
        <div style={{ paddingTop: 44, height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</div>
      </div>
    </div>
  );
}

function BrowserShellH({ children, width = 1280, height = 800 }) {
  return (
    <div style={{
      width, height, borderRadius: 14, overflow: 'hidden',
      background: 'var(--paper)', border: '.5px solid var(--rule)',
      boxShadow: '0 30px 60px -24px rgba(28,25,23,.18)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        height: 38, padding: '0 12px', background: 'var(--paper-2)',
        borderBottom: '.5px solid var(--rule)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ed6a5e' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#f4bf4f' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#62c554' }} />
        </span>
        <div style={{
          flex: 1, height: 22, borderRadius: 6,
          background: 'var(--paper)', border: '.5px solid var(--rule)',
          display: 'flex', alignItems: 'center', padding: '0 10px',
          fontSize: 11.5, color: 'var(--ink-3)',
        }} className="mono">govtstudy.org</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function HomeApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_HOME);
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = t.theme;
    root.dataset.density = t.density;
    root.dataset.motion = t.motion;
    root.dataset.personality = t.personality;
  }, [t.theme, t.density, t.motion, t.personality]);

  return (
    <>
      <window.DesignCanvas>
        <window.DCSection id="home-mobile" title="Home · mobile" subtitle="Sells the visual paradigm in 5 seconds. The hero visualizer auto-cycles.">
          <window.DCArtboard id="mob-home" label="Home · 390 wide" width={400} height={820}>
            <PhoneShellH width={400} height={820}>
              <MobileHome />
            </PhoneShellH>
          </window.DCArtboard>
        </window.DCSection>

        <window.DCSection id="home-desktop" title="Home · desktop" subtitle="Same paradigm at scale. Hero is split: copy left, live visualizer right.">
          <window.DCArtboard id="dsk-home" label="Desktop · 1280" width={1300} height={820}>
            <BrowserShellH width={1300} height={820}>
              <DesktopHome />
            </BrowserShellH>
          </window.DCArtboard>
        </window.DCSection>

        <window.DCSection id="wordmark" title="Wordmark · 3 proposals" subtitle="Pick one — we&rsquo;ll bake it into every page header.">
          <window.DCArtboard id="wm" label="Wordmark options" width={760} height={300}>
            <WordmarkProposals />
          </window.DCArtboard>
        </window.DCSection>
      </window.DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Personality" />
        <TweakRadio label="Tone" value={t.personality}
          options={['studious', 'editorial', 'gamelike']}
          onChange={(v) => setTweak('personality', v)} />
        <TweakSection label="Theme" />
        <TweakRadio label="Theme" value={t.theme}
          options={['light', 'dark']}
          onChange={(v) => setTweak('theme', v)} />
        <TweakSection label="Density" />
        <TweakRadio label="Density" value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)} />
        <TweakSection label="Motion" />
        <TweakRadio label="Intensity" value={t.motion}
          options={['subtle', 'regular', 'lively']}
          onChange={(v) => setTweak('motion', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomeApp />);
