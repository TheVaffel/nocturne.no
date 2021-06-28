import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const ModulesNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hei igjen! Dette blir den siste posten i denne serien hvor vi fokuserer på å introdusere nye elementer. I neste post kommer vi til å lage et mer sammensatt eksempel hvor vi bruker mye av det vi har lært i et eget prosjekt.
            <Db />
            Men før det må vi gå igjennom <i>moduler</i>. Moduler er døråpneren som lar oss lage alle mulige slags programmer ved å ta i bruk kode skrevet av andre. Moduler eller lignende konsepter finnes i alle seriøse programmeringsspråk og går ofte under navnet <i>biblioteker</i> (engelsk: <b>libraries</b>).
            <Db />
            I denne posten skal vi først snakke litt overordnet om hva en modul er og helt konkret bruke <Ic>random</Ic>-modulen for å demonstrere hvordan vi jobber med moduler. Deretter går vi igjennom forskjellige vanlige moduler og viser hvordan de fungerer. Dette er bare et veldig beskjedent utvalg av alle modulene som finnes der ute. 

            <h2>Modulen <Ic>random</Ic></h2>

            Når vi bruker en modul sier vi at vi <i>importerer</i> modulen. For å importere en modul i Python skriver vi rett og slett linjen

            <CodeBlock>{`import <modulnavn>`}</CodeBlock>

            Man har frihet til å legge slike <Ic>import</Ic>-linjer hvor man vil i programmet, men så godt som alle Python-programmer som finnes der ute legger alle <Ic>import</Ic>-linjer øverst i programmet, før all annen kode. La oss hoppe rett på et eksempel på en modul som brukes i mange Python-skript: <Ic>random</Ic>.
    
            {/* Husk å snakke om installasjon av eksterne moduler */ }
            <h2>JSON-filer</h2>

            <h2>Nettverk</h2>

            <h2>Bilder</h2>

            <h2>Plotting</h2>

            <h2>Å stykke opp et program i moduler</h2>

        </PostWrapper>
    </>
);

export default ModulesNo;