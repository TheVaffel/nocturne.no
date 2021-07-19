import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const DebuggingNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Før vi hopper videre på å introdusere flere og flere Python-konsepter, skal vi sette av litt tid til å snakke om selve utviklingsprosessen. Hvis du prøvde deg på oppgavene på slutten av forrige post, har du kanskje allerede oppdaget hvor nøye man må være når man skriver for at Python skal godkjenne programmet vårt og kjøre det. Det er flere forskjellige typer feil man kan støte borti i programmet sitt. Vi snakker om hver av dem her og kommer med framgangsmåter og tips for å håndtere dem når du koder.
            <Db />
            Her deler vi inn forskjellige programfeil i fire kategorier:
            <ul>
                <li>Syntaksfeil</li>
                <li>Skrivefeil</li>
                <li>Kjøretidsfeil</li>
                <li>Logiske feil</li>
            </ul>

            Fordi du i likhet med alle andre programmerere er et feilbarlig menneske, Er sjansen stor for at du vil møte på alle disse feilene før eller senere. I de kommende seksjonene skal vi diskutere hver av dem, og vi starter på toppen:

            <h2>Syntaksfeil</h2>

            Før Python begynner å kjøre programmet, vil den lese gjennom koden én gang for å <i>parse</i> den. Parsing går ut på å identifisere bestanddelene i programmet - Python finner ut hvilke tegn i filen som tilhører hvilke språklige konstruksjoner, for eksempel hva som er variabelnavn, hvilke paranteser som hører til hverandre, og hvor hvis-blokkene er.

            <Db />
            Mye av flisespikkeriet til Python kan virke direkte unødvendig - ofte burde det være opplagt hva du mente å skrive når du for eksempel mangler en parantes på slutten av en linje. Grunnen til at Python likevel klager, er at Python krever at programmet må være fullstendig <i>utvetydig</i> for å kunne kjøre det. Dette er ikke for å irritere programmereren, men heller det stikk motsatte. Programmereren skal ha full kontroll over hva programmet gjør, og skal være ansvarlig for alt som står der. Hvis Python begynner å fylle inn eller korrigere 
        </PostWrapper>
    </>
);

export default DebuggingNo;