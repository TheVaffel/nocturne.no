import * as React from 'react';

import { useSetLangContext } from '../infrastructure/root.tsx';

import { Db } from '../common/utils.tsx';

const SiteIndex: React.FunctionComponent<{}> = () => {

    const langState = useSetLangContext({langIndex: 1, canChange: true});

    return (
        <div>
            <h2>Hi!</h2>
            Since you're here on the home page, you're probably wondering what all the fuzz about this site is about. I'm working on figuring out that one too, so stay tuned. 
            In the meanwhile, I'm sure you can satisfy your hunger for answers by clicking around here. 

        </div>
    );
    }

export default SiteIndex;