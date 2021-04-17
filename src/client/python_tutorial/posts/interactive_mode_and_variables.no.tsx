import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const InteractiveVariablesNo = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    I denne posten skal vi gå gjennom det kanskje mest fundamentale konseptet i Python
    og mange andre programmeringsspråk: Variabler. 
    <Db />
    Men før vi begir oss ut på <i>den</i> reisen, 
    skal vi først lære om <i>interaktiv</i> Python, som vi skal bruke aktivt for å forstå
    variabler etterpå.

    <h2>Den interaktive Python-konsollen</h2>
    
    I forrige post lagde vi en fil, skrev kode i filen, og kjørte filen som et program. Det
    er stort sett slik vi kommer til å jobbe med Python, men en alternativ
    måte å bruke Python på, er i <i>interaktiv modus</i>.
    <Db />
    I dét du åpner opp IDLE, får du opp et vindu med litt tekst, som kan se ut omtrent som dette:
    
    <CodeBlock>{`Python 3.9.2 (default, Apr 10 2021, 20:34:18) 
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license()" for more information.
>>> `}</CodeBlock>
    Nøyaktig hvordan teksten ser ut, vil avhenge av operativsystem og Python-versjon du
    bruker. På bunnen ser du <Ic>{`>>>`}</Ic>, hvor du kan skrive tekst. 
    Vi kaller dette vinduet <i>den interaktive 
    Python-konsollen </i>, og her kan vi skrive Python!
    <Db />
    Python er et <i>tolket</i> språk. Nøyaktig hva det innebærer, skal
    se nærmere på i en senere post, men ett viktig aspekt vi får nytte av nå, er at Python leses linje for linje
    under kjøring. I den interaktive konsollen kan vi på samme måte skrive inn én og én linje,
    og få Python til å umiddelbart utføre det vi skriver.
    <Db />
    For å se hvordan dette fungerer, la oss skrive inn linjen som var programmet vi lagde
    i forrige post:
    <CodeBlock>{`print('Hallo, verden!')`}</CodeBlock>
    Etter å ha skrevet inn denne linjen i den interaktive konsollen, trykk linjeskift/enter. 
    Du skal nå se noe á la:
    <CodeBlock>{`>>> print('Hallo, verden!')
Hallo, verden!
>>>`}</CodeBlock>
    Den interaktive konsollen leste inn linjen, kjørte den, og vi ser resultatet av kjøringen
    med én gang! Konsollen har til slutt 
    skrevet <Ic>{`>>>`}</Ic> på skjermen igjen, som betyr at den venter på neste linje. 
    <Db />
    Du kan skrive inn samme linje på nytt for å få samme resultat, men det er grenser for hvor mange ganger 
    det er gøy å gjøre i ett strekk. La oss lære noe nytt vi kan skrive i konsollen!

    <h2>Variabler</h2>
    I programmeringssammenheng er <i>variabler</i> navn vi gir til verdier. Verdiene 
    kan være f.eks. tall, men kan også være tekst eller lister, for å nevne noe. Ideen er at 
    vi <i>lagrer</i> verdier
    i variabler, og bruker variabelnavnene når vi refererer til verdiene i ettertid.
    <Db />
    La oss se på noen eksempler, før jeg rekker å forvirre deg for mye. Skriv <Ic>a = 1</Ic> inn i konsollen.
    Denne linjen ber Python om å legge verdien <Ic>1</Ic> inn i variabelen <Ic>a</Ic>.
    <CodeBlock>
        {`>>> a = 1
>>>`}
    </CodeBlock>
    Dette er den generelle formen for å sette en variabel til en verdi: <Ic>{`<variabelnavn> = <verdi>`}</Ic>.
    Tilsynelatende har ingenting skjedd.
    Hvis vi nå skriver <Ic>a</Ic> i konsollen skal vi få noe lignende:
    <CodeBlock>
        {`>>> a
1
>>>`}
    </CodeBlock>
    Det vi i praksis gjør her er å be Python om å gi oss verdien av <Ic>a</Ic>, og Python svarer på linja under at
    verdien er satt til 1, akkurat som vi sa at den skulle gjøre med forrige innputt-linje. Til sammenligning,
    prøv å skrive <Ic>b</Ic> i konsollen:
    <CodeBlock>
        {`>>> b
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    b
NameError: name 'b' is not defined
>>> `}
    </CodeBlock>
    Ok, her skjønner vi fort at noe er galt! Den siste linja forteller oss hva som er 
    hovedproblemet: <Ic>b</Ic> er ikke definert. Det gir mening at Python klager, 
    ettersom vi har bedt om å få verdien
    til <Ic>b</Ic>, men vi har aldri sagt hva verdien til <Ic>b</Ic> er!
    <Db />
    Vi velger variabelnavn selv. De kan inneholde bokstaver og tall, pluss understrek (<Ic>_</Ic>) og
    de kan være så lange vi vil, men de
    kan aldri <i>starte</i> på et tall, og kan ikke inneholde mellomrom. 
    Dermed er både <Ic>a</Ic>, <Ic>tall</Ic> og <Ic>GymnaslærerPedersen_69</Ic> gyldige
    variabelnavn, mens <Ic>5tall</Ic> og <Ic>to ord</Ic> er ugyldige.
    <Db />
    Vi står fritt til å lage variabelnavn som vi vil, men i praksis er det lurt å velge navn
    som beskriver hva variabelen inneholder. 

    <Db />
    Nytt eksperiment: Prøv å skrive <Ic>1 + 1</Ic> i konsollen:
    <CodeBlock>
        {`>>> 1 + 1
2
>>> `}
    </CodeBlock>
    Her ser vi at Python automatisk regner regnestykker vi gir til den. På sett og vis
    er Python en forvokst kalkulator - noe som er veldig nyttig i mange sammenhenger!
    Her begynner vi å se noe av styrken til Python. La oss skrive inn <Ic>a + 1</Ic>:
    <CodeBlock>
        {`>>> a + 1
2
>>>`}
    </CodeBlock>
    Vi definerte tidligere <Ic>a</Ic> til å være 1,
    og Python substituerer inn tallet 1 i stedet for <Ic>a</Ic> for å regne ut uttrykket. 
    Dette fungerer så fremt du ikke har restartet konsollen siden du definerte <Ic>a</Ic>. 
    Hvis du lukker konsollen, forsvinner alle variablene du har definert der.
    <Db />
    Vi har lært to ting: Python fungerer flott som en kalkulator, og lar deg sette navn på verdier
    som du kan bruke alle steder der du ville brukt verdiene selv!
    Vi kan gjøre litt flere operasjoner for å vise fleksibiliteten til Python:
    <CodeBlock>
    {`>>> a = 1
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
`}</CodeBlock>
    Her ser vi <Ic>*</Ic>, som er gangetegnet vi bruker i Python og stort sett alle andre programmeringsspråk. 
    Matematiske operasjoner følger vanlige prioritetsregler. Dvs. i uttrykket for <Ic>d</Ic> over, vil 
    <Ic>c * a</Ic> regnes ut før <Ic>b</Ic> legges til.
    <Db />
    Man kan også gi variabler nye verdier:
    <CodeBlock>{`
>>> a = 1
>>> a
1
>>> a = 2
>>> a
2
>>>`}
    </CodeBlock>
    Når du redefinerer variabler sånn som dette, vil variablen altså inneholde 
    den siste verdien den ble gitt.

    <h2>Tekststrenger</h2>

    Det er ikke bare tall som kan lagres i variabler. I løpet av denne bloggserien kommer vi
    til å se mye rart bli puttet i variabler, og vi begynner her med å se på tekststrenger.
    <Db />
    Tekststrenger er like lite mystisk som de høres ut som: De er verdier som representerer tekst.
    <Db />
    For å lage en tekststreng, skriver vi bare den aktuelle teksten mellom apostrofer. 
    Vi hopper rett på et eksempel i den interaktive konsollen:

    <CodeBlock>
        {`>>> 'Hallo!'
'Hallo!'
>>>`}
</CodeBlock>
    Ikke så mye mystisk her; vi ba Python om å evaluere tekststrengen <Ic>'Hallo!'</Ic>, og den ble
    evaluert til tekststrengen <Ic>'Hallo!'</Ic>. 
    <Db />
    Som du sikkert klarer å gjette, kan vi lagre 
    tekststrenger i variabler:
    <CodeBlock>
        {`>>> a = 'Hei på deg!'
>>> b = 'a'
>>> c = a
>>> a
'Hei på deg!'
>>> b
'a'
>>> c
'Hei på deg!'
>>>`}
    </CodeBlock>
    
    Denne koden gir rom for forvirring.
    Her har vi lagret tekststrengen <Ic>'Hei på deg!'</Ic> i variabelen <Ic>a</Ic>, 
    tekststrengen <Ic>'a'</Ic> i variabelen <Ic>b</Ic> og variabelen <Ic>c</Ic> har vi
    satt til å inneholde samme verdi som variabel <Ic>a</Ic>, som vi ser evalueres 
    til tekststrengen <Ic>'Hei på deg!'</Ic>. Her dukker "a" opp både som tekststreng og variabelnavn, men
    vi skiller mellom dem ved at tekststrengen <Ic>'a'</Ic> skrives mellom apostrofer.
    Dette skillet 
    er viktig, ettersom <Ic>a</Ic> og <Ic>'a'</Ic> evalueres til helt forskjellige verdier i dette tilfellet.
    <Db />
    Hver gang du vil lage en tekststreng, må du altså skrive teksten mellom to apostrofer, ellers
    vil Python prøve å tolke det som variabelnavn.
    <Db />
    Vi kan sette sammen to tekststrenger ved å bruke pluss-tegn <Ic>+</Ic>. I det følgende eksempelet
    viser vi også at vi kan lage tekststrenger ved å bruke anførselstegn (<Ic>""</Ic>) og at
    vi kan bruke bakoverskråstrek foran en apostrof (eller et anførselstegn) for å si at den ikke markerer
    slutten på strengen.
    <CodeBlock>
    {`>>> en_streng = "rens fest"
>>> en_streng_til = "Politiet sa \\"hadet bra\\" på tape"
>>> en_streng_til + en_streng
'Politiet sa "hadet bra" på taperens fest'`}
    </CodeBlock>

    Legg merke til at resultatstrengen bruker apostrofer og ikke anførselstegn. Dette er regnet som standard
    i Python, og denne bloggen kommer i størst mulig grad til å bruke apostrofer for strenger. Du kan selv bruke
    hvilket av de to alternativene du vil, men det er lurt å være konsekvent. En siste ting: En streng som åpnes
    med en apostrof må lukkes med en apostrof, og omvendt.

    <h2>Datatyper</h2>
    I programmeringssammenheng er tall og tekststrenger to helt forskjellige ting. Formelt sett 
    sier vi at de har forskjellige <i>datatyper</i>. Vi har sett at pluss-operasjonen kan brukes
    både for tall - for å legge sammen verdien av tallene - og på tekststrenger, for å sette sammen
    to tekststrenger. Hva skjer om vi prøver å sette sammen et tall og en tekststreng?

    <CodeBlock>
        {`>>> et_tall = 7
>>> en_streng = ' små dverger'
>>> et_tall + en_streng
Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    et_tall + en_streng
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>> `}
    </CodeBlock>
    Igjen er Python veldig tydelig på at noe er galt! Den siste linjen gir oss kjernen i 
    problemet: <Ic>TypeError: unsupported operand type(s) for +: 'int' and 'str'</Ic>. Den 
    sier rett og slett at variabelen <Ic>et_tall</Ic> er av typen heltall (<Ic>int</Ic>, som står for 
    integer, som betyr heltall), og at <Ic>en_streng</Ic> er av typen streng (<Ic>str</Ic>, engelsk <i>string</i>)
    og at operatoren <Ic>+</Ic> ikke er støttet for disse datatypene.
    <Db />
    På sett og vis burde kanskje Python vite at vi ville sette sammen tallet og tekststrengen vår til
    en ny tekststreng, men designerne av Python har altså valgt å gi en feilmelding i stedet.
    Dette er et mønster som ofte gjentar seg i programmering: Designerne av språket vil for enhver pris
    prøve å unngå å <i>gjette</i> seg til hva programmereren mener dersom det er uklart, og vil heller gi
    en feilmelding. Dette kan høres rart ut, men for en programmerer er det mindre irriterende å
    få en tydelig feilmelding, enn å få et program som oppfører seg rart uten noen god pekepinn på hvorfor.
    <Db />
    Noen språk (f. eks. Java) tillater å sette sammen en tekststreng og et tall direkte, så det
    er definitivt diskuterbart om Python gjør det mest logiske i dette tilfellet.
    <Db />
    Uansett, nå har det seg slik at vi <i>vil</i> sette sammen et tall og en tekststreng, så hvordan får vi gjort det?
    Det enkleste er å konvertere tallet til en streng, og så utføre operasjonen over. For å konvertere et tall
    (eller andre datatyper) til en streng, kan vi bruke <Ic>str()</Ic>-operatoren:
    <CodeBlock>
        {`>>> tall_som_streng = str(et_tall)
>>> tall_som_streng + en_streng
'7 små dverger'`}
    </CodeBlock>
    
    Og da fungerer det! Vi kunne også skrevet <Ic>str(et_tall) + en_streng</Ic> direkte.
    Her er <Ic>str()</Ic> det vi kaller en <i>funksjon</i>, som er noe vi skal se nærmere på senere.
    Hovedlærdommen fra dette avsnittet, er at hver verdi som ligger i en variabel har en datatype,
    og datatypen bestemmer hvilke operasjoner vi kan utføre med variabelen. Det er altså
    en viktig forskjell på f. eks. tallet <Ic>7</Ic> og strengen <Ic>'7'</Ic>!

    <h2>To typer tall</h2>
    Du la kanskje merke til at jeg skrev <i>heltall</i> i avsnittet over, og ikke bare <i>tall</i>? Det er fordi
    det er to datatyper i Python som representerer tall:
    <Db /> 
    Den første er heltall, eller <Ic>int</Ic>, som vi så over. Verdier av typen <Ic>int</Ic> representerer
    altså et helt tall, som f.eks. 0, 1, 237 og også negative heltall som f. eks. -13. Men heltall omfatter 
    ikke <i>desimaltall</i>, som f. eks. 0,1 eller -21,3.
    <Db />
    For å representere desimaltall, må vi bruke datatypen <b>flyttall</b>, i Python <Ic>float</Ic> (engelsk: <i>floating point number</i>).
    Python tolker automatisk et tall som et flyttall om det inneholder et desimalmerke. På norsk er desimalmerket
    komma ",", men Python bruker den engelske standarden, hvor desimalmerket er punktum ".".
    Vi hadde et eksempel på flyttall tidligere i denne posten, men her er ett til:
    <CodeBlock>
        {`>>> a = 0.3
>>> b = 10
>>> a * b
3.0`}
    </CodeBlock>
    Her er <Ic>a</Ic> et flyttall og <Ic>b</Ic> et heltall. Når Python regner ut en operasjon som innebærer
    både flyttall og heltall, blir svaret alltid et flyttall. Dette kan vi se over utifra at svaret fra 
    regnestykket <Ic>a * b</Ic> skrives med et desimaltegn, selv om det er et helt tall. I tillegg vil svaret fra et divisjonsstykke
    mellom to heltall alltid være et flyttall (se eksempelet under).

    <Db />
    Hvis du noen gang blir forvirret og ikke vet hvilken datatype variabelen din har, kan du bruke  <Ic>type()</Ic>-funksjonen for å finne typen, f. eks.:
    <CodeBlock>
        {`>>> a = 1
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
<class 'str'>`}
    </CodeBlock>
    Det er fristende å spørre hvorfor vi ikke kan bruke flyttall i stedet for heltall i alle tilfeller, 
    ettersom flyttall tilsynelatende kan gjøre
    alt det heltall kan gjøre, i tillegg til å lagre desimaltall. Det bør man ikke gjøre, først og fremst
    fordi flyttall har begrenset <i>presisjon</i>. La oss se hva det betyr:
    <CodeBlock>
        {`>>> 0.1 * 0.1
0.010000000000000002`}
    </CodeBlock>
    Som et tallkyndig menneske kan se, burde svaret være <Ic>0.01</Ic>, men Python ser ut til å ha lagt på
    ørlite ekstra på svaret. Dette er ikke Python sin skyld, men en konsekvens av hvordan tall representeres
    på datamaskinen. Svar fra flyttallsoperasjoner bør ikke behandles som nøyaktige, bare omtrentlige.
    En annen grunn til å være forsiktig med bruk av flyttall, er at flyttall bare husker et visst antall siffer. 
    Dersom tallene du har er veldig store, vil ikke flyttallene være i stand til å representere små endringer i 
    tallene, for eksempel:

    <CodeBlock>{`>>> 1e16 + 1
1e+16`}</CodeBlock>
    Her betyr <Ic>1e16</Ic> et ett-tall med 16 nuller bak, tolket som flyttall.
    Det er altså et veldig stort tall! Det er faktisk så stort
    at datamaskinen bare husker på de første sifrene, og har ikke noe siffer som holder rede på hva som står på
    ener-plassen, og derfor ignorerer at ett-tallet legges til, slik at svaret blir <Ic>1e16</Ic> igjen. 
    Dette er en litt forenklet forklaring,
    ettersom datamaskinen ikke direkte representerer hver tallposisjon i vårt titallssystem,
    men bruker totallssystemet i stedet. Forrklaringen gir likevel riktig intuisjon. Hadde vi brukt 
    et stort heltall i stedet, ville vi fått nøyaktig svar tilbake.
    
    <h2>Oppsummering</h2>
    Det var en munnfull med informasjon! I løpet av denne posten har vi lært om den interaktive Python-konsollen,
    variabler og datatyper, samt tatt et dypdykk i forskjellen på heltall og flyttall. 
    Python-konsollen kan være nyttig til å prøve ut ting i enkelte tilfeller, for 
    å utføre demonstrasjoner og tester, og du kan bruke den til å utforske alt vi kommer
    til å lære framover.
    <Db />
    Vi kommer ikke til å eksplisitt bruke konsollen mye mer i denne bloggserien, for i neste post skal vi 
    nemlig begynne å
    skrive programmer. Vi skal lære å ta imot innputt fra brukeren, og gi utputt avhengig
    av hva brukeren skrev. Det er duket for brukerinteraksjon og betingelser!
    </>
);

export default InteractiveVariablesNo;