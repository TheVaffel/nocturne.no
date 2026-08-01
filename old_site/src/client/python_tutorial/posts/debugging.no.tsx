import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const DebuggingNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Før vi hopper videre på å introdusere flere Python-konsepter, skal vi sette av litt tid til å snakke om selve utviklingsprosessen i praksis. Deretter skal vi se på noe som garantert vil komme til nytte når du jobber med oppgaver senere i denne serien og når du lager dine egne programmer, nemlig feilsøking.
            
            <h2>Utvikling i praksis</h2>
                
            Dette kan virke som ren svada for noen, men vi tar uansett med en kort seksjon om hvordan man generelt lager programmer. Her følger en frynsete beskrivelse av hvordan et program ofte blir til i praksis:

            <Db />
            Det starter som en idé om hva du vil lage. Hvis du følger denne serien, vil du få eksempler på "ideer" servert på sølvfat i oppgaveseksjonen i hver post - men ideene kan naturligvis komme fra overalt, også deg selv.
            <Db />
            
            Det neste steget er å planlegge strukturen til programmet. Dette innebærer å se de store linjene - finne ut hvilke steg programmet i grove trekk må igjennom for å realisere ideen. Du trenger ikke å tenke konkret på kode i dette steget, bare fokusere på de overordnede delene av programmet, som for et enkelt program kan være for eksempel innputt, utregning og utputt. Denne delen er ikke veldig relevant i oppgavene du gjør i starten, men vil komme mer og mer til nytte når programmene blir større og mer sammensatte. Da blir det også lettere og gir mer mening å tenke på det som en rekke større og mer omfattende steg. 
            <Db />
            Omsider kommer <i>implementasjonssteget</i>, hvor du koder (implementerer) selve programmet. Dette steget kan være svært tidkrevende. Noen ganger er det fordi det er mye kode som må skrives, andre ganger (og spesielt i starten), er det fordi det dukker opp feil i koden som kan ta tid å rette opp i. Ikke vær redd om du føler du bruker mye av tiden din på å ordne opp i feil, det er ikke uvanlig at majoriteten av tiden går til nettopp det.
            <Db />
            Etter at koden er ferdig implementert og programmet fungerer som det skal, er du, i de enkleste tilfellene, ferdig. I praksis, derimot, pågår utviklingen ofte lenge etter at programmet er i kjørbar tilstand. Denne utviklingen dreier seg ofte både om å legge inn ny funksjonalitet, samt å fikse eventuelle feil som blir oppdaget mens programmet er i bruk. Vi kan kalle denne delen <i>vedlikeholdssteget</i>. I industrien er dette antakeligvis det steget det jevnt over brukes mest tid på. For selskaper som lager programvare med en viss funksjonalitet, gir det nemlig ofte mer mening å legge til ny funksjonalitet (for å f. eks. møte forespørsler fra markedet) i samme programvare, enn å starte på en ny en. Dette er også en viktig grunn til at det lønner seg å skrive kode som er <i>lesbar</i>, noe vi kommer til å snakke litt om her, og enda mer i senere poster.
            
            <Db />
            Av stegene nevnt over kommer vi til å konsentrere oss om <i>implementasjonssteget</i>, som kommer til å være det mest tidkrevende steget i starten. Helt spesifikt skal vi først si litt om lesbarhet, og deretter se på den delen av implementasjonssteget som oftest tar lengst tid, nemlig feilsøking.
            
            <h2>Lesbarhet</h2>
            
            <i>Lesbarhet</i> betegner rett og slett hvor lett det er for en som ikke har koden friskt i minne, å forstå hva den gjør. Lesbarhet kan virke litt unødvendig i starten, men kommer fort til hjelp både når andre skal se på koden din, når du tar en pause fra et programmeringsprosjekt og kommer tilbake etter flere dager, eller når koden er for stor til at du kan ha god oversikt over hele sulamitten samtidig. Hvor lett det er å forstå kode, kommer naturligvis an på hvor stor og komplisert den er, men det er flere ting vi kan gjøre for å sikre at lesbarheten er på et ålreit nivå selv når koden blir kompleks.
            <Db />
            Det første og viktigste vi kan gjøre, er å gi fornuftige navn til variablene våre. Dette innebærer først og fremst å ikke gi for korte navn, men kalle dem noe som er mest mulig deskriptivt for det de inneholder. Dette er en treningssak, og kan være vanskelig å være disiplinert på i starten. Du vil derimot takke deg selv om du har klart å begynne å bruke lengre, mer deskriptive navn når du jobber på større programmeringsprosjekter!
            
            <Db />
            En annen viktig måte å sørge for lesbarhet på, er ved å splitte opp koden i logiske biter ved hjelp av <i>funksjoner</i>. Du trenger ikke å tenke på dette riktig ennå, vi skal se nærmere på funksjoner i en senere post.
            <Db />
            Det siste tipset til lesbarhet er å bruke <i>kommentarer</i>. Kommentarer er skrift du kan skrive hvor som helst i koden, og som ikke blir lest av Python når programmet kjøres. Med andre ord kan kommentarer brukes til å beskrive koden, dersom det trengs. 
            <Db />
            Kommentarer skrives som <Ic>{`# <kommentar>`}</Ic>. Når Python finner en firkant <Ic>#</Ic> på en linje, enten på starten av linjen eller etter faktisk Python-kode, vil den ignorere resten av linja etter <Ic>#</Ic>.
            <Db />
            For å ta et konkret eksempel, se på koden under:
            <CodeBlock>{`if navn == 'Arne':
    print('Hei, Erna')`}</CodeBlock>
            Det kan hende det er åpenbart hva koden gjør her, men ikke nødvendigvis hvorfor programmereren valgte å skrive denne koden. En kommentar kan gjøre susen:
            <CodeBlock>{`# Hvis brukeren heter Arne, reversér navnet og skriv en hilsen
if navn == 'Arne':
    print('Hei, Erna')`}</CodeBlock>
            Kanskje ikke en veldig givende kode å skrive, men vi har fått et litt bedre innblikk i hva programmereren tenkte da de skrev koden, ettersom de var greie nok til å etterlate seg en kommentar.
            <Db />
            Et annet bruksområde for kommentarer er å deaktivere ("kommentere ut") kode som ikke er i bruk. Dette er hendig når du vil fjerne en del av koden for å bytte den ut med noe annet, men vil beholde den gamle koden i nærheten i tilfelle den nye ikke fører fram. Vi kommer ikke til å bruke mye kommentarer i postene framover, men ikke vær redd for å ta dem i bruk når du koder dine egne programmer!

            <h2>Feil og feilsøking</h2>

            Hvis du prøvde deg på oppgavene på slutten av forrige post, har du kanskje allerede oppdaget hvor nøye man må være når man skriver for at Python skal godkjenne programmet vårt og kjøre det. Det er flere forskjellige typer feil man kan støte borti i programmet sitt. Vi snakker om hver av dem her og kommer med framgangsmåter og tips for å håndtere dem når du koder.
            <Db />
            I denne posten deler vi forskjellige programfeil inn i tre kategorier:
            <ul>
                <li>Syntaksfeil</li>
                <li>Kjøretidsfeil</li>
                <li>Logiske feil</li>
            </ul>

            Fordi du i likhet med alle andre programmerere er et feilbarlig menneske, er sjansen stor for at du vil møte på alle disse feilene før eller senere. I de kommende seksjonene skal vi diskutere hver av dem, hva som kjennetegner dem, og hva man eventuelt kan gjøre for å takle dem.

            <h3>Syntaksfeil</h3>

            Før Python begynner å kjøre programmet, vil den lese gjennom koden én gang for å <i>parse</i> den. Parsing går ut på å identifisere bestanddelene i programmet - Python finner ut hvilke tegn i koden som tilhører hvilke språklige konstruksjoner, for eksempel hva som er variabelnavn, hvilke paranteser som hører til hverandre, og hvor hvis-blokkene er og hva de inneholder. Det er under denne prosessen at det kan dukke opp <i>syntaksfeil</i>.

            <Db />

            Syntaksfeil betyr at programmet ikke oppfyller de grammatiske reglene til Python. Det kan være at du mangler en avsluttende parantes, at du ikke har indentert hvis-blokken eller lignende. I disse tilfellene vil Python være grei nok til å fortelle deg hvor i filen feilen ble funnet. Hvis du for eksempel glemmer et kolon etter hvis-linja slik som dette:
            <CodeBlock>{`if 1 == 2
    print('1 er visst lik 2')`}</CodeBlock>
            vil Python meddele at
            <CodeBlock>{`  File "/home/user/lokasjon/til/program/test.py", line 1
    if 1 == 2
             ^
SyntaxError: invalid syntax`}</CodeBlock>

            Her har den lagt inn en liten pil (<Ic>{`^`}</Ic>) som forteller nøyktig hvor på linja det ble funnet en feil. Pass på - denne pila kan være misvisende, den sier bare hvor Python fant ut at noe var galt, og ikke hvor du eventuelt må endre koden for å fikse problemet. Dette gjelder spesielt for parantesfeil, hvor Python ofte vil klage på linjen <i>etter</i> der den faktiske feilen ligger. Hvis du får beskjed om en syntaksfeil, men ikke klarer å se hva som er galt, er det en stor sjanse for at det er den forrige linja som inneholder det faktiske problemet.
            <Db />
            Mye av flisespikkeriet til Python kan virke direkte unødvendig - ofte burde det være opplagt hva du mente å skrive når du for eksempel mangler en parantes på slutten av en linje. Grunnen til at Python likevel klager, er at Python krever at programmet må være fullstendig <i>utvetydig</i> for å kunne kjøre det. Dette er ikke for å irritere programmereren, men heller det stikk motsatte. Programmereren skal ha full kontroll over hva programmet gjør, og skal være ansvarlig for alt som står der. Hvis Python begynner å fylle inn eller korrigere koden din, er det fort gjort at den gjør noe programmereren hverken ber om eller vil at Python skal gjøre. Og denslags feilaktig oppførsel kan være langt vanskeligere å nøste opp i enn å bare rette på grammatikken til å begynne med.
            
            <h3>Kjøretidsfeil</h3>

            Syntaksfeil blir fanget opp før programmet i det hele tatt blir kjørt. Det er dessverre mye galt som kan skje som ikke kan forutses bare ved å se gjennom koden. For eksempel kan brukeren gi deg en generell streng når du forventer et tall, eller kanskje du prøver å åpne opp en fil som ikke finnes (vi snakker om filer i en senere post). Når disse tingene skjer oppstår det <i>kjøretidsfeil</i> (altså feil som oppstår under kjøring, engelsk: <b>runtime errors</b>), som gjør at Python stopper kjøringen av programmet tvert. 
            <Db />
            Når Python krasjer programmet som følge av en kjøretidsfeil, vil den gi deg en melding som dette:
            <CodeBlock>{`Traceback (most recent call last):
  File "/home/user/lokasjon/til/program/test.py", line 11, in <module>
    print(int('tretten'))
ValueError: invalid literal for int() with base 10: 'tretten'`}</CodeBlock>
            
            Igjen får vi vite hvilken linje vi er på (linje 11 i dette tilfellet), og en kort melding om hva som har skjedd. Hvordan meldingen ser ut og hvor deskriptiv den er kan variere sterkt fra feil til feil. Her får vi vite at <Ic>int()</Ic> ikke klarte å konvertere strengen <Ic>'tretten'</Ic> til et tall.
            <Db />
            Det er spesielt to typer kjøretidsfeil som er vanlige å få under utvikling, som vi skal diskutere litt her. 
            <Db />
            Den første er navnefeil, <Ic>NameError</Ic>, som betyr at det blir brukt et variabelnavn som Python ikke har fått en definisjon for, i én eller annen operasjon. Får du denne feilen, betyr det nesten alltid at det er en skrivefeil i koden, kanskje noe så lite som en forveksling mellom en stor og en liten bokstav. Husk på at linjen Python peker på, kan ha variabelnavnet stavet riktig, men at variabelen ble feilstavet da den først ble definert, slik at Python ikke finner den igjen når du staver navnet riktig.
            <Db />
            Den andre vanlige typen kjøretidsfeil er typefeil, <Ic>TypeError</Ic>, som er når det er en uoverenstemmelse mellom typen til f. eks. en variabel du bruker, og typen som er forventet i en operasjon. Et eksempel på dette som vi allerede har sett, er når vi prøver å sette sammen en streng med et tall. Denne typen feil kommer nok til å dukke opp oftere når vi introduserer funksjonskonseptet, hvor det ofte er en implisitt forventning om hvilke typer verdier må ha. 
            <Db />
            I de fleste tilfeller kan typefeil fikses ved å konvertere en verdi til riktig type, mens det andre ganger kan hende du innser at det trengs en større revurdering av koden.
            <Db />
            I mange andre språk fanges både navnefeil og typefeil opp <i>før</i> kjøringen av koden. Årsaken til at dette ikke skjer i Python, er at vi ikke kan ha oversikt over hvilke variabler som er definert og ikke i et spesielt område i koden, og heller ikke hvilke typer de har, uten å kjøre koden. Språk som har strengere regler for variabeldefinisjoner og bruk (f. eks. C++, Java og Rust, for å nevne noen få) kan dedusere slike ting fra koden uten å måtte kjøre den.
            <Db />

            Det er mulig å forutse og skrive kode for å håndtere slike feil og hindre at programmet stopper, noe vi ser vi på i en senere post.

            <h3>Logiske feil</h3>

            Til slutt har vi <i>logiske</i> feil. En logisk feil er rett og slett at programmet ditt gjør noe annet enn du vil det skal gjøre. Dette kommer som regel til syne i utputtet fra programmet - enten fordi programmet skriver mer, mindre eller bare noe annet enn det du forventet. Det sier dessverre lite om hvor roten til feilen ligger - feilen kan ligge nær starten av programmet selv om effekten av den bare er synlig på slutten. 
            <Db />
            Logiske feil er det vi ofte kaller <i>bugs</i>.
            <Db />
            Denne typen feil kan ikke Python hjelpe deg med å oppdage eller stedfeste - ettersom Python bare har gjort akkurat det koden din sier, som ikke nødvendigvis er det samme som det du ville koden skulle si. Det er fullstendig opp til deg selv å se om programmet ditt gjør det du forventer, og finne ut av årsaken til at den eventuelt ikke gjør det.
            <Db />
            I praksis er det denne typen feil som tar mest tid å finne og rydde opp i, og de blir vanskeligere å oppdage/fikse jo mer kompleks koden din blir. Prosessen med å finne feil - og da først og fremst logiske feil - er det vi kaller <i>feilsøking</i> (engelsk: <b>debugging</b>, fjerning av bugs). Hvordan man lettest feilsøker problemer med programmet, kommer helt an på hva slags feil det er snakk om, men det finnes noen generelle måter man kan bruke i de aller fleste tilfeller.

            <h4><Ic>print</Ic>-feilsøking</h4>
            
            <Ic>print</Ic>-feilsøking er en forholdsvis usofistikert metode hvor man takler feilen ved å legge inn flere <Ic>print</Ic>-linjer på forskjellige steder i programmet for å se hvilke deler som kjøres, og for å se hvilke verdier forskjellige variabler har på forskjellige tidspunkter. Denne metoden er enkel, men ofte svært effektiv. Vanligvis har vi nemlig en formening om hva programmet skal gjøre og hva forskjellige variabler skal inneholde på forskjellige punkter i koden, noe som gjør at det er lett å oppdage når noe ikke stemmer når vi skriver hva programmet gjør til skjerm mens det kjøres. 
            <Db />
            Hvilke variabler og hvilke linjer i koden du burde bruke til print-linjer, er helt spesifikt for din kode. Hvis du ikke vet hvor du skal starte, prøv å <Ic>print</Ic>-e variablene som førte til det feilaktige outputtet, og jobb deg bakover derfra.
            <Db /> 

            For mange er <Ic>print</Ic>-feilsøking den foretrukne feilsøke-metoden, og det er en metode vi anbefaler å bruke når du først begynner å snuble i logiske feil.

            <h4>Debuggere</h4>

            En del mer avanserte editorer har ofte innebydge <i>debuggere</i>. Debuggere er systemer som lar deg legge inn "pausepunkter" (engelsk: <b>break points</b>) på noen linjer i koden for å stoppe det når linjen kjøres, og lar deg inspisere alle variablene som er definert på dét tidspunktet samt verdiene deres. I praksis er dette en litt mer rett-fram måte å finne ut hvordan programmet arbeider enn <Ic>print</Ic>-feilsøking, men kan kreve mer oppsett for å fungere.

            <h4>Gummiandfeilsøking</h4>

            Så har vi <i>gummiandfeilsøking</i>. Hent en gummiand og sett den på bordet foran deg. Gå deretter gjennom koden steg for steg og forklar gummianden hva koden gjør. Ofte vil du til slutt komme til et sted i koden der du innser at koden ikke gjør det du vil den skal gjøre. På dette tidspunktet gjør du endringer i koden og kjører på nytt. Hold på slik til programmet gjør akkurat det du forventer at det skal gjøre. Husk å takke gummianden for tålmodigheten etterpå!
            <Db />
            Du har kanskje allerede gjettet at det ikke er gummianden som er det viktige her, selv om denne feilsøkingmetoden kalles gummiandfeilsøking (engelsk: <i>rubber duck debugging</i>). I praksis kan man bruke andre gjenstander eller personer. 
            <Db />
            Denne prosessen tvinger deg til å tenke gjennom hva koden faktisk gjør, og sammenligne det med hva du vil den skal gjøre. Det gjør at gummiandfeilsøking er overraskende effektivt, men kan ta mye tid dersom det er mye kode du må gå igjennom. Denne metoden er først og fremst nyttig i situasjoner der du ikke har en god følelse for hvilken tilstand programmet skal ha på forskjellige tidspunkter, eller du kanskje ikke har mulighet til å gjenskape feilen du fikk på noen enkel måte. Dette gjelder spesielt for kompliserte programmer, ofte med mange matematiske operasjoner som det er vanskelig å studere på en intuitiv måte. Derfor kommer du sannsynligvis ikke til å trenge å benytte deg av gummiandmetoden med det første, men den kan være lur å kjenne til.

            <Db />

            Utover disse feilsøkingsmetodene er det i grunn bare fantasien som setter grenser. Noen ganger kan spesielle innputt gjøre feilen lettere å finne, andre ganger kan det lønne seg å kode programmet til å krasje et sted i koden dersom en bestemt betingelse er oppfylt. Antakeligvis finnes det spesielle, effektive måter å finne feilene i akkurat det programmet du har laget, så ikke vær redd for å tenke utenfor boksen!
            

            <h2>Tips og triks</h2>

            Helt avslutningsvis kommer vi med noen uformelle tips som kan være til stor hjelp når du tar fatt på programmering framover.

            <Db />

            For det første: Det er ingen skam i å søke etter svar på Internett. Faktisk gjør mange profesjonelle programmerere dette en stor del av tiden, rett og slett fordi det er omtrent umulig å ha oversikt over alt som er relevant innenfor prosjektet man jobber på. 
            
            <Db />
            Hvis du har lyst til å gjøre en veldig spesifikk operasjon, men er usikker på hvordan man skriver det i Python, kan du bare formulere det som et spørsmål og bruke spørsmålet som søketekst. Hvis du får en feilmelding når du kjører et program, kan du bruke hele feilmeldingen som søketekst for å finne stoff fra folk som har støtt på det samme problemet. Mange programmeringsrelaterte spørsmål blir besvart på <a href="stackoverflow.com">StackOverflow.com</a>, som er en spørsmål/svar-side rettet først og fremst mot programmerere. Det er vanlig å ende opp her etter et søk med en hvilken som helst søkemotor på et programmeringsrelatert spørsmål. 
            <Db />
            Merk at de aller fleste programmeringsressurser på nettet er på engelsk, som betyr at det vil lønne seg å bruke engelsk søketekst.
            
            <Db />
            Utover dét er det viktigste å ikke miste tålmodigheten. Det kan fort skje at du bruker lang tid på feil som virker helt opplagte i ettertid. Ikke bli nedbrutt om det skulle skje med deg, slike flaue øyeblikk er vanlige, selv for erfarne programmerere. 

            <h2>Oppsummering</h2>

            Vi har ikke introdusert mye nye konsepter her, bare snakket litt om programmering i praksis. Forhåpentligvis har du allerede noen få knagger å henge litt av denne informasjonen på, men en del av stoffet blir først relevant når du begynner å lære flere konsepter og lager større programmer utover i denne serien.
            <Db />

            Håper du er klar for å lære mer programmering! Neste post vil ta for seg løkker, som er et veldig viktig konsept innen programmering. Det er først når vi utforsker løkker at den virkelige kraften som ligger i programmering begynner å åpenbare seg.

        </PostWrapper>
    </>
);

export default DebuggingNo;