"use client";

import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  ariaLabel,
  icon,
}) {
  const classes = [
    "btn-base",
    variant === "book"
      ? "btn-book"
      : variant === "learn"
      ? "btn-learn"
      : variant === "learn-outline"
      ? "btn-learn-outline"
      : variant === "journey-outline"
      ? "btn-journey-outline"
      : variant === "explore"
      ? "btn-explore"
      : variant === "continue"
      ? "btn-continue"
      : variant === "outline"
      ? "btn-outline"
      : "btn-primary",
    size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "btn-md",
    disabled || loading ? "btn-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconNode =
    icon !== undefined
      ? icon
      : variant === "book"
      ? (
          <svg aria-hidden viewBox="0 0 24 24" className="btn-icon">
            <path
              d="M5 6h14v5a2 2 0 0 0 0 2v5H5v-5a2 2 0 0 0 0-2V6zm4 2v8m6-8v8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        )
      : null;

  const content = (
    <span className="btn-content">
      {loading ? <span className="btn-spinner" aria-hidden /> : null}
      {iconNode}
      <span>{children}</span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={classes}
        aria-disabled={disabled || loading}
      >
        {content}
        <Styles />
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled || loading}
      aria-label={ariaLabel}
    >
      {content}
      <Styles />
    </button>
  );
}

function Styles() {
  return (
    <style jsx>{`
      .btn-base{display:inline-flex;align-items:center;justify-content:center;border-radius:8px;gap:8px;cursor:pointer;transition:transform .06s ease, background .2s ease, color .2s ease;user-select:none;text-transform:uppercase;font:600 14px/20px Inter,system-ui,sans-serif;letter-spacing:.02em}
      .btn-md{height:40px;padding:0 16px}
      .btn-lg{height:52px;padding:0 22px}
      .btn-sm{height:32px;padding:0 12px}

      /* Legacy/base variants */
      .btn-primary{background:rgba(229,229,229,.70);color:#000;box-shadow:0 4px 4px rgba(0,0,0,.25)}
      .btn-outline{background:transparent;color:var(--foreground);outline:1px solid var(--foreground);outline-offset:-1px}

      /* New semantic variants */
      /* Book a Call → matches Tailwind snippet */
      .btn-book{background:rgba(229,229,229,.80);color:#000;border-radius:6px;text-transform:none;font:500 14px/20px Inter,system-ui,sans-serif;letter-spacing:0;gap:8px;padding:12px 16px;box-shadow:0 0 0 1px rgba(0,0,0,.10)}
      .btn-book:hover{background:#e5e5e5}
      .btn-book:focus{outline:none}
      .btn-book:focus-visible{outline:none;box-shadow:0 0 0 1px rgba(0,0,0,.10), 0 0 0 2px rgba(255,255,255,.60)}

      /* Learn More → exact spec from design */
      .btn-learn{background:#E3E3E3;color:#080808;border-radius:4px;height:28.8px;padding:0 12px;width:85.66px;text-transform:none;font:400 11.06px/16.8px Inter,system-ui,sans-serif;letter-spacing:.24px}
      
      /* Outlined Learn More → exact spec from design */
      .btn-learn-outline{background:transparent;color:#fff;border-radius:4.35px;height:58px;width:185.6px;text-transform:none;font:500 18.85px/19px Inter,system-ui,sans-serif;outline:0.75px solid #fff;outline-offset:-0.75px}

      /* Outlined Begin Your Journey → matches Tailwind snippet */
      .btn-journey-outline{background:transparent;color:#fff;border-radius:6px;text-transform:none;font:500 14px/20px Inter,system-ui,sans-serif;letter-spacing:0;padding:12px 16px;box-shadow:0 0 0 1px rgba(255,255,255,.80)}
      .btn-journey-outline:hover{background:rgba(255,255,255,.10)}
      .btn-journey-outline:focus{outline:none}
      .btn-journey-outline:focus-visible{outline:none;box-shadow:0 0 0 1px rgba(255,255,255,.80), 0 0 0 2px rgba(255,255,255,.60)}
      
      /* Explore → inverted outline with filled hover */
      .btn-explore{background:transparent;color:#000;background:rgba(229,229,229,.7);border:1px solid rgba(0,0,0,.6)}
      .btn-explore:hover{background:#000;color:#fff}

      /* Continue → accent color; swap #15b7e7 with your brand accent */
      .btn-continue{background:#15b7e7;color:#000}
      .btn-continue:hover{filter:brightness(1.05)}
      
      .btn-base:focus-visible{outline:2px solid currentColor;outline-offset:2px}
      /* Variant-specific focus overrides to win cascade over .btn-base */
      .btn-book:focus-visible{outline:none;box-shadow:0 0 0 1px rgba(0,0,0,.10), 0 0 0 2px rgba(255,255,255,.60)}
      .btn-journey-outline:focus-visible{outline:none;box-shadow:0 0 0 1px rgba(255,255,255,.80), 0 0 0 2px rgba(255,255,255,.60)}
      .btn-disabled{opacity:.6;cursor:not-allowed}
      .btn-content{display:inline-flex;align-items:center;gap:8px}
      .btn-icon{width:16px;height:16px;display:block}
      .btn-spinner{width:14px;height:14px;border-radius:50%;border:2px solid currentColor;border-top-color:transparent;animation:spin .8s linear infinite}
      @keyframes spin{to{transform:rotate(360deg)}}
    `}</style>
  );
}
