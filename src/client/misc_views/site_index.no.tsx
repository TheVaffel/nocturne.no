import * as React from 'react';

import { useSetLangContext } from '../infrastructure/root.tsx';
    
import { Db } from '../common/utils.tsx';

const SiteIndexNo: React.FunctionComponent<{}> = () => {
    
    const langState = useSetLangContext({langIndex: 0, canChange: true});

    return (
    <div>
        <h2>Hei!</h2>
        Siden du er her, er du antakeligvis nysgjerrig på hva greia med denne siden er. 
        <br/>
        Jobber med saken. 
        <Db/>
        Imens kan du gjerne slukke kunnskapstørsten ved å klikke rundt her.

    </div>
    );
}

export default SiteIndexNo;