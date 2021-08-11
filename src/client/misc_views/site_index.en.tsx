import * as React from 'react';

import { useSetLangContext } from '../infrastructure/root.tsx';

import { Db } from '../common/utils.tsx';

const SiteIndex: React.FunctionComponent<{}> = () => {

    const langState = useSetLangContext({langIndex: 1, canChange: true});

    return (
        <div>
            <h2>Hi!</h2>
            Welcome to Nocturne.no!
            <Db />
            I could probably have written a few words here about what you will find on this web page, but to be honest, I think it's easier for you to find out by clicking around here on your own.
            <Db />
            Enjoy!
        </div>
    );
    }

export default SiteIndex;