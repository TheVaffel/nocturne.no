+++
date = '2021-05-11'
title = 'Funksjoner'
weight = 70
+++

I denne posten tar vi for oss <i>funksjoner</i> som lar oss dele koden vår inn i gjenbrukbare, mindre deler. Vi har allerede brukt funksjoner mange ganger; for eksempel er både `print()` og `int()` funksjoner. I denne posten skal vi se hvordan vi kan lage våre egne funksjoner, og diskutere hvilke tilfeller det gir mening å lage dem i. Vi skal også se nærmere på noen av funksjonene vi har brukt i tidligere poster.

I bunn og grunn er en funksjon en blokk med kode som har et eget navn. På samme måte som vi kan bruke navnet på en variabel til å referere til variabelens verdi, kan vi bruke navnet på en funksjon til å kjøre koden i funksjonen. Vi lager en funksjon på denne måten:
```python
def <navn>(<argument0>, <argument1>, <...>):
    <funksjonsblokk>
```
Vi kaller dette en <i>funksjonsdefinisjon</i>. Den starter med ordet `def` etterfulgt av navnet vi vil gi til funksjonen vår. Deretter følger en komma-separert liste av <i>argumenter</i> omsluttet av paranteser. Vi kommer tilbake til argumenter senere - vi kommer først til å se på funksjoner uten argumenter, slik at parantesene er tomme. Til slutt på første linje skriver vi et kolon, i likhet med hvordan definerer hvis-setninger og løkker.

På neste linje starter <i>funksjonsblokken</i>. Dette er koden som funksjonen inneholder. Den skrives med innrykk, på samme måte som hvis-blokker og løkkeblokker, og varer fram til første linje uten innrykk.

På samme måte som vi navngir variabler, kan vi velge selv hvilket navn funksjonen skal ha. Her gjelder de samme tommelfingerreglene om at navnet bør være beskrivende og si noe om hva koden i funksjonen gjør.

Merk at koden i funksjonsblokken <i>ikke</i> blir kjørt når Python leser funksjonsdefinisjonen. Funksjonsdefinisjonen bare gjøre funksjonen tilgjengelig, slik at koden i funksjonsblokken kan kjøres på et senere tidspunkt.

Vi begynner med å se på en veldig enkel funksjon:
```python
def si_hei():
    print('hei')

si_hei()
```

Her har vi først definert funksjonen `si_hei`. Som vi ser, er parantesene etter funksjonsnavnet tomme, men de må være med likevel. Funksjonsblokken inneholder én linje som skriver "hei" til skjermen.

Nederst i programmet over har vi skrevet `si_hei()` altså navnet på funkjsonen vår, med tomme paranteser. Legg merke til at den ikke er en del av funksjonsblokken, ettersom den er skrevet uten innrykk. Når Python leser denne linja, <i>kjører</i> den koden i funksjonsblokken. Vi sier at vi <i>kaller</i> funksjonen, og `si_hei()` kaller vi et <i>funksjonskall</i>.

Når vi kaller en funksjon, hopper Python fra funksjonskallet til koden i funksjonen, og hopper så tilbake til der funksjonskallet skjedde når den er ferdig med funksjonsblokken.

Dette er ikke et veldig interessant eksempel, og det er ganske liten gevinst i å skrive programmet på denne måten i motsetning til å bare skrive programmet som

```python
print('hei')
```

som gjør akkurat det samme. Vi skal se på større eksempler hvor det gir mer mening å bruke funksjoner snart, men først skal vi snakke litt om returverdier.

### Returverdier
I tillegg til å utføre kode, kan funksjonskall også gi tilbake verdier. Verdier som sendes tilbake av en funksjon kaller vi <i>returrverdier</i>. For å sende en verdi tilbake fra en funksjon bruker vi ordet `return`. Her er for eksempel en funksjon som ber brukeren om å skriv inn navnet sitt og returnerer det brukeren skriver inn:
```python
def hent_brukernavn():
    print('Skriv inn navnet ditt:')
    navn = input()
    return navn
```

Funksjonen `hent_brukernavn` ber brukeren om å skrive navnet sitt, deretter lagrer den hva enn brukeren skriver i en variabel, og til slutt returnerer den variabelen. Her kunne vi også skrevet `return input()` i stedet for de to siste linjene.

Etter å ha definert funksjonen, kan vi (lenger ned i filen) bruke den f. eks. til å hilse på brukeren:
```python
navn = hent_brukernavn()
print('Hei, ' + navn)
```

Her begynner Python med å lese første linje, og ser at variabelen `navn` skal settes til returverdien fra funksjonskallet `hent_brukernavn()`. Dermed hopper den inn i funksjonen `hent_brukernavn` og kjører koden der; den ber brukeren om et navn, får inn navnet, og returnerer det. `return`-linja gjør at Python hopper tilbake til linja `navn = hent_brukernavn()` med returverdien, som er navnet brukeren skrev inn. Navnet legges deretter inn i variabelen `navn`, og Python kan omsider gå til siste linje og hilse på brukeren.

I koden over har vi definert to variabler som heter `navn`, én inne i funksjonen og én etterpå. De er helt uavhengige av hverandre; en variabel som defineres i en funksjon kan ikke brukes utenfor funksjonen, og påvirker ingen andre variabler. Det betyr at vi ikke trenger å bekymre oss for at variabelen `navn` som vi initialiserer i `hent_brukernavn` skal endre verdien på andre variabler med samme navn andre steder i programmet.

### Et større eksempel

La oss se på et litt mer troverdig eksempel der en funksjon kan hjelpe oss. Her er et program som spør brukeren om fødselsår, og skriver hvor gammel brukeren blir i år (hvor vi gjør en forenklet antakelse om at "i år" er år 2021). Som en liten tvist har vi i tillegg brukt en løkke for å sikre at vi får et tall mellom 1900 og 2021 inklusiv - vi spør brukeren igjen og igjen til vi får et tall som oppfyller kravet. Her er koden:

```python
print('Skriv inn fødselsåret ditt:')
brukerinnputt = input()
fødselsår = int(brukerinnputt)

while fødselsår < 1900 or fødselsår > 2026:
    print('Fødselsåret er ugyldig!')

    print('Skriv inn fødselsåret ditt:')
    brukerinnputt = input()
    fødselsår = int(brukerinnputt)

alder_i_år = 2026 - fødselsår
print('Du fyller ' + str(alder_i_år) + ' år i år!')
```

Denne koden fungerer helt fint, men den kan forbedres. Legg merke til at de tre øverste linjene i programmet og de tre nederste linjene i løkkeblokken er helt like. Det er her alarmen burde gå. Det er generelt regnet som dårlig praksis å ha bolker med identisk kode flere steder i programmet når man heller kan bruke funksjoner. Det gjør koden unødvendig lang, pluss at hvis du vil gjøre endringer ett sted, for å for eksempel korrigere en feil, vil du måtte gjøre tilsvarende endringer de andre stedene der koden er kopiert. Dette kan høres ut som et filleproblem, men det skjer langt oftere enn man skulle tro!

Du har sikkert allerede gjettet hva løsningen er - vi legger linjene i en egen funksjon som returnerer fødselsåret! Programmet blir seende slik ut:
```python
def hent_fødselsår():
    print('Skriv inn fødselsåret ditt:')
    brukerinnputt = input()
    return int(brukerinnputt)

fødselsår = hent_fødselsår()

while fødselsår < 1900 or fødselsår > 2026:
    print('Fødselsåret er ugyldig!')
    fødselsår = hent_fødselsår()

alder_i_år = 2026 - fødselsår
print('Du fyller ' + str(alder_i_år) + ' år i år!')
```

Sånn - nå er den repeterte koden samlet på ett sted. Når vi nå leser gjennom koden, er den også litt lettere å få oversikt over. Det er mer innlysende hva som foregår i `while`-løkken nå som det er færre linjer å konsentrere seg om.

Legg merke til at vi i stedet for å lage variabelen `fødselsår` i funksjonen, bare returnerer verdien, og overlater ansvaret for å legge den i en variabel til koden som kalte funksjonen.

Merk - vi kunne også gjort koden litt mindre ved å fjerne de første tre linjene i programmet og heller lage en uendelig `while`-løkke som spør brukeren om innputt igjen og igjen, og kjører `break` når brukeren gir et gyldig innputt. Framgangsmåten vi har brukt funker heller som et pedagogisk eksempel.

### Funksjoner som støyfjernere
Det er ingenting i veien for å kalle en funksjon fra en annen funksjon. Det er faktisk akkurat det vi har gjort i eksempelet over, siden `print()` og `input()` er funksjoner.

La oss kaste et nytt blikk på dette eksempelet. Det er mye styr for et program som først og fremst bare skal regne ut alderen til brukeren, ettersom vi har brukt mye plass på å forsikre oss om at brukeren skriver inn noe fornuftig. Faktisk handler hele programmet, bortsett fra de to siste linjene, om å finne fødselsåret. Det er ikke noe i veien med programmet selv, men det kan være vanskelig å jobbe med når det er mye som foregår som ikke direkte har noe med målet med programmet å gjøre.

Dette er et problem som <i>også</i> kan løses med funksjoner. Helt overordnet kan vi tenke oss at programmet skal gjøre tre ting: Hente fornuftig innputt fra brukeren, regne ut alderen, og skrive alderen ut på skjermen. I koden vår tar det første steget uproporsjonalt mye plass. La oss legge all koden som utfører det første steget, inn i en ny funksjon:
```python
def hent_fødselsår():
    print('Skriv inn fødselsåret ditt:')
    brukerinnputt = input()
    return int(brukerinnputt)

def hent_validert_fødselsår():
    fødselsår = hent_fødselsår()
    while fødselsår < 1990 or fødselsår > 2026:
        print('Fødselsåret er ugyldig!')
        fødselsår = hent_fødselsår()

    return fødselsår


fødselsår = hent_validert_fødselsår()
alder_i_år = 2026 - fødselsår
print('Du fyller ' + str(alder_i_år) + ' år i år!')
```

Sånn, nå ligger hele essensen av programmet i de tre nederste linjene. For en som leser koden for første gang, er det mye lettere å få oversikt når de litt mer innfløkte delene av koden gjemmes i funksjonene.

Det å <i>abstrahere</i> bort deler av koden med funksjoner, slik som vi har gjort over, er regnet som en god skikk, nettopp fordi det gjør lettere å resonnere med koden. Det gjør det enkelt å fokusere på den delen av koden du er mest interessert i når du leser ny kode, skal legge til ny funksjonalitet, eller rette feil. I likhet med mange andre skikker programmerere er glad i, er utstrakt bruk av funksjoner litt vanskelig å motivere skikkelig for nybegynnere, fordi de først og fremst gir mening når man jobber med mye kode. Det er fullt mulig å skrive lengre programmer uten å definere funksjoner, men det er på ingen måte noen god idé. I tillegg til å potensielt inneholde mye repetert kode, blir det vanskelig å få oversikt og lete seg fram til de interessante delene av koden uten intim kjennskap til hvordan programmet fungerer. Og selv om du har skrevet programmet selv, har den intime kjennskapen lett for å forsvinne over tid - så funksjoner vil være til hjelp både for deg selv i framtiden og alle andre som skulle komme til å kaste et blikk på koden din!

### Argumenter

<i>Argumenter</i> er verdier vi kan sende <i>inn</i> i funksjonene. Funksjonsdefinisjonene vi har sett hittil, har ikke hatt noen argumenter - parantesene etter funksjonsnavnet har vært tomme. La oss se på en funksjon som <i>har</i> argumenter:

```python
def si_hei(navn):
    print('Hei, ' + navn + '!')
```
Dette er en oppgradert versjon av `si_hei()`-funksjonen vi så i starten av posten. Som vi kan se, tar den ett argument; `navn`. Argumentene til en funksjon kan brukes som om de var vanlige variabler i funksjonen. I denne funksjonen bruker vi `navn` i `print()`-kallet for å gjøre hilsenen mer personlig. Vi kan kalle funksjonen slik:
```python
si_hei('Arne')
```

Putter vi denne koden i samme fil og kjører den, får vi ut
```
Hei, Arne!
```
Her har vi skrevet strengen `'Arne'` inne i parantesene til funksjonskallet, og det blir dermed satt til argumentet `navn` i funksjonen. Vi kunne også lagt strengen i en variabel først og skrevet  variabelen inn mellom parantesene i stedet.

Navnene på argumentene er fullstendig valgfrie, men som vanlig er det lurt å gi dem meningsfulle navn. Det kan også være lurt å gjøre det tydelig hvilken datatype argumentene har, dersom det ikke er åpenbart. Her er navnet på argumentet `navn`, som gjør det forholdsvis innlysende at argumentet må være en tekststreng. Koden ville for eksempel ha krasjet hvis vi hadde sendt inn et tall i stedet, ettersom vi ikke kan bruke `+`-operatoren på en streng og et tall direkte - som vi har sett før.

En funksjon kan ha så mange argumenter vi vil. La oss ta en titt på oppgaven om Body Mass Index (BMI) fra posten om brukerinteraksjon. Formelen for BMI er <i>vekt / (høyde * høyde)</i>, hvor vekt og høyde måles i henholdsvis kilo og meter. Slike matematiske formler er gode kandidater for egne funksjoner. Vi kan lage en funksjon som regner ut BMI:
```python
def regn_ut_bmi(vekt_i_kilo, høyde_i_meter):
    return vekt_i_kilo / (høyde_i_meter * høyde_i_meter)
```

Vi kan f. eks. kalle denne funksjonen slik:
```python
bmi = regn_ut_bmi(70, 1.80)
```
Rekkefølgen på argumentene du sender inn i en funksjon er den samme rekkefølgen som de defineres i argumentlisten i funksjonsdefinisjonen. Det vil si at vi ikke kan bytte om rekkefølgen på argumentene i funksjonskallene våre. Her ser du også at vi har spesifisert enheten i argumentnavnene. Dette kan være lurt når de representerer fysiske størrelser, med mindre du har fastsatt en konvensjon om at f. eks. alle vekter skal oppgis i kilo.

### Standardargumenter og navngitte argumenter
I en del tilfeller kan du støte på funksjoner som ikke påkrever at alle argumentene er satt - vi skal snakke litt om <i>standardargumenter</i> og <i>navngitte argumenter</i>.

Standardargumenter referer til argumenter som har en <i>standardverdi</i> som blir brukt hvis kalleren av funksjonen lar være å oppgi argumentet.

Vanligvis må man alltid bruke like mange argumenter i funksjonskallet som funksjonen har i argumentlisten i funksjonsdefinisjonen, men dette gjelder altså ikke for standardargumenter. La oss utvide `si_hei`-funksjonen fra tidligere med et nytt argument:
```python
def si_hei(navn, med_entusiasme):
    if med_entusiasme:
        print('HALLO ' + navn + ', FY FLATE SÅ GLAD JEG ER FOR Å SE DEG!')
    else:
        print('Hallo ' + navn + '!')
```

Det nye argumentet er `med_entusiasme`, som er en boolsk variabel (altså må den inneholde enten `True` eller `False`). Dersom `med_entusiasme` er sann (`True`), kommer `si_hei` til å skrive en entusiastisk hilsen til brukeren. Hvis argumentet er usant, får brukeren kun en moderat entusiastisk hilsen. For å kalle funksjonen må vi nå skrive f. eks.
```python
si_hei('Arne', False)
```

La oss nå anta at de aller fleste brukerne foretrekker den mer entusiastiske hilsenen, altså at de aller fleste vil foretrekke å kalle funksjonen med `True` som siste argument. For å gjøre livet lettere for majoriteten av brukerne, kan vi gi `med_entusiasme` en standardverdi. Det gjør vi som følger:
```python
def si_hei(navn, med_entusiasme=True):
    if ...
```
Vi har unnlatt å skrive resten av funksjonen, siden den er den samme som før. Den eneste forskjellen her, er at vi har lagt på en `=True` etter `med_entusiasme`. Dette forteller Python at argumentet ikke er obligatorisk, og dersom det ikke er oppgitt, lar vi den være `True`. Nå kan vi kalle funksjonen vår på begge disse måtene:
```python
si_hei('Arne')
si_hei('Arne', False)
```
Her vil hilsenen til Arne skrives to ganger, den første gangen litt mer entusiastisk enn den andre.

Vi legger på et standardargument til. Nå ser `si_hei`-funksjonen slik ut:
```python
def si_hei(navn, med_entusiasme=True, med_hjerter=True):
    if med_entusiasme:
        print('HALLO ' + navn + ', FY FLATE SÅ GLAD JEG ER FOR Å SE DEG!')
    else:
        print('Hallo ' + navn + '!');

    if med_hjerter:
        print('❤️❤️❤️')
```
Det nye argumentet heter `med_hjerter`, og vi har satt standardverdien til `True`, under antakelsen om at mer er bedre. Hvis dette argumentet er sant, skrives tre hjerter til skjermen på linjen etter hilsenen. Hjertene kan skrus av og på uavhengig av entusiasme-argumentet.

Nå kan vi kalle funksjonen med ett, to eller tre argumenter:
```python
si_hei('Arne')
si_hei('Arne', False)
si_hei('Arne', False, False)
```

Men hva nå om vi er sikre på at vi <i>ikke</i> vil ha hjerter, men er likegyldige til hvor entusiastisk resten av meldingen er, slik at vi bare vil bruke standardverdien for entusiasmeargumentet? Hvordan oppgir vi verdi på et spesifikt standardargument uten å måtte bry oss med alle standardargumentene som kommer først? Det er her <i>navngitte</i> argumenter kommer inn i bildet:

Når du kaller en funksjon, kan du spesifisere verdi for bare noen spesifikke standardargumenter ved å skrive `<argumentnavn>=<verdi>` i funksjonskallet. Dette kaller vi <i>navngitte</i> argumenter. For å tilfredsstille de spesifikke preferansene nevnt over kan vi skrive følgende:
```python
si_hei('Arne', med_hjerter=False)
```
Nå kan vi være sikre på at vi ikke får noen unødvendige hjerter i utputtet, uten at vi har trengt å ta stilling til hvor entusiastisk vi vil ha hilsenen vår. Bra!

Når du har ett eller flere standardargumenter i funksjonsdefinisjonen, må alle standardargumenter oppgis etter de vanlige obligatoriske argumentene. Det samme gjelder i funksjonskall - obligatoriske argumenter må komme før alle navngitte argumenter.

#### Typiske funksjoner med standardargumenter

Standardargumenter er et veldig spesifikt tema som kanskje ikke føles veldig nyttig i en introduksjon til funksjoner. Årsaken til at vi har det med likevel, er at det er en del funksjoner i Python som er laget på denne måten, og gjennomgangen her vil kunne gi deg en bedre forståelse av hvordan de fungerer.

Hittil har vi bare brukt `input()` uten argumenter. Men `input()` kan faktisk ta et argument: Hvis vi gir den en streng, skriver den strengen ut på skjermen før brukeren skriver noe. Det gjør det hakket enklere å be brukeren om å gi innputt:
```python
navn = input('Skriv navnet ditt: ')
```
Vi kommer til å bruke denne formen framover.

På samme måte har vi bare sett på tilfeller hvor `print` tar ett argument, men det er ikke hele historien. Dersom du gir flere argumenter til `print()`-funksjonen, skriver den alle argumentene ut på skjermen, separert med mellomrom. En annen egenskap ved `print()`-funksjonen, er at argumentene kan være i en hvilken som helst datatype. Det betyr at vi kan skrive inn heltall som egne argumenter uten å måtte konvertere dem til streng først. Disse to linjene gjør altså det samme:

```python
print('Du er ' + str(alder) + ' år gammel')
print('Du er', alder, 'år gammel')
```

Det kan gjøre brukerinteraksjon enda litt enklere!

Et annet triks man kan bruke med `print()`-funksjonen, er å spesifisere en verdi for standardargumentet `end`. Som vi har erfart, vil `print()` skrive tekst på skjermen og deretter avslutte linjen. Med `end` kan vi be `print` om å ende utputtet med noe annet. Standardverdien for `end`-argumentet er `'\n'`, som betyr linjeskift. Hvis vi gir det en annen verdi, vil `print`-kallet skrive denne verdien etter resten av meldingen, og la neste `print`-kall begynne å skrive rett etter siste tegn, som vil være på samme linje dersom siste tegn ikke var linjeskift. Dette kan vi for eksempel bruke når vi går gjennom en løkke for å få hver iterasjon til å skrive på samme linje:

```python
i = 0
while i < 10:
    print(i, end=' ')
    i += 1
```
Her har vi satt `end` til mellomrom (`' '`). Med dette vil alle tallene fra 0 til og med 9 skrives på én linje, separert med mellomrom, i motsetning til å bli skrevet til hver sin linje.

### Medlemsfunksjoner

Helt til slutt skal vi introdusere <i>medlemsfunksjoner</i>. Medlemsfunksjoner er funksjoner som "tilhører" verdier av enkelte datatyper. Her skal vi bare se på medlemsfunksjoner på strenger.

En medlemsfunksjon kaller man med denne syntaksen: `<verdi>.<funksjon>(<eventuelle argumenter>)`. Strenger har mange medlemsfunksjoner, ett enkelt eksempel er `isnumeric()` som forteller oss om strengen inneholder et tall eller ikke:
```python
streng0 = '1kk3_37_7411'
streng1 = '7411'

er_streng0_et_tall = streng0.isnumeric()
er_streng1_et_tall = streng1.isnumeric()
```
I denne koden vil `er_streng0_et_tall` være den boolske verdien `False`, siden tekststrengen `streng0` inneholder tegn som ikke er forenlig med at det er et tall. `streng1`, derimot, er en streng som inneholder et tall, slik at `er_streng1_et_tall` vil være `True`.

Et annet eksempel er medlemsfunksjonen `upper()` som returnerer den samme strengen, men hvor alle små bokstaver er gjort store. I en entusiastisk-hilsen-funksjon som over, kan dette hjelpe oss med å gjøre utputtet <i>enda</i> mer entusiastisk. Hvis vi bare skriver
```python
print('HALLO ' + navn + ', DIN SUKKERKLUMP!')
```
vil utputt se slik ut:

```
HALLO Arne, DIN SUKKERKLUMP!
```

Dersom vi heller bruker `upper()` slik som i

```python
print('HALLO ' + navn.upper() + ', DIN SUKKERKLUMP!')
```
vil vi få ut
```
HALLO ARNE, DIN SUKKERKLUMP!
```
som jo høres mer troverdig ut.

Vi kommer til å bruke flere medlemsfunksjoner i neste post.

### Oppsummering

Gratulerer med å ha kommet deg gjennom nok en lang post! Funksjoner er en viktig del av verktøykassa for alle programmerere, men det å finne ut hvor det gir mening å bruke funksjoner, og å bruke dem effektivt er en treningssak. Funksjoner er et konsept som gir mer og mer mening å bruke jo større kode du jobber med. Likevel vil du gjøre deg selv en tjeneste ved å prøve å dele også de små programmene du lager i starten, opp i funksjoner.

Vi har allerede lært mange av de grunnleggende konseptene i Python - og vi kan begynne å gjøre mer og mer interessante ting. I neste post skal vi ta for oss lister, som vil la oss holde rede på store mengder data av gangen, og `for`-løkker, som er en litt mer intuitiv måte å skrive løkker på.

### Oppgaver
Flere av disse oppgavene går ut på å lage nye funksjoner. Det anbefales at du lager kode som kaller funksjonene selv, sånn at du kan se at de fungerer.

1. Lag en funksjon som tar inn argumentene fornavn og etternavn pluss et argument `formell` som er enten `True` ellers `False`. Funksjonen skal skrive en hilsen til brukeren. Hvis `formell` er `True`, skal bare etternavnet brukes is hilsenen, ellers skal bare fornavnet brukes.

2. Lag en funksjon som tar et årstall som argument og avgjør om året et skuddår; den skal returnere `True` om året er et skuddår, og `False` ellers. Regelen for skuddår er som følger: Hvis årstallet er delelig på fire, er det et skuddår. Dette gjelder ikke når tallet også er delelig på 100, men det gjelder likevel når tallet er delelig på 400. Derfor er f. eks. år 1900 ikke et skuddår, mens år 2000 <i>er</i> det.

3. Gjør oppgave 3 om BMI i <a href="/no/introduksjon_til_python/brukerinteraksjon_og_betingelser">posten om brukerinteraksjon</a>, hvor du bruker separate funksjoner for brukerinnputt (én hver for henholdsvis høyde og vekt), utregning av BMI og tilbakemelding til brukeren basert på den utregnede BMIen.

4. Lag en funksjon `skriv_stjerner(n)` som skriver en linje med `n` stjerner på skjermen, hvor `n` er et tallargument som sendes inn. F. eks. skal kallet `skriv_stjerner(5)` skrive `*****` på skjermen. (Hint: Bruk `end=''` som argument i `print`-funksjonen).

5. (Vanskelig) Fibonacci-tallene er tallrekken som starter med `F(0) = 1` og `F(1) = 1`, og fortsetter med `F(n) = F(n - 1) + F(n - 2)` for alle heltall `n` høyere enn 1. Lag en funksjon som regner ut det `n`-te Fibonacci-tallet. (<i>Hint: Det kan løses med minst mulig arbeid ved å lage som en <b>rekursiv</b> funksjon, en funksjon som kaller seg selv i funksjonsblokken. Pass på at funksjonen ikke kaller seg selv igjen og igjen i det uendelige</i>).
