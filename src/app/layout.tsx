import AppProviders from '@/components/wrappers/AppProviders'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import WidgetClientWrapper from '@/components/wrappers/WidgetWrapper'
import { PopupProvider } from '@/components/wrappers/PopupContext'
import PopupClientWrapper from "@/components/popup/popupclient"
import Script from 'next/script'
import { DiscountPopupProvider } from '@/components/popup/DiscountPopupContext'
import { GoogleTagManager } from '@next/third-parties/google'
import GTMNoScript from '@/components/GTMNoScript'

import 'aos/dist/aos.css'
import '@/assets/scss/style.scss'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mediterraneanpublishing.com'),

  title: {
    default: 'Mediterranean Publishing',
    template: '%s | Mediterranean Publishing',
  },

  description:
    'Discover Mediterranean Publishing – professional eBook writing, publishing, editing, and marketing services.',

  icons: {
    icon: [
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  openGraph: {
    type: 'website',
    siteName: 'Mediterranean Publishing',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mediterranean Publishing',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-M6CFLD2Z" />
        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1406590091186942');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <GTMNoScript />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1406590091186942&ev=PageView&noscript=1"
          />
        </noscript>

        <DiscountPopupProvider>
          <PopupProvider>
            <AppProviders>{children}</AppProviders>

            <Script
              src="https://embed.tawk.to/6954e038d5d3bd197b4d818f/1jdponnti"
              strategy="afterInteractive"
              async
            />
          </PopupProvider>
        </DiscountPopupProvider>

        <PopupClientWrapper />
        <WidgetClientWrapper />
      </body>
    </html>
  )
}
