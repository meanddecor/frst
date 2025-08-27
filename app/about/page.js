'use client';
import HeroSplit from "../components/HeroSplit";
import MediaZoomSection from "../components/MediaZoomSection";
import IdeasSplitExact from "../components/IdeasSplitExact";
import IdeasSplitExactReversed from "../components/IdeasSplitExactReversed";
import FAQ from "../components/faq";


export default function Home() {
  return (
    <main>
        <HeroSplit />
        <MediaZoomSection
        kind="image"
        src="/bg.png"
        width={1920}
        height={1080}
        startScale={0.6}   // starts smaller
        zoomStart={0.08}   // when zoom begins
        zoomEnd={0.6}      // when it reaches 100%
        sectionVH={200}    // length of the pinned effect
      />
         <section className="w-full  text-white">
      <div className="mx-auto max-w-[1006px] px-4 md:px-0 py-8 md:py-10">
        <p className="text-[17px] md:text-[20px] leading-[26.32px]">
          <strong className="font-semibold">VNTNR has now closed its doors.</strong>{' '}
          If you’re still waiting on an order, rest assured it’s currently being packed
          and will be with you shortly. If you have any questions, we’re still here to help—just
          reach out to{' '}
          <a
            href="mailto:hello@vntnr.co"
            className="font-semibold underline underline-offset-[3px] hover:opacity-90"
          >
            hello@vntnr.co
          </a>
          .
        </p>

        <p className="mt-5 text-[16px] md:text-[19.6px] leading-[26.32px]">
          We will be in touch in the near future on how you can purchase your beloved
          favourites—like St. Hugo, Ysios, Church Road, and Orlando—as well as an expanded
          selection of exceptional wines, a variety of exclusive member-only benefits and more!
        </p>
      </div>
    </section>
    <IdeasSplitExact />
    <section className="w-full  text-white">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center px-4 py-12 md:py-16">
        {/* Grey blurb */}
      

        {/* Big centered heading */}
        <h2
          className="mx-auto mb-6 max-w-[930px] text-center font-normal
                     text-[clamp(28px,6vw,51.56px)] leading-[60.75px]"
        >
        a
        </h2>
        <p
          className="mx-auto max-w-[746px] text-center text-[#757575] text-[18.12px] leading-[27.06px] tracking-[0.77px]"
        >
         Aspect of the project
        </p>
      </div>
    </section>
    <IdeasSplitExactReversed />
<FAQ />
    </main>
  );
}
