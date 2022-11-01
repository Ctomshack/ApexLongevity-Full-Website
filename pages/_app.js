import '../styles/globals.css';
import SEO from "@bradgarropy/next-seo";
import Script from 'next/script';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import { LiveChatWidget } from '@livechat/widget-react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    hotjar.initialize(3211093, 6)
  }, [])

  return (
  <>
  <LiveChatWidget license="9239160" group="0" />
  <SEO
        title="Apex Longevity"
        description="Compliant cash discounts for chiropractors and a discount medical program for chirorpactic patients nationwide"
        keywords={[
          "chiropractor",
          "chiropractic",
          "dmpo",
          "discount medical plan",
          "discount medical plan organization",
          "apex",
          "apex longevity",
          "CHUSA",
          "chirohealthusa",
          "chirohealth",
          "chiro health",
          "chiro health usa",
          "chiropractor cash discount",
          "uninsured",
          "cash",
          "cash savings",
          "out of pocket",
          "uninsured",
          "underininsured",
          "benefits"
        ]}
      />
  <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
      </Script>

  <Component {...pageProps} />
  </>
  )
}

export default MyApp
