import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const InteractiveVariablesNo = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    I denne posten skal vi gå gjennom det kanskje mest fundamentale konseptet i Python
    og mange andre programmeringsspråk: Variabler. Men før vi begir oss ut på den reisen, 
    skal vi først lære om <i>interaktiv</i> Python, som vi skal bruke aktivt for å forstå
    variabler senere.

    <h2>Den interaktive Python-konsollen</h2>
    
    I forrige post lagde vi en fil, skrev kode i filen, og kjørte filen som et program. Det
    er stort sett slik vi kommer til å jobbe med Python, men en alternativ
    måte å bruke Python på, er i <i>interaktiv modus</i>.
    <Db />
    I dét du åpner opp IDLE, får du et vindu med litt tekst, som kan se ut omtrent som dette:
    
    <CodeBlock>{`Python 3.9.2 (default, Apr 10 2021, 20:34:18) 
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license()" for more information.
>>> `}</CodeBlock>
    Nøyaktig hvordan teksten ser ut, vil avhenge av operativsystem og Python-versjon du
    bruker. På bunnen ser du <Ic>{`>>>`}</Ic>. Vi kaller dette <i>den interaktive 
    konsollen </i>, og her kan vi skrive Python!
    <Db />
    Python er et <i>tolket</i> språk. Dette har flere forskjellige konsekvenser, som vi skal
    se nærmere på i en senere post, men én slik konsekvens, er at Python leses linje for linje
    under kjøring. I den interaktive konsollen kan vi på samme måte skrive inn én og én linje
    og umiddelbart få ut resultatene av linjene vi skriver.
    <Db />
    For å se hvordan dette fungerer, la oss skrive inn linjen som bygget opp programmet vi lagde
    i forrige post:
    <CodeBlock>{`
print('Hallo, verden!')`}</CodeBlock>
    Etter å ha skrevet inn denne linjen i den interaktive konsollen, trykk linjeskift/enter. 
    Du skal nå se noe lignende:
    <CodeBlock>{`>>> print('Hallo, verden!')
Hallo, verden!
>>>`}</CodeBlock>
    Den interaktive konsollen leste inn linjen, kjørte den, og ga deg tilbake resultatet! Konsollen har 
    skrevet <Ic>{`>>>`}</Ic> på skjermen igjen, som betyr at den venter på neste linje. 
    <Db />
    Du kan skrive inn samme linje på nytt for å få samme resultat, men det er grenser for hvor mange ganger 
    det er gøy å gjøre i ett strekk. La oss lære noe nytt vi kan skrive i konsollen!

    <h2>Variabler</h2>
    I programmeringssammenheng er <i>variabler</i> navn vi gir til forskjellige verdier. Verdiene 
    er ofte tall, men kan også være tekst eller lister, for å nevne noe. Ideen er at vi <i>lagrer</i> objekter
    i variabler, og bruker variabel-navnene når vi refererer til objektene i ettertid.
    <Db />
    La oss se på noen eksempler, før jeg rekker å forvirre deg for mye. Skriv <Ic>a = 1</Ic> inn i konsollen.
    Om du skrev riktig, skal det se omtrent slik ut i vinduet:
    <CodeBlock>
        {`>>> a = 1
>>>`}
    </CodeBlock>
    Tilsynelatende har ingenting skjedd.
    Nå, bare skriv <Ic>a</Ic> i konsollen, og du skal få noe lignende:
    <CodeBlock>
        {`>>> a
1
>>>`}
    </CodeBlock>
    Det vi i praksis gjør her er å be Python om å gi oss verdien av <Ic>a</Ic>, og den er 
    1, akkurat som vi sa at den skulle gjøre med forrige input-linje. Til sammenligning,
    prøv å skrive <Ic>b</Ic> i konsollen:
    <CodeBlock>
        {`>>> b
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    b
NameError: name 'b' is not defined
>>> `}
    </CodeBlock>
    Ok, her skjønner vi fort at noe er galt! Den siste linja forteller oss hva som er hovedproblemet:
    <Ic>b</Ic> er ikke definert. Det gir mening at Python klager, ettersom vi har bedt om å få verdien
    til <Ic>b</Ic>, men vi har aldri sagt hva verdien til <Ic>b</Ic> er!
    <Db />
    Vi velger variabelnavn selv. De kan inneholde bokstaver og tall, pluss understrek (<Ic>_</Ic>) og
    de kan være så lange vi vil, men de
    kan aldri <i>starte</i> på et tall, og kan ikke inneholde mellomrom. 
    Dermed er både <Ic>a</Ic>, <Ic>tall</Ic> og <Ic>BucketHumper_69</Ic> gyldige
    variabelnavn, mens <Ic>5tall</Ic> og <Ic>en setning</Ic> er ugyldige.
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
    Her ser vi at Python automatisk regner ut alle regnestykker vi gir til den. På sett og vis
    er Python en forvokst kalkulator - noe som er veldig nyttig i mange sammenhenger!
    Her begynner vi å se noe av styrken til Python. La oss skrive inn <Ic>a + 1</Ic>:
    <CodeBlock>
        {`>>> a + 1
2
>>>`}
    </CodeBlock>
    Dette fungerer så fremt du ikke har restartet konsollen siden du definerte <Ic>a</Ic>. 
    <Db />
    Vi har lært to ting: Python fungerer flott som en kalkulator, og lar deg sette navn på verdier
    som du kan bruke alle steder der du ville brukt verdiene selv!
    Vi kan gjøre litt flere operasjoner for å vise fleksibiliteten til Python:
    <CodeBlock>
    {`>>> b = 2
>>> a = 1
>>> b = 2
>>> c = a + b
>>> d = c * a - b
>>> e = 1234.5 * 67890 * a
>>> a
1
>>> b
2
>>> c
3
>>> d
1
>>> e
83810205.0
`}</CodeBlock>
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
    til å se mye rart bli puttet i variabler, og vi begynner like greit med å se på tekststrenger.
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
    evaluert til tekststrengen <Ic>'Hallo!'</Ic>. Som du kan være fristet til å gjette, kan vi lagre 
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
    
    Her har vi lagret tekststrengen <Ic>'Hei på deg!'</Ic> i variabelen <Ic>a</Ic>, 
    tekststrengen <Ic>'a'</Ic> i variabelen <Ic>b</Ic> og variabelen <Ic>c</Ic> har vi
    satt til å inneholde samme verdi som variabel <Ic>a</Ic>, som vi ser evalueres 
    til tekststrengen <Ic>'Hei på deg!'</Ic>. Her dukker "a" opp både som tekststreng og variabelnavn, men
    vi skiller mellom dem ved at tekststrengen <Ic>'a'</Ic> skrives mellom apostrofer. 
    <Db />
    Hver gang du vil lage en tekststreng, må du altså skrive teksten mellom to apostrofer, ellers
    vil Python prøve å tolke det som variabelnavn!
    <Db />
    Vi kan sette sammen to tekststrenger ved å bruke pluss-tegn <Ic>+</Ic>. I det følgende eksempelet
    viser vi også at vi kan lage tekststrenger ved å bruke anførselstegn (<Ic>""</Ic>) og at
    vi kan bruke bakoverskråstrek foran en apostrof (eller et anførselstegn) for å si at den ikke markerer
    slutten på strengen.
    <CodeBlock>
    {`>>> en_streng = "rens fest"
>>> en_streng_til = "Politiet sa \"hadet bra\" på tape"
>>> en_streng_til + en_streng
'Politiet sa "hadet bra" på taperens fest'`}
    </CodeBlock>

    <h2>Datatyper</h2>
    I programmeringssammenheng er tall og tekststrenger to helt forskjellige ting. Formelt sett 
    betyr sier vi at de har forskjellige <i>datatyper</i>. Vi har sett at pluss-operasjonen kan brukes
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
    prøve å unngå å <i>gjette</i> seg til hva programmereren mente, dersom det er uklart, og vil heller gi
    en feilmelding. Dette kan høres rart ut, men for en programmerer er det mindre irriterende å
    få en tydelig feilmelding, enn å få et program som oppfører seg rart uten noen god pekepinn på hvorfor.
    <Db />
    Noen språk (f. eks. Java) tillater å sette sammen en tekststreng og et tall direkte, så det
    er definitivt diskuterbart om Python gjør det mest logiske i dette tilfellet.
    <Db />
    Uansett, nå har det seg slik at vi <i>vil</i> sette sammen et tall og en tekststreng, hvordan får vi gjort det?
    Det enkleste er å konvertere tallet til en streng, og så utføre operasjonen over. For å konvertere et tall
    (eller andre datatyper) til en streng, kan vi bruke <Ic>str()</Ic>-operatoren:
    <CodeBlock>
        {`>>> tall_som_streng = str(et_tall)
>>> tall_som_streng + en_streng
'7 små dverger'`}
    </CodeBlock>
    
    Og da fungerer det! Vi kunne også skrevet <Ic>str(et_tall) + en_streng</Ic> direkte.
    Her er <Ic>str()</Ic> det vi kaller en funksjon, som er noe vi skal se nærmere på senere.
    Hovedlærdommen fra dette avsnittet, er at hver verdi som ligger i en variabel, har en datatype,
    og datatypen bestemmer hvilke operasjoner vi kan utføre med variabelen. Det er altså
    en viktig forskjell på tallet <Ic>7</Ic> og strengen <Ic>'7'</Ic>!
    
    <h2>Oppsummering</h2>
    Det var en munnfull med informasjon! I løpet av denne posten har vi lært om den interaktive Python-konsollen,
    variabler og datatyper. Python-konsollen kan være nyttig til å prøve ut ting i enkelte tilfeller, for 
    å gjøre demonstrasjoner og gjøre tester, og du kan bruke den til å utforske alt vi kommer
    til å lære framover!
    <Db />
    Vi kommer ikke til å bruke konsollen mye mer i denne bloggserien, for i neste post skal vi begynne å
    skrive programmer. Vi skal lære å ta imot informasjon fra brukeren, og gi informasjon tilbake igjen avhengig
    av hva brukeren skrev.  Det er duket for brukerinteraksjon og betingelser!
    </>
);

export default InteractiveVariablesNo;