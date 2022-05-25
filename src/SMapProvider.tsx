import React, {useState} from 'react';
import { useSMap } from './utils/map';


export const SMapProvider = <T extends {}>(Component: React.ComponentType<T>) => (props: T) => {
    // eslint-disable-next-line
    const [isLoading, setLoading] = useState(true);
    // eslint-disable-next-line
    useSMap(() => setLoading(false))

    if (isLoading) {
        return <div>loading...</div>;
    }

    return <Component {...props}/>;
}


