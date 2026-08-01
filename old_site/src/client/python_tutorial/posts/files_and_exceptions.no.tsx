import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const FilesAndExceptionsNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hei igjen! I denne posten skal vi se på filer og hvordan vi kan lage og bruke dem med Python. Hittil har vi belaget oss på at brukeren har sendt inn ekstern informasjon til programmet, men det er grenser for hvor lenge vi klarer å få en bruker til å sitte og mate programmet vårt med data. Her skal vi blant annet lære om hvordan vi kan lese informasjon fra filer, som vil øke mengden data vi har mulighet til å jobbe med dramatisk.
            <Db />
            Litt senere i posten tar vi også en kikk på feilhåndtering, som kan være spesielt nyttig når man jobber med filer.
            <Db />
            Sannsynligvis har du allerede en formening om hva filer er i datasammenheng, ettersom hvert Python-program vi har skrevet må være lagret i en fil for å kunne kjøres. For denne postens formål kommer vi bare til å tenke på filer som en navngitt beholder med data som ligger på harddisken til maskinen. Filer kan inneholde data i et hvilket som helst format, for eksempel bilde, lyd eller regneark. I denne posten kommer vi bare til å diskutere filer som inneholder ren tekst, men vi skal se på andre filtyper i neste post.

            <h2>Å lese en fil</h2>
            
            For å lese innholdet i en fil og bruke det i programmet vårt, trenger vi først en fil å jobbe med. I dette eksempelet kommer vi til å bruke sangteksten til en klassiker, som du kan <a href="/files/sangtekst.txt" download>laste ned her</a>. Legg denne filen i samme mappe som programkoden vi skal skrive under. Hvis du ikke vet hvor filen havnet da du lastet den ned, ligger den sannsynligvis i en mappe kalt <i>Nedlastninger</i> eller <i>Downloads</i>. Legg merke til at filen er en <Ic>.txt</Ic>-fil som kun inneholder ren tekst, uten noen form for informasjon om formatering, skriftstørrelse, farger eller lignende, som man for eksempel ville hatt i en dokumentfil (f.eks. <Ic>.docx</Ic> eller <Ic>.pdf</Ic>). <Ic>.txt</Ic>-filer inneholder nemlig ikke noe annet enn en rekke med menneskeleselige tegn og bokstaver. Denne enkle formen for filer egner seg godt for å demonstrere filoperasjoner i Python fordi innholdet kan behandles direkte som en streng.
            
            <Db />
            
            Når vi skal skrive til eller lese fra en fil, må vi først <i>åpne</i> den. Dette signaliserer til operativsystemet at den skal åpne en "kanal" til eller fra filen og inn til programmet vårt, og gir oss en referanse til denne kanalen. For å åpne en fil kan vi kalle <Ic>{`open(<filnavn>)`}</Ic>, der <Ic>{`<filnavn>`}</Ic> er en streng som inneholder navnet på filen vår. Kallet returnerer et "filobjekt" som vi kan bruke senere til å lese fra eller skrive til filen. Dersom filen ikke finnes, vil Python passe på å kaste en feilmelding på deg.

            <Db />
            For å åpne fila vi lastet ned, kan vi altså bruke
            <CodeBlock>{`fil = open('sangtekst.txt')`}</CodeBlock>
            Nå har vi sagt ifra til operativsystemet at vi vil lese filen <Ic>sangtekst.txt</Ic>, og mottatt et filobjekt som vi har lagt i variabelen <Ic>fil</Ic>. Hvis du får en feilmelding av dette kallet alene, har du antakeligvis ikke lagt fila i samme mappe som koden din ligger i, eller feilstavet navnet på fila. Herifra har vi flere muligheter for å lese innholdet i fila. 
            
            <h3>Les alt innholdet samtidig</h3>

            For å lese alt innholdet i filen på én gang og legge resultatet i en streng, kan vi bruke medlemsfunksjonen <Ic>read()</Ic> på filobjektet:

            <CodeBlock>{`filinnhold = fil.read()`}</CodeBlock>

            Vi kan sjekke at <Ic>filinnhold</Ic> nå inneholder all teksten i fila ved å skrive den til skjerm med f.eks. <Ic>print(filinnhold)</Ic>.
            <Db />
            Man bør være litt forsiktig når man bruker <Ic>read()</Ic>-funksjonen slik som vi har gjort over, fordi det ber Python om å laste alt filinnholdet inn i minnet samtidig. Dersom filen tar mer plass enn du har tilgjengelig i minnet, kan du ende med at maskinen henger en stund før programmet til slutt krasjer. Det er ikke farlig, men kan være fryktelig irriterende. For moderne maskiner blir dette først et problem når vi jobber med filer på flere gigabyte, altså milliarder av tegn, noe du antakeligvis ikke kommer til å gjøre med det første.

            <h3>Les én og én linje</h3>

            En alternativ måte å lese gjennom tekstfiler på, er å bruke <Ic>for</Ic>-løkker. Når vi bruker <Ic>for</Ic>-løkker direkte på filobjekter for tekstfiler, vil iterasjonsvariabelen settes til én og én linje i fila. 
            
            <NoticeBlock>Obs: Du kan ikke bruke både <Ic>read()</Ic>-funksjonen og <Ic>for</Ic>-løkkeiterasjon på det samme filobjektet. Filobjektet "husker" hva som har blitt lest og fortsetter fra der den slapp i neste leseoperasjon. Dersom du fortsetter fra koden over, må du derfor enten erstatte <Ic>read()</Ic>-kallet med løkken, eller lukke fila (se under) og åpne den på nytt.</NoticeBlock>

            Her er et eksempel hvor vi skriver filen ut til skjerm ved hjelp av en <Ic>for</Ic>-løkke:
            <CodeBlock>{`for linje in fil:
    print(linje)`}</CodeBlock>
            Resultatet skal bli nesten det samme som da vi skrev ut filinnholdet i eksempelet over, bortsett fra noen et ekstra linjeskift mellom hvert par av linjer; linjene vi får via <Ic>for</Ic>-løkka inneholder nemlig linjeskiftet på slutten.

            <h3>Lukk fila</h3>

            Når man er ferdig med operasjonene man skal gjøre på en fil, bør man <i>lukke</i> den. Dette gjør vi ved å kalle medlemsfunksjonen <Ic>close()</Ic> på filobjektet:
            <CodeBlock>{`fil.close()`}</CodeBlock>
            Dette er for å be operativsystemet om å stenge "kanalen" mellom fila på harddisken og programmet vårt, og for å sørge for at alle operasjoner på fila er avsluttet. I moderne operativsystemer er det sjeldent at det fører til problemer når man glemmer å lukke en fil etter bruk ettersom den blir lukket med makt automatisk når programmet er ferdig. Det er likevel lurt å huske å lukke fila, spesielt etter skriveoperasjoner, for å sørge for at alt som skulle skrives til fila faktisk blir skrevet. 
            
            <h2>Å skrive til en fil</h2>

            Når vi kaller <Ic>open()</Ic> på en fil, må vi bestemme om fila skal åpnes for lesing eller skriving. Dette gjør vi ved å gi en verdi for det andre argumentet til <Ic>open()</Ic>, som spesifiserer <i>moduset</i> til fila. For å åpne fila for lesing, kan vi bruke <Ic>'r'</Ic> som andre argument. Dette er også standardverdien til dette argumentet, som er grunnen til at vi ikke trengte å bruke dette argumentet i eksempelet om fillesing over.
            <Db />
            For å åpne en fil for <i>skriving</i>, må vi bruke modusargumentet <Ic>'w'</Ic>. Dersom fila som er spesifisert i første argument ikke eksisterer, kommer programmet til å lage fila først, og så åpne den for skriving. Vær forsiktig når du bruker modusargumentet <Ic>'w'</Ic> på filer som allerede eksisterer, ettersom det vil fjerne alt innholdet i fila selv om du ikke gjør noen skriveoperasjoner!
            <Db />
            Når vi har åpnet en fil for skriving, kan vi bruke medlemsfunksjonen <Ic>write()</Ic> med strengen vi vil skrive som argument for å skrive til filen. Merk at dette bare vil legge strengen direkte inn i filen, uten å legge til et linjeskift eller noe annet tegn på slutten. Om du vil ha med et linjeskift, kan du legge til <Ic>'\n'</Ic> på slutten av strengen selv.
            <Db />
            Her er et eksempelprogram der vi leser fra fila vi brukte tidligere og lager en ny fil som inneholder annenhver linje fra den første fila:
            <CodeBlock>{`innfil = open('sangtekst.txt')

inntekst = innfil.read()

innfil.close()

utfil = open('utfil.txt', 'w')

inntekst = inntekst.strip()
inntekst_linjer = inntekst.split('\\n')

for i in range(len(inntekst_linjer)):
    if i % 2 == 0:
        utfil.write(inntekst_linjer[i] + '\\n')

utfil.close()`}
            </CodeBlock>

            Her er det litt forskjellig som skjer:
            <Db />
            Først åpner vi filen og leser ut innholdet, som vi legger i variabelen <Ic>inntekst</Ic>. Når vi har fått tak i innholdet, lukker vi fila. På dette tidspunktet er vi nemlig ferdige med å lese teksten inn i programmet, sånn at vi ikke trenger å bruke innputtfila lenger. Så lager vi en ny fil - fila vi skal skrive resultatet vårt i. Her bruker vi modusargument <Ic>'w'</Ic> for å signalisere at vi skal skrive til fila.
            <Db /> 
            Etter å ha åpnet utputtfila kaller vi <Ic>strip()</Ic> på strengen vi leste inn og erstatter den originale innputteksten med resultatet. Resultatet fra <Ic>strip()</Ic> er det samme som den originale strengen, bortsett fra at usynlige tegn (whitespace-tegn) som for eksempel mellomrom og linjeskift i begge ender av strengen fjernes. Tekstfiler pleier nemlig ofte å inneholde minst ett ekstra linjeskift på slutten, som, hvis det ikke fjernes, kan føre til at vi får et unødvendig element når vi splitter strengen på neste kodelinje:
            <Db />
            Etter å ha strippet ned strengen, kaller vi <Ic>split()</Ic>-funksjonen på den. <Ic>split</Ic> deler opp strengen og returnerer en liste av strenger. Argumentet til <Ic>split</Ic> er <i>separatoren</i>, altså hvilken tekststreng som skal behandles som en splitt i strengen vi vil dele opp. Standardverdien for dette argumentet splitter strengen på alle <i>whitespace</i>-tegn, som inkluderer både mellomrom, ny linje og tab. I dette problemet vil vi splitte opp innputtstrengen i linjer, så vi bruker linjeskift (<Ic>'\n'</Ic>) som separator. Resultatet er en liste av strenger, hvor hver streng er en linje fra fila. Merk at strengene i lista <i>ikke</i> inneholder linjeskiftet, som blir fjernet under splitting.
            <Db />
            Deretter itererer vi gjennom den med en <Ic>for</Ic>-løkke på indekser, sånn at vi kan sjekke om indeksen er delelig på to. Siden annenhver indeks (0, 2, 4... osv.) er delelig på to, ender vi opp med å skrive annenhver linje fra den første fila inn i den andre. Siden strengene i lista <Ic>inntekst_linjer</Ic> ikke inneholder linjeskift, må vi legge til ett på slutten når vi skriver dem, for at de skal dukke opp som separate linjer i fila. Helt til slutt lukker vi fila vi skrev til.
            <Db />
            Det er flere måter å løse denne oppgaven på. For eksempel kunne vi iterert gjennom fila linje for linje direkte med en <Ic>for</Ic>-løkke slik som vi gjorde tidligere, og lage en tellevariabel som vi øker for hver iterasjon og som vi kan bruke for å bare skrive annenhver linje til fila.

            <h3><Ic>with</Ic>-blokker</h3>

            Python har en egen syntaks for å lage objekter som trenger å lukkes etter bruk, slik som filer. Dette er <Ic>with</Ic>-blokker, som er på formen
            <CodeBlock>{`with <objektinitialisering> as <variabelnavn>:
    <with-blokk>`}</CodeBlock>
            
            Her vil <Ic>{`<objektinitialisering>`}</Ic> være f. eks. <Ic>open()</Ic>-kallet som vi har brukt tidligere. Det <Ic>with</Ic>-blokken gjør, er å automatisk lukke objektet som ble laget på <Ic>with</Ic>-linja når blokken er ferdig, som betyr at du slipper å huske på å kalle <Ic>close()</Ic> selv. I tillegg gjør det at det er helt tydelig i koden hvor filen kan brukes og ikke - man kan ikke bruke filen utenfor blokken, ettersom den vil være lukket.
            <Db />
            Vi kan skrive om eksempelet over ved hjelp av en <Ic>with</Ic>-blokk. Mesteparten av koden er lik, men starten blir spicet opp litt:
            <CodeBlock>{`with open('sangtekst.txt') as innfil:
    inntekst = innfil.read()

with open('utfil.txt', 'w') as utfil:
    <...>`}</CodeBlock>
            Resten av koden blir intendert, sånn at det blir liggende som en del av <Ic>with</Ic>-blokken. I tillegg trenger vi heller ikke å lukke <Ic>utfil</Ic> på slutten av programmet.
            <Db />
            <Ic>with</Ic>-blokker er den foretrukne måten å bruke filer på i moderne Python av grunnene nevnt over, og det er denne måten vi kommer til å bruke i resten av posten.
            <Db />
            Det er ikke bare filer som kan brukes med <Ic>with</Ic>-blokker. Mange andre objekter som interagerer tett med operativsystemet, som for eksempel nettforbindelser, kan også brukes med <Ic>with</Ic>-blokker. Vi kommer bare til å bruke <Ic>with</Ic>-blokker med filer i hoveddelen av denne innføringen i Python.

            <h2>Unntak</h2>

            Noen ganger (oftere enn vi vil innrømme) oppstår det feil mens koden vår kjører, som hindrer den fra å gjøre det den skal. Ofte skyldes dette programmereren selv, for eksempel at vi feilstaver navnet på en variabel eller funksjon, at vi lager en uendelig løkke med et uhell, eller at vi rett og slett har en kode som gjør noe annet enn det vi vil. 
            <Db />
            På en annen siden finnes det feil som vi som programmerere ikke kan noe for. Dette gjelder i mange forskjellige sammenhenger, for eksempel hvis vi prøver å lese en fil som ikke finnes, eller hvis brukeren gir oss en tilfeldig streng når vi forventer et tall. 
            <Db />
            Vanligvis vil Python bare gi opp når den møter på slike feil, og krasje programmet. Denne oppførselen er akseptabel når vi jobber med små programmer som er raske å starte på nytt, men kan gjøre stor skade om en slik feil skulle dukke opp i et tidkrevende program midt under kjøring. I slike tilfeller vil det være et bedre alternativ for oss å håndtere feilen selv.
            <Db />
            En fellesbetegnelse for feil som oppstår under kjøring er <i>unntak</i> (engelsk: <b>exceptions</b>).
            <Db />
            For å <i>håndtere</i> unntak i Python kan vi bruke <Ic>try</Ic>-<Ic>except</Ic>-blokker. <Ic>try</Ic>-<Ic>except</Ic>-blokker ser ut som dette:

            <CodeBlock>{`try:
    <try-blokk>
except:
    <except-blokk>`}</CodeBlock>
            
            Når Python kommer til et par <Ic>try</Ic>-<Ic>except</Ic>-blokker, vil den kjøre koden i <Ic>try</Ic>-blokken som vanlig. Hvis det ikke oppstår noe unntak under kjøringen av <Ic>try</Ic>-blokken, vil den fortsette på koden etter <Ic>except</Ic>-blokken, altså ignorere hele <Ic>except</Ic>-blokken fullstendig.
            <Db />
            Dersom det oppstår en feil i <Ic>try</Ic>-blokken, derimot, hopper Python direkte inn i <Ic>except</Ic>-blokken fra der feilen skjedde, og kjører koden som ligger i <Ic>except</Ic>-blokken. Etter at koden i <Ic>except</Ic>-blokken er kjørt, fortsetter Python med koden etter hele <Ic>try</Ic>-<Ic>except</Ic>-konstruksjonen som vanlig.
            <Db />
            Her er et eksempel på hvordan en <Ic>try</Ic>-<Ic>except</Ic>-blokk kan se ut i praksis.

            <CodeBlock>{`try:
    with open('navn.txt') as fil:
        navn = fil.readline()
except:
    print('Kunne ikke lese navnet fra navn.txt, antar at navnet er Arne.')
    navn = 'Arne'

print('Hei,', navn)`}</CodeBlock>

            Dette programmet antar at navnet til brukeren står skrevet i <Ic>navn.txt</Ic> og prøver å lese ut navnet. Hvis forsøket på å hente ut navnet feiler av en eller annen grunn, skriver vi en feilmelding til skjerm og antar at navnet er Arne. 
            <Db />
            Her ser vi altså et eksempel på hva en <Ic>except</Ic>-blokk kan inneholde - den kan brukes til å fylle inn en verdi i en variabel dersom vi mislyktes å fylle den inn på en annen måte, og til å fortelle brukeren (eller programmereren) at noe gikk galt.

            <NoticeBlock>Dette er bare et eksempel. Du bør ikke anta at brukeren din heter Arne i kritiske applikasjoner.</NoticeBlock>

            <h3>Unntak i funksjonskall</h3>

            La oss snakke litt om hvordan unntak fungerer i Python generelt. Når et unntak blir generert, vil Python finne ut om koden som genererte unntaket ligger i en <Ic>try</Ic>-blokk. Dersom den ikke finner noen <Ic>try</Ic>-blokk som omslutter unntaket inne i den nåværende funksjonen (gitt at koden ligger i en funksjon), hopper den tilbake et hakk, til koden der funksjonen ble kalt, og ser etter en <Ic>try</Ic>-blokk som omslutter funksjonskallet.
            <Db />
            Python fortsetter å søke bakover ett og ett funksjonskall for å finne en <Ic>try</Ic>-blokk til én av to ting skjer:
            <Db />
            Hvis den ikke lenger er inne i en funksjon (dvs. koden den ser på ikke er skrevet i noen funksjon), og dermed ikke kan hoppe bakover til et funksjonskall, kommer Python bare til å krasje programmet, som vi har latt det gjøre tidligere.
            <Db />
            Hvis den omsider finner en <Ic>try</Ic>-blokk, vil den kjøre koden som ligger i den tilsvarende <Ic>except</Ic>-blokken og deretter fortsette på koden etter <Ic>except</Ic>-blokken. Den vil med andre ord hoppe over all kode som ellers ville kjørt etter stedet unntaket ble generert, og from til <Ic>except</Ic>-blokken Python fant.
            <Db />
            For å se hvordan dette kan se ut i praksis, kan vi skrive om koden over til å bruke en funksjon:
            <CodeBlock>{`def finn_navn(filnavn):
    with open(filnavn) as fil:
        navn = fil.readline()

filnavn = 'navn.txt'

try:
    navn = finn_navn(filnavn)
except:
    print('Kunne ikke lese navnet fra', filnavn, ', antar at navnet er Arne.')
    navn = 'Arne'

print('Hei, ', navn)`}</CodeBlock>

        Her har vi lagt all koden for å lese navnet fra fila inn i en funksjon som tar inn filnavnet som argument. Når vi kjører denne koden og det oppstår en feil under åpningen eller lesingen av fila, genereres det et unntak og Python hopper tilbake til funksjonskallet <Ic>finn_navn(filnavn)</Ic> og finner <Ic>try</Ic>-blokken som omslutter den. Sett utenifra vil denne koden gjøre akkurat det samme som koden vi skrev over.
        <Db />
        <Ic>try</Ic>-<Ic>except</Ic>-blokker kan med andre ord fange opp unntak som kastes fra dypt inne i en kjede av funksjonskall. De kan brukes til å dekke en stor mengde kode hvor du er usikker på hvor feilen kommer til å oppstå, men hvor du har en klar formening om hva du kan gjøre om et unntak skulle dukke opp.

        <h3><Ic>try</Ic>-<Ic>except</Ic> for å gjenta en mislykket operasjon</h3>

        Du husker kanskje programmet vårt for å hente alderen til en bruker? Når man tar inn brukerinnputt er det alltid en fare for at innputtet ikke er på formen vi ønsker, for eksempel at brukeren ikke skriver inn et heltall for alder. Vi så tidligere hvordan vi kunne bruke medlemsfunksjoner på strenger for å vite om de inneholder heltall, men vi kan også bruke <Ic>try</Ic>-<Ic>except</Ic>-blokker for å håndtere disse tilfellene:

        <CodeBlock>{`def hent_alder():
    while True:
        try:
            alder = int(input('Skriv inn alderen din: '))
            return alder
        except:
            print('Kunne ikke lese innputt som heltall, prøv igjen')

alder = hent_alder()
print('Om to år er du', alder + 2, 'år gammel')`}</CodeBlock>

        Inne i <Ic>hent_alder</Ic>-funksjonen har vi lagt koden som henter alderen fra brukeren inn i en <Ic>try</Ic>-blokk, som igjen ligger inne i en <Ic>while</Ic>-løkke. Dersom alderinnhentingen i <Ic>try</Ic>-blokken klarer å lese brukerinnputt uten problemer, vil koden komme fram til <Ic>return</Ic>-linja og sende alderen tilbake fra funksjonen. Hvis det oppstår et unntak, hopper Python inn i <Ic>except</Ic>-blokken og forteller brukeren at de må ta seg sammen. Etter at Python har hoppet ut av <Ic>except</Ic>-blokken, kjøres løkkeblokken igjen og brukeren kan gjøre et nytt forsøk.

        <h3>Ulike typer unntak</h3>
        
        <Ic>try</Ic>-<Ic>except</Ic>-blokkene vi har skrevet ovenfor fanger opp alle unntak som skjer i <Ic>try</Ic>-blokken. I praksis kan det hende det bare er noen få unntak vi vil håndtere i <Ic>except</Ic>-blokken, for eksempel når vi vet at mange forskjellige problemer kan oppstå, men vi har bare fornuftige måter å håndtere noen av dem på.
        <Db />
        <Ic>except</Ic>-blokker lar deg spesifisere hvilken type unntak du vil fange opp. Det kan du gjøre slik:
        <CodeBlock>{`try:
    <try-blokk>
except <unntakstype>:
    <except-blokk>`}</CodeBlock>
        Når det nå genereres et unntak i <Ic>try</Ic>-blokken, vil Python lete etter en tilsvarende <Ic>except</Ic>-blokk som tar imot den unntakstypen som ble generert. Den søker bakover i funksjonskallkjeden til den enten finner en slik blokk eller forsvinner ut av programmet.
        <Db />
        Så hvordan vet vi som programmerere hvilken unntakstype vi er interessert i? Når det genereres et unntak som ikke blir håndtert i noen <Ic>except</Ic>-blokk, vil som sagt Python krasje programmet og spytte ut en feilmelding. Feilmeldingen inneholder navnet på unntakstypen. 
        <Db />
        Hvis vi for eksempel prøver å åpne en fil som ikke finnes, vil Python si noe slikt som
        <CodeBlock>{`Traceback (most recent call last):
  File "except.py", line 6, in <module>
    open('john_cena.jpg')
FileNotFoundError: [Errno 2] No such file or directory: 'john_cena.jpg'`}</CodeBlock>
        
        I starten av den nederste linja ser vi typen til unntaket som ble generert: <Ic>FileNotFoundError</Ic>. Dermed kan vi skrive følgende for å håndtere unntaket:

        <CodeBlock>{`try:
    with open('john_cena.jpg') as fil:
        print(fil.name)
except FileNotFoundError:
    print('Fant ikke John Cena')`}</CodeBlock>
        
        Du kan også ta imot selve unntaket i en variabel. Det kan du gjøre ved å legge til en <Ic>{`as <variabelnavn>`}</Ic> etter unntakstypen. Du kan bruke denne variabelen til å skrive feilmeldingen til skjerm, samtidig som du håndterer unntaket selv:
        <CodeBlock>{`try:
    with open('john_cena.jpg') as fil:
        print(fil.name)
except FileNotFoundError as e:
    print('Melding i unntaket:', e)
    print('Fant ikke John Cena')`}</CodeBlock>
        
        Denne koden skriver ut
        <CodeBlock>{`Melding i unntaket: [Errno 2] No such file or directory: 'john_cena.jpg'
Fant ikke John Cena`}</CodeBlock>

        på skjermen.
        <Db />

        Dersom du spesifiserer typen <Ic>Exception</Ic>, vil <Ic>except</Ic>-blokken fange opp unntak av alle typer. Dette kan du bruke til å få en variabel som representerer unntaket og som du kan bruke til å finne typen til unntaket dersom du er usikker på hva det er:
        <CodeBlock>{`try:
    <kode som gjør noe farlig>
except Exception as e:
    print('Fikk et unntak av typen', type(e))`}</CodeBlock>

        Helt til slutt nevner vi at man kan sette opp flere <Ic>except</Ic>-blokker som fanger opp forskjellige unntakstyper for samme <Ic>try</Ic>-blokk. Dette ser for eksempel slik ut:
        <CodeBlock>{`try:
    <try-blokk>
except <første unntakstype>:
    <første except-blokk>
except <andre unntakstype>:
    <andre except-blokk>
...`}</CodeBlock>

        Det kan nok ta en stund før koden du skriver har nok kompleksitet til at du trenger <Ic>try</Ic>-blokker som dette, men... Her er den i hvertfall.
        
        <h2>Oppsummering</h2>

        Det var alt for denne gang! 
        <Db />
        Da vi snakket om filer i denne posten, begrenset vi oss til tekstfiler. Man kan gjøre mange interessante ting med tekstfiler alene, men horisonten for hva som er mulig med filer kommer til å utvides i neste post, der vi skal innom flere forskjellige typer filer.
        <Db />
        Vi snakket også om unntakshåndtering, som kan være nyttig i større programmer med usikkerhetsmomenter for å sikre at Python ikke krasjer koden unødvendig. Ofte klarer man seg fint uten å håndtere unntak selv, men <Ic>try</Ic>-<Ic>except</Ic>-blokker er uansett fint å ha i bakhånd.
        <Db />
        I neste post introduserer vi <i>moduler</i>, som lar oss bygge programmer ved hjelp av kode skrevet av andre. Dette åpner opp et hav av muligheter for hva programmene våre kan gjøre, og vi skal ta med en del varierte eksempler på moduler for å gi et inntrykk av utvalget som finnes der ute.

        <h2>Oppgaver</h2>

        1. Skriv et program som leser en fil og skriver til en ny fil hvor alle linjene er i motsatt rekkefølge; siste linje i den originale fila kommer først in den nye fila osv.
        <Db />
        2. Lag et program som teller opp hvor mange ganger bokstaven 'e' finnes i en gitt fil.
        <Db />
        3. <a href='/files/countries_population.txt' download>Her er en fil</a> som inneholder alle verdens land (på engelsk) og korresponderende folketall per 2021 (kilde: <a href='http://www.worldometers.info'>worldometers.info</a>). Bruk dataene i denne fila og lag programmer som
        <br />
        a. Skriver ut landene til skjerm sortert alfabetisk
        <br />
        b. Skriver ut navn på alle land som har et folketall på mer enn 10 millioner.
        <br />
        c. Finner ut hvor mange mennesker det er totalt på denne planeten.
        <br />
        Tips til splitting av linjene: I denne fila er det to mellomrom mellom hvert land og korresponderende folketall, mens det bare er ett mellomrom mellom ord i et landsnavn som består av flere enn ett ord. 

        </PostWrapper>
    </>
);

export default FilesAndExceptionsNo;