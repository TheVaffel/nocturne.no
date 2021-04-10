import * as React from 'react';

import { Metadata } from '../../server/update_metadata.ts';

import { PostListEntry } from '../common/post_utils.tsx';
import { tutorialUrlNo } from './tutorial_wrapper.tsx';

import { Db } from '../common/utils.tsx';

export const TutorialIndexNo = (props: {metadatas: Metadata[][]}) => (
    <div>
        <h2>Innføring til programmering i Python</h2>
        <div>
            Liker du å lære nye ting? 
            <Db />
            Det kan hende du svarer nei på spørsmålet over. I såfall håper jeg du
            ser gjennom innleggene jeg har skrevet under, og klarer å overbevise deg
            selv om at du tar feil.
    
            <Db />
            Om du svarte ja, kan du bare glede deg!
            <Db />
            Dette er en innføring i programmering med programmeringsspråket Python.
            Den er beregnet på nybegynnere.

            <Db />
            Om dette hørtes interessant ut, kan du begynne med å lese <a href={tutorialUrlNo + '/forord'} > forordet</a> for en mer 
            utfyllende introduksjon til denne bloggserien.
        </div>

        {
            props.metadatas[0].map((met: Metadata) =>
                (<PostListEntry key={met.hash} metadata={met} blogUrl={tutorialUrlNo}/>))
        }
    </div>
);