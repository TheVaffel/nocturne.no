import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const ListsAndForLoops = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Her skal vi introdusere lister, som vil la oss håndtere store mengder data i programmene våre. Deretter skal vi introdusere <Ic>for</Ic>-løkker, som gir oss en enkel måte å iterere gjennom lister.

            <h2>Lister</h2>

            <i>Lister</i> er objekter som kan inneholde null, én, eller flere verdier, kalt <i>elementer</i>. Vi kan lage en liste på denne måten:
            <CodeBlock>{`[<første verdi>, <andre verdi>, <tredje verdi>...]`}</CodeBlock>
            Altså bare en komma-separert liste av null eller flere verdier omsluttet av klammeparenteser (<Ic>[]</Ic>).
            For eksempel kan vi skrive 
            <CodeBlock>
                {`liste = [1, 4, 9, 'hallo', True]`}
            </CodeBlock>
            for å lage en liste med fem elementer og legge den i variabelen <Ic>liste</Ic>. Den listen vi har laget her, inneholder verdier av flere forskjellige datatyper: Heltall, en streng, og en boolsk verdi. Det er fullt lovlig å blande verdier av forskjellige datatyper i lister i Python, men det er vanligst at alle elementene er av samme type. Listen selv har datatypen <Ic>list</Ic>.
            <Db />
            En av de vanligste operasjonene vi gjør på lister er å hente ut verdiene som ligger i den. Det kan vi gjøre ved å skrive et par klammeparenteser etter listen, med et tall, en <i>indeks</i>, som sier hvilket element vi vil ha: 
            <CodeBlock>{`liste[<indeks>]`}</CodeBlock>
            I Python og de fleste andre programmeringsspråk bruker man en litt spesiell konvensjon: Første element i listen har indeks <b>0</b>. Dermed har andre element indeks 1, og tredje element har indeks 2 osv. For eksempel kan vi skrive 
            <CodeBlock>
                {`a = liste[0]
b = liste[1]
c = liste[4]`}
            </CodeBlock>
            
            Her vil <Ic>a</Ic> settes lik 1, det første elementet i listen. <Ic>b</Ic> settes til det andre elementet i listen, altså 4. <Ic>c</Ic> settes til <Ic>True</Ic>, som er det siste elementet i listen.
            <Db />
            Det kan ta litt tid å vende seg til at lister starter på indeks 0, og at siste element har indeks lik lengden på listen minus én (slik som at indeks 4 gir siste element i listen over, selv om listen har 5 elementer). I det minste er dette et konsekvent fenomen i Python og andre språk, som vi skal få se mer av senere i denne posten når vi skal se på <Ic>range()</Ic>-funksjonen.
            <Db />
            I tillegg til å hente ut elementer, kan vi også endre elementene i listen ved å slå opp en indeks slik som over, og bruke det på venstre side av <Ic>=</Ic>-operatoren:
            <CodeBlock>{`liste[3] = 0`}</CodeBlock>
            Nå inneholder listen elementene 1, 4, 9, 0, og <Ic>True</Ic>: Vi har altså skrevet over element nummer fire (på indeks 3), som var <Ic>'hallo'</Ic> med tallet 0.
            <Db />
            Python vil gi en feilmelding hvis du bruker en indeks som ligger utenfor listen - for eksempel bør du ikke prøve å bruke indeks 5 på listen over, dersom du vil holde deg på Pythons godside.
            
            <h2>Et par funksjoner vi kan bruke med lister</h2>

            Vi har allerede sett på hvordan vi kan endre elementer som ligger i listen, men hva om vi vil legge til flere elementer? Lister har medlemsfunksjonen <Ic>append()</Ic>, som lar oss legge på et nytt element på slutten av listen:
            <CodeBlock>
                {`liste = []
liste.append(3)
liste.append(2)
liste.append(1)
print(liste)`}
            </CodeBlock>

            Her har vi startet med å lage variabelen <Ic>liste</Ic> og sette den til <Ic>[]</Ic>, som bare er en liste som ikke inneholder noen elementer. Deretter legger vi på ett og ett element. Til slutt skriver vi ut listen til skjerm: <Ic>print()</Ic> lar oss skrive listen direkte inn som et argument, som gjør det lett å sjekke hva de inneholder. Vi får ut:
            <CodeBlock>{`[3, 2, 1]`}</CodeBlock>
            Som vi ser, ligger elementene i samme rekkefølge som vi la dem inn i.

            <h2>Lister og løkker</h2>
            Ofte er vi interessert i å gjøre en operasjon på hvert element i en liste, for eksempel skrive dem til skjerm på hver sin linje. Dette kan vi gjøre med en <Ic>while</Ic>-løkke. For å vite når <Ic>while</Ic>-løkken skal stoppe, må vi vite lengden på listen. Denne kan vi få ved å kalle funksjonen <Ic>len</Ic> med listen som argument. For eksempel vil <Ic>len([])</Ic> gi 0 som svar, siden den brukes på en tom liste, mens <Ic>len([1, 2, 3])</Ic> gir 3 som svar. For å gå igjennom en liste kan vi dermed gjøre som følger:
            <CodeBlock>{`liste = [2, 3, 5, 7, 11]

i = 0
while i < len(liste):
    print(liste[i])
    i += 1`}</CodeBlock>
            Her lager vi først en liste med noen tall, og setter iterasjonsvariabelen vår <Ic>i</Ic> til 0. Betingelsen i <Ic>while</Ic>-setningen sier at løkken skal kjøres så lenge <Ic>i</Ic> er mindre enn lengden på listen, som er 5 i dette tilfellet. For hver iterasjon i løkka, kjører vi <Ic>print(liste[i])</Ic>, altså skriver vi det <Ic>i</Ic>-te elementet i listen til skjermen. Siden <Ic>i</Ic> er et heltall som starter på 0 og går opp til lengden på lista, vil dette gjøre at vi til slutt skriver alle elementene i lista til skjermen. Som vanlig øker vi verdien til <Ic>i</Ic> med en for hver iterasjon i løkka. Resultatet blir:
            <CodeBlock>{`2
3
5
7
11`}</CodeBlock>
            Det er litt hjernegymnastikk å sjekke at løkken faktisk går igjennom alle elementene i listen bare ved å se på den. Det som er viktig her, er at vi starter på 0, som er første indeks i lista, og fortsetter til (men ikke med!) indeksen er lik lengden av lista. Hvis du synes dette er tungt å resonnere over nå, kan du trøste deg med at dette kommer til å bli lettere når vi introduserer <Ic>for</Ic>-løkker snart.
            {/* Summere over løkke? */}
        </PostWrapper>
    </>
);

export default ListsAndForLoops;