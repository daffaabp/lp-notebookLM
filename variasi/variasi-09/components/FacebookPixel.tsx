// @ts-nocheck
import React, { useEffect } from 'react';

declare global {
    interface Window {
        fbq: any;
    }
}

const FacebookPixel: React.FC = () => {
    const isInitialized = React.useRef(false);

    useEffect(() => {
        if (isInitialized.current) return;
        isInitialized.current = true;

        const pixelId = import.meta.env.VITE_FB_PIXEL_ID;

        // Only initialized if pixel ID is present
        if (!pixelId) {
            console.warn('Facebook Pixel ID (VITE_FB_PIXEL_ID) is missing in .env');
            return;
        }

        // Initialize Facebook Pixel
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');

        window.fbq('init', pixelId);
        window.fbq('track', 'PageView');

        // Only track ViewContent if not on Thank You page
        const isThankYou = window.location.pathname.includes('thank-you') || window.location.search.includes('page=thank-you');
        if (!isThankYou) {
            window.fbq('track', 'ViewContent', {
                content_name: 'Webinar Publikasi',
                content_category: 'Education',
                value: 129000,
                currency: 'IDR'
            });
        }
    }, []);

    return null;
};

export default FacebookPixel;
