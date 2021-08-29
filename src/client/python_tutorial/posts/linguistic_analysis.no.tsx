import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const FilesAndExceptionsNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hei igjen! Dette er en <i>prosjektpost</i>, som betyr at vi gjennomgår et programmeringsprosjekt for å vise hvordan du kan bruke det du har lært i de tidligere postene. På papiret har du lært nok Python til å kunne utføre disse prosjektene på egen hånd. Realiteten er likevel at det kan være vanskelig å vite hvor man skal begynne når man vil programmere noe på egen hånd. Forhåpentligvis vil denne prosjektposten hjelpe deg med å finne veien selv når du senere begir deg ut på eventyr alene.

            <Db />

            I denne posten skal vi bedrive litt <i>lingvistisk analyse</i>. Lingvistisk analyse kan være så mangt, men vi skal her fokusere på å bruke store mengder tekst til å utforske noen aspekter i norsk bokmål, og visualisere det vi finner ut. Vi kommer til å ta i bruk litt matematikk i denne posten, men den kommer til å være forholdsvis enkel og vil ikke være hovedfokuset.
            <Db />

            Vi kommer til å introdusere noen teknikker og litt terminologi som er veldig spesifikt for lingvistisk analyse. Dette er typisk for mange programmeringsprosjekter - ofte kombineres selve programmeringen med konsepter fra andre fagområder. Slike "eksterne" konsepter kaller vi ofte <i>domenekunnskap</i> (engelsk: <b>domain knowledge</b>). Du trenger ikke å fokusere på disse teknikkene og terminologien, men se gjerne på det som en bonus at du lærer litt om lingvistikk mens du leser dette!

            <h2>Prosjektbeskrivelse</h2>

            For å starte et slikt prosjekt, begynner vi først med å definere klart hva det er vi vil oppnå med prosjektet. På samme måte som vi må være helt tydelige når vi skriver et Python program for at maskinen skal vite hva den skal gjøre, bør vi være veldig klare på hva det er vi prøver å gjøre. Det gjør det mye lettere å planlegge hvordan vi går fram for å lage programmet.
            <Db />

            I dette prosjektet vil vi gjøre lingvistisk analyse, mer spesifikt skal vi 
            <ul>
                <li>1. Telle opp forekomsten av spesifikke ord i en tekst</li>
                <li>2. Finne de vanligste ordene i teksten</li>
                <li>3. Finne ut hvor ofte hver av bokstavene forekommer i språket</li>
                <li>4. Visualisere informasjonen fra de foregående stegene</li>
            </ul>

            Her er det siste punktet en smule uspesifikt, men vi kan diskutere hvordan vi best utfører visualiseringsdelen når vi har kommet så langt. 

            <Db />
            Vi har listet opp en del forskjellige mål her, men vi kommer bare til å lage ett program som inneholder funksjonalitet for alle disse tingene.
            <Db />
            Med prosjektbeskrivelsen i boks, kan vi begynne å planlegge stegene for å oppnå målene vi har satt opp.

            <h2>Planlegging</h2>

            Planleggingsfasen er viktigere jo større prosjektet er. Det betyr ikke at det trenger å ta lang tid, men det er en enorm fordel at du har tenkt igjennom de forskjellige delene av programmet du er i ferd med å lage, og hvordan de passer sammen, som er hovedformålet med denne fasen.

            <Db />

            Vårt prosjekt er ikke av den største sorten, så vi nøyer oss med å beskrive grovt hvordan vi vil gjennomføre oppgavene beskrevet over:
            <Db />
            For å telle opp forekomsten av ulike ord, åpner vi tekstfilen vi skal bruke, for deretter å lese igjennom linje for linje. På hver linje sjekker vi hvor mange ganger ordet opptrer. Vi legger sammen alle disse forekomstene og skriver det ut til skjerm.
            <Db />
            For å finne det vanligste ordet i teksten, leser vi igjen gjennom linje for linje, men denne gangen må vi i tillegg skjære ned på tegnsetting og store bokstaver, for å sørge for at linja bare er en streng av mellomrom-separerte ord, som gjør det lett å hente ut hvert av dem. Når vi henter dem ut, bruker vi hvert av dem som indeks i en tabell, hvor korresponderende verdi vil være antallet av ordet vi har funnet hittil. Hvis denne forklaringen var forvirrende, blir det nok klarere når vi kommer til dette steget senere.
            <Db />
            Når vi teller opp hver bokstav i språket, bruker vi også en tabell. I dette tilfellet vil indeksene være de norske bokstavene, og korresponderende verdier er antallet.
            <Db />
            For å visualisere informasjonen, kommer vi til å bruke <a href="https://matplotlib.org/">matplotlib</a>, en pakke som lar oss lage grafer og diagrammer. 

            <Db />
            Vi kommer til å skrive disse delene inn i hver sin funksjon. Det gjør det lett å f. eks. kjøre bare én av dem av gangen under testing. 
            <Db />
            Nå som vi har en grov oversikt over hva vi prøver å lage, kan vi konsentrere oss om neste problem: Hvilken tekst bruker vi som innputt til dette programmet?

            <h2>Korpus</h2>

            Et <i>korpus</i> i lingvistikksammenheng er en stor tekstsamling, gjerne på flere millioner ord, som er laget for å analysere språket tekstene er skrevet i. Korpus kan enten fokusere på spesielle type tekster, som avisartikler, romaner eller manus, eller være en kombinasjon av mange forskjellige sjangere. En språkforsker kan bruke et korpus for å f. eks. finne ut hvor vanlig et ord er, for å sammenligne skrivestiler mellom sjangre, eller for å trene opp en maskinlæringsalgoritme til å gjenkjenne et språk, for å nevne noe. Hva slags korpus man bruker er helt avhengig av hva man ønsker å gjøre med det.
            <Db />
            I dette prosjektet kommer vi til å bruke <a href="https://www.nb.no/sprakbanken/ressurskatalog/oai-nb-no-sbr-4/">Norsk aviskorpus</a>, som i motsetning til mange andre korpus er fritt tilgjengelig for all ikke-kommersiell bruk. Som navnet tilsier, er det en tekstsamling hentet fra forskjellige norske aviser. Avisartikler er ikke fullstendig optimale for generell språkanalyse, ettersom de ofte inneholder mange dramatiske hendelser og en del politikk, slik at for eksempel ord som "trusler", "politiker" og "Høyre" forekommer oftere enn de gjør i vanlig dagligtale og de fleste andre skriftlige kilder. Det er likevel godt nok for våre formål.
            <Db />
            Korpuset kan lastes ned <a href='/files/korpus.zip' download>her</a>. Merk at korpuset ligger i en ZIP-fil som må pakkes ut før du kan bruke det i et program. I samme fil ligger også lisensinformasjon. Aviskorpuset er nemlig beskyttet av en <a href='https://creativecommons.org/licenses/by-nc/4.0/'>lisens</a> som tillater fri distribusjon og modifikasjon, men ikke kommersiell bruk. Tekstfila inneholder en forenklet versjon av korpusets samlig av aviser på norsk bokmål fra 2019. Kort fortalt går forenklingen ut på at formatering og ekstra informasjon om avisartiklene er fjernet slik at vi står igjen med en ren tekstfil som er lett å lese i Python. Denne modifikasjonen er også nevnt i den medfølgende lisensfila, også pålagt av den nevnte lisensen.
            <Db />
            Da skal tekstmaterialet være i boks, og vi kan fortsette på neste steg i prosjektet - implementasjon!

        </PostWrapper>
    </>
);