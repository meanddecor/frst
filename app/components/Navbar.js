'use client';

import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const firstItemRef = useRef(null);
  const buttonRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    if (open) {
      firstItemRef.current?.focus();
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const root = document.scrollingElement || document.documentElement;
    let ticking = false;

    const update = () => {
      ticking = false;
      const max = root.scrollHeight - window.innerHeight;
      const y = root.scrollTop;
      const ratio = max > 0 ? Math.min(Math.max(y / max, 0), 1) : 1;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const ro = new ResizeObserver(update);
    ro.observe(document.body);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="menuFrame sticky top-0 z-50">
      <div className="menuScale">
        <div className="menuRoot" style={{ position: 'relative', width: 384 }}>
      {/* BAR */}
      <div style={{ position: 'relative', height: 39.98, borderRadius: 3, overflow: 'hidden' }}>
        <div className="absolute inset-0" style={{ background: 'rgba(229,229,229,.70)', borderRadius: 3, zIndex: 0 }} />

        {/* PROGRESS (behind content) */}
        <div ref={barRef} className="progressFill" aria-hidden />

        {/* left icon */}
        <div style={{ position: 'absolute', left: 7, top: 6.23, width: 21, height: 27, zIndex: 2 }}>
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg,#555 0%,#111 100%)', borderRadius: 2, opacity: .9 }} />
        </div>

        {/* brand */}
        <div
          style={{
            position: 'absolute', left: 24.62, top: 6, zIndex: 2,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            color: 'var(--foreground)', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600,
            fontSize: 15.72, lineHeight: '13.10px'
          }}
        >FRST<br/>SUBJECT</div>

        {/* burger */}
        <button
          id="menu-button"
          ref={buttonRef}
          aria-expanded={open}
          aria-controls="menu-panel"
          aria-haspopup="true"
          aria-label={open ? 'close menu' : 'open menu'}
          onClick={() => setOpen(o => !o)}
          className={`burger ${open ? 'open' : ''}`}
          style={{ position: 'absolute', left: 176, top: 16, width: 22, height: 12, zIndex: 3, cursor: 'pointer', background: 'transparent', border: 0, padding: 0 }}
        >
          <span/><span/><span/>
        </button>

        {/* right label */}
        <div
          style={{
            position: 'absolute', left: 305, top: 11, width: 64, height: 15, zIndex: 2,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            color: 'var(--foreground)', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500,
            fontSize: 11.68, lineHeight: '13px', letterSpacing: '1px', textTransform: 'uppercase'
          }}
        >SERVICES</div>
        </div>

      {/* COLLAPSING PANEL */}
      <div
        id="menu-panel"
        role="region"
        aria-labelledby="menu-button"
        className={`panelWrap ${open ? 'show' : ''}`}
        style={{
          position: 'absolute', top: 40, left: 0, width: 384,
          overflow: 'hidden', zIndex: 2, pointerEvents: open ? 'auto' : 'none'
        }}
      >
        <div className={`panelInner ${open ? 'show' : ''}`} style={{ position: 'relative', width: 384, height: 81, marginTop: 6 }}>
          <button type="button" ref={firstItemRef} className="btn" style={{ left: 0,   top: 0  }}>CASE STUDIES</button>
          <button type="button" className="btn" style={{ left: 197, top: 0  }}>SERVICES</button>
          <button type="button" className="btn" style={{ left: 0,   top: 42 }}>ABOUT</button>
          <button type="button" className="btn" style={{ left: 197, top: 42 }}>PRICING</button>
        </div>
        {/* Second panel block */}
        <div className={`panelInner ${open ? 'show' : ''}`} style={{ position: 'relative', width: 384, height: 160, marginTop: 6 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 384, height: 160, background: 'rgba(229,229,229,0.70)' }} />
          <div style={{ position: 'absolute', left: 14, top: 10, width: 356, height: 141 }}>
            {/* Social row */}
            <div style={{ position: 'absolute', left: 74, top: 3, height: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ font: '600 7.57px/7.57px Inter, system-ui, sans-serif' }}>↗</div>
              <div style={{ font: '400 7.57px/7.57px Inter, system-ui, sans-serif', letterSpacing: '.15px', textTransform: 'uppercase' }}>INSTAGRAM</div>
            </div>
            <div style={{ position: 'absolute', left: 152, top: 3, height: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ font: '600 7.57px/7.57px Inter, system-ui, sans-serif' }}>↗</div>
              <div style={{ font: '400 7.57px/7.57px Inter, system-ui, sans-serif', letterSpacing: '.15px', textTransform: 'uppercase' }}>LinkedIn</div>
            </div>
            <div style={{ position: 'absolute', left: 230, top: 3, height: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ font: '600 7.57px/7.57px Inter, system-ui, sans-serif' }}>↗</div>
              <div style={{ font: '400 7.57px/7.57px Inter, system-ui, sans-serif', letterSpacing: '.15px', textTransform: 'uppercase' }}>FACEBOOK</div>
            </div>

            {/* Title */}
            <div style={{ position: 'absolute', left: 107, top: 36, display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'var(--foreground)', font: '600 36.56px/30.46px Inter, system-ui, sans-serif' }}>FRST<br/>SUBJECT</div>

            {/* Bottom tagline */}
            <div style={{ position: 'absolute', left: 0, top: 126, width: 356, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ color: 'var(--foreground)', font: '300 italic 8px/13px Inter, system-ui, sans-serif', letterSpacing: '1px', textTransform: 'uppercase' }}>Paid Media Management</span>
              <span style={{ color: 'var(--foreground)', font: '600 8px/13px Inter, system-ui, sans-serif', letterSpacing: '1px', textTransform: 'uppercase', padding: '0 8px' }}>• Branding •</span>
              <span style={{ color: 'var(--foreground)', font: '300 italic 8px/13px Inter, system-ui, sans-serif', letterSpacing: '1px', textTransform: 'uppercase' }}>Website Development</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Inherit theme color */
        .menuRoot{color:var(--foreground)}
        .menuFrame{--g:clamp(24px,6vw,48px);--gy:clamp(16px,5vh,32px);padding:var(--gy) var(--g);width:100%;box-sizing:border-box}
        .menuScale{--s:clamp(0, calc((min(100vw, 100%) - (2 * var(--g))) / 384), 1); width:calc(384px*var(--s)); margin:0 auto}
        .menuRoot{transform-origin:top left;transform:scale(var(--s))}
        .burger{display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;color:var(--foreground)}
        .burger span{width:100%;height:1px;background:currentColor;transform-origin:center;transition:transform .24s ease,opacity .18s ease,background .18s ease}
        /* Ensure three bars are visible on small screens too */
        @media (max-width:480px){.burger{height:12px}.burger span{height:1.5px}}
        .burger:not(.open):hover span:nth-child(2){opacity:0}
        .burger:not(.open):hover span:nth-child(1){transform:translateY(4px)}
        .burger:not(.open):hover span:nth-child(3){transform:translateY(-4px)}
        .burger.open span:nth-child(1){transform:translateY(5.5px) rotate(45deg); background:currentColor}
        .burger.open span:nth-child(2){opacity:0; transform:scaleX(0)}
        .burger.open span:nth-child(3){transform:translateY(-5.5px) rotate(-45deg); background:currentColor}

        .progressFill{position:absolute;inset:0;transform-origin:left center;transform:scaleX(0);z-index:1;will-change:transform;background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899)}

        .panelWrap{max-height:0; transition:max-height .32s cubic-bezier(.2,.7,.2,1)}
        .panelWrap.show{max-height:265px}
        .panelInner{transform:translateY(-10px); opacity:0; transition:transform .28s cubic-bezier(.2,.7,.2,1), opacity .22s}
        .panelInner.show{transform:translateY(0); opacity:1}

        .btn{position:absolute;width:187px;height:39px;display:flex;align-items:center;justify-content:center;background:rgba(229,229,229,.70);border-radius:3px;box-shadow:0 4px 4px rgba(0,0,0,.25);text-transform:uppercase;font:500 13px/20.36px Inter,system-ui,sans-serif;color:inherit;text-decoration:none;border:0;cursor:pointer;appearance:none}
        .btn:focus-visible{outline:2px solid currentColor; outline-offset:2px}
        .burger:focus-visible{outline:2px solid currentColor; outline-offset:2px}
      `}</style>
      </div>
      </div>
    </div>
  );
}






