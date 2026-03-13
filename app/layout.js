import Script from 'next/script'

export const metadata = {
  title: 'Flavour Fling — Restaurant-quality cooking at home',
  description: 'Chef-developed recipes that teach you the techniques behind great food.',
  verification: {
    google: 'adsense',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense verification */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1062053557991232"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics - replace G-XXXXXXXXXX with your actual GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
          `}
        </Script>
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
