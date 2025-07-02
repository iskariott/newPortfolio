'use client';

import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export function BodyClassProvider() {
    const isDesktop = useMediaQuery({ minWidth: 769 });

    useEffect(() => {
        const bodyClassList = document.body.classList;
        if (isDesktop) {
            bodyClassList.contains('mobile') && bodyClassList.remove('mobile');
            !bodyClassList.contains('desktop') && bodyClassList.add('desktop');
        } else {
            bodyClassList.contains('desktop') && bodyClassList.remove('desktop');
            !bodyClassList.contains('mobile') && bodyClassList.add('mobile');
        }
    }, [isDesktop]);

    return null;
}
