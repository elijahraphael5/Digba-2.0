"use client";

import Script from "next/script";

export default function HomepageScripts() {
  return (
    <>
      <Script
        id="iubenda-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var _iub = _iub || [];
_iub.csConfiguration = {
  siteId: 3924370,
  cookiePolicyId: 91157620,
  lang: 'en-GB',
  storage: { useSiteId: true },
};`,
        }}
      />
      <Script
        src="/cs.iubenda.com/autoblocking/3924370.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="afterInteractive"
      />
      <Script
        src="/d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8af24.js?site=6783d77212b58244ace7036d"
        strategy="afterInteractive"
      />
      <Script
        src="/cdn.prod.website-files.com/6783d77212b58244ace7036d/js/webflow.schunk.da2a71223c5dec6e.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdn.prod.website-files.com/6783d77212b58244ace7036d/js/webflow.751e0867.fcb9e19f4949510c.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdn.prod.website-files.com/6783d77212b58244ace7036d/66ba5a08efe71070f98dd10a/67a9c2ffa0a2464b49112449/4j60sckdme-1.1.1.js"
        strategy="afterInteractive"
      />
      <Script src="/unpkg.com/lenis%401.1.9/dist/lenis.min.js" strategy="afterInteractive" />
      <Script
        src="/cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdn.jsdelivr.net/npm/gsap%403.12.5/dist/CustomEase.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdn.jsdelivr.net/gh/timothydesign/script/split-type.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdn.jsdelivr.net/gh/lumosframework/scripts%40v1.0.5/themes.js"
        strategy="afterInteractive"
      />
      <Script
        src="/cdn.jsdelivr.net/gh/digba/digba%40v2.10/index.js"
        strategy="afterInteractive"
      />
    </>
  );
}