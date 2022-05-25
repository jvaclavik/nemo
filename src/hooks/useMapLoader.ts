import { useState, useEffect } from 'react';

export const useMapLoader = function(loaded: any) {
    const [mapLoader, setMapLoader] = useState({
        loadedMapApi: false,
        SMap: null,
        JAK: null,
    });

    useEffect(() => {
        if (loaded) {
          // @ts-ignore
            window.Loader.async = true;
            // @ts-ignore
            window.Loader.load(null, { pano: true, suggest: true, poi: true }, () => {
                setMapLoader({
                    loadedMapApi: true,
                    // @ts-ignore
                    SMap: window.SMap,
                    // @ts-ignore
                    JAK: window.JAK,
                });
            });
        }
    }, [loaded]);

    return [mapLoader];
};

