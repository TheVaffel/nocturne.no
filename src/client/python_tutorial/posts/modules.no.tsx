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
            <Db />
            Vi kommer til å introdusere noen nye konsepter relatert til spesifikke moduler, i tillegg til modulene selv, i seksjonene under. Vi kommer ikke til å gå i detalj på disse konseptene, ettersom det fort blir mye stoff å ta tak i. Du er oppfordret til å lese mer om modulene og tilhørende konsepter som du synes virker interessante eller relevante for ideer du har eller får i framtiden!

            <h2>En enkel modul: <Ic>random</Ic></h2>

            Når vi skal bruke en modul i programmet vårt, må vi <i>importere</i> modulen. For å importere en modul i Python skriver vi rett og slett linjen

            <CodeBlock>{`import <modulnavn>`}</CodeBlock>

            Man har frihet til å legge slike <Ic>import</Ic>-linjer hvor man vil i programmet, men så godt som alle Python-programmer som finnes der ute legger alle <Ic>import</Ic>-linjer øverst i programmet, før all annen kode. Det gjør at det er lett å få oversikt over hvilke moduler programmet bruker.
            <Db />
            La oss hoppe rett på et eksempel på en modul som brukes i mange Python-skript: <Ic>random</Ic>.
            <Db />
            
            <Ic>random</Ic>-modulen inneholder forskjellige funksjoner for å lage tilfeldige tall. Alle programmene vi har sett på hittil har vært <i>deterministiske</i>, det vil si at programmet oppfører seg likt hver gang det kjøres hvis innputt er likt. Når vi introduserer tilfeldigheter, er ikke dette lenger tilfellet. 

            <Db />
            
            For å importere <Ic>random</Ic>-modulen i programmet vårt, skriver vi bare linja 
            <CodeBlock>{`import random`}</CodeBlock>
            Modulen er nå klar for å brukes.
            <Db />
            I dette eksempelet lager vi bare et enkelt program for å simulere resultatet av å kaste en terning. Hver gang programmet startes, genereres det et tilfeldig tall mellom 1 og 6 som skrives ut til brukeren. Det kommer kanskje ikke som en overraskelse at <Ic>random</Ic>-modulen kan hjelpe oss med å lage det tilfeldige tallet, men hvordan vet vi hva <Ic>random</Ic> tilbyr, som vi kan bruke?
            <Db />
            For å se hvilke funksjoner og andre ting en modul inneholder, er det best å slå opp i <i>dokumentasjonen</i> til modulen. Dokumentasjonen er som regel lett tilgjengelig på Internett. I vårt tilfelle vil et kjapt søk i en søkemotor med f. eks. <i>python random documentation</i> fortelle oss at dokumentasjonen for <Ic>random</Ic>-funksjonen befinner seg på  <a href="https://docs.python.org/3/library/random.html">https://docs.python.org/3/library/random.html</a>. 
            <Db />
            Det å lese dokumentasjon kan føles tungt og lite intuitivt i starten - men det er noe man fort vender seg til. Husk: Du trenger kun lese de delene som er relevante for oppgaven du har for hånden. Majoriteten av all dokumentasjon for programmeringsrelaterte temaer finnes bare på engelsk.
            <Db />
            Dokumentasjonen for <Ic>random</Ic> starter med en overordnet forklaring av innholdet i modulen. Ikke få panikk om det er mange uforståelige ord i teksten, det er vanlig at dokumentasjon inneholder veldig spesifikk informasjon for avanserte brukere. For nybegynnere og generelt uinnvidde er det viktig å holde tunga rett i munnen og klare å lete seg fram til kun informasjonen vi vil ha og klarer å forstå.
            <Db />
            Dokumentasjonen til <Ic>random</Ic> er delt opp i lett håndterbare seksjoner, og vi finner fort en som handler om heltall ("Functions for Integers"). Her har vi noen få funksjoner, og av dem er det <Ic>randint</Ic> som er mest interessant. <Ic>randint(a, b)</Ic> genererer et tilfeldig heltall innenfor intervallet mellom <Ic>a</Ic> og <Ic>b</Ic>, hvor begge endepunktene er med. Merk at Python er litt inkonsistent på dette punktet - mens en <Ic>range</Ic> ikke inkluderer sitt siste endepunktet, så er det siste endepunktet inkludert i <Ic>randint</Ic>.
            <Db />

            Når vi omsider har funnet funksjonen vi vil bruke, er det bare å skrive det inn i programmet vårt. Vi har allerede importert <Ic>random</Ic>, og kan bruke <Ic>randint</Ic>-funksjonen i <Ic>random</Ic>-modulen ved å skrive 
            <CodeBlock>{`tilfeldig_tall = random.randint(1, 6)`}</CodeBlock>
            
            Vi bruker altså syntaksen <Ic>{`<modulnavn>.<funksjonsnavn>(<argumenter>)`}</Ic> når vi kaller en funksjon som ligger i en modul. Som vi allerede har diskutert, gir funksjonskallet vårt et tilfeldig heltall mellom 1 og 6, inklusiv. 
            <Db />
            Den siste linja tilfører ikke noe nytt til diskusjonen, så vi hopper rett til å vise hele programmet i sin fulle herlighet:
            <CodeBlock>{`import random
tilfeldig_tall = random.randint(1, 6)
print('Du kastet en terning og fikk tallet', tilfeldig_tall)`}</CodeBlock>


            <NoticeBlock>
                Strengt tatt vil programmene våre fortsatt være deterministiske selv om vi bruker <Ic>random</Ic>-modulen. Datamaskiner er fundamentalt deterministiske, som betyr at vi ikke kan be den "velge" noe tilfeldig. <Ic>random</Ic>-modulen starter med et tall som <i>ser</i> tilfeldig ut, typisk klokkeslettet i nanosekunder på datamaskinen, og gjør en rekke innfløkte matematiske operasjoner på dette tallet for å lage tall som ser tilfeldige ut for brukeren. Slik oppførsel kalles <i>pseudotilfeldig</i> (engelsk: <b>pseudorandom</b>), og er den vanlige måten å lage tilfeldig oppførsel på.
            </NoticeBlock>

            Dersom vi skulle brukt <Ic>randint</Ic> mange ganger, ville vi antakeligvis blitt leie av å skrive <Ic>random</Ic> foran hele tiden. I Python kan man importere modulinnhold som enkeltstående variabler med syntaksen
            <CodeBlock>{`from <modulnavn> import <funksjonsnavn1>, <funksjonsnavn2> ...`}</CodeBlock>
            slik at de to øverste linjene i programmet over kunne skrives som
            <CodeBlock>{`from random import randint
tilfeldig_tall = randint(1, 6)`}</CodeBlock>

            En annen måte å undersøke hvilke funksjoner en modul inneholder, er å kalle <Ic>dir()</Ic> på modulen. Altså ville kallet <Ic>dir(random)</Ic> (etter at modulen er importert) gitt deg en liste over alt innholdet i modulen. Dette er flott for å kjapt undersøke hva som tilbys, men er mangelfullt når det kommer til å si f. eks. hvilke argumenter en funksjon tar i bruk.
            <Db />
            For å lese dokumentasjonen for en modul uten å søke på Internett, kan du også bruke Python i interaktiv modus og kjøre <Ic>{`help(<modulnavn>)`}</Ic> eller <Ic>{`help(<modulnavn>.<funksjonsnavn>)`}</Ic> etter å ha importert modulen.
            
            <h2>Modulen <Ic>math</Ic></h2>

            <Ic>math</Ic> er en modul det er veldig nyttig å kjenne til. Den inneholder alt mulig av vanlige matematiske operasjoner som for eksempel kvadratrot (<Ic>math.sqrt</Ic>), logaritmer (<Ic>math.log</Ic>, <Ic>math.log2</Ic>, <Ic>math.log10</Ic>) og trigonometriske funksjoner (<Ic>math.sin</Ic>, <Ic>math.cos</Ic> osv..). Dokumentasjonen for <Ic>math</Ic>-modulen kan du finne <a href="https://docs.python.org/3/library/math.html">her</a>.
    
            {/* Husk å snakke om installasjon av eksterne moduler */ }
            <h2>JSON-filer</h2>

            <h2>Nettverk</h2>

            <h2>Bilder</h2>
            
            <h2>Vinduer</h2>

            <h2>Å stykke opp et program i moduler</h2>

        </PostWrapper>
    </>
);

export default ModulesNo;