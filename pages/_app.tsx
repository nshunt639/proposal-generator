import 'react-toastify/dist/ReactToastify.css'
import 'styles/globals.scss'

import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'

import MainLayout from 'layouts/Main'
import Head from 'next/head'
import { LayoutProvider } from 'providers/LayoutProvider'
import Script from 'next/script'
import { useEffect } from 'react'
import { pageview } from 'helpers/ga';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()
    
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            pageview(url, document.title);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return <>
        <Head>
            <title>Proposal Generator</title>
        </Head>

        <LayoutProvider>
            <MainLayout>
                <Component {...pageProps} />
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={true}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                ></ToastContainer>
            </MainLayout>
        </LayoutProvider>

        <Script id="google-adsense" async
            onError={(e) => { console.error("Google AdSense script failed to load!", e); }}
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
        />

        <Script id="google-analytics" async
            onError={(e) => { console.error("Google Analytics script failed to load!", e); }}
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TRACK_ID}`}
            crossOrigin="anonymous"
        />

        <Script id='google-analytics-gtag' strategy='afterInteractive'>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GOOGLE_ANALYTICS_TRACK_ID}', {
                page_path: window.location.pathname,
                });
            `}
        </Script>
    </>
}

export default MyApp
