import AppProviders from '@/components/wrappers/AppProviders'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import WidgetClientWrapper from '@/components/wrappers/WidgetWrapper'
import { PopupProvider } from '@/components/wrappers/PopupContext'
import PopupClientWrapper from "@/components/popup/popupclient"
import Script from 'next/script'
import { DiscountPopupProvider } from '@/components/popup/DiscountPopupContext'

import 'aos/dist/aos.css'
import '@/assets/scss/style.scss'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mediterranean Publishing',
  description:
    'Discover Mediterranean Publishing - Your gateway to captivating stories, expert insights, and vibrant culture. Explore our diverse collection of books and resources today!',
  icons: {
    icon: '/favicon.ico',
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
        <style suppressHydrationWarning>{}</style>

        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1406590091186942');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1406590091186942&ev=PageView&noscript=1"
          />
        </noscript>

        <div id="__next_splash">
          <DiscountPopupProvider>
            <PopupProvider>
              <AppProviders>{children}</AppProviders>

              {/* Tawk.to Chat */}
              <Script
                src="https://embed.tawk.to/6954e038d5d3bd197b4d818f/1jdponnti"
                strategy="afterInteractive"
                async
              />
            </PopupProvider>
          </DiscountPopupProvider>
        </div>

        <PopupClientWrapper />
        <WidgetClientWrapper />
      </body>
    </html>
  )
}
