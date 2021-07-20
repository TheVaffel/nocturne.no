import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const DebuggingNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Før vi hopper videre på å introdusere flere og flere Python-konsepter, skal vi sette av litt tid til å snakke om selve utviklingsprosessen. Hvis du prøvde deg på oppgavene på slutten av forrige post, har du kanskje allerede oppdaget hvor nøye man må være når man skriver for at Python skal godkjenne programmet vårt og kjøre det. Det er flere forskjellige typer feil man kan støte borti i programmet sitt. Vi snakker om hver av dem her og kommer med framgangsmåter og tips for å håndtere dem når du koder.
            <Db />
            Her deler vi inn forskjellige programfeil i fire kategorier:
            <ul>
                <li>Syntaksfeil</li>
                <li>Kjøretidsfeil</li>
                <li>Logiske feil</li>
            </ul>

            Fordi du i likhet med alle andre programmerere er et feilbarlig menneske, Er sjansen stor for at du vil møte på alle disse feilene før eller senere. I de kommende seksjonene skal vi diskutere hver av dem, og vi starter på toppen:

            <h2>Syntaksfeil</h2>

            Før Python begynner å kjøre programmet, vil den lese gjennom koden én gang for å <i>parse</i> den. Parsing går ut på å identifisere bestanddelene i programmet - Python finner ut hvilke tegn i koden som tilhører hvilke språklige konstruksjoner, for eksempel hva som er variabelnavn, hvilke paranteser som hører til hverandre, og hvor hvis-blokkene er og hva de inneholder. Det er under denne prosessen at det kan dukke opp <i>syntaksfeil</i>.

            <Db />

            Syntaksfeil betyr at programmet ikke oppfyller de grammatiske reglene til Python. Det kan være at du mangler en avsluttende parantes, at du ikke har indentert hvis-blokken eller lignende. I disse tilfellene vil Python være grei nok til å fortelle deg hvor i filen feilen ble funnet. Hvis du for eksempel glemmer et kolon etter hvis-linja slik som dette:
            <CodeBlock>{`if 1 == 2
    print('1 er visst lik 2')`}</CodeBlock>
            Vil Python for eksempel meddele at
            <CodeBlock>{`  File "/home/user/path/to/program/test.py", line 1
    if 1 == 2
             ^
SyntaxError: invalid syntax`}</CodeBlock>

            Her har den lagt inn en liten pil (<Ic>{`^`}</Ic>) som forteller nøyktig hvor på linja det ble funnet en feil. Pass på at denne pila kan være misvisende, den sier bare hvor Python fant ut at noe var galt, og ikke hvor du eventuelt må endre koden for å fikse problemet. Dette gjelder spesielt for parantesfeil, hvor Python ofte vil klage på linjen <i>etter</i> der den faktiske feilen ligger. Hvis du får beskjed om en syntaksfeil, men ikke klarer å se hva som er galt, er det en stor sjanse for at det er den forrige linja som inneholder det faktiske problemet.
            
            <h2>Kjøretidsfeil</h2>

            Syntaksfeil blir fanget opp før programmet i det hele tatt blir kjørt. Det er dessverre mye galt som kan skje som ikke kan forutses bare ved å se gjennom koden. For eksempel kan brukeren gi deg en generell streng når du forventer et tall, eller kanskje du prøver å åpne opp en fil som ikke finnes (vi snakker om filer i en senere post). Når disse tingene skjer oppstår det <i>kjøretidsfeil</i> (altså feil som oppstår under kjøring, engelsk: <b>runtime errors</b>), som gjør at Python stopper kjøringen av programmet tvert. Det går an å håndtere slike feil og hindre at programmet stopper, noe vi ser vi på i en senere post.
            <Db />
            Når Python krasjer programmet som følge av en kjøretidsfeil, vil den gi deg en melding som dette:
            <CodeBlock>{`Traceback (most recent call last):
  File "/home/user/path/to/program/test.py", line 11, in <module>
    print(int('tretten'))
ValueError: invalid literal for int() with base 10: 'tretten'`}</CodeBlock>
            
            Igjen får vi vite hvilken linje vi er på (linje 11 i dette tilfellet), og en kort melding om hva som har skjedd. Hvordan meldingen ser ut og hvor deskriptiv den er kan variere sterkt fra feil til feil. Her får vi vite at <Ic>int()</Ic> ikke klarte å konvertere strengen <Ic>'tretten'</Ic> til et tall. Det var verdt et forsøk.
            <Db />
            Det er spesielt to typer kjøretidsfeil som er vanlige å få under utvikling. Den første er navnefeil, <Ic>NameError</Ic>, som betyr at det blir brukt et variabelnavn som Python ikke har sett før, i én eller annen operasjon. Får du denne feilen, betyr det nesten alltid at det er en skrivefeil i koden, kanskje noe så lite som en forveksling mellom en stor og en liten bokstav. Husk på at linjen Python peker på, kan ha variabelnavnet stavet riktig, men at variabelen ble feilstavet da den først ble definert, slik at Python ikke finner den igjen når du staver navnet riktig.
            <Db />
            Den andre vanlige typen kjøretidsfeil er typefeil, <Ic>TypeError</Ic>, som er når det er en uoverenstemmelse mellom typen til f. eks. en variabel du bruker, og forventet type. Et eksempel på dette som vi allerede har sett, er når vi prøver å sette sammen en streng med et tall. Denne typen feil kommer nok til å dukke opp oftere når vi introduserer funksjoner som konsept, hvor det ofte er en implisitt forventning om hvilke typer verdier må ha. 
            <Db />
            I de fleste tilfeller kan typefeil fikses ved å konvertere en verdi til riktig type, mens det andre ganger kan hende du innser at det trengs en større revurdering av koden.
            <Db />
            I mange andre språkn fanges både navnefeil og typefeil opp <i>før</i> kjøringen av koden. Årsaken til at dette ikke skjer i Python, er at vi ikke kan ha oversikt over hvilke variabler som er definert og ikke i et spesielt område i koden, og heller ikke hvilke typer de har. Språk som har strengere regler for variabeldefinisjoner og bruk (f. eks. C++, Java og Rust, for å nevne noen få) kan dedusere slike ting fra koden uten å måtte kjøre den.
            
            <h2>Logiske feil</h2>

            Til slutt har vi <i>logiske</i> feil. En logisk feil er rett og slett at programmet ditt gjør noe annet enn du vil det skal gjøre. Dette kommer som regel til syne i utputtet fra programmet - enten fordi programmet skriver mer, mindre eller bare noe annet enn det du forventet. Det sier dessverre lite om hvor roten til feilen ligger - feilen kan ligge nær starten av programmet selv om effekten av den bare er synlig på slutten.
            <Db />
             Denne typen feil kan ikke Python hjelpe deg med å oppdage eller stedfeste - ettersom Python bare har gjort akkurat det koden din sier, som ikke nødvendigvis er det samme som det du ville koden skulle si. Det er fullstendig opp til deg selv å se om programmet ditt gjør det du forventer, og finne ut av årsaken til at den eventuelt ikke gjør det.
            <Db />
            I praksis er det denne typen feil som tar mest tid å finne og rydde opp i, og de blir vanligere og vanskeligere å oppdage/fikse jo mer kompleks koden din blir. Prosessen med å finne feil - og da først og fremst logiske feil - er det vi kaller <i>feilsøking</i> (engelsk: <b>debugging</b>, fjerning av bugs). Hvordan man lettest feilsøker problemer med programmet, kommer helt an på hva slags feil det er snakk om, men det finnes et par generelle måter man kan bruke i de aller fleste tilfeller.

            <h3><Ic>print</Ic>-feilsøking</h3>
            
            <Ic>print</Ic>-feilsøking er en forholdsvis usofistikert metode hvor man takler feilen ved å legge inn flere <Ic>print</Ic>-kall på forskjellige steder i programmet for å se hvilke deler som kjøres, og for å se hvilke verdier forskjellige variabler har på forskjellige tidspunkter. Denne metoden er enkel, men ofte svært effektiv. Ofte har vi nemlig en formening om hva programmet skal gjøre og hva forskjellige variabler skal inneholde på forskjellige punkter i koden, noe som gjør at det er lett å oppdage når noe ikke stemmer når vi skriver hva programmet gjør til skjerm mens det kjøres. 

            <Db /> 

            For mange er <Ic>print</Ic>-feilsøking den foretrukne feilsøke-metoden, og det er en metode vi anbefaler å bruke når du først begynner å snuble i logiske feil.

            <h3>Debuggere</h3>

            En del mer avanserte editorer har innebydge <i>debuggere</i>. Debuggere er systemer som lar deg legge inn "pausepunkter" (engelsk: <b>break points</b>) på noen linjer koden for å stoppe det når linjen kjøres, og lar deg inspisere alle variablene som er definert på dét tidspunktet. I praksis er dette en litt mer rett-fram måte å finne ut hvordan programmet arbeider enn <Ic>print</Ic>-feilsøking, men kan kreve litt mer oppsett for å fungere.

            <h3>Gummiandfeilsøking</h3>

            Hent en gummiand og sett den på bordet foran deg. Gå deretter gjennom koden steg for steg og forklar gummianden hva koden gjør til gummianden. Ofte vil du til slutt komme til et sted i koden der du innser at koden ikke gjør det du vil den skal gjøre. På dette tidspunktet gjør du endringer i koden og kjører på nytt. Hold på slik til programmet gjør akkurat det du forventer at det skal gjøre. Husk å takke gummianden for tålmodigheten etterpå!
            <Db />
            Du har kanskje allerede gjettet at det ikke er gummianden som er det viktige her, selv om denne feilsøkingmetoden heter <i>gummiandfeilsøking</i> (engelsk: <i>rubber duck debugging</i>). Denne metoden er overraskende effektiv, men kan være treig for større programmer. (TODO: Egner seg for komplisert matematisk logikk, uviss forventning, avanserte brukere).


            <Db />
            Mye av flisespikkeriet til Python kan virke direkte unødvendig - ofte burde det være opplagt hva du mente å skrive når du for eksempel mangler en parantes på slutten av en linje. Grunnen til at Python likevel klager, er at Python krever at programmet må være fullstendig <i>utvetydig</i> for å kunne kjøre det. Dette er ikke for å irritere programmereren, men heller det stikk motsatte. Programmereren skal ha full kontroll over hva programmet gjør, og skal være ansvarlig for alt som står der. Hvis Python begynner å fylle inn eller korrigere 
        </PostWrapper>
    </>
);

export default DebuggingNo;