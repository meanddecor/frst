import Button from "@/components/Button";
import Link from "next/link";
export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="book" href="/contact" ariaLabel="Book a call">
        Book a Call
      </Button>

      <Button variant="journey-outline" href="/work" ariaLabel="Begin your journey">
        Begin Your Journey
      </Button>
      <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-200/80 px-4 py-3 text-sm font-medium text-black
                           ring-1 ring-black/10 hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Book a call"
              >
                {/* Simple ticket/receipt icon */}
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M5 6h14v5a2 2 0 0 0 0 2v5H5v-5a2 2 0 0 0 0-2V6zm4 2v8m6-8v8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Book a Call
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center rounded-md px-4 py-3 text-sm font-medium
                           ring-1 ring-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Begin your journey"
              >
                Begin Your Journey
              </Link>
    </div>
    
  );
}