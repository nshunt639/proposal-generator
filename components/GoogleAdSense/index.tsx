import React, { useEffect, useRef, useState } from 'react';

interface GoogleAdSensePros {
    slot: string
    format: "horizontal" | "vertical" | "auto"
}

export default function GoogleAdSense({ slot, format = "auto" }: GoogleAdSensePros) {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return (
        <div className="w-full h-full bg-gray-100 rounded-md relative">
            <div className='h-full text-center text-gray-100 flex items-center justify-center'>Google AdSense comes here!</div>
            <div className='absolute inset-0'>
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client={process.env.GOOGLE_ADSENSE_CLIENT_ID}
                    data-ad-slot={slot}
                    data-ad-format={format}
                    data-full-width-responsive="true"
                > </ins>
            </div>
        </div>

    );
};
