import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const LinguisticAnalysisNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hei igjen! Dette er en <i>prosjektpost</i>, som betyr at vi gjennomgår et programmeringsprosjekt for å vise hvordan du kan bruke det du har lært i de tidligere postene. På papiret har du lært nok Python til å kunne utføre disse prosjektene på egen hånd. Realiteten er likevel at det kan være vanskelig å vite hvor man skal begynne når man vil programmere noe på egen hånd. Forhåpentligvis vil denne prosjektposten hjelpe deg med å finne veien selv når du senere begir deg ut på eventyr alene.

            <Db />

            I denne posten skal vi bedrive litt <i>lingvistisk analyse</i>. Lingvistisk analyse kan være så mangt, men vi skal her fokusere på å bruke store mengder tekst til å utforske noen aspekter i norsk bokmål, og visualisere det vi finner ut. Vi kommer til å ta i bruk litt matematikk i denne posten, men den kommer til å være forholdsvis enkel og vil ikke være hovedfokuset.
            <Db />

            Vi kommer til å introdusere noen teknikker og litt terminologi som er veldig spesifikt for lingvistisk analyse. Dette er typisk for mange programmeringsprosjekter - ofte kombineres selve programmeringen med konsepter fra andre fagområder. Slike "eksterne" konsepter kaller vi ofte <i>domenekunnskap</i> (engelsk: <b>domain knowledge</b>). Du trenger ikke å fokusere på disse teknikkene og terminologien, men se gjerne på det som en bonus at du lærer litt om lingvistikk mens du leser dette!

            <h2>Prosjektbeskrivelse</h2>

            For å starte et slikt prosjekt, begynner vi først med å definere klart hva det er vi vil oppnå med prosjektet. På samme måte som vi må være helt tydelige når vi skriver et Python-program for at maskinen skal vite hva den skal gjøre, bør vi være veldig klare på hva det er vi prøver å gjøre. Det gjør det mye lettere å planlegge hvordan vi går fram for å lage programmet.
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
            For å finne det vanligste ordet i teksten, leser vi igjen gjennom linje for linje, men denne gangen må vi i tillegg skjære ned på tegnsetting og store bokstaver, for å sørge for at linja bare er en streng av mellomrom-separerte ord, som gjør det lett å hente ut hvert av dem. Når vi henter dem ut, bruker vi hvert av dem som indeks i en tabell, hvor korresponderende verdi vil være antallet av ordet vi har funnet hittil. Til slutt kan vi gå igjennom tabellen for å finne hvilket ord vi har flest av. Hvis denne forklaringen var forvirrende, blir det nok klarere når vi kommer til dette steget senere.
            <Db />
            Når vi teller opp hver bokstav i språket, bruker vi også en tabell. I dette tilfellet vil indeksene være de norske bokstavene, og korresponderende verdier er antallet.
            <Db />
            For å visualisere informasjonen, kommer vi til å bruke <a href="https://matplotlib.org/">matplotlib</a>, en pakke som lar oss lage grafer og diagrammer. 

            <Db />
            Vi kommer til å skrive disse delene inn i hver sin funksjon, som igjen kan bruke andre funksjoner. Det gjør det lett å f. eks. kjøre bare én av dem av gangen under testing. 
            <Db />
            Nå som vi har en grov oversikt over hva vi prøver å lage, kan vi konsentrere oss om neste problem: Hvilken tekst bruker vi som innputt til dette programmet?

            <h2>Korpus</h2>

            Et <i>korpus</i> i lingvistikksammenheng er en stor tekstsamling, gjerne på flere millioner ord, som er laget for å analysere språket tekstene er skrevet i. Korpus kan enten fokusere på spesielle type tekster, som avisartikler, romaner eller manus, eller være en kombinasjon av mange forskjellige sjangere. En språkforsker kan bruke et korpus for å f. eks. finne ut hvor vanlig et ord er, for å sammenligne skrivestiler mellom sjangre, eller for å trene opp en maskinlæringsalgoritme til å gjenkjenne et språk, for å nevne noe. Hva slags korpus man bruker er helt avhengig av hva man ønsker å gjøre med det.
            <Db />
            I dette prosjektet kommer vi til å bruke <a href="https://www.nb.no/sprakbanken/ressurskatalog/oai-nb-no-sbr-4/">Norsk aviskorpus</a>, som i motsetning til mange andre korpus er fritt tilgjengelig for all ikke-kommersiell bruk. Som navnet tilsier, er det en tekstsamling hentet fra forskjellige norske aviser. Avisartikler er ikke fullstendig optimale for generell språkanalyse, ettersom de ofte inneholder mange dramatiske hendelser og en del politikk, slik at for eksempel ord som "trusler", "politiker" og "Høyre" forekommer oftere enn de gjør i vanlig dagligtale og de fleste andre skriftlige kilder. Det er likevel godt nok for våre formål.
            <Db />
            Korpuset kan lastes ned <a href='https://nocturne.no/files/korpus.zip' download>her</a>. Merk at korpuset ligger i en ZIP-fil som må pakkes ut før du kan bruke det i et program. I samme fil ligger også lisensinformasjon. Aviskorpuset er nemlig beskyttet av en <a href='https://creativecommons.org/licenses/by-nc/4.0/'>lisens</a> som tillater fri distribusjon og modifikasjon, men ikke kommersiell bruk. Tekstfila inneholder en forenklet versjon av korpusets samlig av aviser på norsk bokmål fra 2019. Kort fortalt går forenklingen ut på at formatering og ekstra informasjon om avisartiklene er fjernet slik at vi står igjen med en ren tekstfil som er lett å lese i Python. Denne modifikasjonen er også nevnt i den medfølgende lisensfila, også pålagt av den nevnte lisensen.
            <Db />
            Da skal tekstmaterialet være i boks, og vi kan fortsette på neste steg i prosjektet - implementasjon!
            
            <h2>Implementasjon</h2>

            Det er på tide å få skitt under neglene. Vi har allerede planlagt grovt hvordan vi skal gå fram ovenfor, så det er forholdsvis greit for oss å se hva vi må gjøre. Vi starter fra toppen:

            <h3>Telle forekomster av et enkeltord</h3>

            Som nevnt vil vi skrive hver separate oppgave inn i sin egen funksjon, slik at det blir enklest mulig for oss å holde orden og teste ett av dem av gangen. Vi begynner her med å skrive funksjonen <Ic>tell_forekomster</Ic>, som tar inn ett argument - nemlig en streng som inneholder ordet vi vil søke på. Deretter begynner vi å lese fra korpusfila:
            <CodeBlock>{`korpusfilnavn = 'destillert_aviskorpus_nob_2019.txt'
            
def tell_forekomster(ord):
    with open(korpusfilnavn) as korpusfil:`}
            </CodeBlock>
            Før vi i det hele tatt har rukket å starte på funksjonen, har vi definert variabelen <Ic>korpusfilnavn</Ic> som inneholder navnet på korpusfila. Her regner vi med at korpusfila ligger i samme som Python-fila vi skriver. Grunnen til at vi definerer denne variabelen <i>utenfor</i> funksjonen, er at det gjør det lett for oss å gjenbruke den i de andre funksjonene senere i programmet, som naturligvis kommer til å lese fra samme fil. Det første vi gjør inne i funksjonen er å åpne opp korpusfila ved å bruke filnavnet som ligger i denne variabelen.
            <Db />
            Flott, vi har en åpnet fil. Hva nå? Følger vi planen vi la tidligere, skal vi nå lese gjennom fila linje for linje. Som du kanskje husker, er dette en smal sak når vi har et filobjekt. Vi kan nemlig bruke filobjektet direkte i en <Ic>for</Ic>-løkke. 
            <CodeBlock>{`        for linje in korpusfil:`}</CodeBlock>
            Her kommer selve kjøttet i funksjonen - vi vil telle opp hvor mange ganger ordet vårt forekommer i strengen <Ic>linje</Ic>. Men vent et øyeblikk - hvis vi først finner ut antall forekomster, hva gjør vi så med tallet? Vi er naturligvis interessert i antall forekomster <i>totalt</i> i hele teksten, så vi trenger en måte å holde rede på hvor mange vi har funnet hittil mens vi leser linje for linje. Vi lager en variabel for dette, og initialiserer den til 0 <i>før</i> vi går inn i løkken:
            <CodeBlock>{`...
        totalt_antall_forekomster = 0
        for linje in korpusfil:
            ...`}</CodeBlock>
            Kodesnuttene vi viser framover kommer stort sett til å ligge i rekkefølge, så du trenger ikke å måtte gå tilbake og endre kode du allerede har skrevet, slik som her. I praksis er det derimot sjeldent man klarer å skrive koden direkte fra start til slutt; det skjer ofte at man underveis i kodingen for eksempel kommer på feil i framgangsmåten i tidligere kode, eller trenger å legge inn en ekstra variabel, som vi gjorde nettopp. 
            <Db />
            La oss fortsette! Neste steg i programmet er å telle opp forekomstene av et ord i linja. Før vi gjør dét, bør vi huske at Python (og stort sett alle programmeringsspråk) skiller skarpt mellom store og små bokstaver. For å sikre at vi klarer å telle f.eks. ordet "min" i uttrykket "Min kamp", gjør vi alle bokstavene i innputt-linja små:
            <CodeBlock>{
`            linje = linje.lower()`}</CodeBlock>
            
            Det begynner å bli en del indentering å holde styr på - denne linja skal altså indenteres tre ganger. Legg merke til at vi bare definerer iterasjonsvariabelen <Ic>linje</Ic> på nytt. Dette går fint, ettersom <Ic>linje</Ic> blir redefinert av Python til neste linje i fila når den hopper tilbake til starten av løkkeblokken i neste iterasjon.
            <Db />
            Nå er vi omsider klare til å telle forekomstene! Det viser seg at Python allerede har en hendig metode for å telle opp forekomstene av én tekststreng i en annen, nemlig medlemsfunksjonen <Ic>count()</Ic>. Dokumentasjonen for denne funksjonen kan du finne her: <a href='https://docs.python.org/3/library/stdtypes.html#str.count'>https://docs.python.org/3/library/stdtypes.html#str.count</a>.
            <Db />
            Dermed kan vi telle opp antall forekomster og legge det til totalantallet slik:
            <CodeBlock>{
`            antall_forekomster = linje.count(ord)
            totalt_antall_forekomster += antall_forekomster`}
            </CodeBlock>
            Nesten ferdig! Det vi mangler er å returnere antallet fra funksjonen. Pass på at dette gjøres med riktig indentering: Vi vil returnere fra inne i <Ic>with</Ic>-blokken, men ikke i løkkeblokken:
            <CodeBlock>{
`        return totalt_antall_forekomster`}</CodeBlock>
            Du kan eventuelt gjøre det helt i slutten av funksjonsblokken også.
            <Db />
            Dét er dét! Funksjonen er ferdig - alt vi mangler er å kalle den. Vi skriver følgende under funksjonen:
            <CodeBlock>{`antall_mennesker = tell_forekomster('menneske')
            
print('Fant', antall_mennesker, 'forekomster av "menneske" i teksten')`}</CodeBlock>
            
            Programmet er klar for å kjøres. Merk at det kan ta litt tid å kjøre dette programmet, siden det er enormt mye tekst som skal gjennomgås. Til slutt vil du få ut noe lignende dette på skjermen:
            <CodeBlock>{`Fant 34381 forekomster av "menneske" i teksten`}</CodeBlock>
            Merk at programmet vårt også vil telle opp ord som "mennesker" og "undermennesket", ettersom <Ic>count()</Ic>-funksjonen ikke skiller mellom enkeltord i teksten. Vi regner likevel dette som en god nok løsning av den første oppgaven.
            <Db />
            Så bra! Den første implementasjonsbiten er i boks - vi hopper videre til neste.
            
            <h3>Finne de vanligste ordene i teksten</h3>

            Vi lager en ny funksjon for å hente ut de vanligste ordene - vi starter med de samme linjene som i forrige punkt:
            <CodeBlock>{`def finn_vanligste_ord():
    with open(korpusfilnavn) as korpusfil:`}</CodeBlock>
            Som diskutert i planleggingssteget, vil vi bruke en tabell for å holde rede på ordene vi har sett, og hvor mange ganger vi har kommet over dem. Vi lager en tom tabell slik:
            <CodeBlock>{
`        ordforekomster = {}`}</CodeBlock>
            
            Så itererer vi:
            <CodeBlock>{
`        for linje in korpusfil:`}</CodeBlock>
            Her må vi holde tunga rett i munnen - vi vil gå igjennom linja og legge hvert ord inn i tabellen. Da må vi først dele opp strengen i ord. Vi har allerede sett at <Ic>split()</Ic>-funksjonen kan brukes til å dele opp en streng som består av flere linjer, og den fungerer for å splitte opp en streng i separate ord også. I tillegg bør vi, som i forrige punkt, passe på at linja bare består av små bokstaver, slik at ord blir gruppert sammen uavhengig av om de f.eks. står først i en setning eller ikke. Et siste hinder er tegnsettingen. Vi må fjerne alle punktum, komma og andre tegn fra slutten av hvert ord. 
            <Db />
            I og med at forhåndsprosesseringen av hver linje er såpass kompleks, er det en fordel å legge den ut i en egen funksjon. Her kaller vi den <Ic>hent_rene_ord</Ic>, som altså tar inn en tekstlinje og returnerer en liste med ord i små bokstaver og uten tegn på slutten. Funksjonen starter rett og slett med at vi gjør bokstavene i linja små og gjør en splitt:
            <CodeBlock>{`def hent_rene_ord(linje):
    deler = linje.lower().split()`}</CodeBlock>

            I koden over vil <Ic>linje.lower()</Ic> returnere en ny streng som inneholder bare små bokstaver, og vi kan kalle <Ic>split()</Ic> direkte på denne strengen uten å sette den til en variabel først.
            <Db />
            Neste steg er litt mer komplisert. Vi vil gå igjennom listen med ord vi nettopp har fått tak i, og fjerne alle tegn som ikke er <i>alfanumeriske</i> på starten og slutten av hvert ord, dvs. alt som ikke er enten et tall eller en bokstav. Vi kan bruke medlemsfunksjonen <Ic>isalnum()</Ic> for å sjekke om et tegn er alfanumerisk.
            <Db />
            Vi fjerner bare fra starten og slutten av hvert ord, sånn at vi beholder f.eks. ord som inneholder bindestrek uendret, men fjerner f.eks. punktum og anførselstegn. Dette kan vi gjøre ved å bevege oss én gang forlengs og én gang baklengs gjennom strengen og sjekke hvert enkelttegn til vi finner det første alfanumeriske tegnet. Når vi har to alfanumerisk tegn, ett fra hver ende, tar vi bare og bruker tekststrengen mellom disse tegnene, og legger inn i en resultatlista. Samtidig passer vi på at ordet ikke er tomt, sånn at vi unngår å legge inn f.eks. enkelttegn som ligger alene i en setning. 
            <Db />
            Koden for dette kan bli seende slik ut:
            <CodeBlock>
{`    resultatliste = []
    for ord in deler:
        første_alfanumeriske = -1
        siste_alfanumeriske = -1
        for i in range(0, len(ord)):
            if ord[i].isalnum():
                første_alfanumeriske = i
                break
        
        for i in range(len(ord) - 1, -1, -1):
            if ord[i].isalnum():
                siste_alfanumeriske = i
                break
        
        if første_alfanumeriske == -1:
            break
        
        resultatliste.append(ord[første_alfanumeriske:(siste_alfanumeriske + 1)])`}
            </CodeBlock>
            Det er et par ting som skjer her som vi ikke har sett tidligere. Det første er syntaksen <Ic>range(len(ord) - 1, -1, -1)</Ic>. Dette genererer et intervall fra og med <Ic>len(ord) - 1</Ic> til, men ikke med, <Ic>-1</Ic>, og teller nedover ett hakk av gangen, som er angitt av det tredje argumentet til <Ic>range()</Ic>. Dette er med andre ord det samme som intervallet <Ic>range(0, len(ord))</Ic> i revers.
            <Db />
            Det andre aspektet som krever en forklaring, er syntaksen <Ic>{`ord[første_alfanumeriske:(siste_alfanumeriske + 1)]`}</Ic>. Dette kalles <i>kutting</i> (engelsk: <b>slicing</b>), og betyr rett og slett at vi lager en ny streng som inneholder alle tegn i den gamle strengen som ligger fra og med <Ic>første_alfanumeriske</Ic> og til, men ikke med <Ic>siste_alfanumeriske + 1</Ic>. Med andre ord får vi en streng bestående av alle tegn mellom første og siste alfanumeriske tegn inklusiv.
            <Db />
            Det var en liten munnfull - ikke få panikk om du ikke forsto alt som skjedde her - to kan heller lese gjennom denne igjen senere om du vil! <Ic>hent_rene_ord</Ic>-funksjonen er omtrent ferdig; alt som mangler er å returnere resultatlisten: 
            <CodeBlock>
{`    return resultatliste`}</CodeBlock>
        
            Med denne hendige funksjonen i boks, kan vi gå tilbake til funksjonen <Ic>finn_vanligste_ord</Ic> og prosessere hver linje inne i løkken:
            <CodeBlock>
{`            ordliste = hent_rene_ord(linje)`}
            </CodeBlock>
            Nå er det bare å legge inn ordene i tabellen! Før vi legger inn hvert ord, må vi sjekke om det allerede ligger der. I såfall trenger vi bare å øke antallet av ordet med én. Ellers legger vi inn ordet sammen med antallet 1. For å sjekke om et ord ligger i tabellen, kan vi bruke <Ic>in</Ic>-operatoren.
            <CodeBlock>
{`            for ord in ordliste:
                if ord in ordforekomster:
                    ordforekomster[ord] += 1
                else:
                    ordforekomster[ord] = 1`}
            </CodeBlock>
            Flott! Når den ytterste løkka er ferdig med å kjøre, vil vi stå igjen med <Ic>ordforekomster</Ic> som er fylt til randen av ordene fra teksten, koblet med tilsvarende antall av ordet. Nå er spørsmålet: Hvordan henter vi ut ordet med flest forekomster. Vi viser to måter. 
            <Db />
            Den første metoden er veldig rett-fram. Vi itererer gjennom hele tabellen og holder rede på hvilket ord som har flest forekomster av dem vi har funnet hittil. I tillegg må vi holde rede på antallet av dette ordet, så vi kan sammenligne med de neste ordene vi finner. Koden for dette ser sånn her ut:
            <CodeBlock>
{`        vanligste_ord = ''
        største_antall = 0
        for ord, antall in ordforekomster.items():
            if største_antall < antall:
                vanligste_ord = ord
                største_antall = antall
        return vanligste_ord`}
            </CodeBlock>
            Når denne løkken har kjørt ferdig, vil <Ic>vanligste_ord</Ic> inneholde nettopp det vanligste ordet i hele teksten, og vi kan returnere det!
            <Db />
            Den andre metoden er mer komplisert, og også tregere, men vil la oss gjøre mer interessante ting med resultatet. Vi vil nemlig <i>sortere</i> ordene etter antall forekomster, slik at vi kan finne f.eks. de ti mest vanlige ordene, eller til og med de mest uvanlige, om vi vil. For å kunne sortere på antall forekomster, kommer vi til å legge hvert ord-antall-par i en liste av tupler, der hvert tuppel har antall som første element og ordet som andre. Når vi deretter sorterer Listen, vil Python bruke det første elementet i hvert tuppel, altså antallet, til å sortere, og bruke alfabetisk rekkefølge på ordene i tilfeller for ord med samme antall. Hele denne prosessen ser slik ut:
            <CodeBlock>
{`        tuppelliste = [(antall, ord) for ord, antall in ordforekomster.items()]
        tuppelliste.sort()
        
        return tuppelliste[-1][1]`}</CodeBlock>

            Her har vi brukt listeinklusjon for å gjøre konverteringen til liste fra tabell så kompakt som mulig. Etter å ha sortert listen, returnerer vi ordet (andre element) i det <i>siste</i> tuppelet, ettersom ordene blir sortert fra færrest forekomster til flest. For å hente ut siste element, bruker vi indeks <Ic>-1</Ic>. Bruker vi negative tall, vil Python nemlig starte å telle fra slutten av lista. Her kunne vi som sagt gjort mer interessante ting med informasjonen i listen, men vi nøyer oss med dette og lar en interessert leser prøve seg fram på egen hånd.
            <Db />
            Sånn, da mangler vi bare å kjøre funksjonen! Det gjør vi med følgende linjer:
            <CodeBlock>{`vanligste_ord = finn_vanligste_ord()
print('Det vanligste ordet var', vanligste_ord)`}</CodeBlock>
            Før du kjører, bør du kommentere ut funksjonskallet til forrige oppgave. Det er unødvendig å sitte og vente på at den skal kjøres når vi kun er interessert i resultatet fra den andre funksjonen.

        


        </PostWrapper>
    </>
);

export default LinguisticAnalysisNo;