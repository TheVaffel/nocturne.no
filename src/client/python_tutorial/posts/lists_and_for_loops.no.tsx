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
            Det er litt hjernegymnastikk å sjekke at løkken faktisk går igjennom alle elementene i listen bare ved å se på den. Det som er viktig her, er at vi starter på 0, som er første indeks i lista, og fortsetter til (men ikke med!) indeksen er lik lengden av lista. Hvis du synes dette er tungt å resonnere over nå, kan du trøste deg med at det kommer til å bli lettere når vi introduserer <Ic>for</Ic>-løkker om litt.
            <Db />
            For å ta et annet eksempel - denne koden lager en liste og regner ut summen av den:
            <CodeBlock>{`liste = [1, 2, 3, 4, 5, 6, 7]

i = 0
sum = 0
while i < len(liste):
    sum += liste[i]
    
    i += 1

print('Summen er', sum)`}</CodeBlock>
            Her har vi laget variabelen <Ic>sum</Ic> som starter på null og deretter økes med hvert element i lista med <Ic>+=</Ic>-operatoren. I Python har vi også den innebygde funksjonen <Ic>sum()</Ic>, slik at vi like gjerne kunne ha skrevet <Ic>print('Summen er', sum(liste))</Ic>, men vi har skrevet det med en løkke over for eksempelets skyld.
            <Db />
            Til slutt tar vi et litt mer sammensatt eksempel. I koden under ber vi brukeren om å skrive inn en rekke navn, som legges i en liste, helt til brukeren skriver "ferdig". Deretter sorteres lista, og navnene skrives tilbake til brukeren på hver sin linje.
            <Db />
            En eventyrlysten sjel ville kanskje ha implementert en sorteringsfunksjon som sorterte lista på egen hånd, men her nøyer vi oss med å bruke <Ic>sort()</Ic>, som er en medlemsfunksjon på lister. <Ic>sort()</Ic> brukes ofte på lister av tall, men kan også brukes på lister av strenger, hvor den sorterer listen alfabetisk:
            <CodeBlock>{`liste = []

while True:

    navn = input('Skriv et navn eller "ferdig": ')

    if navn == 'ferdig':
        break

    liste.append(navn)


liste.sort()

i = 0
while i < len(liste):
    print(liste[i])

    i += 1`}</CodeBlock>

            Det er i grunn ikke noe nytt her, men dette eksempelet er litt mer sammensatt enn de vi har sett tidligere. Se om du forstår hvordan dette programmet gjør det beskrivelsen over sier!

            <h2><Ic>for</Ic>-løkker</h2>

            Det er et mønster vi har gjentatt mange ganger i eksemplene over, nemlig <Ic>while</Ic>-løkker på formen
            <CodeBlock>{`i = 0
while i < len(<liste>):
    ...
    
    i += 1`}</CodeBlock>
            I tillegg til at man fort blir lei av å skrive de samme linjene om og om igjen, er det mange detaljer som kan være lette å glemme. Som et alternativ kan vi bruke <Ic>for</Ic>-løkker i Python.
            <Db />
            <Ic>for</Ic>-løkker skrives på følgende måte:
            <CodeBlock>{`for <iterasjonsvariabel> in <liste>:
    <løkkeblokk>`}</CodeBlock>
            Den første linja starter med <Ic>for</Ic> (som du kanskje kunne gjettet deg til), etterfulgt av et valgfritt variabelnavn som brukes som iterasjonsvariabel. Deretter følger ordet <Ic>in</Ic>, og så lista vi vil iterere gjennom. Den første linja avsluttes med et kolon. Deretter følger løkkeblokken, skrevet med innrykk som vanlig. 
            <Db />
            Måten <Ic>for</Ic>-løkken fungerer på, er at løkkeblokken kjøres én gang for hvert element i lista. For hver iterasjon settes iterasjonsvariabelen til det nåværende <i>elementet</i> i løkka. Dette står i kontrast til iterasjonsvariabelen vi har brukt i <Ic>while</Ic>-løkkene, hvor den inneholder en indeks.
            <Db />
            Vi kan skrive om det ene eksempelet vi hadde over, hvor vi definerer en liste med tall og skrver tallene til skjerm på hver sin linje:
            <CodeBlock>
                {`liste = [2, 3, 5, 7, 11]

for e in liste:
    print(e)`}
            </CodeBlock>

            Se så mye enklere! Nå settes iterasjonsvariabelen <Ic>e</Ic> til elementene 2, 3, 5, 7 og 11 i hver sin iterasjon, slik at de blir skrevet på hver sin linje på skjermen. Jeg kommer til å bruke variabelnavnet <Ic>e</Ic> for <i>element</i> for å presisere at den inneholder elementene i listen og ikke indekser. 
            <Db />
            Her er summeringsprogrammet, revitalisert med en <Ic>for</Ic>-løkke.
            <CodeBlock>{`liste = [1, 2, 3, 4, 5, 6, 7]

sum = 0
for e in liste:
    sum += e

print('Summen er', sum)`}</CodeBlock>
            Sammenlignet med den korresponderende koden over, er det mye lettere å skjønne hva som foregår, og det er mindre rom for å skrive feil!
            
            <h2><Ic>range()</Ic>-funksjonen</h2>

            La oss si at vi har en liste med navn, og vil skrive navnene ut på hver sin linje sammen med nummeret på navnet i lista. Med en <Ic>while</Ic>-løkke kunne vi gjort det slik:
            <CodeBlock>{`navneliste = ['Ole', 'Dole', 'Doffen']
i = 0
while i < len(navneliste):
    print(i + 1, navneliste[i])
    i += 1`}
    </CodeBlock>
            Legg merke til at vi har skrevet <Ic>i + 1</Ic> i <Ic>print()</Ic>-kallet, for å få numereringen til å begynne på 1 i stedet for 0. 
            <Db />
            Vi kan ikke skrive om koden over ved å iterere gjennom listen med en <Ic>for</Ic>-løkke direkte, fordi vi trenger indeksen for hvert element inne i løkkeblokken, men <Ic>for</Ic>-løkken gir oss bare elementet selv. I slike tilfeller kan vi bruke <Ic>range()</Ic>-funksjonen.
            <Db />
            <Ic>range()</Ic> gir oss en rekke med heltall fra et startpunkt til et sluttpunkt. For eksempel vil
            <Ic>{`range(3)`}</Ic> gi oss tallene fra og med 0, til, men <i>ikke</i> med, 3. Vi kan også legge inn en egen startgrense som første argument, som gjør andre argument til øvre grense; <Ic>range(3, 5)</Ic> gir tallene fra og med 3, til og med 4. Vi kan bruke <Ic>range()</Ic> direkte med <Ic>for</Ic>-løkker slik:
            <CodeBlock>{`for i in range(10):
    print(i)`}
            </CodeBlock>
            Denne koden skriver bare ut tallene 0 til 9 på hver sin linje, med veldig lite kode! Dette er den foretrukne måten å iterere gjennom en rekke med tall på.
            <Db />
            For å gjenskape eksempelet over ved hjelp av <Ic>for</Ic>-løkker, kan vi bruke <Ic>range()</Ic> slik:
            <CodeBlock>{`navneliste = ['Ole', 'Dole', 'Doffen']

for i in range(len(navneliste)):
    print(i + 1, navneliste[i])`}
            </CodeBlock>
            
            Husk at <Ic>len()</Ic> gir lengden på lista. Dermed gir <Ic>range(len(navneliste))</Ic> en rekke med tall fra og med 0, til, men ikke med lengden på lista. Dette passer godt sammen med måten indeksering av lister fungerer i Python: De gyldige indeksene i en liste starter på 0 og går opp til, men ikke med, lengden av lista. Derfor gir <Ic>range(len(navneliste))</Ic> bare de gyldige indeksene vi kan bruke på lista!
            <Db />
            Et annet tilfelle vi kan bruke <Ic>range()</Ic> i, er når vi vil iterere gjennom to lister samtidig. <Ic>for</Ic>-løkker itererer gjennom kun én løkke. For å iterere to lister, er det lettest å bruke indekser direkte:
            <CodeBlock>{`navneliste = `}</CodeBlock>

            
        </PostWrapper>
    </>
);

export default ListsAndForLoops;