import * as React from 'react';

import { Metadata } from '../../server/update_metadata.ts';

import { PostListEntry } from '../common/post_utils.tsx';
import { tutorialUrlNo } from './tutorial_wrapper.tsx';

export const TutorialIndexNo = (props: {metadatas: Metadata[][]}) => (
    <div>
        <h2>Introduksjon til litt av hvert</h2>
        <div>
            Liker du å lære nye ting? 

            Det kan hende du svarer nei på spørsmålet over. I såfall håper jeg du
            ser gjennom innleggene jeg har skrevet under, og klarer å overbevise deg
            selv om at du tar feil.

            Om du svarte ja, kan du bare glede deg!

            Innleggene tar for seg temaer jeg synes er interessante, morsomme og faktisk
            nyttige, og det håper jeg virkelig du synes når du har lest dem også!
        </div>


        {
            props.metadatas[0].map((met: Metadata) =>
                (<PostListEntry key={met.hash} metadata={met} blogUrl={tutorialUrlNo}/>))
        }
    </div>
);