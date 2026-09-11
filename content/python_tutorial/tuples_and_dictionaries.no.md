+++
date = '2021-06-06'
title = 'Tupler og tabeller'
weight = 90
+++


Dette blir en litt kortere post der vi fokuserer på to nye konsepter som ofte kommer til nytte når man er på kodeeventyr: Tupler og tabeller.

### Tupler

La oss si at vi vil representere alle verdens land assosiert med hver sin hovedstad i programmet vårt. Vi vil bruke dette til å finne hovedstaden til et land som brukeren skriver inn som innputt til programmet. Én måte å representere relasjonen mellom land og hovedsteder på, er å bruke to lister, én for land og én for hovedsteder. Programmet vårt blir seende omtrent slik ut:

```python
landliste = ['Norge', 'Sverige', 'England']
hovedsteder = ['Oslo', 'Stockholm', 'London']

land = input('Skriv inn et land: ')

hovedstad = ''

for i in range(len(landliste)):
    if land == landliste[i]:
        hovedstad = hovedsteder[i]
        break

if len(hovedstad) == 0:
    print('Fant ikke hovedstaden til', land, ':(')
else:
    print('Hovedstaden i', land, 'er', hovedstad)
```

Her er det en del å ta tak i!

Programmet begynner med å definere to lister, én som inneholder land og én som inneholder korresponderende hovedsteder. Vi har gjort en forenkling hvor vi antar at verden består av tre land. Vi tar inn navnet på et land fra brukeren, og definerer variabelen `hovedstad` som vi setter til `''`, altså en tom tekststreng. Deretter går vi igjennom indeksene til listen `landliste` og sammenligner hvert land i listen med landet vi fikk av brukeren. Når vi finner landet i `landliste` som stemmer overens med det brukeren skrev inn, setter vi variabelen vi definerte tidligere, `hovedstad`, til være strengen på korresponderende indeks i listen `hovedsteder` og avslutter løkken med `break`.

Til slutt sjekker vi om lengden på strengen `hovedstad` er lik null med `len()`-funksjonen. Hvis lengden er null, vet vi at `hovedstad` ikke har endret seg siden vi initialiserte den til en tom streng, noe som betyr at vi ikke fant et land som matchet brukerinnputtet fra listen `landliste` i løkken over. Dermed må vi, med halen mellom beina, fortelle brukeren at vi ikke fant noen hovedstad. Ellers, hvis `hovedstad` ikke er tom, betyr det at vi må ha funnet et matchende land, og dermed en hovedstad - som vi så skriver ut til brukeren.

Koden over fungerer fint, men det er et par ting vi kan tenke på å forbedre:

Det første vi kan se på, er de to listene våre. De er veldig tett knyttet opp mot hverandre. De er faktisk så tett knyttet at en endring i én av dem vil ødelegge den <i>implisitte</i> relasjonen de har til hverandre. Hvis vi f. eks. stokker om på, fjerner eller legger til nye land i `landliste`, vil det innføre potensielle feil i koden, ettersom korresponderende elementer i `hovedsteder`-listen ikke lenger nødvendigvis er riktig hovedstad.

Nå kan det hende du tenker "men dét skjønner jeg jo, jeg kommer jo aldri til å gjøre noe så dumt som å endre på én av listene uten å endre den andre?". Sant nok. Dette er et forholdsvis enkelt eksempel hvor det er lett å se at det går galt når man bare endrer én liste, men i større eksempler kan det være mye vanskeligere å holde rede på sånne avhengigheter mellom f. eks. lister. Ideelt sett vil vi altså fjerne denne usynlige, implisitte relasjonen mellom de to listene, og heller gjøre den synlig, <i>eksplisitt</i>.

Dette er et tilfelle der vi kan bruke <i>tupler</i>. Tupler ligner på lister; de inneholder en rekke elementer. Men til forskjell fra lister skrives de med vanlige paranteser `()` i stedet for klammeparanteser `[]`. `(1, 3)` og `(3, True, 1)` er to eksempler på tupler. En annen forskjell er at tupler ikke kan endres, man kan hverken legge til, endre eller fjerne elementer fra en tuppel. Tupler kan ha så mange elementer vi vil, men alle elementene må være med i det tuppelen blir definert, siden det ikke kan endres senere.

Tupler er bra for å holde på et lite antall verdier som er relatert til hverandre, men som kan ha forskjellige betydninger. For eksempel kan en tuppel med tre elementer representere en person ved å inneholde en streng for navn, et heltall for alder, og et flyttall for høyde. Dette står i motsetning til lister som fungerer best for å inneholde mange verdier som ikke nødvendigvis er relatert til hverandre, men som har samme betydning, som en deltagerliste for et arrangement eller en liste av de ti første primtallene.

Når vi har en tuppel, kan vi "splitte" det opp ved hjelp av `=`-operatoren slik:
```python
en_tuppel = (1, 2, 3)
a, b, c = en_tuppel
```
Her vil variablene `a`, `b` og `c` inneholde henholdsvis verdiene 1, 2 og 3. Vi kan også bruke indekser på samme måte som vi gjør for lister: `a = en_tuppel[0]`.

Vi kan skrive om programmet over ved hjelp av tupler. Vi kommer til å bruke tupler med kun to elementer, som vi rett og slett kaller et <i>par</i>:
```python
land_og_hovedsteder = [('Norge', 'Oslo'), ('Sverige', 'Stockholm'), ('England', 'London')]

land = input('Skriv inn et land: ')

hovedstad = ''

for i in range(len(land_og_hovedsteder)):
    if land == land_og_hovedsteder[i][0]:
        hovedstad = land_og_hovedsteder[i][1]
        break

if len(hovedstad) == 0:
    print('Fant ikke hovedstaden til', land, ':(')
else:
    print('Hovedstaden i', land, 'er', hovedstad)
```

Her har vi erstattet de to listene med én liste bestående av par. Dette gjør relasjonen mellom elementene i hvert par mye tydeligere enn om de ligger i separate lister.

Legg merke til at vi bruker notasjonen `land_og_hovedsteder[i][0]` for å få ut land på indeks `i` i listen. Den første indeksen, `[i]` brukes til å velge paret på indeks `i`, mens `[0]` henter ut det første elementet, altså landet, fra paret. Dette er en kortere måte å skrive f. eks.
```python
par = land_og_hovedsteder[i]
valgt_land = par[0]
```
på.

Tupler er også hendige for å returnere flere enn én verdi fra et funksjonskall. Her er en funksjon som tar inn både navn og skostørrelse fra brukeren, og returnerer begge:
```python
def hent_personalia():
    navn = input('Skriv navnet ditt: ')
    skostørrelse = int(input('Skriv skostørrelsen din: '))
    return (navn, skostørrelse)
```
Vi kan legge de to returverdiene fra funksjonskallet enten i én variabel (som en tuppel), eller i separate variabler slik:
```python
navn, skostørrelse = hent_personalia()
```

### Tabeller

<i>Tabeller</i> (engelsk: <b>dictionaries</b>) er objekter som inneholder ingen eller flere verdier, men som, i motsetning til lister, tillater oss å bruke andre datatyper enn heltall som indekser. En tabell kan defineres med `{ <indeks0>: <verdi0>, <indeks1>: <verdi1>...}`. Altså en liste av kommaseparerte av indeks-verdi-par, hvor indeks og verdi er separert med kolon, omsluttet av krøllparanteser. Vi kan for eksempel lage en tabell med brustyper og tilsvarende farge slik:
```python
brusfarger = { 'Solo': 'gul', 'Cola': 'brun', 'Sprite': 'uhm...' }
```
I tabeller er datatypene til både indeksene og verdiene valgfrie, men det er vanligst at alle indekser har samme type og alle verdier har samme type. Når man skal hente ut og legge inn elementer i en tabell, bruker man indekser med samme klammeparantesnotasjon som vi bruker med lister. Her er et eksempel:
```python
tabell = {}

tabell['a'] = 0
tabell['b'] = 1
tabell['c'] = 2

print(tabell['b'])
print(tabell)
```

Først definerer vi variabelen `tabell` som settes til `{}`, som bare er en tom tabell. Deretter bruker vi notasjonen `tabell[<indeks>] = <verdi>` til å sette verdier inn på ulike indekser i tabellen. Legg merke til at indeksene ikke trenger å eksistere i tabellen fra før for at man skal kunne legge noe på dem, i motsetning til indekser i lister. Her legges verdien `0` på indeks `'a'`, `1` på indeks `'b'` og `2` på indeks `'c'`. Utskriften fra programmet blir:
```
1
{'a': 0, 'b': 1, 'c': 2}
```
Som forventet, får vi at elementet på indeks `'b'` er 1, og det siste `print()`-kallet viser at alle de tre indeks-verdi-parene ligger der.

Merk at du kun kan ha én verdi assosiert med en indeks. Hvis du i koden etter eksempelet over hadde skrevet `tabell['a'] = 4`, ville du endt opp med tabellen `{'a': 4, 'b': 1, 'c': 2}`. Det er derimot ikke noe problem å ha flere like verdier i tabellen, så lenge indeksene er ulike.

Vær også obs på at rekkefølgen på indeks/verdi-parene kan være annerledes når du skriver den til skjerm, enn rekkefølgen du la dem inn i. Python bryr seg ikke om å bevare rekkefølgen på indekser i tabellen, så du bør ikke belage deg på at de er i en bestemt rekkefølge.

Vi kan gjøre det opprinnelige eksempelet vårt enda litt bedre ved å bruke en tabell:
```python
land_og_hovedsteder = { 'Norge': 'Oslo', 'Sverige': 'Stockholm', 'England': 'London' }

land = input('Skriv inn et land: ')

if land in land_og_hovedsteder:
    print('Hovedstaden i', land, 'er', land_og_hovedsteder[land])
else:
    print('Fant ikke hovedstaden til', land, ':(')
```


Her har vi først konstruert tabellen `land_og_hovedsteder`, hvor vi assosierer hvert land med sin hovedstad. Dette gjør at f. eks. indeksoppslaget `land_og_hovedsteder['Norge']` gir `'Oslo'` som resultat. Deretter tar vi inn brukerinnputt som vanlig.

Deretter kommer en stor forskjell fra den tidligere framgangsmåten vår: Vi itererer ikke igjennom tabellen for å finne landet, men bruker en betingelse på formen `<indeks> in <tabell>`, som evalueres til `True` dersom indeks-verdien er en gyldig indeks i tabellen. Dermed vil betingelsen `land in land_og_hovedsteder` evalueres til sant dersom landet brukeren skrev inn er en indeks i tabellen (altså enten `'Norge'`, `'Sverige'` eller `'England'`), og usant dersom landet ikke finnes i tabellen. Vær obs på at `in`-operatoren bare sjekker om verdien på venstre er en <i>indeks</i> i tabellen, ikke om den finnes i tabellen som en <i>verdi</i>.

Dersom betingelsen er sann, vet vi at vi har en hovedstad vi kan gi tilbake til brukeren, nemlig strengen vi får av tabelloppslaget `land_og_hovedsteder[land]`. Dersom landet ikke finnes i tabellen, og dermed betingelsen evalueres til usann, innrømmer vi overfor brukeren an vi ikke klarte å finne noe godt svar.

Sammenligner vi første og siste utkast av eksempelet over, ser vi at tabellen har hjulpet oss enormt med å gjøre koden enklere. Tabeller er gode å ha når vi har en én-til-én-korrespondanse mellom to mengder med verdier, og gjerne vil bruke elementer fra den ene mengden, for eksempel land, til å hente ut korresponderende element i den andre mengden, for eksempel hovedsteder.

### Iterere gjennom en tabell

Fra tid til annen kan det hende vi vil iterere gjennom en tabell, for eksempel for å liste opp innholdet. I Python kan vi bruke `for`-løkker til dette formålet.

En standard `for`-løkke basert på en tabell ser ut som følger:
```
for <indeksvariabel> in <tabell>:
    <løkkeblokk>
```
Iterasjonsvariabelen vi får når vi itererer gjennom en tabell slik, er indeksene i tabellen. Dermed kan vi bruke indeksen for å skrive hvert element til skjerm, f. eks.
```python
for land in land_og_hovedsteder:
    print('Hovedstaden i', land, 'er', land_og_hovedsteder[land])
```
Hvor `land_og_hovedsteder` er som i eksempelet over.

Det finnes alternative måter å iterere gjennom en tabell på. Tabeller har medlemsfunksjonen `values()`, som gir oss en iterator med alle <i>verdiene</i> i tabellen, i motsetning til indeksene. Dermed kan vi liste opp alle hovedstedene i tabellen vår slik:
```python
for hovedstad in land_og_hovedsteder.values():
    print(hovedstad, 'er en hovedstad')
```
`values()`-funksjonen kan være nyttig når vi kun er interessert i verdiene i tabellen, og ikke hvilke indekser de tilhører.

En siste måte å iterere gjennom tabeller på, er å bruke medlemsfunksjonen `items()`. `items()` returnerer en iterator med par, hvor hvert par inneholder korresponderende indeks og verdi fra tabellen. Dermed kan vi liste opp land med hver sin hovedstad litt enklere på denne måten:
```python
for land,hovedstad in land_og_hovedsteder.items():
    print(hovedstad, 'er hovedstaden i', land)
```
Iterasjonsvariabelen i denne løkken er et par, men vi kan splitte paret opp i to komponenter som vi har gjort her, slik at vi skriver mindre og gjør koden klarere.

### Oppsummering

Det var alt for denne gang! Tupler og tabeller er ikke fryktelig avanserte konsepter, men kan gjøre koden din langt enklere om du bruker dem riktig.

I neste post tar vi for oss skriving og lesing av filer, som vil gjøre oss i stand til å laste og lagre større mengder data vi kan gjøre interessante ting med. Vi drar også en liten tur innom feilhåndtering.

### Oppgaver

1. Lag en <i>funksjon</i> som tar inn en liste og returnerer en tabell med de samme elementene som listen inneholder, men hvor verdi/indeks er <i>reversert</i>. Altså skal elementene i lista være indekser i tabellen, og de korresponderende verdiene i tabellen blir indeksen elementet har i lista. Eksempel: Hvis funksjonen får inn lista `['a', 'b', 'c']`, skal den returnere tabellen `{'a': 0, 'b': 1, 'c': 2}`.

2. Lag en funksjon som tar inn en streng og returnerer en tabell med tegnene i strengen som indekser, og antallet av hvert tegn som korresponderende verdier. Hvis funksjonen for eksempel får inn strengen `'hallo'`, skal den returnere tabellen `{'a': 1, 'h': 1, 'l': 2, 'o': 1}` (rekkefølgen på elementene her har ingenting å si).

3. Lag et program som lar brukeren øve på verdens hovedsteder: Programmet viser navnet til ett og ett land og tar i mot brukerens innputt, som er deres svar på hva hovedstaden er. Til slutt viser programmet hvor mange riktige brukeren hadde. Du kan begrense deg til landene vi har brukt i denne posten, om du synes det er stressende å komme på flere.

4. (Vanskelig) Lag en liste med alle tupler av positive heltall `a`, `b` og `c` slik at `a * a + b * b == c * c`, der `a`, `b` og `c` er under 100. Tupler som oppfyller denne ligningen kalles <i>pytagoreiske tripler</i>. (Merk - dette er først og fremst en løkkeoppgave).
