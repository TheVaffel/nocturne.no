import * as React from 'react';

import { useSetLangContext } from '../infrastructure/root.tsx';

import { Db } from '../common/utils.tsx';

const SiteIndex: React.FunctionComponent<{}> = () => {

    const langState = useSetLangContext({langIndex: 1, canChange: true});

    return (
        <div>
            <h2>Nocturne.no</h2>
            <Db />
            - Håkon Flatval
        </div>
    );
    }

export default SiteIndex;
