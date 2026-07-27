+++
date = '2021-04-17'
draft = true
title = 'Den interaktive konsollen og variabler'
weight = 30
+++

I denne posten skal vi gå gjennom det kanskje mest fundamentale konseptet i Python
og mange andre programmeringsspråk: Variabler.

Men før vi begir oss ut på <i>den</i> reisen,
skal vi først lære om <i>interaktiv</i> Python, som vi skal bruke aktivt for å forstå
variabler etterpå.

### Den interaktive Python-konsollen

I forrige post lagde vi en fil, skrev kode i filen, og kjørte filen som et program. Det
er stort sett slik vi kommer til å jobbe med Python, men en alternativ
måte å bruke Python på, er i <i>interaktiv modus</i>.

I dét du åpner opp IDLE, får du opp et vindu med litt tekst, som kan se ut omtrent som dette:

```
Python 3.9.2 (default, Apr 10 2021, 20:34:18)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license()" for more information.
>>>
```
Nøyaktig hvordan teksten ser ut, vil avhenge av operativsystem og Python-versjon du
bruker. På bunnen ser du `>>>`, hvor du kan skrive tekst.
Vi kaller dette vinduet <i>den interaktive
Python-konsollen </i>, og her kan vi skrive Python!

Python er et <i>tolket</i> språk. Nøyaktig hva det innebærer, skal vi
se nærmere på i en senere post, men ett viktig aspekt vi får nytte av nå, er at Python leses linje for linje
under kjøring. I den interaktive konsollen kan vi på samme måte skrive inn én og én linje,
og få Python til å umiddelbart utføre det vi skriver.

For å se hvordan dette fungerer, la oss skrive inn linjen som var programmet vi lagde
i forrige post:
```python
print('Hallo, verden!')
```

Etter å ha skrevet inn denne linjen i den interaktive konsollen, trykk linjeskift/enter.
Du skal nå se noe á la:

```
>>> print('Hallo, verden!')
Hallo, verden!
>>>
```
Den interaktive konsollen leste inn linjen og kjørte den, og vi ser resultatet av kjøringen
med én gang, rett under der vi skrev kodelinjen! Konsollen har til slutt
skrevet `>>>` på skjermen igjen, som betyr at den venter på neste linje.

Du kan skrive inn samme linje på nytt for å få samme resultat, men det er grenser for hvor mange ganger
det er gøy å gjøre i ett strekk. La oss lære noe nytt vi kan skrive i konsollen!

### Variabler
I programmeringssammenheng er <i>variabler</i> navn vi gir til verdier. Verdiene
kan være f.eks. tall, men kan også være tekst eller lister, for å nevne noe. Ideen er at
vi <i>lagrer</i> verdier
i variabler, og bruker variabelnavnene når vi refererer til verdiene i ettertid.

La oss se på noen eksempler, før jeg rekker å forvirre deg for mye. Skriv `a = 1` inn i konsollen.
Denne linjen ber Python om å legge verdien `1` inn i variabelen `a`.
```
>>> a = 1
>>>
```
Dette er den generelle formen for å sette en variabel til en verdi: `<variabelnavn> = <verdi>`.
Tilsynelatende har ingenting skjedd.
Hvis vi nå skriver bare `a` i konsollen skal vi få noe lignende:
```
>>> a
1
>>>
```

Det vi i praksis gjør her er å be Python om å gi oss verdien av `a`, eller <i>evaluere</i> `a`,
og Python svarer på linja under at
verdien er satt til 1, akkurat som vi sa at den skulle gjøre med forrige innputtlinje.

Til sammenligning,
prøv å skrive `b` i konsollen:
```
>>> b
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    b
NameError: name 'b' is not defined
>>>
```
Ok, her skjønner vi fort at noe er galt! Den siste linja forteller oss hva som er
hovedproblemet: `b` er ikke definert. Det gir mening at Python klager,
ettersom vi har bedt om å få verdien
til `b`, men vi har aldri sagt hva verdien til `b` er!

Vi velger variabelnavn selv. De kan inneholde bokstaver og tall, pluss understrek (`_`) og
de kan være så lange vi vil, men de
kan aldri <i>starte</i> på et tall, og kan ikke inneholde mellomrom.
Dermed er både `a`, `tall` og `GymnaslærerPedersen_69` gyldige
variabelnavn, mens `5tall` og `to ord` er ugyldige.

Vi står fritt til å lage variabelnavn som vi vil, men i praksis er det lurt å velge navn
som beskriver hva variabelen inneholder.


Nytt eksperiment: Prøv å skrive `1 + 1` i konsollen:
```
>>> 1 + 1
2
>>>
```

Her ser vi at Python automatisk regner regnestykker vi gir til den. På sett og vis
er Python en forvokst kalkulator - noe som er veldig nyttig i mange sammenhenger!
Her begynner vi å se noe av styrken til Python. La oss skrive inn `a + 1`:
```
>>> a + 1
2
>>>
```

Vi definerte tidligere `a` til å være 1,
og Python putter inn tallet 1 i stedet for `a` for å regne ut uttrykket.
Dette fungerer så fremt du ikke har restartet konsollen siden du definerte `a`.
Hvis du lukker konsollen, forsvinner alle variablene du har definert der.

Vi har lært (minst) to ting: Python fungerer flott som en kalkulator, og lar deg sette navn på verdier
som du kan bruke alle steder der du ville brukt verdiene selv!
Vi kan gjøre litt flere operasjoner for å vise fleksibiliteten til Python:
```
>>> a = 1
>>> b = 2
>>> c = a + b
>>> d = b + c * a
>>> e = 1234.5 * 67890 * a
>>> a
1
>>> b
2
>>> c
3
>>> d
5
>>> e
83810205.0
```
Her ser vi `*`, som er gangetegnet vi bruker i Python og stort sett alle andre programmeringsspråk.
Matematiske operasjoner følger vanlige prioritetsregler. Dvs. i uttrykket for `d` over, vil
`c * a` regnes ut før `b` legges til.

Man kan også gi variabler nye verdier:
```
>>> a = 1
>>> a
1
>>> a = 2
>>> a
2
>>>
```
    Når du redefinerer variabler sånn som dette, vil variablen altså inneholde
    den siste verdien den ble gitt.

### Tekststrenger

Det er ikke bare tall som kan lagres i variabler. I løpet av denne bloggserien kommer vi
til å se mye rart bli puttet i variabler, og vi begynner her med å se på tekststrenger.

Tekststrenger er like lite mystisk som de høres ut som: De er verdier som representerer tekst.

For å lage en tekststreng, skriver vi bare den aktuelle teksten mellom apostrofer.
Vi hopper rett på et eksempel i den interaktive konsollen:
```
>>> 'Hallo!'
'Hallo!'
>>>
```
Ikke så mye mystisk her; vi ba Python om å evaluere tekststrengen `'Hallo!'`, og den ble
evaluert til tekststrengen `'Hallo!'`.

Som du sikkert klarer å gjette, kanskje fordi jeg allerede har hintet til det et par ganger, kan vi også lagre
tekststrenger i variabler:
```
>>> a = 'Hei på deg!'
>>> b = 'a'
>>> c = a
>>> a
'Hei på deg!'
>>> b
'a'
>>> c
'Hei på deg!'
>>>
```

Denne koden gir rom for forvirring.
Her har vi lagret tekststrengen `'Hei på deg!'` i variabelen `a`,
tekststrengen `'a'` i variabelen `b` og variabelen `c` har vi
satt til å inneholde samme verdi som variabel `a`, som vi ser evalueres
til tekststrengen `'Hei på deg!'`. Her dukker "a" opp både som tekststreng og variabelnavn, men
vi skiller mellom dem ved at tekststrengen `'a'` skrives mellom apostrofer.
Dette skillet
er viktig, ettersom `a` og `'a'` evalueres til helt forskjellige verdier i dette tilfellet,
og på generell basis.

Hver gang du vil lage en tekststreng, må du altså skrive teksten mellom to apostrofer, ellers
vil Python prøve å tolke det som variabelnavn.

Vi kan sette sammen to tekststrenger ved å bruke plusstegn `+`. I det følgende eksempelet
viser vi også at vi kan lage tekststrenger ved å bruke anførselstegn (`""`) og at
vi kan bruke bakoverskråstrek foran en apostrof (eller et anførselstegn) for å si at den ikke markerer
slutten på strengen.
```
>>> en_streng = "siden oppskåret brød"
>>> en_streng_til = "Du er det beste som har skjedd meg "
>>> en_streng_til + en_streng
'Du er det beste som har skjedd meg siden oppskåret brød`
```

Legg merke til at resultatstrengen bruker apostrofer og ikke anførselstegn. Dette er regnet som standard
i Python, og denne bloggen kommer i størst mulig grad til å bruke apostrofer for strenger. Du kan selv bruke
hvilket av de to alternativene du vil, men det er lurt å være konsekvent. En siste ting: En streng som åpnes
med en apostrof må lukkes med en apostrof, og omvendt.

### Datatyper
I programmeringssammenheng er tall og tekststrenger to helt forskjellige ting. Formelt sett
sier vi at de har forskjellige <i>datatyper</i>. Vi har sett at plussoperasjonen kan brukes
både for tall - for å legge sammen verdien av tallene - og på tekststrenger, for å sette sammen
to tekststrenger. Hva skjer om vi prøver å sette sammen et tall og en tekststreng?

```
>>> et_tall = 7
>>> en_streng = ' små dverger'
>>> et_tall + en_streng
Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    et_tall + en_streng
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>>
```
Igjen er Python veldig tydelig på at noe er galt! Den siste linjen gir oss kjernen i
problemet: `TypeError: unsupported operand type(s) for +: 'int' and 'str'`. Den
sier rett og slett at variabelen `et_tall` er av typen heltall (`int`, som står for
integer, som betyr heltall), og at `en_streng` er av typen streng (`str`, engelsk <i>string</i>)
og at operatoren `+` ikke er støttet for disse datatypene.

På sett og vis burde kanskje Python vite at vi ville sette sammen tallet og tekststrengen vår til
en ny tekststreng, men designerne av Python har altså valgt å gi en feilmelding i stedet.
Dette er et mønster som ofte gjentar seg i programmering: Designerne av språket vil for enhver pris
prøve å unngå å <i>gjette</i> seg til hva programmereren mener dersom det er uklart, og vil heller gi
en feilmelding. Dette kan høres rart ut, men for en programmerer er det mindre irriterende å
få en tydelig feilmelding, enn å få et program som oppfører seg rart uten noen god pekepinn på hvorfor.

Noen språk (f. eks. Java) tillater å sette sammen en tekststreng og et tall direkte, så det
er definitivt diskuterbart om Python gjør det mest logiske i dette tilfellet.

Uansett, nå har det seg slik at vi <i>vil</i> sette sammen et tall og en tekststreng, så hvordan får vi gjort det?
Det enkleste er å konvertere tallet til en streng, og så utføre operasjonen over. For å konvertere et tall
(eller andre datatyper) til en streng, kan vi bruke `str()`-operatoren:

```
>>> tall_som_streng = str(et_tall)
>>> tall_som_streng + en_streng
'7 små dverger'
```

Og da fungerer det! Vi kunne også skrevet `str(et_tall) + en_streng` direkte.
Her er `str()` det vi kaller en <i>funksjon</i>, som er noe vi skal se nærmere på senere.
Vær obs på at `str()` ikke <i>endrer</i> verdien i variabelen `et_tall`. Etter operasjonen
over vil fortsatt `et_tall` inneholdet tallet `7`, mens `tall_som_streng` vil inneholde
<i>strengen</i> `'7'`.

Hovedlærdommen fra dette avsnittet, er at hver verdi som ligger i en variabel har en datatype,
og datatypen bestemmer hvilke operasjoner vi kan utføre med variabelen. Det er altså
en viktig forskjell på f. eks. tallet `7` og strengen `'7'`!

### To typer tall

Du la kanskje merke til at jeg skrev <i>heltall</i> i avsnittet over, og ikke bare <i>tall</i>? Det er fordi
det er to datatyper i Python som representerer tall:

Den første er heltall, eller `int`, som vi så over. Verdier av typen `int` representerer
altså et helt tall, som f.eks. 0, 1, 237 og også negative heltall som f. eks. -13. Men heltall omfatter
ikke <i>desimaltall</i>, som f. eks. 0,1 eller -21,3.

For å representere desimaltall, må vi bruke datatypen <b>flyttall</b>, i Python `float` (engelsk: <i>floating point number</i>).
Python tolker automatisk et tall som et flyttall om det inneholder et desimalmerke. På norsk er desimalmerket
komma ",", men Python bruker den engelske standarden, hvor desimalmerket er punktum ".".
Vi hadde et eksempel på flyttall tidligere i denne posten, men her er ett til:

```
>>> a = 0.3
>>> b = 10
>>> a * b
3.0
```
Her er `a` et flyttall og `b` et heltall. Når Python regner ut en operasjon som innebærer
både flyttall og heltall, blir svaret alltid et flyttall. Dette kan vi se over utifra at svaret fra
regnestykket `a * b` skrives med et desimaltegn, selv om det er et helt tall. I tillegg vil svaret fra et divisjonsstykke
mellom to heltall alltid være et flyttall (se eksempelet under).

Hvis du noen gang blir forvirret og ikke vet hvilken datatype variabelen din har, kan du
bruke `type()`-funksjonen for å finne typen, f. eks.:

```
>>> a = 1
>>> b = 2
>>> c = a / b
>>> d = 'hallo'
>>> type(a)
<class 'int'>
>>> type(b)
<class 'int'>
>>> type(c)
<class 'float'>
>>> type(d)
<class 'str'>
```
Det er fristende å spørre hvorfor vi ikke kan bruke flyttall i stedet for heltall i alle tilfeller,
ettersom flyttall tilsynelatende kan gjøre
alt det heltall kan gjøre, i tillegg til å lagre desimaltall. Det bør man ikke gjøre, først og fremst
fordi flyttall har begrenset <i>presisjon</i>. La oss se hva det betyr:
```
>>> 0.1 * 0.1
0.010000000000000002
```
Som et tallkyndig menneske kan se, burde svaret være `0.01`, men Python ser ut til å ha lagt på
ørlite ekstra på svaret. Dette er ikke Python sin skyld, men en konsekvens av hvordan tall representeres
på datamaskinen. Svar fra flyttallsoperasjoner bør ikke behandles som nøyaktige, bare omtrentlige.

En annen grunn til å være forsiktig med bruk av flyttall, er at flyttall bare husker et visst antall siffer.
Dersom tallene du har er veldig store, vil ikke flyttallene være i stand til å representere små endringer i
tallene, for eksempel:

```
>>> 1e16 + 1
1e+16
```
Her betyr `1e16` et 1-tall med 16 nuller bak, tolket som flyttall.
Det er altså et veldig stort tall! Det er faktisk så stort
at datamaskinen bare husker på de første sifrene, og har ikke noe siffer som holder rede på hva som står på
enerplassen, og derfor ignorerer at 1-tallet legges til, slik at svaret blir `1e16` igjen.
Dette er en litt forenklet forklaring,
ettersom datamaskinen ikke direkte representerer hver tallposisjon i vårt titallssystem,
men bruker totallssystemet i stedet. Forklaringen gir likevel riktig intuisjon. Hadde vi brukt
et stort heltall i stedet, ville vi fått nøyaktig svar tilbake.

### Oppsummering
Det var en munnfull med informasjon! I løpet av denne posten har vi lært om den interaktive Python-konsollen,
variabler og datatyper, samt tatt et dypdykk i forskjellen på heltall og flyttall.
Python-konsollen kan være nyttig til å prøve ut ting, for
å utføre demonstrasjoner og tester, og du kan bruke den til å utforske alt vi kommer
til å lære framover.

Vi kommer ikke til å eksplisitt bruke konsollen mye mer i denne bloggserien, for i neste post skal vi
nemlig begynne å
skrive programmer. Vi skal lære å ta imot innputt fra brukeren, og gi utputt avhengig
av hva brukeren skrev. Det er duket for brukerinteraksjon og betingelser!
