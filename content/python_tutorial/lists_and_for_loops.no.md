+++
date = '2021-05-23'
title = 'Lister og for-løkker'
weight = 80
+++


Her skal vi introdusere lister, som vil la oss håndtere store mengder data i programmene våre. Deretter skal vi introdusere `for`-løkker, som gir oss en enkel måte å iterere gjennom lister.

### Lister

<i>Lister</i> er objekter som kan inneholde null, én, eller flere verdier, kalt <i>elementer</i>. Vi kan lage en liste på denne måten:
```python
[<første element>, <andre element>, <tredje element>...]
```
Altså bare en komma-separert liste av null eller flere verdier omsluttet av klammeparenteser `[]`.
For eksempel kan vi skrive

```python
liste = [1, 4, 9, 'hallo', True]
```
for å lage en liste med fem elementer og legge den i variabelen `liste`. Den listen vi har laget her, inneholder verdier av flere forskjellige datatyper: Heltall, en streng, og en boolsk verdi. Det er fullt lovlig å blande verdier av forskjellige datatyper i lister i Python, men det er vanligst at alle elementene er av samme type. Listen selv har datatypen `list`.

En av de vanligste operasjonene vi gjør på lister er å hente ut verdiene som ligger i den. Det kan vi gjøre ved å skrive et par klammeparenteser etter listen, med et tall, en <i>indeks</i>, som sier hvilket element vi vil ha:
```python
liste[<indeks>]
```
I Python og de fleste andre programmeringsspråk bruker man en litt spesiell konvensjon: Første element i listen har indeks <b>0</b>. Dermed har andre element indeks 1, og tredje element har indeks 2 osv. For eksempel kan vi skrive
```python
a = liste[0]
b = liste[1]
c = liste[4]
```

Hvis `liste` er som definert over, vil `a` settes lik 1, det første elementet i listen. `b` settes til det andre elementet i listen, altså 4. `c` settes til `True`, som er det femte og siste elementet i listen.

Det kan ta litt tid å vende seg til at lister starter på indeks 0, og at siste element har indeks lik lengden på listen minus én (slik som at indeks 4 gir siste element i listen over, selv om listen har 5 elementer). I det minste er dette et konsekvent fenomen i Python og andre språk, som vi skal få se mer av senere i denne posten når vi ser på `range()`-funksjonen.

I tillegg til å hente ut elementer, kan vi også endre elementene i listen ved å slå opp en indeks slik som over, og bruke det på venstre side av `=`-operatoren:
```python
liste[3] = 0
```
Nå inneholder listen elementene 1, 4, 9, 0, og `True`: Vi har altså skrevet over element nummer fire (på indeks 3), som var `'hallo'`, og erstattet det med tallet 0.

Python vil gi en feilmelding hvis du bruker en indeks som ligger utenfor listen - for eksempel bør du ikke prøve å bruke indeks 5 på listen over, dersom du vil holde deg på Pythons godside.

### Et par funksjoner vi kan bruke med lister

Vi har allerede sett på hvordan vi kan endre elementer som ligger i listen, men hva om vi vil legge til flere elementer? Lister har medlemsfunksjonen `append()`, som lar oss legge på et nytt element på slutten av listen:

```python
liste = []
liste.append(3)
liste.append(2)
liste.append(1)
print(liste)
```

Her har vi startet med å lage variabelen `liste` og sette den til `[]`, som bare er en liste som ikke inneholder noen elementer. Deretter legger vi på ett og ett element. Til slutt skriver vi ut listen til skjerm: `print()` tillater å bruke lister som argumenter, som gjør det lett å skrive den til skjerm for å sjekke hva de inneholder. Vi får ut:
```
[3, 2, 1]
```
Som vi ser, ligger elementene i samme rekkefølge som vi la dem inn i.

### Lister og løkker
Ofte er vi interessert i å gjøre en operasjon på hvert element i en liste, for eksempel skrive dem til skjerm på hver sin linje. Dette kan vi gjøre med en `while`-løkke. For å vite når `while`-løkken skal stoppe, må vi vite lengden på listen. Denne kan vi få ved å kalle funksjonen `len` med listen som argument. For eksempel vil `len([])` gi 0 som svar, siden den brukes på en tom liste, mens `len([1, 2, 3])` gir 3 som svar. For å gå igjennom en liste kan vi dermed gjøre som følger:
```python
liste = [2, 3, 5, 7, 11]

i = 0
while i < len(liste):
    print(liste[i])
    i += 1
```

Her lager vi først en liste med noen tall, og setter iterasjonsvariabelen vår `i` til 0. Betingelsen i `while`-setningen sier at løkken skal kjøres så lenge `i` er mindre enn lengden på listen, som er 5 i dette tilfellet. For hver iterasjon i løkka, kjører vi `print(liste[i])`, altså skriver vi elementet pa index `i` i listen til skjermen. Siden `i` er et heltall som starter på 0 og går opp til lengden på lista, vil dette gjøre at vi til slutt skriver alle elementene i lista til skjermen. Som vanlig øker vi verdien til `i` med 1 for hver iterasjon i løkka. Resultatet blir:
```
2
3
5
7
11
```
Det er litt hjernegymnastikk å sjekke at løkken faktisk går igjennom alle elementene i listen bare ved å se på den. Det som er viktig her, er at vi starter på 0, som er første indeks i lista, og fortsetter til (men ikke med!) indeksen er lik lengden av lista. Hvis du synes dette er tungt å resonnere over nå, kan du trøste deg med at det kommer til å bli lettere når vi introduserer `for`-løkker om litt.

For å ta et annet eksempel - denne koden lager en liste og regner ut summen av elementene i den:
```python
liste = [1, 2, 3, 4, 5, 6, 7]

i = 0
sum = 0
while i < len(liste):
    sum += liste[i]
    i += 1

print('Summen er', sum)
```
Her har vi laget variabelen `sum` som starter på null og deretter økes med hvert element i lista med `+=`-operatoren, slik at den til slutt inneholder summen av alle elementene i lista, som vi skriver ut til skjermen på siste linje.

I Python har vi også den innebygde funksjonen `sum()`, slik at vi like gjerne kunne ha skrevet `print('Summen er', sum(liste))`, men vi har skrevet det med en løkke over for eksempelets skyld.

Til slutt tar vi et litt mer sammensatt eksempel. I koden under ber vi brukeren om å skrive inn en rekke navn, som legges i en liste, helt til brukeren skriver "ferdig". Deretter sorteres lista, og navnene skrives tilbake til brukeren på hver sin linje.

En eventyrlysten sjel ville kanskje ha implementert en sorteringsfunksjon som sorterte lista på egen hånd, men her nøyer vi oss med å bruke `sort()`, som er en medlemsfunksjon på lister. `sort()` brukes ofte på lister av tall, men kan også brukes på lister av strenger, hvor den sorterer listen alfabetisk:
```python
liste = []

while True:
    navn = input('Skriv et navn eller "ferdig": ')

    if navn == 'ferdig':
        break

    liste.append(navn)

liste.sort()

i = 0
while i < len(liste):
    print(liste[i])

    i += 1
```
Utover funksjonen `sort()`, er det ikke noe nytt her, men dette eksempelet er litt mer sammensatt enn de vi har sett tidligere. Se om du forstår hvordan dette programmet gjør det beskrivelsen over sier!

<div class="notice">

Merk: Når man sammenligner to bokstaver i Python og andre programmeringsspråk, kommer alle store bokstaver foran alle små. Det vil si at strengen "Ola" vil settes før strengen "ada" under sortering.

</div>

### `for`-løkker</h2>

Det er et mønster vi har gjentatt mange ganger i eksemplene over, nemlig `while`-løkker på formen
```python
i = 0
while i < len(<liste>):
    ...
    i += 1
```
I tillegg til at man fort blir lei av å skrive de samme linjene om og om igjen, er det mange detaljer som kan være lette å glemme. Som et alternativ kan vi bruke `for`-løkker.

`for`-løkker skrives på følgende måte:
```python
for <iterasjonsvariabel> in <liste>:
    <løkkeblokk>
```
Den første linja starter med `for` (som du kanskje kunne gjettet deg til), etterfulgt av et valgfritt variabelnavn som brukes som iterasjonsvariabel. Deretter følger ordet `in`, og så lista vi vil iterere gjennom. Den første linja avsluttes med et kolon. Deretter følger løkkeblokken, skrevet med innrykk som vanlig.

Måten `for`-løkken fungerer på, er at løkkeblokken kjøres én gang for hvert element i lista. For hver iterasjon settes iterasjonsvariabelen til det korresponderende <i>elementet</i> i lista. Dette står i kontrast til iterasjonsvariabelen vi har brukt i `while`-løkkene tidligere, hvor iterasjonsvariabelen inneholder en indeks.

Vi kan skrive om det ene eksempelet vi hadde over, hvor vi definerer en liste med tall og skriver tallene til skjerm på hver sin linje:

```python
liste = [2, 3, 5, 7, 11]

for e in liste:
    print(e)
```

Se så mye enklere det ble! Nå settes iterasjonsvariabelen `e` til elementene 2, 3, 5, 7 og 11 i hver sin iterasjon, slik at de blir skrevet på hver sin linje på skjermen. Jeg kommer til å bruke variabelnavnet `e` for <i>element</i> for å presisere at den inneholder <i>elementene</i> i listen og ikke <i>indekser</i>.

Her er summeringsprogrammet, revitalisert med en `for`-løkke.
```python
liste = [1, 2, 3, 4, 5, 6, 7]

sum = 0
for e in liste:
    sum += e

print('Summen er', sum)
```
Sammenlignet med den korresponderende koden over, er det mye lettere å skjønne hva som foregår, og det er mindre rom for å skrive feil!

### `range()`-funksjonen

La oss si at vi har en liste med navn, og vil skrive navnene ut på hver sin linje sammen med nummeret på navnet i lista. Med en `while`-løkke kunne vi gjort det slik:
```python
navneliste = ['Erna', 'Bent', 'Beelzebub']
i = 0
while i < len(navneliste):
    print(i + 1, navneliste[i])
    i += 1
```
Legg merke til at vi har skrevet `i + 1` i `print()`-kallet, for å få numereringen til å begynne på 1 i stedet for 0.

Vi kan ikke skrive om koden over ved å iterere gjennom listen med en `for`-løkke direkte, fordi vi trenger indeksen for hvert element inne i løkkeblokken, men `for`-løkken gir oss bare elementet selv. I slike tilfeller kan vi bruke `range()`-funksjonen.

`range()` gir oss en rekke med heltall fra et startpunkt til et sluttpunkt. For eksempel vil
`range(3)` gi oss tallene fra og med 0, til, men <i>ikke</i> med, 3. Vi kan også legge inn en egen startgrense som første argument, som gjør andre argument til øvre grense; `range(3, 5)` gir tallene fra og med 3, til, men ikke med 5, med andre ord bare tallene 3 og 4. Vi kan bruke `range()` direkte med `for`-løkker slik:
```python
for i in range(10):
    print(i)
```
Denne koden skriver bare ut tallene 0 til 9 på hver sin linje, med veldig lite kode! Dette er den foretrukne måten å iterere gjennom en sammenhengende rekke med heltall på.

For å gjenskape eksempelet vi hadde over ved hjelp av `for`-løkker, kan vi bruke `range()` slik:
```python
navneliste = ['Erna', 'Bent', 'Beelzebub']

for i in range(len(navneliste)):
    print(i + 1, navneliste[i])
```

Husk at `len()` gir lengden av lista. Dermed gir `range(len(navneliste))` en rekke med tall fra og med 0, til, men ikke med, lengden av lista. Dette passer godt sammen med måten indeksering av lister fungerer i Python: De gyldige indeksene i en liste starter på 0 og går opp til, men ikke med, lengden av lista. Derfor gir `range(len(navneliste))` bare de gyldige indeksene vi kan bruke i lista! Dermed gjør koden over det samme som eksempelet som brukte en `while`-løkke, men med mindre kode.

Et annet tilfelle vi kan bruke `range()` i, er når vi vil iterere gjennom to lister samtidig, for eksempel for å kombinere elementer fra hver liste i én eller annen operasjon. `for`-løkker itererer gjennom kun én liste av gangen. For å iterere gjennom to lister samtidig, er det lettest å bruke indekser:
```python
navneliste = ['Erna', 'Bent', 'Beelzebub']
alderliste = [60, 50, 4521]

for i in range(len(navneliste)):
    print(navneliste[i], 'er', alderliste[i], 'år gammel')
```
Ved å bruke den samme indeksen i begge listene, kan vi kombinere korresponderende elementer i samme `print()`-setning i løkkeblokken.

Strengt tatt returnerer ikke `range()` en liste, men en <i>iterator</i>. Forskjellen er først og fremst at en iterator ikke nødvendigvis inneholder alle elementene, men bare genererer dem når de trengs, som kan spare mye minne når det er snakk om uhorvelig mange elementer. `for`-løkker fungerer både med lister og iteratorer, så forskjellen er ikke veldig viktig nå.

Vi kan også bruke `break` og `continue` i `for`-løkker. Husk at `break` hopper ut av hele løkken, mens `continue` hopper videre til neste iterasjon. Python vil automatisk bruke neste element i neste iterasjon når vi hopper videre med `continue` i en `for`-løkke.

Her er et eksempel som skriver alle positive tall under hundre som er delelige på 8 og 12, hvor vi bruker `continue` for å hoppe over tall som ikke oppfyller kravet:
```python
for i in range(1, 100):
    if not (i % 8 == 0 and i % 12 == 0):
        continue
    print(i)
```

Det kan hende det føles mer naturlig å lage en hvis-setning med betingelsen `i % 8 == 0 and i % 12 == 0` inne i løkka, og legge `print()`-kallet inne i hvis-blokken i stedet - koden over er skrevet med `continue` først og fremst for demonstrasjonens skyld.

### `for` eller `while`?

Nå som vi har gitt to måter å skrive løkker på, er det mest naturlige spørsmålet; hvilken skal vi bruke? I de aller fleste tilfeller lønner det seg å bruke `for`-løkker. Dette gjelder spesielt når du itererer gjennom en liste eller et gitt intervall av heltall.

I de tilfellene der du ikke vet hvor mange iterasjoner løkken skal kjøres, vil det være bedre å bruke `while`-løkker. Dette kan for eksempel være når løkken avsluttes når brukeren skriver et spesielt innputt, eller når du leter etter f. eks. et tall som oppfyller et krav, uten at du har noen øvre grense for hvor stort tallet kan være.

### Strenger som lister
Vi kan også behandle strenger som lister, til en viss grad. For eksempel kan vi bruke indekser for å hente ut bestemte bokstaver av strengen:

```python
streng = 'hallo'
første_bokstav = streng[0]
```

Her kommer `første_bokstav` til å inneholde `'h'`, som også er en streng.

På en annen side kan vi <i>ikke</i> endre bokstavene i strengen. Strenger er <i>uforanderlige</i> (engelsk: <b>immutable</b>). Vi kan altså ikke endre strenger, bare lage nye.

En annen ting strenger har til felles med lister, er at vi kan iterere gjennom dem med `for`-løkker. `for`-løkken vil da behandle strengen som en liste av bokstaver. Denne koden skriver hvert tegn i strengen på hver sin linje:
```python
streng = 'En enormt stor potet'

for tegn in streng:
    print(tegn)
```

### Listeinklusjon

Helt til slutt skal vi snakke litt om en annen måte å lage lister på, som kan være enklere i mange tilfeller. <i>Listeinklusjon</i> (engelsk: <b>list comprehension</b>) er en kortere måte å definere lister på når elementene i den nye lista er laget direkte fra elementer i en annen liste. Se for eksempel denne koden:

```python
navn = ['Erna', 'Bent', 'Beelzebub']

store_navn = []
for e in navn:
    store_navn.append(e.upper())

for e in store_navn:
    print('PASS PÅ,', e, 'KOMMER!')
```

Her lager vi en ny liste hvor vi tar navnene fra den gamle listen og konverterer alle små bokstaver til store bokstaver med `upper()`. Det gir mer tyngde i `print()`-kallene i løkken på slutten av koden. Denne koden fungerer helt fint, men kan gjøres kortere med listeinklusjon.

Med listeinklusjon definerer vi en liste på denne måten:

```python
[<utregning på element> for <elementnavn> in <liste>]
```

Den nye lista blir definert med en rekke verdier som blir regnet ut, eller på en eller annen måte laget, fra elementene i en annen liste (eller iterator). Vi kan skrive om eksempelet over slik:
```python
navn = ['Erna', 'Bent', 'Beelzebub']

store_navn = [e.upper() for e in navn]

for e in store_navn:
    print('PASS PÅ,', e, 'KOMMER!')
```

Her har vi skrevet `store_navn` ved hjelp av listeinklusjon - `[e.upper() for e in navn]`. Variabelnavnet `e` som vi bruker inne i listeinklusjonen er et fritt valgt variabelnavn, på samme måte som at navnet på iterasjonsvariabelen i `for`-løkker er valgfritt. Vi kan oversette det som skjer i listeinklusjonen omtrent som "lag en liste som består av `e.upper()` for hvert element `e` i listen `navn`".

Vi kan også spesifisere en betingelse i listeinklusjonen for å bare velge noen av elementene fra den gamle lista. Da ser listeinklusjonen slik ut: `[<verdi dedusert fra variabelnavn> for <variabelnavn> in <list> if <betingelse>]`. Med dette kan vi lage et program hvor vi f. eks. kaster bort navn med en assosiert alder som er for lav:
```python
navneliste = ['Erna', 'Bent', 'Beelzebub']
alderliste = [60, 50, 4521]

eldre = [navneliste[i] for i in range(len(navneliste)) if alderliste[i] > 75]

for e in eldre:
    print('Du begynner å dra på årene,', e)
```

Her har vi sagt at vi skal inkludere alle navn med gyldig indeks i `navneliste`, men bare hvis alderen på samme indeks i `alderliste` er høyere enn 75. Dette eksempelet er litt ekstra komplisert, ettersom vi vil ha elementer fra én liste, men må sjekke betingelsen med en annen liste, som betyr at vi må iterere gjennom indekser med `range()`-funksjonen, framfor å iterere gjennom elementer direkte i listeinklusjonen. Ikke vær bekymret om du sliter med å forstå dette eksempelet - det er et vanskelig ett!

### Oppsummering

Lister vil kunne hjelpe oss med å håndtere store datamengder, hvor enn de måtte dukke opp. Her har vi bare sett på lister med noen få elementer, men Python kan fint håndtere lister med millioner av elementer (den faktiske grensen kommer an på hvor mye maskinen din orker).

Med denne posten har vi faktisk gått igjennom de viktigste grunnelementene i Python. De neste postene kommer først og fremst til å fokusere på å utvide horisonten for hva man kan gjøre med Python og programmering generelt. Da kommer vi til å bygge forklaringene i større grad på konseptene vi allerede har definert: Variabler, betingelser, funksjoner, lister og løkker.

I neste post introduserer vi tabeller, som er en alternativ måte å lagre datamengder på.

### Oppgaver

1. Lag en liste som inneholder de hundre første kvadrattallene (`n * n` for `n` fra 1 til 100). Prøv å gjøre det med listeinklusjon!

2. Skriv om eksempelet i denne posten der brukeren skriver inn en rekke navn som legges i en liste, med `for`-løkke(r). Burde begge `while`-løkkene gjøres om til `for`-løkker?

3. Skriv om eksempelet om primtall i posten om <a href="/no/introduksjon_til_python/løkker">while-løkker</a> ved hjelp av `for`-løkker og funksjoner.

4. (Vanskelig) En liste kan også inneholde andre lister som elementer. Lag gangetabellen i en slik dobbel liste: Lag en liste der hvert element er en liste som inneholder <i>n</i>-gangen. F. eks. skal første element i "hovedlisten" være listen `[1, 2, 3..., 10]`, mens andre element er listen `[2, 4, 6..., 20]` og syvende element skal være `[7, 14, 21..., 70`.

For en ekstra (<i>ekstra</i>) utfordring, prøv å definere listen på én linje ved hjelp av listeinklusjon!
