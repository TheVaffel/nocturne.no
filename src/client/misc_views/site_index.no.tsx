import * as React from 'react';

import { Db } from '../common/utils.tsx';
import { Toggle, LangToggle } from '../common/toggle.tsx';
import { GlobalProps } from '../infrastructure/root.tsx';

const SiteIndexNo: React.FunctionComponent<GlobalProps> = (props) => (
    <div>
        <h2>Hei!</h2>
        Siden du er her, er du antakeligvis nysgjerrig på hva greia med denne siden er. 
        <br/>
        Jobber med saken. 
        <Db/>
        Imens kan du gjerne slukke kunnskapstørsten ved å klikke rundt her.
        <Db />
        Vær obs på at alt i området er under bygging.

    </div>
);

export default SiteIndexNo;