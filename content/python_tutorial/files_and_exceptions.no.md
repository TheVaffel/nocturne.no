+++
date = '2021-06-25'
draft = true
title = 'Filer og unntak'
weight = 100
+++

Hei igjen! I denne posten skal vi se på filer og hvordan vi kan lage og bruke dem med Python. Hittil har vi belaget oss på at brukeren har sendt inn ekstern informasjon til programmet, men det er grenser for hvor lenge vi klarer å få en bruker til å sitte og mate programmet vårt med data. Her skal vi blant annet lære om hvordan vi kan lese informasjon fra filer, som vil øke mengden data vi har mulighet til å jobbe med dramatisk.

Litt senere i posten tar vi også en kikk på feilhåndtering, som kan være spesielt nyttig når man jobber med filer.

Sannsynligvis har du allerede en formening om hva filer er i datasammenheng, ettersom hvert Python-program vi har skrevet må være lagret i en fil for å kunne kjøres. For denne postens formål kommer vi bare til å tenke på filer som en navngitt beholder med data som ligger på harddisken til maskinen. Filer kan inneholde data i et hvilket som helst format, for eksempel bilde, lyd eller regneark. I denne posten kommer vi bare til å diskutere filer som inneholder ren tekst, men vi skal se på andre filtyper i neste post.

### Å lese en fil

For å lese innholdet i en fil og bruke det i programmet vårt, trenger vi først en fil å jobbe med. I dette eksempelet kommer vi til å bruke sangteksten til en klassiker, som du kan <a href="/files/sangtekst.txt" download>laste ned her</a>. Legg denne filen i samme mappe som programkoden vi skal skrive under. Hvis du ikke vet hvor filen havnet da du lastet den ned, ligger den sannsynligvis i en mappe kalt <i>Nedlastninger</i> eller <i>Downloads</i>. Legg merke til at filen er en `.txt`-fil som kun inneholder ren tekst, uten noen form for informasjon om formatering, skriftstørrelse, farger eller lignende, som man for eksempel ville hatt i en dokumentfil (f.eks. `.docx` eller `.pdf`). `.txt`-filer inneholder nemlig ikke noe annet enn en rekke med menneskeleselige tegn og bokstaver. Denne enkle formen for filer egner seg godt for å demonstrere filoperasjoner i Python fordi innholdet kan behandles direkte som en streng.

Når vi skal skrive til eller lese fra en fil, må vi først <i>åpne</i> den. Dette signaliserer til operativsystemet at den skal åpne en "kanal" til eller fra filen og inn til programmet vårt, og gir oss en referanse til denne kanalen. For å åpne en fil kan vi kalle `open(<filnavn>)`, der `<filnavn>` er en streng som inneholder navnet på filen vår. Kallet returnerer et "filobjekt" som vi kan bruke senere til å lese fra eller skrive til filen. Dersom filen ikke finnes, vil Python passe på å kaste en feilmelding på deg.


For å åpne fila vi lastet ned, kan vi altså bruke
```python
fil = open('sangtekst.txt')
```
Nå har vi sagt ifra til operativsystemet at vi vil lese filen `sangtekst.txt`, og mottatt et filobjekt som vi har lagt i variabelen `fil`. Hvis du får en feilmelding av dette kallet alene, har du antakeligvis ikke lagt fila i samme mappe som koden din ligger i, eller feilstavet navnet på fila. Herifra har vi flere muligheter for å lese innholdet i fila.

#### Les alt innholdet samtidig

For å lese alt innholdet i filen på én gang og legge resultatet i en streng, kan vi bruke medlemsfunksjonen `read()` på filobjektet:

```python
filinnhold = fil.read()
```

Vi kan sjekke at `filinnhold` nå inneholder all teksten i fila ved å skrive den til skjerm med f.eks. `print(filinnhold)`.

Man bør være litt forsiktig når man bruker `read()`-funksjonen slik som vi har gjort over, fordi det ber Python om å laste alt filinnholdet inn i minnet samtidig. Dersom filen tar mer plass enn du har tilgjengelig i minnet, kan du ende med at maskinen henger en stund før programmet til slutt krasjer. Det er ikke farlig, men kan være fryktelig irriterende. For moderne maskiner blir dette først et problem når vi jobber med filer på flere gigabyte, altså milliarder av tegn, noe du antakeligvis ikke kommer til å gjøre med det første.

#### Les én og én linje

En alternativ måte å lese gjennom tekstfiler på, er å bruke `for`-løkker. Når vi bruker `for`-løkker direkte på filobjekter for tekstfiler, vil iterasjonsvariabelen settes til én og én linje i fila.


<div class="notice">
Obs: Du kan ikke bruke både `read()`-funksjonen og `for`-løkkeiterasjon på det samme filobjektet. Filobjektet "husker" hva som har blitt lest og fortsetter fra der den slapp i neste leseoperasjon. Dersom du fortsetter fra koden over, må du derfor enten erstatte `read()`-kallet med løkken, eller lukke fila (se under) og åpne den på nytt.
</div>

Her er et eksempel hvor vi skriver filen ut til skjerm ved hjelp av en `for`-løkke:
```python
for linje in fil:
    print(linje)
```

Resultatet skal bli nesten det samme som da vi skrev ut filinnholdet i eksempelet over, bortsett fra noen et ekstra linjeskift mellom hvert par av linjer; linjene vi får via `for`-løkka inneholder nemlig linjeskiftet på slutten.

#### Lukk fila

Når man er ferdig med operasjonene man skal gjøre på en fil, bør man <i>lukke</i> den. Dette gjør vi ved å kalle medlemsfunksjonen `close()` på filobjektet:
```python
fil.close()
```

Dette er for å be operativsystemet om å stenge "kanalen" mellom fila på harddisken og programmet vårt, og for å sørge for at alle operasjoner på fila er avsluttet. I moderne operativsystemer er det sjeldent at det fører til problemer når man glemmer å lukke en fil etter bruk ettersom den blir lukket med makt automatisk når programmet er ferdig. Det er likevel lurt å huske å lukke fila, spesielt etter skriveoperasjoner, for å sørge for at alt som skulle skrives til fila faktisk blir skrevet.

### Å skrive til en fil

Når vi kaller `open()` på en fil, må vi bestemme om fila skal åpnes for lesing eller skriving. Dette gjør vi ved å gi en verdi for det andre argumentet til `open()`, som spesifiserer <i>moduset</i> til fila. For å åpne fila for lesing, kan vi bruke `'r'` som andre argument. Dette er også standardverdien til dette argumentet, som er grunnen til at vi ikke trengte å bruke dette argumentet i eksempelet om fillesing over.

For å åpne en fil for <i>skriving</i>, må vi bruke modusargumentet `'w'`. Dersom fila som er spesifisert i første argument ikke eksisterer, kommer programmet til å lage fila først, og så åpne den for skriving. Vær forsiktig når du bruker modusargumentet `'w'` på filer som allerede eksisterer, ettersom det vil fjerne alt innholdet i fila selv om du ikke gjør noen skriveoperasjoner!

Når vi har åpnet en fil for skriving, kan vi bruke medlemsfunksjonen `write()` med strengen vi vil skrive som argument for å skrive til filen. Merk at dette bare vil legge strengen direkte inn i filen, uten å legge til et linjeskift eller noe annet tegn på slutten. Om du vil ha med et linjeskift, kan du legge til `'\n'` på slutten av strengen selv.

Her er et eksempelprogram der vi leser fra fila vi brukte tidligere og lager en ny fil som inneholder annenhver linje fra den første fila:
```python
innfil = open('sangtekst.txt')

inntekst = innfil.read()

innfil.close()

utfil = open('utfil.txt', 'w')

inntekst = inntekst.strip()
inntekst_linjer = inntekst.split('\n')

for i in range(len(inntekst_linjer)):
    if i % 2 == 0:
        utfil.write(inntekst_linjer[i] + '\n')

utfil.close()
```

Her er det litt forskjellig som skjer:

Først åpner vi filen og leser ut innholdet, som vi legger i variabelen `inntekst`. Når vi har fått tak i innholdet, lukker vi fila. På dette tidspunktet er vi nemlig ferdige med å lese teksten inn i programmet, sånn at vi ikke trenger å bruke innputtfila lenger. Så lager vi en ny fil - fila vi skal skrive resultatet vårt i. Her bruker vi modusargument `'w'` for å signalisere at vi skal skrive til fila.

Etter å ha åpnet utputtfila kaller vi `strip()` på strengen vi leste inn og erstatter den originale innputteksten med resultatet. Resultatet fra `strip()` er det samme som den originale strengen, bortsett fra at usynlige tegn (whitespace-tegn) som for eksempel mellomrom og linjeskift i begge ender av strengen fjernes. Tekstfiler pleier nemlig ofte å inneholde minst ett ekstra linjeskift på slutten, som, hvis det ikke fjernes, kan føre til at vi får et unødvendig element når vi splitter strengen på neste kodelinje:

Etter å ha strippet ned strengen, kaller vi `split()`-funksjonen på den. `split` deler opp strengen og returnerer en liste av strenger. Argumentet til `split` er <i>separatoren</i>, altså hvilken tekststreng som skal behandles som en splitt i strengen vi vil dele opp. Standardverdien for dette argumentet splitter strengen på alle <i>whitespace</i>-tegn, som inkluderer både mellomrom, ny linje og tab. I dette problemet vil vi splitte opp innputtstrengen i linjer, så vi bruker linjeskift (`'\n'`) som separator. Resultatet er en liste av strenger, hvor hver streng er en linje fra fila. Merk at strengene i lista <i>ikke</i> inneholder linjeskiftet, som blir fjernet under splitting.

Deretter itererer vi gjennom den med en `for`-løkke på indekser, sånn at vi kan sjekke om indeksen er delelig på to. Siden annenhver indeks (0, 2, 4... osv.) er delelig på to, ender vi opp med å skrive annenhver linje fra den første fila inn i den andre. Siden strengene i lista `inntekst_linjer` ikke inneholder linjeskift, må vi legge til ett på slutten når vi skriver dem, for at de skal dukke opp som separate linjer i fila. Helt til slutt lukker vi fila vi skrev til.

Det er flere måter å løse denne oppgaven på. For eksempel kunne vi iterert gjennom fila linje for linje direkte med en `for`-løkke slik som vi gjorde tidligere, og lage en tellevariabel som vi øker for hver iterasjon og som vi kan bruke for å bare skrive annenhver linje til fila.

#### `with`-blokker

Python har en egen syntaks for å lage objekter som trenger å lukkes etter bruk, slik som filer. Dette er `with`-blokker, som er på formen
```python
with <objektinitialisering> as <variabelnavn>:
    <with-blokk>
```

Her vil `<objektinitialisering>` være f. eks. `open()`-kallet som vi har brukt tidligere. Det `with`-blokken gjør, er å automatisk lukke objektet som ble laget på `with`-linja når blokken er ferdig, som betyr at du slipper å huske på å kalle `close()` selv. I tillegg gjør det at det er helt tydelig i koden hvor filen kan brukes og ikke - man kan ikke bruke filen utenfor blokken, ettersom den vil være lukket.

Vi kan skrive om eksempelet over ved hjelp av en `with`-blokk. Mesteparten av koden er lik, men starten blir spicet opp litt:
```python
with open('sangtekst.txt') as innfil:
    inntekst = innfil.read()

with open('utfil.txt', 'w') as utfil:
    <...>
```

Resten av koden blir intendert, sånn at det blir liggende som en del av `with`-blokken. I tillegg trenger vi heller ikke å lukke `utfil` på slutten av programmet.

`with`-blokker er den foretrukne måten å bruke filer på i moderne Python av grunnene nevnt over, og det er denne måten vi kommer til å bruke i resten av posten.

Det er ikke bare filer som kan brukes med `with`-blokker. Mange andre objekter som interagerer tett med operativsystemet, som for eksempel nettforbindelser, kan også brukes med `with`-blokker. Vi kommer bare til å bruke `with`-blokker med filer i hoveddelen av denne innføringen i Python.

### Unntak

Noen ganger (oftere enn vi vil innrømme) oppstår det feil mens koden vår kjører, som hindrer den fra å gjøre det den skal. Ofte skyldes dette programmereren selv, for eksempel at vi feilstaver navnet på en variabel eller funksjon, at vi lager en uendelig løkke med et uhell, eller at vi rett og slett har en kode som gjør noe annet enn det vi vil.

På en annen siden finnes det feil som vi som programmerere ikke kan noe for. Dette gjelder i mange forskjellige sammenhenger, for eksempel hvis vi prøver å lese en fil som ikke finnes, eller hvis brukeren gir oss en tilfeldig streng når vi forventer et tall.

Vanligvis vil Python bare gi opp når den møter på slike feil, og krasje programmet. Denne oppførselen er akseptabel når vi jobber med små programmer som er raske å starte på nytt, men kan gjøre stor skade om en slik feil skulle dukke opp i et tidkrevende program midt under kjøring. I slike tilfeller vil det være et bedre alternativ for oss å håndtere feilen selv.

En fellesbetegnelse for feil som oppstår under kjøring er <i>unntak</i> (engelsk: <b>exceptions</b>).

For å <i>håndtere</i> unntak i Python kan vi bruke `try`-`except`-blokker. `try`-`except`-blokker ser ut som dette:

```python
try:
    <try-blokk>
except:
    <except-blokk>
```

Når Python kommer til et par `try`-`except`-blokker, vil den kjøre koden i `try`-blokken som vanlig. Hvis det ikke oppstår noe unntak under kjøringen av `try`-blokken, vil den fortsette på koden etter `except`-blokken, altså ignorere hele `except`-blokken fullstendig.

Dersom det oppstår en feil i `try`-blokken, derimot, hopper Python direkte inn i `except`-blokken fra der feilen skjedde, og kjører koden som ligger i `except`-blokken. Etter at koden i `except`-blokken er kjørt, fortsetter Python med koden etter hele `try`-`except`-konstruksjonen som vanlig.

Her er et eksempel på hvordan en `try`-`except`-blokk kan se ut i praksis.

```python
try:
    with open('navn.txt') as fil:
        navn = fil.readline()
except:
    print('Kunne ikke lese navnet fra navn.txt, antar at navnet er Arne.')
    navn = 'Arne'

print('Hei,', navn)
```

Dette programmet antar at navnet til brukeren står skrevet i `navn.txt` og prøver å lese ut navnet. Hvis forsøket på å hente ut navnet feiler av en eller annen grunn, skriver vi en feilmelding til skjerm og antar at navnet er Arne.

Her ser vi altså et eksempel på hva en `except`-blokk kan inneholde - den kan brukes til å fylle inn en verdi i en variabel dersom vi mislyktes å fylle den inn på en annen måte, og til å fortelle brukeren (eller programmereren) at noe gikk galt.

<div class="notice">

Dette er bare et eksempel. Du bør ikke anta at brukeren din heter Arne i kritiske applikasjoner.

</div>

#### Unntak i funksjonskall

La oss snakke litt om hvordan unntak fungerer i Python generelt. Når et unntak blir generert, vil Python finne ut om koden som genererte unntaket ligger i en `try`-blokk. Dersom den ikke finner noen `try`-blokk som omslutter unntaket inne i den nåværende funksjonen (gitt at koden ligger i en funksjon), hopper den tilbake et hakk, til koden der funksjonen ble kalt, og ser etter en `try`-blokk som omslutter funksjonskallet.

Python fortsetter å søke bakover ett og ett funksjonskall for å finne en `try`-blokk til én av to ting skjer:

Hvis den ikke lenger er inne i en funksjon (dvs. koden den ser på ikke er skrevet i noen funksjon), og dermed ikke kan hoppe bakover til et funksjonskall, kommer Python bare til å krasje programmet, som vi har latt det gjøre tidligere.

Hvis den omsider finner en `try`-blokk, vil den kjøre koden som ligger i den tilsvarende `except`-blokken og deretter fortsette på koden etter `except`-blokken. Den vil med andre ord hoppe over all kode som ellers ville kjørt etter stedet unntaket ble generert, og from til `except`-blokken Python fant.

For å se hvordan dette kan se ut i praksis, kan vi skrive om koden over til å bruke en funksjon:
```python
def finn_navn(filnavn):
    with open(filnavn) as fil:
        return fil.readline()

filnavn = 'navn.txt'

try:
    navn = finn_navn(filnavn)
except:
    print('Kunne ikke lese navnet fra', filnavn, ', antar at navnet er Arne.')
    navn = 'Arne'

print('Hei, ', navn)
```

Her har vi lagt all koden for å lese navnet fra fila inn i en funksjon som tar inn filnavnet som argument. Når vi kjører denne koden og det oppstår en feil under åpningen eller lesingen av fila, genereres det et unntak og Python hopper tilbake til funksjonskallet `finn_navn(filnavn)` og finner `try`-blokken som omslutter den. Sett utenifra vil denne koden gjøre akkurat det samme som koden vi skrev over.

`try`-`except`-blokker kan med andre ord fange opp unntak som kastes fra dypt inne i en kjede av funksjonskall. De kan brukes til å dekke en stor mengde kode hvor du er usikker på hvor feilen kommer til å oppstå, men hvor du har en klar formening om hva du kan gjøre om et unntak skulle dukke opp.

#### `try`-`except` for å gjenta en mislykket operasjon

Du husker kanskje programmet vårt for å hente alderen til en bruker? Når man tar inn brukerinnputt er det alltid en fare for at innputtet ikke er på formen vi ønsker, for eksempel at brukeren ikke skriver inn et heltall for alder. Vi så tidligere hvordan vi kunne bruke medlemsfunksjoner på strenger for å vite om de inneholder heltall, men vi kan også bruke `try`-`except`-blokker for å håndtere disse tilfellene:

```python
def hent_alder():
    while True:
        try:
            alder = int(input('Skriv inn alderen din: '))
            return alder
        except:
            print('Kunne ikke lese innputt som heltall, prøv igjen')

alder = hent_alder()
print('Om to år er du', alder + 2, 'år gammel')
```

Inne i `hent_alder`-funksjonen har vi lagt koden som henter alderen fra brukeren inn i en `try`-blokk, som igjen ligger inne i en `while`-løkke. Dersom alderinnhentingen i `try`-blokken klarer å lese brukerinnputt uten problemer, vil koden komme fram til `return`-linja og sende alderen tilbake fra funksjonen. Hvis det oppstår et unntak, hopper Python inn i `except`-blokken og forteller brukeren at de må ta seg sammen. Etter at Python har hoppet ut av `except`-blokken, kjøres løkkeblokken igjen og brukeren kan gjøre et nytt forsøk.

#### Ulike typer unntak

`try`-`except`-blokkene vi har skrevet ovenfor fanger opp alle unntak som skjer i `try`-blokken. I praksis kan det hende det bare er noen få unntak vi vil håndtere i `except`-blokken, for eksempel når vi vet at mange forskjellige problemer kan oppstå, men vi har bare fornuftige måter å håndtere noen av dem på.

`except`-blokker lar deg spesifisere hvilken type unntak du vil fange opp. Det kan du gjøre slik:
```python
try:
    <try-blokk>
except <unntakstype>:
    <except-blokk>
```
Når det nå genereres et unntak i `try`-blokken, vil Python lete etter en tilsvarende `except`-blokk som tar imot den unntakstypen som ble generert. Den søker bakover i funksjonskallkjeden til den enten finner en slik blokk eller forsvinner ut av programmet.

Så hvordan vet vi som programmerere hvilken unntakstype vi er interessert i? Når det genereres et unntak som ikke blir håndtert i noen `except`-blokk, vil som sagt Python krasje programmet og spytte ut en feilmelding. Feilmeldingen inneholder navnet på unntakstypen.

Hvis vi for eksempel prøver å åpne en fil som ikke finnes, vil Python si noe slikt som
```
Traceback (most recent call last):
  File "/home/haakon/External/nocturne.no/./test.py", line 1, in <module>
    with open('john_cena.jpg') as fil:
         ~~~~^^^^^^^^^^^^^^^^^
FileNotFoundError: [Errno 2] No such file or directory: 'john_cena.jpg'
```

I starten av den nederste linja ser vi typen til unntaket som ble generert: `FileNotFoundError`. Dermed kan vi skrive følgende for å håndtere unntaket:

```python
try:
    with open('john_cena.jpg') as fil:
        print(fil.name)
except FileNotFoundError:
    print('Fant ikke John Cena')
```

Du kan også ta imot selve unntaket i en variabel. Det kan du gjøre ved å legge til en `as <variabelnavn>` etter unntakstypen. Du kan bruke denne variabelen til å skrive feilmeldingen til skjerm, samtidig som du håndterer unntaket selv:

```python
try:
    with open('john_cena.jpg') as fil:
        print(fil.name)
except FileNotFoundError as e:
    print('Melding i unntaket:', e)
    print('Fant ikke John Cena')
```

Denne koden skriver ut
```
Melding i unntaket: [Errno 2] No such file or directory: 'john_cena.jpg'
Fant ikke John Cena
```

på skjermen.


Dersom du spesifiserer typen `Exception`, vil `except`-blokken fange opp unntak av alle typer. Dette kan du bruke til å få en variabel som representerer unntaket og som du kan bruke til å finne typen til unntaket dersom du er usikker på hva det er:
```python
try:
    <kode som gjør noe farlig>
except Exception as e:
    print('Fikk et unntak av typen', type(e))
```

Helt til slutt nevner vi at man kan sette opp flere `except`-blokker som fanger opp forskjellige unntakstyper for samme `try`-blokk. Dette ser for eksempel slik ut:
```python
try:
    <try-blokk>
except <første unntakstype>:
    <første except-blokk>
except <andre unntakstype>:
    <andre except-blokk>
...
```

Det kan nok ta en stund før koden du skriver har nok kompleksitet til at du trenger `try`-blokker som dette, men... Her er den i hvertfall.

### Oppsummering

Det var alt for denne gang!

Da vi snakket om filer i denne posten, begrenset vi oss til tekstfiler. Man kan gjøre mange interessante ting med tekstfiler alene, men horisonten for hva som er mulig med filer kommer til å utvides i neste post, der vi skal innom flere forskjellige typer filer.

Vi snakket også om unntakshåndtering, som kan være nyttig i større programmer med usikkerhetsmomenter for å sikre at Python ikke krasjer koden unødvendig. Ofte klarer man seg fint uten å håndtere unntak selv, men `try`-`except`-blokker er uansett fint å ha i bakhånd.

I neste post introduserer vi <i>moduler</i>, som lar oss bygge programmer ved hjelp av kode skrevet av andre. Dette åpner opp et hav av muligheter for hva programmene våre kan gjøre, og vi skal ta med en del varierte eksempler på moduler for å gi et inntrykk av utvalget som finnes der ute.

### Oppgaver

1. Skriv et program som leser en fil og skriver til en ny fil hvor alle linjene er i motsatt rekkefølge; siste linje i den originale fila kommer først in den nye fila osv.

2. Lag et program som teller opp hvor mange ganger bokstaven 'e' finnes i en gitt fil.

3. <a href='/files/countries_population.txt' download>Her er en fil</a> som inneholder alle verdens land (på engelsk) og korresponderende folketall per 2021 (kilde: <a href='http://www.worldometers.info'>worldometers.info</a>). Bruk dataene i denne fila og lag programmer som

a. Skriver ut landene til skjerm sortert alfabetisk

b. Skriver ut navn på alle land som har et folketall på mer enn 10 millioner.

c. Finner ut hvor mange mennesker det er totalt på denne planeten.

Tips til splitting av linjene: I denne fila er det to mellomrom mellom hvert land og korresponderende folketall, mens det bare er ett mellomrom mellom ord i et landsnavn som består av flere enn ett ord.
