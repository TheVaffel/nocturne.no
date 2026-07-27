+++
date = '2021-04-21'
draft = true
title = 'Brukerinteraksjon og betingelser'
weight = 40
+++


I denne posten tar vi for oss hvordan vi kan interagere med en bruker
av programmet vårt. Interaksjonen vil i dette tilfellet kun være tekstbasert:
Programmet skriver noe på skjermen, og brukeren skriver noe tilbake.
Som en del av gjennomgangen av brukerinteraksjon, skal vi også gå gjennom <i>betingelser</i>,
som er et viktig konsept i programmering generelt.

### `print()` og `input()`

Som nevnt er målet vårt å lage et program som skriver tekst <i>til</i> brukeren, og som
tar imot tekst <i>fra</i> brukeren. Den første delen har vi sett tidligere, nemlig da vi skrev
"Hallo, verden!"-programmet vårt. La oss ta en liten titt på det programmet igjen:

```python
print('Hallo, verden!')
```

Etter å ha lest forrige post, drar du kanskje kjensel på `'Hallo, verden!'` som
en streng. Strengen står inne i parantesene til `print()`. Her er `print()` en funksjon.
Vi kommer til å gå nærmere inn på hvordan funksjoner fungerer i nær framtid, men det du trenger
å vite nå, er at vi kan skrive en hvilken som helst verdi mellom parentesene til `print()`-funksjonen,
og Python vil skrive verdien til skjermen.

Da vi brukte den interaktive konsollen i forrige kapittel,
kunne vi skrive en verdi eller variabel alene på en linje for å vise verdien på skjermen. I
kjørende programmer vil ikke dette fungere, og vi må bruke `print()`-funksjonen for å se verdiene.

Hva med å ta imot informasjon fra brukeren? For dét formålet har vi en annen funksjon: `input()`.
Når Python leser gjennom og kjører et program, og den kommer til en linje med `input()`-funksjonen,
vil den stoppe opp og vente på at brukeren skal skrive noe. Idet brukeren har skrevet noe og trykket linjeskift,
vil `input()` evalueres til tekststrengen som brukeren skrev, og Python fortsetter å kjøre programmet.

Det vil si at for å lagre innputteksten i en variabel, trenger vi bare å skrive

```python
tekst_fra_brukeren = input()
```
og deretter gjøre hva vi vil med variabelen `tekst_fra_brukeren` som er av typen streng.

La oss se hvordan vi kan bruke `print()` og `input()` i et program:

```python
print('Skriv noe!')
tekst = input()
print(tekst)
```

Her ber vi brukeren skrive noe, legger innputteksten fra brukeren inn i variabelen `tekst`, og
skriver den deretter rett tilbake til brukeren.
Lag en ny fil, legg inn koden over, lagre under et fornuftig navn, og kjør!
Resultatet blir noe á la dette:
```
Skriv noe!
Jeg er en potet
Jeg er en potet
```

Her er den andre linjen brukerens sofistikerte innputt, mens den siste linjen er
programmet som skriver innputtet tilbake, altså det som gjøres av `print()`-funksjonen i programmet over.

Vi kan være litt mer kreative og endre programmet over til å lage en liten hilsen til brukeren:

```python
print('Skriv navnet ditt!')
navn = input()
print('Hei, ' + navn + '!')
```

som gir en kjøring som ser f.eks. slik ut:
```
Skriv navnet ditt!
Dangfart Tønnesen
Hei, Dangfart Tønnesen!
```

Her har vi brukt pluss-operatoren for å sette sammen svarteksten direkte inne i `print()`-parantesene.

### Betingelser

Når vi snakker om  betingelser i programmeringssammenheng,
dreier det seg generelt om å kjøre et stykke kode
kun dersom en betingelse er oppfylt. I Python (og en del andre språk)
er den viktigste mekanismen for betingelser hvis-setninger (engelsk: <b>if-statements</b>).

En hvis-setning er på formen
```
if <betingelse>:
    <kode som skal kjøres hvis betingelse er oppfylt>
```

Det er flere ting å bite merke i her: En hvis-setning starter alltid med
ordet `if`, deretter følger en betingelse separert med mellomrom
fra ordet `if`. Vi skal forklare hvordan betingelser ser ut veldig snart.
Linjen avsluttes med et kolon ":".

Koden som skal kjøres hvis betingelsen
er oppfylt, kommer jeg til å referere til som hvis-blokken. Den kan
bestå av så mange linjer du vil, men minst én.
Hvis-blokken må <i>indenteres</i>, altså skrives med innrykk. Den letteste
måten å sette inn et innrykk på, er å trykke tab (tasten over Caps Lock til
venstre på tastaturet). Alternativt kan du sette inn to eller flere mellomrom.
Det er viktig at du er konsekvent på hvorvidt du bruker tab eller mellomrom, og
hvor mange mellomrom du eventuelt bruker,
ellers vil du få en feilmeldingssalve fra Python.

Hvis-blokken varer til vi kommer til en kodelinje der koden ikke lenger
er innrykket. Hvis betingelsen var oppfylt, og Python dermed kjørte hvis-blokken,
vil den fortsette å kjøre denne uinnrykkede koden rett etter at den er
ferdig med hvis-blokken. Dersom betingelsen ikke er oppfylt, kommer Python
til å ignorere hele
hvis-blokken og fortsette å kjøre kode fra den uinnrykkede linjen i stedet.

Så hvordan ser en betingelse ut? En typisk betingelse er å sjekke hvorvidt
to verdier er like. Vi kan sjekke om to verdier er like ved å
bruke `==`-operatoren: F.eks. `a == 0`. Denne betingelsen er
sann dersom variabelen `a` er `0`, og usann hvis `a` er hva
som helst annet (og koden krasjer hvis `a` ikke er definert).

Det kan være forvirring mellom `=` og `==` i starten, men
den første av de to brukes altså til å sette en variabel til en verdi, mens den
siste brukes for å sjekke om to verdier er like. Python vil være rask til å klage
hvis du blander bruken av disse to.

Et program som bruker en hvis-setning kan altså se slik ut:
```python
a = 1
if a == 1:
    print('a var lik 1!')
print('Programmet er ferdig, hadet!')
```

Kjører vi dette, får vi:

```
a var lik 1!
Programmet er ferdig, hadet!
```

Legg merke til at den siste `print()`-setningen er uten innrykk, og dermed
markerer at hvis-blokken er ferdig. Denne linjen vil kjøres uavhengig om `a`
er `1` eller ikke.

Dette er ikke et fryktelig spennende resultat, ettersom vi allerede
vet hva `a` er på forhånd.

Med dette kan vi lage et program som gir en betinget hilsen -
den hilser bare på en bestemt person:

```python
print('Skriv navnet ditt:')
navn = input()
if navn == 'Arne':
    print('Hei, Arne!')
```

I dette tilfellet vil programmet bare hilse på deg om du
sier du heter `Arne`. Hvis du prøver å skrive inn noe annet,
vil programmet avslutte uten å skrive ut noe mer. Vær også oppmerksom på at
du heller ikke kan skrive `arne` med små bokstaver. Likhetsoperatoren
krever at alle bokstavene matcher nøyaktig, og store og små bokstaver
regnes som forskjellige.

Det er litt uhøflig å avslutte programmet uten å si noe som helst, bare
fordi man ikke heter Arne, eller hva? Vi kan fikse dette med en annen
form av hvis-setningen:
```
if <betingelse>:
    <hvis-blokk>
elif <en annen betingelse>:
    <en ellers-hvis-blokk>
else:
    <en ellers-blokk>
```

Her har vi lagt til to nye blokker på hvis-setningen vår!
Den første, `elif`-blokken, kan du lese som "ellers, hvis",
som har sin egen betingelse.
Denne "ellers, hvis"-setningen vil bare bli evaluert hvis den
første betingelsen ikke var oppfylt. Ellers fungerer denne
setningen på samme måte som den første hvis-setningen: Den tilhørende
blokken er markert med innrykk og blir bare kjørt om den tilhørende
betingelsen er sann.

Vi kan ha så mange `elif`-blokker på rad som vi vil etter den første
hvis-blokken, inkludert null. Python kommer bare til å utføre koden i den første hvis-blokken
i rekken som har betingelsen sin oppfylt, resten blir hoppet over.

Den siste blokken er en `else`-blokk, som ikke har noen tilhørende
betingelse. `else`-blokken kjøres dersom ingen av de
foregående `if`- og `elif`-setningene
i rekken hadde betingelsene sine oppfylt. Det kan maksimalt være
én `else`-blokk i en slik rekke av `if`- og `elif`-blokker.
Av alle blokkene i en `if`-`elif`-`else`-rekke, er det kun
én som blir kjørt (og muligens ingen, dersom den ikke har noen `else`-blokk).

La oss gjøre programmet vårt over litt mer responsivt for brukere
som ikke heter Arne:

```python
print('Skriv navnet ditt:')
navn = input()
if navn == 'Arne':
    print('Hei, Arne!')
else:
    print('Du er ikke Arne, gå vekk!')
```
Flott, nå får brukeren en respons uavhengig av hva de heter. Legg merke til
at vi ikke har noen `elif`-blokker her, kun en `else`-blokk
som sørger for at vi printer noe i det tilfellet at betingelsen i den innledende hvis-setningen
ikke er oppfylt.

### Innputt som tall

Som nevnt over, vil `input()` returnere brukerens innputt som en tekststreng,
som gir mening med tanke på at det er tekst vi snakker om. Men hva om vi vil at brukeren skal
gi oss et tall, og vi vil utføre matematiske operasjoner med tallet? Vi kan ikke gjøre
matematikk med en tekststreng direkte, så vi må først konvertere strengen til et heltall:

På samme måte som vi brukte `str()` for å konvertere et tall til en streng i forrige post,
kan vi bruke `int()` for å konvertere en streng til et heltall. Vi kunne
brukt float() for å konvertere strengen til et flyttall i stedet, men vi kommer
bare til å trenge heltall her. For eksempel:

```python
print('Hvor gammel er du?')
alder_som_streng = input()
alder_som_tall = int(alder_som_streng)
alder_om_to_år = alder_som_tall + 2
print('Om to år er du ' + str(alder_om_to_år) + ' gammel!')
```

Kjører vi dette eksempelet, får vi f.eks.
```
Hvor gammel er du?
67
Om to år er du 69 gammel!`
```

I dette programmet trenger vi å legge til 2 på tallet som brukeren skriver inn
for å kunne informere dem om hvor gamle de er om to år.
For å få til dét, må vi sørge for at vi jobber med et tall ved å konvertere
innputtstrengen til et heltall. Etter å ha regnet ut den nye alderen, konverterer vi
den tilbake til en streng for å sette den inn i utputtstrengen.

Dersom strengen du gir til `int()`-funksjonen ikke inneholder et tall, vil Python
gi en feilmelding. Vi skal se på hvordan vi kan håndtere slike feil og forhindre at programmet krasjer mot
slutten av denne bloggserien.

En liten digresjon: Vi kunne skrevet hele programmet over mye kortere slik:

```python
print('Hvor gammel er du?')
print('Om to år er du ' + str(int(input()) + 2) + ' gammel!')
```
Hvis du vil ha en utfordring, kan du se om du kan forstå hvordan dette programmet fungerer!

### Forskjellige måter å lage betingelser

Helt til sist i denne posten, skal vi se på flere måter å danne betingelser på. Vi har
hittil bare brukt `==`-operatoren for å sammenligne to strenger, men vi har flere verktøy i skuffen:
<ul>
<li>`==` - gjør betingelsen sann om verdiene på venstre og høyre side av operatoren er like</li>
<li>`!=` - gjør betingelsen sann om verdiene er ulike</li>
<li>`>` - sann hvis venstre side er <i>større</i> enn høyre</li>
<li>`<` - sann hvis venstre side er <i>mindre</i> enn høyre</li>
<li>`>=` og `<=` - fungerer som større enn- og mindre enn-operatorene over,
    men er også sanne dersom verdiene er like </li>
</ul>

Operatorene som sjekker verdienes størrelser i forhold til hverandre, vil vi først og fremst
bruke for å sammenligne tall.

La oss lage et program som skriver ut en hemmelighet hvis brukeren er gammel nok:

```python
print('Hvor gammel er du?')

alder = int(input())

if alder >= 18:
    print('Du er gammel nok! Hemmeligheten er "https://www.youtube.com/watch?v=dQw4w9WgXcQ"')
else:
    print('Du er ikke gammel nok, ha deg vekk!')
```

Du kan sjekke selv at programmet kun gir brukeren hemmeligheten hvis brukeren er 18 år eller eldre (eller en løgner).

Hva om vi nå har lyst til å passe på at hemmeligheten bare gis til personer over 18 år ved navn Arne?
Det er flere operatorer for å sette sammen flere betingelser til én betingelse:
<ul>
<li>`and` - (og-operator) evalueres til sann kun dersom betingelsene før og etter operatoren er sanne</li>
<li>`or` - (eller-operator) evalueres til sann hvis minst én av betingelsene er sann</li>
<li>`not` - (ikke-operator) evalueres til sann hvis betingelsen etter er usann, og omvendt</li>
</ul>

Med dette kan vi skrive om programmet over:

```python
print('Hvor gammel er du?')
alder = int(input())

print('Hva heter du?')
navn = input()

if alder >= 18 and navn == 'Arne':
    print('Du er gammel nok, og heter Arne! Hemmeligheten er "https://www.youtube.com/watch?v=dQw4w9WgXcQ"')
elif not navn == 'Arne':
    print('Du heter ikke Arne, ha deg vekk!')
else:
    print('Hei Arne, du kan komme tilbake når du er gammel nok')
```

Her er det en del som skjer:

Først tar vi inn alderen som heltall, som tidligere. Deretter tar vi inn navnet
som en tekststreng.
Vi har nå en serie med tre hvis- og ellers-blokker. Den første kjøres
hvis <i>både</i> navnet er `'Arne'`, og alderen er minst 18. Dersom begge disse er sanne,
gir vi brukeren hemmeligheten.
Dersom ett av disse betingelsene ikke er oppfylt,
er betingelsen i den første hvis-setningen usann, og
Python fortsetter ved å sjekke ellers-hvis-setningen.

Ellers-hvis-setningen er sann hvis navnet <i>ikke</i> er lik `'Arne'`. Her kunne vi
brukt `!=`-operatoren også.
Hvis navnet ikke er Arne, ber programmet brukeren om å ha seg vekk.
Ellers hopper Python videre til siste blokk. Denne er en `else`-setning,
og vil kjøres kun dersom ingen av betingelsene i de foregående hvis-setningene var sanne.
Hvis ingen av de foregående betingelsene var sanne, må brukeren hete Arne og være under 18 år gammel,
og meldingen i `print()`-setningen reflekterer dette.

Resultatet er altså et program som oppfører seg høflig så lenge du heter Arne, og til og med gir deg
en hemmelighet dersom du både heter Arne og er gammel nok.

Om du er usikker på nøyaktig hvordan koden over fungerer, kan du prøve å kjøre den med forskjellige
kombinasjoner av navn og alder, for å se hvordan programmet oppfører seg.

### Oppsummering

Gratulerer, du har lest deg gjennom nok en post!
Vi kommer til å støte på hvis-setninger og brukerinteraksjon i stort sett alle postene framover, så
dette er noe som er nyttig å ha en god forståelse av, både for videre lesing i denne bloggen, men også
for programmering generelt.


Nå som du har fått en vag følelse av hva programmering er, kan vi ta et skritt tilbake og snakke om programmering i praksis. Det er dette som er temaet for neste post. Før du tar fatt på den, håper vi du tar deg tid til å prøve deg på i hvertfall <i>noen</i> av oppgavene under for å stille best mulig forberedt.

### Oppgaver

Nå som vi har lært litt forskjellige programmeringskonsepter, kan du allerede
begynne å lage små programmer på egen hånd! Disse oppgavene er i aller høyeste grad
frivillige, men er ment til å hjelpe deg med å ta i bruk konseptene vi lærer om i egne prosjekter.

Programmering er en treningssak, så dersom du er sikker på at dette er noe du vil satse på
framover, vil jeg absolutt anbefale deg å prøve deg på oppgavene, eller komme opp med
egne ideer til programmer og sette dem ut i live.

1. Lag et program som regner ut hvor mange år brukeren fyller i år etter at brukeren har skrevet inn fødselsåret sitt.

2. Lag et program som skriver ut forskjellige meldinger hvis brukeren oppgir navnene Per, Pål eller Espen Askeladd, eller en en "standard"-melding dersom brukeren skriver hva som helst annet.

3. Lag et program som regner ut BMI (Body Mass Index) for en bruker, utifra høyde og vekt som brukeren oppgir. Formelen for BMI er `vekt / (høyde * høyde)`. Obs: Høyden her er oppgitt i meter, så pass på at du bruker flyttall for å lagre høyden! Vekt er oppgitt i kg. Sjekk at programmet regner ut at en person på 1,80 meter med en vekt på 80kg har en BMI på ca 24,7. Om du er eventyrlysten, kan du i tillegg skrive en kort melding til skjerm om helsetilstanden til brukeren basert på BMIen: BMI mellom 18,5 og 25 regnes som normalt, lavere kan tyde på at brukeren er undervektig, mens høyere kan tyde på overvekt.
