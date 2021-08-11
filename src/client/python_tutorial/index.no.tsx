import * as React from 'react';

import { Metadata } from '../../server/update_metadata.ts';

import { PostListEntry } from '../common/post_utils.tsx';
import { tutorialUrlNo } from './tutorial_wrapper.tsx';

import { Db } from '../common/utils.tsx';

export const TutorialIndexNo = (props: {metadatas: Metadata[][]}) => (
    <div>
        <h2>Innføring i programmering med Python</h2>
        <div>
            Hei!
            <Db />
            Dette er en innføring i programmering med programmeringsspråket Python. Målet med innføringen er å ta et menneske uten noen erfaring med programmering med på en reise hvor vi dekker grunnleggende teori og praksis innen det å programmere, med Python som førstespråk. 
            <Db />
            Om dette hørtes interessant ut, kan du begynne med å lese <a href={tutorialUrlNo + '/forord'} > forordet</a> for en mer utfyllende introduksjon til denne bloggserien.

            <Db />
            Lykke til på reisen!
        </div>

        {
            props.metadatas[0].map((met: Metadata) =>
                (<PostListEntry key={met.hash} metadata={met} blogUrl={tutorialUrlNo}/>))
        }
    </div>
);