import * as React from 'react';

import { useSetLangContext } from '../infrastructure/root.tsx';
    
import { Db } from '../common/utils.tsx';

const SiteIndexNo: React.FunctionComponent<{}> = () => {
    
    const langState = useSetLangContext({langIndex: 0, canChange: true});

    return (
    <div>
        <h2>Hei!</h2>

        Velkommen til Nocturne.no! 
        <Db />
        Jeg kunne sikkert skrevet noen ord her om hva du finner på denne nettsiden, men ærlig talt tror jeg det er lettere for deg å finne ut av det ved å klikke rundt på egen hånd. 
        <Db />
        God fornøyelse!

    </div>
    );
}

export default SiteIndexNo;