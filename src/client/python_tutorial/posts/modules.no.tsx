import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const ModulesNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hei igjen! Dette blir den siste posten hvor vi fokuserer på å introdusere nye elementer i denne serien. I neste post kommer vi til å lage et mer sammensatt eksempel hvor vi bruker mye av det vi har lært i et sammensatt prosjekt.
            <Db />
            Men før det må vi gå igjennom <i>moduler</i>. Moduler er døråpneren som lar oss lage alle mulige slags programmer ved å ta i bruk kode skrevet av andre. Moduler eller lignende konsepter finnes i alle seriøse programmeringsspråk og går ofte under navnet <i>biblioteker</i> (engelsk: <b>libraries</b>).
            <Db />
            I denne posten skal vi først snakke litt overordnet om hva en modul er og helt konkret bruke <Ic>random</Ic>-modulen for å demonstrere hvordan vi jobber med moduler. Deretter går vi igjennom forskjellige vanlige moduler og viser hvordan vi kan bruke dem. Dette er bare et veldig beskjedent utvalg av alle modulene som finnes der ute.
            <Db />
            Vi kommer til å introdusere noen nye konsepter relatert til spesifikke moduler i tillegg til modulene selv, i seksjonene under. Vi kommer ikke til å gå i detalj på disse konseptene, ettersom det fort blir mye stoff å ta tak i. Du er oppfordret til å lese mer om modulene og tilhørende konsepter som du synes virker interessante eller relevante for ideer du har eller får i framtiden!

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
            For å se hvilke funksjoner og andre ting en modul inneholder, er det best å slå opp i <i>dokumentasjonen</i> til modulen. Dokumentasjonen er som regel lett tilgjengelig på Internett. I vårt tilfelle vil et kjapt søk i en søkemotor med f. eks. <i>python random documentation</i> fortelle oss at dokumentasjonen for <Ic>random</Ic>-modulen befinner seg på  <a href="https://docs.python.org/3/library/random.html">https://docs.python.org/3/library/random.html</a>. 
            <Db />
            Det å lese dokumentasjon kan føles tungt og lite intuitivt i starten - men det er noe man fort vender seg til. Husk: Du trenger kun lese de delene som er relevante for oppgaven du har for hånden. Dessverre (?) finnes majoriteten av all dokumentasjon for programmeringsrelaterte temaer bare på engelsk.
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

            Det er alt! Det er altså ikke mye som skal til hvis du vil lage litt spenning i hverdagen til brukerne dine, eller av en eller annen grunn ikke vil at et program skal være deterministisk.

            <NoticeBlock>
                Strengt tatt vil programmene våre fortsatt være deterministiske selv om vi bruker <Ic>random</Ic>-modulen. Datamaskiner er fundamentalt deterministiske, som betyr at vi ikke kan be den "velge" noe tilfeldig. <Ic>random</Ic>-modulen starter med et tall som <i>ser</i> tilfeldig ut, typisk klokkeslettet i nanosekunder på datamaskinen, og gjør en rekke innfløkte matematiske operasjoner på dette tallet for å lage nye tall som ser tilfeldige ut for brukeren. Slik oppførsel kalles <i>pseudotilfeldig</i> (engelsk: <b>pseudorandom</b>), og er den vanlige måten å lage tilfeldig oppførsel på.
            </NoticeBlock>

            Dersom vi skulle brukt <Ic>randint</Ic> mange ganger, ville vi antakeligvis blitt lei av å skrive <Ic>random</Ic> foran hele tiden. I Python kan man importere modulinnhold som enkeltstående variabler med syntaksen
            <CodeBlock>{`from <modulnavn> import <funksjonsnavn1>, <funksjonsnavn2> ...`}</CodeBlock>
            slik at de to øverste linjene i programmet over kunne skrives som
            <CodeBlock>{`from random import randint
tilfeldig_tall = randint(1, 6)`}</CodeBlock>

            En annen måte å undersøke hvilke funksjoner en modul inneholder, er å kalle <Ic>dir()</Ic> på modulen. Altså ville kallet <Ic>dir(random)</Ic> (etter at modulen er importert) gitt deg en liste over alt innholdet i modulen. Dette er flott for å kjapt undersøke hva som tilbys, men er mangelfullt når det kommer til å si f. eks. hvilke argumenter en funksjon tar i bruk.
            <Db />
            For å lese dokumentasjonen for en modul uten å søke på Internett, kan du også bruke Python i interaktiv modus og kjøre <Ic>{`help(<modulnavn>)`}</Ic> eller <Ic>{`help(<modulnavn>.<funksjonsnavn>)`}</Ic> etter å ha importert modulen.
            
            <h2>Modulen <Ic>math</Ic></h2>

            Vi nevner <Ic>math</Ic>-modulen litt kjapt i forbifarten for interesserte lesere: <Ic>math</Ic> inneholder alt mulig av vanlige matematiske operasjoner som for eksempel kvadratrot (<Ic>math.sqrt</Ic>), logaritmer (<Ic>math.log</Ic>, <Ic>math.log2</Ic>, <Ic>math.log10</Ic>) og trigonometriske funksjoner (<Ic>math.sin</Ic>, <Ic>math.cos</Ic> osv..). Dokumentasjonen for <Ic>math</Ic>-modulen kan du finne <a href="https://docs.python.org/3/library/math.html">her</a>.
    
            <h2>JSON-filer</h2>
            
            JSON (<b>J</b>ava<b>s</b>cript <b>O</b>bject <b>N</b>otation) er et filformat som brukes for å lagre strukturert informasjon av én eller annen form. JSON-filer har filendelsen <Ic>.json</Ic>.
            <Db />
            Innholdet i en JSON-fil er til forveksling veldig lik hvordan vi definerer en tabell i Python; krøllparanteser som omslutter en serie med komma-separerte indeks-verdi-par. En JSON-fil som inneholder informasjon om en by kan for eksempel se slik ut:
            
            <CodeBlock>{`{
    "navn": "London",
    "befolkning": 8500000,
    "land": "England"
}`}
            </CodeBlock>
            I en JSON-fil har ikke ekstra mellomrom, indentering eller linjeskift noen betydning. De er bare slik de er for å gjøre JSON-fila lettere å lese for mennesker. Én viktig forskjell fra tabeller i Python, er at et slikt objekt i en JSON-fil kun kan ha strenger som indekser. 
            <Db />
            Filinnholdet trenger ikke bare være en tabell, men kan også være en liste. Lister skrives med klammeparanteser (<Ic>[]</Ic>), akkurat slik som de defineres i Python. I tillegg kan verdiene inne i objektet/tabellen også være objekter og lister, og ikke bare de "primitive" datatypene streng og tall, som gjør at vi kan få nokså komplekse konstruksjoner i JSON-fila. Her er et annet eksempel på innhold i en JSON-fil: En liste av karakterer fra Harry Potter og diverse informasjon om dem:
            <CodeBlock>{`[
    {
        "navn": "Harry",
        "skostørrelse": 43,
        "venner": ["Ronny", "Hermine"]
    },
    {
        "navn": "Ronny",
        "skostørrelse": 44,
        "venner": ["Harry", "Hermine"]
    },
    {
        "navn": "Hermine",
        "skostørrelse": 41,
        "venner": ["Harry", "Ronny"]
    },
    {
        "navn": "Slur",
        "skostørrelse": 46,
        "venner": []
    }
]`}</CodeBlock>
            
            <h3><Ic>json</Ic>-modulen</h3>

            Mulig du allerede har lurt på hvorfor vi plutselig snakker om JSON. Det er fordi det er et vanlig format å bruke for å overføre informasjon på Internett, og fordi vi har en modul i Python som gjør lesing og tolking av en JSON-fil veldig lett, nemlig <Ic>json</Ic>-modulen.

            <Db />
            
            <Ic>json</Ic>-modulen har hovedsakelig to oppgaver: Lese JSON-innhold og oversette til et objekt vi kan bruke direkte i Python, og å skrive et Python-objekt (en tabell eller liste) til JSON-format. Dokumentasjonen for modulen kan du finne på <a href="https://docs.python.org/3/library/json.html">https://docs.python.org/3/library/json.html</a>, men vi skal gå igjennom hvordan den brukes her også.
            <Db />
            For å demonstrere hvordan modulen fungerer, trenger vi JSON-filer å jobbe med. Legg de to JSON-eksemplene vi skrev over inn i to forskjellige filer. Hvis du bruker IDLE (eller en forholdsvis normal editor), kan du gjøre dette ved å lage en ny fil, markere og kopiere JSON-innholdet med Ctrl-C og lime det inn med Ctrl-V (eller tilsvarende på Mac). Når du lagrer filen, husk å velge "alle filtyper" og legge på <Ic>.json</Ic> på slutten av navnet. I våre eksempler kommer vi til å kalle de to filene henholdsvis <Ic>by.json</Ic> og <Ic>karakterer.json</Ic>.
            <Db />
            La oss prøve å lese den første fila. Til dét kan vi bruke <Ic>load</Ic>-funksjonen i <Ic>json</Ic>-modulen. <Ic>load</Ic>-funksjonen tar inn et <i>filobjekt</i>, som betyr at vi må åpne fila vi vil lese, før vi sender den til <Ic>load</Ic>-funksjonen. Her er et eksempel der vi leser den første av de to filene:
            <CodeBlock>{`import json

with open('by.json') as fil:
    bytabell = json.load(fil)
    
print(bytabell['navn'], 'er en by i', bytabell['land'], 'med', \\
    bytabell['befolkning'], 'mennesker')`}</CodeBlock>
            
            (Bakoverskråstreken <Ic>{`\\`}</Ic> har kun den funksjonen at den lar oss splitte et funksjonskall over flere linjer.)
            <Db />
            Først importerer vi modulen, så åpner vi filen, og deretter lar vi <Ic>json.load</Ic>-funksjonen gjøre magien sin for å oversette filinnholdet til et Python-objekt. Her ser vi at vi kan bruke objektet direkte som en tabell etter å ha lest det ut. 
            <Db />
            Vi tar med et eksempel der vi først leser et objekt fra en JSON-fil, endrer objektet, og skriver det til en annen JSON-fil. Her bruker vi også <Ic>dump</Ic>-funksjonen, som gjør det omvendte av <Ic>load</Ic> - den skriver et Python-objekt til en fil.
            <CodeBlock>{`import json
            
with open('karakterer.json') as fil:
    karakterliste = json.load(fil)

for karakter in karakterliste:
    if karakter['navn'] == 'Slur':
        karakter['venner'].append('Humlesnurr')

with open('oppdaterte_karakterer.json', 'w') as fil:
    json.dump(karakterliste, fil)`}
    </CodeBlock>
            Her har vi først lest ut karakterene, deretter går vi igjennom alle karakterene og passer på at Slur har en venn. Deretter åpner vi en ny fil for skriving, og bruker <Ic>dump</Ic> til å skrive lista med det oppdaterte objektet til filen.
            <Db />
            <Ic>json</Ic> er vel og bra å kunne, fordi det forenkler prosessen med å lagre kompleks informasjon fra kjøringen av et program og lese det når programmet kjøres senere, for eksempel for å lagre noe brukeren har gjort. Men det er flere steder vi kan finne JSON-filer. Det ser vi på i neste seksjon:

            <h2>Web-forespørsler</h2>

            Internett er et rart sted, men det går an å finne nyttig informasjon der også. Og denne informasjonen kan vi bruke Python til å hente ut! I denne seksjonen skal vi se på hvordan vi kan få en værmelding for dagen i dag på et spesifikt sted, ved å sende en forespørsel over Internett.
            <Db />
            For å sende forespørsler over Internett, kan vi bruke pakken <Ic>requests</Ic>. Men dersom du nå skriver <Ic>import requests</Ic> øverst i et program og kjører det, får du fort beskjed om at pakken ikke finnes. <Ic>requests</Ic> kommer nemlig ikke ferdig installert med de fleste Python-installasjoner, slik at du nå blir nødt til å installere den på maskinen din før vi kan bruke den. Vi går igjennom prosessen for installasjon her:

            <h3>Installere pakker</h3>

            Moduler er inneholdt i <i>pakker</i>, og det er pakker vi installerer når vi skal ha tak i nye moduler. For å installere en pakke, vil vi trenge å bruke terminalen. Hvordan terminalen fungerer, varierer litt fra operativsystem til operativsystem. Her gjengir vi kort hvordan du finner fram til terminalen på forskjellige plattformer:

            <h4>Windows</h4>
            Trykk start-knappen nederst til venstre på skjermen og søk på <i>cmd</i> eller <i>ledetekst</i> (eller engelsk: <b>Command Prompt</b>). Trykk enter, og du skal få opp et svart vindu med litt tekst i.

            <h4>MacOS</h4>

            Trykk på Launchpad-ikonet på programlinjen nederst på skjermen (eller hvor du enn har gjort av den) og søk på "Terminal". Når du starter den, skal du få opp et vindu med litt tekst i.

            <h4>Linux (Ubuntu)</h4>

            Trykk på startmenyen og søk på "Terminal" og trykk på programmet for å starte det.

            <h4>Test terminalen</h4>

            For å teste terminalen (uansett hvilket operativsystem du bruker), skriv <Ic>python3</Ic> på terminalen og trykk linjeskift. Hvis du får opp litt tekst og en <Ic>{`>>>`}</Ic>, som i den interaktive Python-konsollen, så kan du være sikker på at det fungerer, og du kan gå ut av Python-konsollen (skriv <Ic>exit()</Ic>), og fortsette på instruksjonene under. Hvis du derimot får beskjed om at programmet ikke ble funnet, tyder det på at Python ikke ble lagt til i <Ic>PATH</Ic>-variabelen ved installasjon. Dersom dette er tilfellet, vil den enkleste løsningen være å installere Python på nytt, og sørge for at du legger til Python i <Ic>PATH</Ic> som en del av installasjonen ved å følge instruksjonene i starten av denne bloggen. Ikke vær redd om du må gjøre dette - ingen av programmene du har skrevet hittil kommer til å forsvinne, så lenge du ikke har lagt dem akkurat der Python er installert!
            
            <NoticeBlock>I Windows risikerer du å oppleve et tredje alternativ: Windows åpner opp Microsoft Store for å laste ned Python. Dersom dette skjer, må du følge instruksjonene et stykke ned i Microsoft Store-vinduet; de ber deg om å gå til startmenyen og finne "Administrer appkjøringsaliaser" (engelsk: <b>Manage App Execution Aliases</b>), og der skru av aliaser for Python og Python3. Etter å ha gjort dét, kan du lukke terminalen du startet og åpne en ny en, og prøve å skrive <Ic>python3</Ic> på nytt.</NoticeBlock>
            
            <h4><Ic>pip</Ic></h4>
            Den vanligste måten å installere pakker på i Python, er ved å bruke programmet <Ic>pip</Ic> som blir installert samtidig med Python. <Ic>pip</Ic> er et kommandolinjeprogram, som betyr at vi kjører det fra terminalen, og får ikke opp noe eget vindu med et brukergrensesnitt. Dersom du skriver <Ic>pip</Ic> i terminalen og trykker linjeskift, får du opp instruksjoner om hvordan programmet kan brukes. Ikke få panikk om du ikke skjønner bæret - vi går nå igjennom hvordan vi installerer en pakke:
            <Db />
            Modulen vi skal bruke for web-forespørsler, heter som nevnt <Ic>requests</Ic>, og pakken den ligger i går under samme navn. For å installere den med <Ic>pip</Ic>, skriver vi rett og slett 
            <CodeBlock>{`pip install requests`}</CodeBlock>
            i terminalen og trykker enter. Dersom du er heldig, vil nå <Ic>pip</Ic> si at den laster ned <Ic>requests</Ic> og noen andre pakker. Årsaken til at den laster ned mer enn bare <Ic>requests</Ic>, er at <Ic>requests</Ic> er avhengig av disse pakkene for å kunne fungere. Dersom <Ic>pip</Ic> gir deg en feilmelding, er det beste håpet ditt å bruke feilmeldingen som søketekst på Internett og se om noen har et godt svar på problemet.
            <Db />
            Dersom det foregående steget fungerte, gratulerer! <Ic>requests</Ic> er blitt installert! Kommandolinjeprogrammer som <Ic>pip</Ic> kan virke skumle i starten, men de er ekstremt effektive når du vet hvordan du bruker dem.

            <h3>Sende en forespørsel</h3>

            Vi begynner med å sende en enkel HTTP GET-forespørsel til nocturne.no. Ikke vær redd om disse begrepene er fremmede for deg - nettverk og forespørsler kunne vært et eget kapittel i denne bloggen. Her hopper vi over alle detaljer og viser bare hvordan vi kan sende enkle forespørsler. Om du er interessert, kan du lese dokumentasjonen til <Ic>requests</Ic> her: <a href="https://docs.python-requests.org/en/master/index.html">https://docs.python-requests.org/en/master/index.html</a>.
            <Db />
            For å sende en GET-forespørsel, bruker vi bare funksjonen <Ic>get()</Ic> i <Ic>requests</Ic>-modulen. <Ic>get</Ic>-funksjonen kan ta flere argumenter, men bare ett er obligatorisk: URLen. URL (<b>U</b>niform <b>R</b>esource <b>L</b>ocator) er rett og slett bare en nettadresse, slik som dem man skriver inn i nettleseren for å komme til en nettside. URLen vi skal bruke i dette eksempelet er <Ic>https://nocturne.no/hei</Ic>. Her er <Ic>nocturne.no</Ic> <i>domenenavnet</i> og <Ic>/hei</Ic> er <i>stien</i> (engelsk: <b>path</b>). Stien er ikke tilfeldig, serveren som er vert for nocturne.no er programmert til å gi en respons når noen sender en GET-forespørsel til <Ic>/hei</Ic>-stien. Nok snakk - på tide med litt kode:
            <CodeBlock>{`import requests
            
respons = requests.get('https://nocturne.no/hei')

meldingsobjekt = respons.json()
print('Meldingen er:', meldingsobjekt['melding'])`}</CodeBlock>
            
            Vi har sendt en forespørsel, og med litt flaks, fått et svar fra serveren. Svaret vi får er et respons-objekt, som vi lagrer i variabelen <Ic>respons</Ic>. Responsvariabelen inneholder diverse informasjon i tillegg til selve responsdataen, men her er det bare dataen vi er interessert i. For denne forespørselen forventer vi å få en responsdata som inneholder et JSON-objekt med et felt som heter <Ic>melding</Ic>. For å hente ut dette bruker vi <Ic>.json()</Ic>-medlemsfunksjonen på responsobjektet, som automatisk oversetter JSON-innholdet til en Python-tabell. Til slutt skriver vi meldingen vi fikk ut på skjermen. Prøv koden over selv og se om du får ut meldingen!
            <Db />
            La oss prøve å få tak i litt værdata ved hjelp av <Ic>requests</Ic>-modulen. For å få til det skal vi sende en forespørsel til <a href="met.no">met.no</a>, eid av Meteorologisk Institutt. I tillegg til en vanlig nettside, har met.no nemlig et <i>API</i> (<b>A</b>pplication <b>P</b>rogramming <b>I</b>nterface), som er et sett med stier man kan sende forespørsler til, beregnet for programmer i motsetning til menneskelige brukere. 
            <Db />
            Her er en oversikt over de forskjellige stiene vi kan bruke for å hente data fra met.no: <a href="https://api.met.no/weatherapi/locationforecast/2.0/#!/data/get_compact">https://api.met.no/weatherapi/locationforecast/2.0/#!/data/get_compact</a>. Slike stier kaller vi også <i>endepunkter</i>. Vi skal bruke endepunktet <Ic>/compact</Ic> i eksempelet vårt. Beskrivelsen kan være litt uoversiktelig i starten, men kort fortalt lar <Ic>/compact</Ic> oss sende inn koordinater for en hvilken som helst plass på jorda, og få tilbake værdata for dette stedet. Vi kommer til å bruke Oslo, som har koordinater 59.913889, 10.752222, som eksempel (koordinatene må være på desimalform, i motsetning til DMS-format som stykker opp koordinatene i grader, minutter og sekunder).
            <Db />
            Før vi går i gang, bør du være oppmerksom på <a href="https://developer.yr.no/doc/TermsOfService/">brukerveiledning for APIet til Meteorologisk Institutt</a>. I grove trekk går det ut på at du ikke skal sende overdrevent mange forespørsler, og at du må identifisere deg. Vi går igjennom identifikasjonsbiten snart, men den første delen må du passe på selv. "Overdrevent mange forespørsler" er selvfølgelig ikke veldig presist formulert. Det du først og fremst må passe deg for, er å ikke sende forespørsler igjen og igjen i en løkke uten noen form for venting mellom hver forespørsel. Som en tommelfingerregel bør du ikke sende mer enn én forespørsel hvert tiende sekund når du tester endepunktene, så lenge du ikke vil ha din egen plass på svartelista til Meteorologisk Institutt.
            <Db />
            Til identifikasjon kan du rett og slett bruke din private e-postadresse. E-postadressen setter vi inn i <i>headeren</i> til forespørselen vår. Headerene er en rekke indeks-verdi-par som sendes som en del av forespørselen. E-postadressen vil legges på headeren <Ic>'User-Agent'</Ic>. I tillegg skal vi eksplisitt be om å få et JSON-objekt tilbake, i motsetning til andre formater de kunne finne på å returnere. Dette gjør vi ved å sette headeren <Ic>'Accept'</Ic> til <Ic>application/json</Ic>. Vi kommer til å spesifisere headerne ved hjelp av en Python-tabell, og det samme med koordinatene vi sender ved som parametere. Koden for å sende forespørselen blir da seende slik ut (husk å bytte ut e-postadressen om du kopierer denne koden!):

            <CodeBlock>{`import requests

headere = { 'User-Agent': <e-postadresse>, 'Accept': 'application/json' }
parametere = { 'lat': 59.913889, 'lon': 10.752222}
respons = requests.get('https://api.met.no/weatherapi/locationforecast/2.0/compact', \\
    headers=headere, params=parametere)`}</CodeBlock>

            Flott, men hvordan vet vi hva vi får i responsen? Oversikten over endepunkter inneholder et eksempel for en respons fra <Ic>/compact</Ic>-endepunktet, som er et stort JSON-objekt. Det er et objekt med et <Ic>'properties'</Ic>-felt, som igjen inneholder et felt som heter <Ic>'timeseries'</Ic> som er en liste. Denne lista inneholder værmeldinger for det gitte stedet for en rekke tidspunkter. Objektet som gir oss informasjon om været akkurat nå finner vi igjen i <Ic>['data']['instant']['details']</Ic>. Som et eksempel kan vi hente ut en temperatur og korresponderende tidspunkt fra responsen vi fikk over ved å skrive:
            <CodeBlock>{`data = respons.json()

temperatur = data['properties']['timeseries'][0]['data'] \\
    ['instant']['details']['air_temperature']
tidspunkt = data['properties']['timeseries'][0]['time']

print('På tidspunktet', tidspunkt, 'var temperaturen', temperatur, 'i Oslo')`}</CodeBlock>
            
            Om alt klaffer, skal du ha fått en meldingsutskrift som ser omtrent slik ut:
            <CodeBlock>{`På tidspunktet 2021-07-11T11:00:00Z var temperaturen 22.5 i Oslo`}</CodeBlock>
            Tidspunktet her er formatert på UTC-format. Det er forholdsvis lett å lese, men husk at tiden i UTC alltid oppgis for Greenwich i England, som betyr at du må legge til én eller to timer (avhengig av om det er vinter-/sommertid) for å få tilsvarende tidspunkt i Norge.
            <Db />
            Sånn! Det var en lang og sammensatt seksjon, men forhåpentlig fikk du noe fornuftig ut av det! Det er mange andre nettsteder som tilbyr tilsvarende APIer, noe som gjør det mulig å bruke mye forskjellige informasjon i programmene dine. Det er bare å fyre opp favorittsøkemotoren din for å finne ut om det er et API der ute som gir deg akkurat den dataen du vil ha!

            <h2>Vinduer</h2>

            Vi rasker med oss en modul til: Vi tar en kjapp kikk på hvordan man kan lage vindubaserte programmer i Python. Dette gjør det mulig å lage programmer som er lettere og mer intuitive å bruke, i tillegg til at man kan presentere visuell informasjon. I dette eksempelet skal vi bruke modulen <Ic>tkinter</Ic> for å lage et vindu. Den offisielle dokumentasjonen for <Ic>tkinter</Ic> kan du finne <a href="https://docs.python.org/3/library/tkinter.html">her</a>. Dessverre vil antakeligvis dokumentasjonen være vanskelig å lese, ettersom den benytter seg mye av <i>klasser</i>, som er et Python-konsept vi ikke har sett på i denne innføringen. 
            <Db />
            <Ic>tkinter</Ic> kommer ofte ferdig installert med Python. Dersom dette ikke er tilfellet for ditt oppsett, må du installere <Ic>tkinter</Ic> ved hjelp av <Ic>pip</Ic>, slik vi gjorde med <Ic>requests</Ic>-modulen over.
            <Db />
            Den vanligste måten å importere <Ic>tkinter</Ic> på, er slik som dette:
            <CodeBlock>{`import tkinter as tk`}</CodeBlock>
            Når vi legger på <Ic>as tk</Ic> etter modulnavnet, forteller vi Python at vi vil bruke navnet <Ic>tk</Ic> for å referere til modulen. Dette er litt kortere å skrive, og det gjør det mer behagelig å skrive programmet, for vi kommer til å referere til modulen flere ganger.
            <Db />

            <Ic>tkinter</Ic> inneholder objekter og funksjoner for å konstruere vinduer og komponenter du kan plassere i vinduet, som tekst og knapper. For å lage et vindu bruker vi 
            <CodeBlock>{`vindu = tk.Tk()`}</CodeBlock>
            Legg merge til at funksjonen <Ic>Tk()</Ic> staves med stor forbokstav. I Python er dette en vanlig konvensjon for <i>konstruktører</i>, som er funksjoner som lager og returnerer <i>instanser</i> av <i>klasser</i>. Dette er konsepter som vi ikke vil gå igjennom her; for våre formål holder det å tenke på konstruktører som vanlige funksjoner som returnerer objekter.
            <Db />
            Når vi har et <Ic>Tk</Ic>-objekt, har vi alledere et vindu vi kan vise fram på skjermen. Men kjører du programmet over, vil det avsluttes nesten umiddelbart uten at vinduet dukker opp. For å vise vinduet, må vi kalle <Ic>mainloop()</Ic>-medlemsfunksjonen på <Ic>Tk</Ic>-objektet. <Ic>mainloop()</Ic> "fanger" Python, slik at den ikke leser videre på koden før vinduet blir lukket. Så et helt fundamentalt vindusprogram kan se slik ut:
            <CodeBlock>{`import tkinter as tk

vindu = tk.Tk()
vindu.mainloop()`}</CodeBlock>

            Kjører man denne koden, får man opp et tomt vindu på skjermen. En god start!
            <Db />
            
            La oss gjøre noen kosmetiske endringer på vinduet. Først kan vi kalle medlemsfunksjonen <Ic>title()</Ic> på vinduet med et strengargument for å gi det en tittel som vil vises på den øverste kanten av vinduet. Noen egenskaper ved vinduet kan vi også endre ved å indeksere på strenger i objektet som om det var en tabell. For å endre bakgrunnsfargen til vinduet kan vi for eksempel sette verdien på indeks <Ic>'bg'</Ic> til for eksempel <Ic>'red'</Ic>. Skrevet rett ut blir de to eksemplene over seende slik ut:
            <CodeBlock>{`vindu.title('Dette er en tittel!')
vindu['bg'] = 'red'`}</CodeBlock>
            Husk å legge disse to linjene før du kaller <Ic>mainloop</Ic>, ellers vil de ikke kjøres før etter vinduet er lukket.
            
            <Db />
            
            La oss legge til en knapp. Når vi lager en knapp bruker vi <Ic>Button</Ic>-funksjonen. Den tar ett argument, nemlig vinduet knappen skal vises i. Hvis vi fortsetter på programmet over, kan vi altså lage knappen slik: 
            <CodeBlock>{`knapp = tk.Button(vindu)`}</CodeBlock>
            Dette alene er ikke nok for at knappen skal vises i vinduet. Til dét trenger vi å spesifisere <i>hvordan</i> knappen skal plasseres. Her skal vi gjøre det ved hjelp av medlemsfunksjonen <Ic>pack</Ic>. Vi kan kalle <Ic>pack</Ic> uten argumenter slik:
            <CodeBlock>{`knapp.pack()`}</CodeBlock>
            Dette vil plassere knappen, som akkurat nå bare er en liten grå firkant, midt på toppen av vinduet. Pass på at både initialiseringen av <Ic>knapp</Ic> og <Ic>pack</Ic>-kallet må gjøres før kallet til <Ic>mainloop</Ic>.
            <Db />
            Dersom vi vil være mer kreative med plasseringen av knappen, kan vi spesifisere hvilken av de fire sidene vi vil plassere knappen på ved hjelp av <Ic>side</Ic>-argumentet. Vi kan også legge inn mellomrom på sidene og over og under knappen henholdsvis med argumentene <Ic>padx</Ic> og <Ic>pady</Ic>. Verdien til <Ic>padx</Ic> og <Ic>pady</Ic> oppgis i antall piksler. For å plassere knappen til venstre, med litt mellomrom fra kanten, kan vi i stedet for kallet over bruke
            <CodeBlock>{`knapp.pack(side='left', padx='30')`}</CodeBlock>

            Et tomt rektangel er ganske intetsigende. For å gjøre den mer informativ kan vi bruke <Ic>'text'</Ic>-attributtet. Vi setter dette attributtet på samme måte som vi satte bakgrunnsfarge på vinduet over:
            <CodeBlock>{`knapp['text'] = 'Dette er en knapp!'`}</CodeBlock>
            Andre attributter man kan sette på knapper inkluderer bredde og høyde (<Ic>'width'</Ic> og <Ic>'height'</Ic>, oppgis i piksler) og <Ic>'fg'</Ic> og <Ic>'bg'</Ic>, som styrer henholdsvis tekstfarge og farge på resten av knappen.
            <Db />
            Naturligvis vil vi gjerne at knappen skal gjøre mer enn å bare ligge stille og se søt ut. Hvordan bestemmer vi hva som skjer når en bruker trykker på knappen? Svaret er attributtet <Ic>'command'</Ic>, hvis verdi er en funksjon. Når brukeren trykker på knappen, kjøres funksjonen.
            <Db />
            Her er knappen koblet opp med en enkel funksjon:
            <CodeBlock>{`def hei():
    print('Hallo!')

knapp['command'] = hei`}</CodeBlock>
            Legg merke til at når vi setter <Ic>'command'</Ic>-attributtet, skriver vi <Ic>hei</Ic> og ikke <Ic>hei()</Ic>. Dette er fordi vi vil referere til funksjonen selv og <i>ikke</i> kalle den og referere til returverdien (som i dette tilfellet ville vært ingenting). Prøv å legge inn dette i programmet (fortsatt før <Ic>mainloop</Ic>-kallet), og sjekk at du får ut tekst hver gang du trykker på knappen! 
            <Db />
            Til slutt tar vi et litt mer sammensatt eksempel der vi bruker det vi har sett i denne seksjonen kombinert med <Ic>random</Ic>-modulen:
            <CodeBlock>{`from random import randint
import tkinter as tk

vindu = tk.Tk()

knapp = tk.Button(vindu)
knapp['text'] = 'Bytt farge'

def bytt_farge():
    farger = ['red', 'blue', 'yellow', 'green', 'brown', 'black', 'white', 'gray', 'turquoise']

    siste_indeks = len(farger) - 1
    valgt_indeks = randint(0, siste_indeks)
    valgt_farge = farger[valgt_indeks]
    vindu['bg'] = valgt_farge

knapp['command'] = bytt_farge
knapp.pack(side='top', pady=40)

vindu.mainloop()`}</CodeBlock>

            Vi har gått igjennom alle konseptene som er brukt i dette programmet, men det er mer sammensatt enn det meste vi har sett før. Kjør det og les koden og se om du forstår hva som skjer og hvordan det fungerer!

            <h2>Å stykke opp et program i moduler</h2>

            Helt til slutt nevner vi et annet formål med moduler:
            <Db />
            Modulkonseptet kan brukes til å stykke opp programmene dine i flere filer. Når programmet består av flere Python-filer, vil én av filene være "hovedfila" som du kjører som vanlig. De andre filene kan inneholde funksjoner og variabler som kan brukes fra hovedfila. 
            <Db />
            For å importere andre Python-filer, la oss si <Ic>kule_funksjoner.py</Ic>, trenger du at denne fila og fila det importeres fra ligger i samme mappe. Deretter trenger du bare å skrive 
            <CodeBlock>{`import kule_funksjoner`}</CodeBlock>
            Legg merke til at vi bare skriver <Ic>kule_funksjoner</Ic> uten <Ic>.py</Ic> på slutten. Det er alt! Nå kan du bruke funksjonene fra <Ic>kule_funksjoner.py</Ic> i fila der du skrev linja over!
            <Db />
            Du kan også importere filer inn i andre filer enn hovedfila også. Hvis du for eksempel har en fil som heter <Ic>hei.py</Ic> som inneholder en funksjon: 
            <CodeBlock>{`def si_hei():
    print('Hei?')`}</CodeBlock>
            
            Og en annen fil som heter <Ic>superhei.py</Ic> med innholdet 
            <CodeBlock>{`import hei

def superhei(antall):
    for i in range(antall):
        hei.si_hei()`}
            </CodeBlock>
            
            så kan du lage en hovedfil, f. eks. <Ic>hoved.py</Ic> som ser slik ut:
            <CodeBlock>{`import superhei

superhei.superhei(5)`}</CodeBlock>
            Som skriver en forvirret hilsen på skjermen fem ganger.

            <Db />
            Det å splitte opp programmet ditt i flere filer er sannsynligvis ikke noe du trenger å tenke på med det første. Det er når koden begynner å bli stor og uoversiktlig at man kan begynne å tenke på kategorisere den i flere filer for å gjøre det enklere å jobbe med den.

            <h2>Oppsummering</h2>

            Det var et monster av en post! Uansett om du leste alt eller ikke, håper jeg du fant <i>noe</i> fornuftig i mylderet over. Generelt er dét å bruke moduler sentralt for å kunne programmere. Derfor har vi prøvd å vise fram både hvordan moduler fungerer og hvordan man finner dokumentasjon. Det kan være stor forskjell i hvor enkelt det er å forstå og hvor veldokumenterte moduler er, men man blir mye mer komfortabel med å jobbe med moduler jo mer man... Jobber med moduler.
            <Db />
            Som nevnt er dette bare en liten smakebit på det som finnes der ute. Det finnes moduler for alle mulige formål, så dersom du har en idé for et programmeringsprosjekt er det en stor sjanse for at du finner en modul som kan hjelpe deg!
            <Db />
            Dette markerer slutten for hoveddelen av denne innføringen i Python. Vi har i prinsippet gått igjennom alt som skal til for å lage et hav av forskjellige programmer - hovedutfordringen vil være å bli mer komfortabel med språket og tenkemåten, og der er det lite annet å gjøre enn å ta tiden til hjelp. 
            <Db />
            Etter dette vil det komme minst én bonuspost der vi går igjennom et spesifikt prosjekt og viser hvordan man kan gå fra en idé til et enkelt program ved å bruke det vi har lært så langt.
            <Db />
            Forfatteren av denne bloggen håper du har fått nytte av det som har stått her, at det har vært lærerikt og interessant, og kanskje til og med gøy? Uansett håper jeg ikke programmeringseventyret ditt stopper her, men at du bruker kunnskapen til å utforske videre og får brukt koding til noe du drar nytte eller kan være stolt av!

            <h2>Oppgaver</h2>
            
            Om du ikke har noen programmeringsideer selv ennå, kan du alltids starte her! Noen av disse oppgavene vil være litt mer utfordrende enn de vi har sett tidligere, først og fremst fordi de vil kreve at du leser deg opp på dokumentasjon av andre moduler for å kunne bruke dem. Ikke føl at du må gjøre alle sammen - velg deg de du synes virker mest interessante og relevante. Og ta deg tiden du trenger - du får nok av tid til å være stresset senere.
            <Db />
            1. Simulér et enkelt terningspill - se hvor mange ganger du får f. eks. seks på terningen av å kaste den én million ganger. Stemmer det med intuisjonen? Hvis du kan litt matematikk: Finn ut omtrent hvor stor sannsynlighet det er for å få minst 15 i sum når du kaster tre terninger ved å bruke simuleringer.
            <Db />
            2. Prøv ut <a href="https://data.ssb.no/api/v0/dataset/?lang=en">APIet til ssb.no</a> for å hente ut statistikk om noe som interesserer deg.
            <Db />
            3. Lag en gjettelek med et vindu. Velg et tilfeldig tall med <Ic>random</Ic>-modulen og bruk <Ic>tkinter</Ic> for å lage et brukergrensesnitt med et tekstfelt og en knapp for å gjette, pluss tekst som forteller brukeren om de gjettet for høyt eller for lavt. Du kan bruke <Ic>tk.Entry()</Ic>-funksjonen for å lage innputtekstfelt og <Ic>tk.Text()</Ic> for å lage tekst som skal vises.
            <Db />
            4. Dersom du interesserer deg for statistikk, kan du prøve ut <a href="https://matplotlib.org/stable/index.html">matplotlib</a> for å lage diagrammer og plott for å vise fram data! Hvis du ser i <a href="https://matplotlib.org/stable/gallery/index.html">galleriet</a> finner du mange eksempler på hva man kan lage. Om du føler deg eventyrlysten, kan du kombinere dette med utfallet av terningsimuleringen i oppgave 1 eller statistikk fra SSB fra oppgave 2.
            <Db />
            5. Bruk modulen <a href="https://docs.python.org/3/library/turtle.html#module-turtle">turtle</a> til å lage noen interessante tegninger!
        </PostWrapper>
    </>
);

export default ModulesNo;