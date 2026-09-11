+++
date = '2021-09-11'
title = 'Lingvistisk analyse'
weight = 120
+++


Hei igjen! Dette er en <i>prosjektpost</i>, som betyr at vi gjennomgår et programmeringsprosjekt for å vise hvordan du kan bruke det du har lært i de tidligere postene. På papiret har du lært nok Python til å kunne utføre disse prosjektene på egen hånd. Realiteten er likevel at det kan være vanskelig å vite hvor man skal begynne når man vil programmere noe selv. Forhåpentligvis vil denne prosjektposten hjelpe deg med å finne veien senere når du begir deg ut på kodeeventyr alene.



I denne posten skal vi bedrive litt <i>lingvistisk analyse</i>. Lingvistisk analyse kan være så mangt, men vi skal her fokusere på å bruke store mengder tekst til å utforske noen aspekter i norsk bokmål, og visualisere det vi finner ut.


Vi kommer til å introdusere noen teknikker og litt terminologi som er veldig spesifikt for lingvistisk analyse. Dette er typisk for mange programmeringsprosjekter - ofte kombineres selve programmeringen med konsepter fra andre fagområder. Slike "eksterne" konsepter kaller vi ofte <i>domenekunnskap</i> (engelsk: <b>domain knowledge</b>). Du trenger ikke å fokusere på disse teknikkene og terminologien, men se gjerne på det som en bonus at du lærer litt om lingvistikk mens du leser dette!

### Prosjektbeskrivelse

For å starte et programmeringsprosjekt, er det lurt å begynne med å definere klart hva det er vi vil oppnå med prosjektet. På samme måte som vi må være helt tydelige når vi skriver et Python-program for at maskinen skal vite hva den skal gjøre, bør vi være veldig klare på hva det er vi helt overordnet prøver å gjøre selv. Det gjør det mye lettere å planlegge hvordan vi går fram for å lage programmet.


I dette prosjektet vil vi gjøre lingvistisk analyse, mer spesifikt skal vi

1. Telle opp forekomsten av spesifikke ord i en tekst
2. Finne de vanligste ordene i teksten
3. Finne ut hvor ofte hver av bokstavene forekommer i språket
4. Visualisere informasjonen fra de foregående stegene


Her er det siste punktet en smule uspesifikt, men vi kan diskutere hvordan vi best utfører visualiseringsdelen når vi har kommet så langt.


Vi har listet opp en del forskjellige mål her, men vi kommer bare til å lage én programfil som inneholder funksjonalitet for alle disse aspektene.

Med prosjektbeskrivelsen i boks, kan vi begynne å planlegge stegene for å oppnå målene vi har satt opp.

### Planlegging

Planleggingsfasen er viktigere jo større prosjektet er. Det betyr ikke at det trenger å ta lang tid, men det er en enorm fordel at du har tenkt igjennom de forskjellige delene av programmet du er i ferd med å lage, og hvordan de passer sammen.



Vårt prosjekt er ikke av den største sorten, så vi nøyer oss med å beskrive grovt hvordan vi vil gjennomføre oppgavene beskrevet over:

For å telle opp forekomsten av et ord, åpner vi tekstfilen vi skal bruke, for deretter å lese igjennom linje for linje. Vi gjør at alle bokstavene på linja er små for å forenkle telleprosessen. På hver linje sjekker vi hvor mange ganger ordet opptrer. Vi legger sammen alle disse forekomstene og skriver det ut til skjerm.

For å finne det vanligste ordet i teksten, leser vi igjen gjennom linje for linje, men denne gangen må vi i tillegg skjære ned på tegnsetting, for å kun hente ut ordene ett og ett uten spesialtegn. Når vi henter dem ut, bruker vi hvert ord som indeks i en tabell, hvor hvert ords korresponderende verdi vil være antallet av ordet vi har funnet hittil. Til slutt kan vi gå igjennom tabellen for å finne hvilket ord vi har flest av.

Hvis denne forklaringen var forvirrende, blir det nok klarere når vi kommer til dette steget senere.

Når vi teller opp hver bokstav i språket, bruker vi også en tabell. I dette tilfellet vil indeksene være de norske bokstavene, og korresponderende verdier er antallet.

For å visualisere informasjonen, kommer vi til å bruke <a href="https://matplotlib.org/">matplotlib</a>, en pakke som lar oss lage grafer og diagrammer. Denne er mye brukt i bla. rapportskriving som gjør bruk av tekniske data, og det kan være et nyttig verktøy å lære seg først som sist!


Vi kommer til å skrive disse delene inn i hver sin funksjon, som igjen kan bruke andre "hjelpefunksjoner". Det gjør det lett å f. eks. kjøre bare én av dem av gangen under testing.

Nå som vi har en grov oversikt over hva vi prøver å lage, kan vi konsentrere oss om neste problem: Hvilken tekst bruker vi som innputt til dette programmet?

### Korpus

Et <i>korpus</i> i lingvistikksammenheng er en stor tekstsamling, gjerne på flere millioner ord, som er laget for å analysere språket tekstene er skrevet i. Korpus kan enten fokusere på spesielle type tekster, som avisartikler, romaner eller manus, eller være en kombinasjon av mange forskjellige sjangere. En språkforsker kan bruke et korpus for å f. eks. finne ut hvor vanlig et ord er, for å sammenligne skrivestiler mellom sjangre, eller for å trene opp en maskinlæringsalgoritme til å gjenkjenne et språk, for å nevne noe. Hva slags korpus man bruker er helt avhengig av hva man ønsker å gjøre med det.

I dette prosjektet kommer vi til å bruke <a href="https://www.nb.no/sprakbanken/ressurskatalog/oai-nb-no-sbr-4/">Norsk aviskorpus</a>, som i motsetning til mange andre korpus er fritt tilgjengelig for all ikke-kommersiell bruk. Som navnet tilsier, er det en tekstsamling hentet fra forskjellige norske aviser. Avisartikler er ikke fullstendig optimale for generell språkanalyse, ettersom de ofte inneholder mange dramatiske hendelser og en del politikk, slik at for eksempel ord som "trusler", "politiker" og "Høyre" forekommer oftere enn de gjør i vanlig dagligtale og de fleste andre skriftlige kilder. Det er likevel godt nok for våre formål.

Korpuset kan lastes ned <a href='/files/korpus.zip' download>her</a>. Merk at korpuset ligger i en ZIP-fil som må pakkes ut før du kan bruke det i et program. I samme fil ligger også lisensinformasjon. Aviskorpuset er nemlig beskyttet av en <a href='https://creativecommons.org/licenses/by-nc/4.0/'>lisens</a> som tillater fri distribusjon og modifikasjon, men ikke kommersiell bruk. Tekstfila inneholder en forenklet versjon av korpusets samling av aviser på norsk bokmål fra 2019. Kort fortalt går forenklingen ut på at formatering og ekstra informasjon om avisartiklene er fjernet slik at vi står igjen med en ren tekstfil som er lett å lese i Python. Denne modifikasjonen er også nevnt i den medfølgende lisensfila, noe som også er pålagt av lisensen.

Da skal tekstmaterialet være i boks, og vi kan fortsette på neste steg i prosjektet - implementasjon!

### Implementasjon

Det er på tide å få skitt under neglene. Vi har allerede planlagt grovt hvordan vi skal gå fram ovenfor, så det er forholdsvis greit for oss å se hva vi skal gjøre. Vi starter fra toppen:

#### Telle forekomster av et enkeltord

Som nevnt vil vi skrive hver separate oppgave inn i sin egen funksjon, slik at det blir enklest mulig for oss å holde orden og teste ett av dem av gangen. Vi begynner her med å skrive funksjonen `tell_forekomster`, som tar inn ett argument - nemlig en streng som inneholder ordet vi vil søke på. Deretter begynner vi å lese fra korpusfila:
```python
korpusfilnavn = 'destillert_aviskorpus_nob_2019.txt'

def tell_forekomster(ord):
    with open(korpusfilnavn) as korpusfil:
```
Før vi i det hele tatt har rukket å starte på funksjonen, har vi definert variabelen `korpusfilnavn` som inneholder navnet på korpusfila. Her regner vi med at korpusfila ligger i samme mappe som Python-fila vi skriver. Grunnen til at vi definerer denne variabelen <i>utenfor</i> funksjonen, er at det gjør det lett for oss å gjenbruke den i de andre funksjonene senere i programmet, som naturligvis kommer til å lese fra samme fil.

Det første vi gjør inne i funksjonen er å åpne opp korpusfila ved å bruke filnavnet som ligger i denne variabelen.

Flott, vi har en åpnet fil. Hva nå? Følger vi planen vi la tidligere, skal vi nå lese gjennom fila linje for linje. Som du kanskje husker, er dette en smal sak når vi har et filobjekt. Vi kan nemlig bruke filobjektet direkte i en `for`-løkke.

```python
        for linje in korpusfil:
```

Her kommer selve kjøttet i funksjonen - vi vil telle opp hvor mange ganger ordet vårt forekommer i strengen `linje`. Men vent et øyeblikk - hvis vi først finner ut antall forekomster, hva gjør vi så med tallet? Vi er naturligvis interessert i antall forekomster <i>totalt</i> i hele teksten, så vi trenger en måte å holde rede på hvor mange vi har funnet hittil mens vi leser linje for linje. Vi lager en variabel for dette, og initialiserer den til 0 <i>før</i> vi går inn i løkken:
```python
...
        totalt_antall_forekomster = 0
        for linje in korpusfil:
...
```
Kodesnuttene vi viser framover kommer stort sett til å ligge i rekkefølge, så du trenger ikke å måtte gå tilbake og endre kode du allerede har skrevet, slik som her. I praksis er det derimot sjeldent man klarer å skrive koden direkte fra start til slutt; det skjer ofte at man underveis i kodingen for eksempel kommer på feil i framgangsmåten i tidligere kode, eller trenger å legge inn en ekstra variabel, som vi gjorde nettopp.

La oss fortsette! Neste steg i programmet er å telle opp forekomstene av ordet i linja. Før vi gjør dét, bør vi huske at Python (og stort sett alle programmeringsspråk) skiller strengt mellom store og små bokstaver. For å sikre at vi klarer å telle f.eks. ordet "min" i uttrykket "Min kamp", gjør vi alle bokstavene i innputt-linja små:
```python
            linje = linje.lower()
```

Det begynner å bli en del indentering å holde styr på - denne linja skal altså indenteres tre ganger. Legg merke til at vi bare definerer iterasjonsvariabelen `linje` på nytt. Dette går fint, ettersom `linje` blir redefinert av Python til neste linje i fila når den hopper tilbake til starten av løkkeblokken i neste iterasjon.

Nå er vi omsider klare til å telle forekomstene! Det viser seg at Python allerede har en hendig metode for å telle opp forekomstene av én tekststreng i en annen, nemlig medlemsfunksjonen `count()`. Dokumentasjonen for denne funksjonen kan du finne her: <a href='https://docs.python.org/3/library/stdtypes.html#str.count'>https://docs.python.org/3/library/stdtypes.html#str.count</a>.

Dermed kan vi telle opp antall forekomster og legge det til totalantallet slik:
```python
            antall_forekomster = linje.count(ord)
            totalt_antall_forekomster += antall_forekomster
```
Nesten ferdig! Det vi mangler er å returnere antallet fra funksjonen. Pass på at dette gjøres med riktig indentering: Vi vil returnere fra inne i `with`-blokken, men ikke i løkkeblokken:
```python
        return totalt_antall_forekomster
```
Du kan eventuelt gjøre det helt i slutten av funksjonsblokken også.

Dét er dét! Funksjonen er ferdig - alt vi mangler er å kalle den. Vi skriver følgende under funksjonen:
```python
antall_mennesker = tell_forekomster('menneske')

print('Fant', antall_mennesker, 'forekomster av "menneske" i teksten')
```

Programmet er klar for å kjøres. Merk at det kan ta litt tid å kjøre dette programmet, siden det er enormt mye tekst som skal gjennomgås. Til slutt vil du få ut noe lignende dette på skjermen:

```
Fant 34381 forekomster av "menneske" i teksten
```
Vær oppmerksom på at programmet vårt også vil telle opp ord som "mennesker" og "undermennesket", ettersom `count()`-funksjonen ikke bryr seg om ord i teksten er enkeltstående eller ikke. Vi regner likevel dette som en god nok løsning av den første oppgaven. Om du er misfornøyd med denne løsningen, kan du forsøke å fikse det selv; se oppgavene i slutten av denne posten.

Så bra! Den første implementasjonsbiten er i boks - vi hopper videre til neste.

#### Finne de vanligste ordene i teksten

Vi lager en ny funksjon for å hente ut de vanligste ordene - vi starter med de samme linjene som i forrige punkt:
```python
def finn_vanligste_ord():
    with open(korpusfilnavn) as korpusfil:
```
Som diskutert i planleggingssteget, vil vi bruke en tabell for å holde rede på ordene vi har sett, og hvor mange ganger vi har kommet over dem. Vi lager en tom tabell slik:
```python
        ordforekomster = {}
```

Så itererer vi:
```python
        for linje in korpusfil:
```
Her må vi holde tunga rett i munnen - vi vil gå igjennom linja og legge hvert ord inn i tabellen. Da må vi først dele opp strengen i ord. Vi har allerede sett at `split()`-funksjonen kan brukes til å dele opp en streng som består av flere linjer, og den fungerer for å splitte opp en streng i separate ord også. I tillegg bør vi, som i forrige punkt, passe på at linja bare består av små bokstaver, slik at ord blir gruppert sammen uavhengig av om de f.eks. står først i en setning og har stor forbokstav, eller ikke. Et siste hinder er tegnsettingen. Vi må fjerne alle punktum, anførselstegn og lignende fra begynnelsen og slutten av hvert ord.

I og med at forhåndsprosesseringen av hver linje er såpass kompleks, er det en fordel å legge den ut i en egen funksjon. Her kaller vi den `hent_rene_ord`, som altså tar inn en tekstlinje og returnerer en liste med ord i små bokstaver og uten tegnsetting. Funksjonen starter rett og slett med at vi gjør bokstavene i linja små og gjør en splitt:
```python
def hent_rene_ord(linje):
    deler = linje.lower().split()
```

I koden over vil `linje.lower()` returnere en ny streng som inneholder bare små bokstaver, og vi kan kalle `split()` direkte på denne strengen uten å sette den til en variabel først.

Neste steg er litt mer komplisert. Vi vil gå igjennom listen med ord vi nettopp har fått tak i, og fjerne alle tegn som ikke er en bokstav. Vi kan bruke medlemsfunksjonen `isalpha()` for å sjekke om et tegn er i alfabetet.

Vi fjerner bare tegn fra starten og slutten av hvert ord, sånn at vi beholder f.eks. ord som inneholder bindestrek uendret, men fjerner f.eks. punktum og anførselstegn. Dette kan vi gjøre ved å bevege oss én gang forlengs og én gang baklengs gjennom strengen og sjekke hvert enkelttegn til vi finner den første bokstaven. Når vi har funnet to bokstaver, den første fra hver ende, tar vi bare og bruker tekststrengen mellom disse tegnene, inkludert tegnene selv, og legger den inn i en resultatlista av ord fra linja. Samtidig passer vi på at ordet ikke er tomt, sånn at vi unngår å legge inn f.eks. enkelttegn som ligger alene.

Koden for dette kan bli seende slik ut:
```py
    resultatliste = []
    for ord in deler:
        første_bokstav = -1
        siste_bokstav = -1
        for i in range(0, len(ord)):
            if ord[i].isalpha():
                første_bokstav = i
                break
        for i in range(len(ord) - 1, -1, -1):
            if ord[i].isalpha():
                siste_bokstav = i
                break
        if første_bokstav == -1:
            break

        resultatliste.append(ord[første_bokstav:(siste_bokstav + 1)])
```
Det er et par ting som skjer her som vi ikke har sett tidligere. Det første er `range(len(ord) - 1, -1, -1)`. Dette genererer et intervall fra og med `len(ord) - 1` til, men ikke med, `-1`, og teller nedover ett hakk av gangen, som er angitt av det tredje argumentet til `range()`. Dette er med andre ord det samme som intervallet `range(0, len(ord))` i revers.

Det andre aspektet som krever en forklaring, er syntaksen `{`ord[første_bokstav:(siste_bokstav + 1)]`}`. Dette kalles <i>kutting</i> (engelsk: <b>slicing</b>), og betyr rett og slett at vi lager en ny streng som inneholder alle tegn i den gamle strengen som ligger fra og med posisjonen `første_bokstav` og til, men ikke med posisjonen `siste_bokstav + 1`. Med andre ord får vi en streng bestående av alle tegn mellom den første og siste bokstaven vi fant i strengen, inklusiv.

Det var en liten munnfull - ikke få panikk om du ikke forsto alt som skjedde her, du kan heller lese gjennom denne igjen senere om du vil. `hent_rene_ord`-funksjonen er omtrent ferdig; alt som mangler er å returnere resultatlisten:
```python
    return resultatliste
```

Med denne hendige funksjonen i boks, kan vi gå tilbake til funksjonen `finn_vanligste_ord` og prosessere hver linje inne i løkken:

```python
            ordliste = hent_rene_ord(linje)
```
Nå er det bare å legge inn ordene i tabellen! Før vi legger inn hvert ord, må vi sjekke om det allerede ligger der. I såfall trenger vi bare å øke antallet av ordet med én. Ellers legger vi inn ordet sammen med antallet 1. For å sjekke om et ord ligger i tabellen, kan vi bruke `in`-operatoren.
```python
            for ord in ordliste:
                if ord in ordforekomster:
                    ordforekomster[ord] += 1
                else:
                    ordforekomster[ord] = 1
```
Flott! Når den ytterste løkka er ferdig med å kjøre, vil vi stå igjen med `ordforekomster` som er fylt til randen av ordene fra teksten, koblet med tilsvarende antall av ordet. Nå er spørsmålet: Hvordan henter vi ut ordet med flest forekomster? Vi kommer med to forslag her.

Den første metoden er veldig rett-fram. Vi itererer gjennom hele tabellen og holder rede på hvilket ord som har flest forekomster av dem vi har funnet hittil. I tillegg må vi holde rede på antallet av dette ordet, så vi kan sammenligne med de neste ordene vi finner. Koden for dette ser sånn her ut:
```python
        vanligste_ord = ''
        største_antall = 0
        for ord, antall in ordforekomster.items():
            if største_antall < antall:
                vanligste_ord = ord
                største_antall = antall
        return vanligste_ord
```
Når denne løkken har kjørt ferdig, vil `vanligste_ord` inneholde nettopp det vanligste ordet i hele teksten, og vi kan returnere det!

Den andre metoden er mer komplisert, og også tregere, men vil la oss gjøre mer interessante ting med resultatet. Vi vil nemlig <i>sortere</i> ordene etter antall forekomster, slik at vi kan finne f.eks. de ti mest vanlige ordene, eller til og med de mest uvanlige, om vi vil. For å kunne sortere på antall forekomster, kommer vi til å legge hvert ord-antall-par i en liste av tupler, der hvert tuppel har antall som første element og ordet som andre. Når vi deretter sorterer listen, vil Python bruke det første elementet i hvert tuppel, altså antallet, til å sortere, og bruke alfabetisk rekkefølge på ordene i tilfeller for ord med samme antall. Hele denne prosessen ser slik ut:
```python
        tuppelliste = [(antall, ord) for ord, antall in ordforekomster.items()]
        tuppelliste.sort()

        return tuppelliste[-1]
```

Her har vi brukt listeinklusjon for å gjøre konverteringen til liste fra tabell så kompakt som mulig. Etter å ha sortert listen, returnerer vi det <i>siste</i> tuppelet, ettersom ordene blir sortert fra færrest forekomster til flest. For å hente ut siste element, bruker vi indeks `-1`. Bruker vi negative tall, vil Python nemlig starte å telle fra slutten av lista. Her kunne vi som sagt gjort mer interessante ting med informasjonen i listen, noe vi kommer til å gjøre litt senere, i visualiseringsdelen.

Sånn, da mangler vi bare å kjøre funksjonen! Det gjør vi med følgende linjer:
```python
vanligste_ord = finn_vanligste_ord()
print('Det vanligste ordet var', vanligste_ord)
```
Før du kjører, bør du kommentere ut funksjonskallet til forrige oppgave (altså skrive en `#` på starten av linja med kallet, og på linja som printer resultatet av kallet). Det er unødvendig å sitte og vente på at den skal kjøres når vi kun er interessert i resultatet fra den andre funksjonen.

#### Finne forekomster av hver bokstav

Neste oppgave er å telle opp antall av hver bokstav. Vi lager en ny funksjon, og starter som vi gjorde med de to forrige:
```python
def finn_bokstavforekomster():
    with open(korpusfilnavn) as korpusfil:
```
Neste steg er å gå igjennom hver linje i fila og telle opp antall av hver bokstav. Den enkleste måten å holde rede på antallene, er å bruke en tabell, slik som vi gjorde med ordforekomstene over. De neste linjene ser da sånn her ut:
```python
        bokstavforekomster = {}
        for linje in korpusfil:
            linje = linje.lower()
```
Nok en gang sørger vi for at linjene kun består av små bokstaver. Nå kan vi iterere gjennom hvert tegn i linja, sjekke om det er en bokstav, og deretter legge den inn i tabellen på akkurat samme måte som vi gjorde med ordene tidligere. For å sjekke at et tegn er en bokstav, kunne vi brukt medlemsfunksjonen `isalpha()`, men denne inkluderer mange andre bokstaver som vi ikke har i det norske alfabetet. De aller fleste bokstavene i teksten vil være norske, men enkelte utenlandske bokstaver (som for eksempel bokstaven "ç") dukker også opp, for eksempel i personnavn. I stedet skal vi lage en hjelpefunksjon som sjekker om en bokstav er i det norske alfabetet.

Funksjonen heter bare `er_i_alfabetet(bokstav)`, og returnerer `True` dersom bokstaven er i det norske alfabetet, og `False` ellers. For å bestemme om den er i det norske alfabetet, skal vi bruke den innebygde funksjonen `ord()`. `ord()` tar inn et tegn som et argument og returnerer tallverdien til tegnet i unicode-systemet. En hendig egenskap med unicode-systemet er at alle de engelske bokstavene ligger på rekke og rad. Derfor trenger vi å sjekke om `ord(bokstav)` ligger mellom `ord('a')` og `ord('z')`, eller om den er lik æ, ø eller å. Hjelpefunkjsonen ser da slik ut:
```python
def er_i_alfabetet(bokstav):
    tallverdi = ord(bokstav)
    if (tallverdi >= ord('a') and tallverdi <= ord('z')) or \
        bokstav == 'æ' or bokstav == 'ø' or bokstav == 'å':
        return True
    return False
```
Det gjør naturligvis saken lettere at vi bare trenger å se på små bokstaver her, ettersom vi gjør alle bokstavene på hver linje små før de sendes til denne funksjonen.

Med denne i bakhånd kan vi fortsette på `finn_bokstavforekomster()` slik:
```python
            for bokstav in linje:
                if er_i_alfabetet(bokstav):
                    if bokstav in bokstavforekomster:
                        bokstavforekomster[bokstav] += 1
                    else:
                        bokstavforekomster[bokstav] = 1
```

Nå har vi antakeligvis et avsindig stort antall av hver bokstav. For å gjøre resultatene mer lesbare for oss dødelige mennesker, kan vi heller regne ut hvor stor andel av språket hver av dem utgjør i prosent. For å få til dét, må vi først telle opp antall forekomster til sammen:
```python
        totalt_antall = sum([antall for antall in bokstavforekomster.values()])
```
Vi kortet ned hele tellingen til én linje - se om du forstår hva som skjer! Så bytter vi ut antallene i tabellen med prosentvis forekomst, med andre ord deler vi på totalt antall og ganger med hundre:
```python
        for bokstav in bokstavforekomster:
            bokstavforekomster[bokstav] *= 100 / totalt_antall
```

Det er alt! Omsider kan vi returnere hele forekomst-tabellen:
```python
        return bokstavforekomster
```

Til slutt kan vi vise fram resultatene til brukeren:
```python
bokstavforekomster = finn_bokstavforekomster()
for bokstav, forekomst in bokstavforekomster.items():
    print(forekomst, '% av bokstavene var en \'' + bokstav + '\'')
```

Sånn - nå kan koden kjøres, og du blir litt klokere på hvor ofte hver bokstav faktisk blir brukt på norsk!

#### Datavisualisering

Vi har klart å hente ut noen interessante data fra tekstsamlingen, men data blir ofte mer interessant når vi kan undersøke det visuelt. I denne seksjonen skal vi se på noen enkle metoder vi kan bruke for å visualisere dataene vi hentet ut i oppgavene over. Til dét skal vi bruke `matplotlib`, som er et vanlig datavisualiseringsverktøy som ofte brukes til å visualisere blant annet forskningsresultater. Det er en sjanse for at `matplotlib` ikke ble installert samtidig som du installerte Python. I såfall blir du nødt til å installere det selv f.eks. ved hjelp av `pip`, som vi har gjennomgått tidligere.

Vi skal bruke et par forskjellige typer diagrammer for å vise noe av hva `matplotlib` kan gjøre. Hvis du vil være mer kreativ med visualiseringen enn vi er her, kan du sjekke ut de <a href='https://matplotlib.org/stable/gallery/index.html'>offisielle eksemplene til matplotlib</a>.

Vi går igjennom hver oppgave i tur og orden.

##### Visualisere ordforekomster

Når vi leter etter antall forekomster av ord, er det mest interessant om vi har flere forskjellige ord å jobbe med. Når vi har flere ord, kan vi sammenligne forekomstene av dem i f. eks. et stolpediagram. La oss først lage en liste med ord, og telle forekomster av hver av dem:
````python
ordliste = ['menneske', 'demokrati', 'asiat', 'smugling', 'suppe']
forekomster = []
for ord in ordliste:
    forekomster.append(tell_forekomster(ord))
````
Merk at denne delen av koden vil ta litt tid å kjøre, ettersom vi leser igjennom hele teksten for <i>hvert</i> ord.

La oss sette i gang med litt visualisering! Først må vi importere og initialisere `matplotlib`. Øverst i fila skriver vi
```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
```
Dette er den vanligste måten å initialisere matplotlib på. Vi kommer til å bruke `plt` til å vise fram plottet, og `ax` for å bestemme hva som skal plottes. `fig` kan brukes til å endre oppsettet av visualiseringen når vi har flere plott vi vil vise samtidig, men vi kommer ikke til å bruke det her. Vi kommer til å gjenbruke disse objektene til visualisering av de andre oppgavene, så det gir mening å ha dette øverst i fila, og ikke på samme sted som noen spesifikk visualiseringskode.

Det vi trenger å gjøre nå, er å bruke `ax` til å beskrive hva som skal visualiseres og hvordan.

Det første vi beskriver, er hva slags plott vi skal ha. Vi vil ha et stolpediagram, som vi får ved å bruke funksjonen `bar()` på `ax`-objektet. `bar` tar inn argumenter som bestemmer x-posisjon (horisontal plassering) for hver stolpe og høyde for hver stolpe. Etter å ha hentet forekomstene over, kan vi altså bruke
```python
ax.bar(range(len(forekomster)), forekomster)
```
for å lage stolpene. `range(len(forekomster))` brukes bare til å lage en rekke med tallene 0, 1, osv. opp til lengden av listen, slik at stolpene plasseres på posisjon 0, 1 osv. Det andre argumentet, `forekomster`, styrer hvor høye stolpene blir.

I stedet for å markere x-aksen med tallene 0 til 4, vil vi heller ha de forskjellige ordene som stolpene representerer. Dette får vi til ved å skrive
```python
ax.set_xticks(range(len(ordliste)))
ax.set_xticklabels(ordliste)
```
Her bruker vi `set_xticks` til å si at stolpenavnene skal plasseres på x-posisjon 0, 1 osv. opp til 4, og `set_xticklabels` for å be matplotlib om å bruke elementene i `ordliste` som beskrivelser.

Til slutt kan vi legge inn en beskrivelse for y-aksen og en tittel til hele plottet:
```python
ax.set_ylabel('Antall')
ax.set_title('Ordforekomster')
```

Sånn, da er det bare én ting som gjenstår, nemlig å vise fram resultatet! For å få til det, skriver vi
```python
plt.show()
```
Om alt er skrevet riktig, skal du ende opp med et stolpediagram på skjermen når programmet omsider får kjøre ferdig. Se om du finner noen andre ord du vil sammenligne antall forekomster til, og kjør koden med dem!

##### Visualisere de vanligste ordene i teksten

Vi bruker samme teknikk som over for å visualisere forekomstene av de vanligste ordene også. For at det skal gi mening, må vi returnere flere enn ett ord fra `finn_vanligste_ord()`. Vi kan gjøre dette ved å endre siste linje i funksjonen (gitt at vi brukte sorteringsmetoden når vi fant det vanligste ordet) til `return tupelliste[-10:]` for å utføre kutting av lista og returnere de ti siste elementene. (Når vi skriver `{`liste[<tall>:]`}` får vi ut alle elementene i lista fra og med indeks `{`<tall>`}` og til enden av lista.)

Da har vi de ti vanligste ordene returnert, og vi kan legge dem i to separate lister slik som dette:
```python
ordforekomster = finn_vanligste_ord()
ordliste = [ord for (antall, ord) in ordforekomster]
forekomster = [antall for (antall, ord) in ordforekomster]
```
Herifra kan vi bruke nøyaktig samme oppkskrift som i forrige visualisering, og vi får ut et nytt stolpediagram for disse vanligste ordene. Du kan prøve å kombinere de vanligste ordene og andre valgfrie ord i samme diagram ved å legge alle i samme ord- og forekomstlister, og se hvor stor forskjell det er i forekomstene!

##### Visualisering av bokstavforekomster

Vi kan bruke stolpediagram for å vise resultatet av bokstavopptellingen også, men for å spice opp ting i denne siste delen av posten, kjører vi på med en annen type diagram: Sektordiagram, også kjent som kakediagram.

Vi starter med `bokstavforekomster` som vi fikk som returverdi fra `finn_bokstavforekomster()`. Først legger vi bokstavene og forekomstene i to forskjellige lister:
```python
bokstaver = bokstavforekomster.keys()
forekomster = bokstavforekomster.values()
```
For å lage sektordiagrammet, bruker vi rett og slett `matplotlib`-funksjonen `pie` (fra engelsk: <b>pie chart</b>):
```python
ax.pie(forekomster, labels=bokstaver)
plt.show()
```
For en enkel visualisering, er dette faktisk alt vi trenger! Sektordiagrammet er ikke perfekt, for eksempel overlapper noen av bokstav-etikettene for bokstavene som blir minst brukt. Til tross for dette, er diagrammet en forholdsvis bra illustrasjon på hvilke bokstaver i norsk språk som er mest brukt.

### Oppsummering

Om du har klart å henge med hele veien hit, har du fått med deg mye! Selv om denne posten har introdusert mange konsepter og terminologi knyttet til språkanalyse, håper jeg at denne posten også har gitt et innblikk i hvordan man kan sette sammen mange programmeringskonsepter i større og mer sammensatte prosjekter.

Om du ikke allerede har hatt ideer eller konkrete planer for programmeringsprosjekter, håper jeg det du har lest her har kunnet bidra med inspirasjon, i tillegg til teknikker og tips for hvordan man angriper større programmeringsoppgaver. Uansett ønsker jeg deg lykke til i møtet med nye utfordringer i framtiden!

Og god koding!

### Oppgaver

Om du synes lingvistisk analyse var interessant, eller bare vil finpusse programmeringsferdighetene på noen øvingsoppgaver, kan du sjekke ut noen av forslagene her:

1. Endre funksjonen som teller ordforekomster til å telle kun enkeltstående ord på hver linje. Med andre ord skal et søk etter "menneske" kun telle ordet "menneske" og ikke f. eks. "mennesker" eller "urmenneske". Tips: Gjenbruk en av funksjonene vi har laget over.

2. Sørg for at ordene som telles i `finn_vanligste_ord` kun er de som inneholder bare norske bokstaver. Det vil si at ord som fortsatt inneholder spesialtegn og andre bokstaver etter at vi har rensket begge ender, skal ignoreres.

3. (Vanskelig) Lag <i>n-gram</i> ved hjelp av teksten. Et n-gram er en serie av ord som kommer etter hverandre i en setning. Hvis vi for eksempel har setningen "Vi gikk en tur i skogen.", har denne 2-grammene "vi gikk", "gikk en", "en tur", "tur i" og "i skogen", og 3-grammene "vi gikk en", "gikk en tur", "en tur i" og "tur i skogen". Konstruér 3-gram fra tekstsamlingen, og tell dem på samme måte som vi telte ord i del 2 av denne posten. For enkelhets skyld kan du behandle hver linje som en separat setning, så du trenger ikke å finne ut hvor punktum eller andre tegn avslutter setningene på linja.

Tips: Representér hvert 3-gram som et tuppel og ikke en liste, sistnevnte kan nemlig ikke brukes som indeks i en tabell.

Bruk n-gram-forekomstene til å finne ut hvilke ord som ofte følger etter ordet "skogtur", eller et annet ord du velger selv!

4. (Vanskelig) Implementer Cæsar-kryptering og dekryptering. Cæsar-kryptering er en veldig enkel krypteringsalgoritme. I Cæsar-kryptering tar man en starttekst, f. eks. "hemmelighet", og bytter deretter hver bokstav med bokstaven som er <i>n</i> plasser fram i alfabetet. Hvis vi for eksempel velger <i>n</i> til å være 3, vil "a" bli til "d", "b" blir til "e", og så videre. Når du når slutten av alfabetet, teller man videre fra "a" igjen. Poenget er at alle som leser meldingen, men som ikke vet verdien til <i>n</i>, ikke vet hva meldingen egentlig inneholder. I dette eksempelet blir "hemmelighet" til "khppholjkhw". Når du har implementert kryptering, prøv å implementere dekryptering også!

Hint: Bruk `ord()` til å gjøre om bokstavene til tallverdier og `chr()` for å konvertere tilbake til bokstaver igjen. For enkelhets skyld kan du holde deg til små bokstaver og kun det engelske alfabetet. For å kryptere et ord, er det lettest å kryptere hver bokstav for seg og så sette dem sammen til en streng igjen ved hjelp av `''.join(bokstavliste)`. Husk å bare kryptere bokstaver og ikke mellomrom og andre spesialtegn, med mindre du tar utfordringen!

PS: Cæsar-kryptering regnes som veldig usikkert, mye fordi antall mulige krypteringsnøkler bare er antall bokstaver i alfabetet, som gjør det mulig å prøve og feile seg gjennom alle muligheter. En annen måte å finne riktig krypteringsnøkkel (altså verdien til <i>n</i>) på er å sammenligne bokstavforekomstene vi regnet ut i tredje del med bokstavforekomstene i den Cæsar-krypterte meldingen. Hvis meldingen er lang nok, kan vi bruke dette til å gjette oss til hvilke bokstaver som er oversatt til hverandre. Dette kan også brukes til å knekke en annen type kryptering der hver bokstav også oversettes til en annen bokstav, men hvor det ikke nødvendigvis er noe mønster mellom oversettelsen av forskjellige bokstaver.
