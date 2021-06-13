import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const FilesNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hei igjen! I denne posten skal vi se på filer og hvordan vi kan lage og bruke dem med Python. Hittil har vi belaget oss på at brukeren har sendt inn ekstern informasjon til programmet, men det er grenser for hvor lenge vi klarer å få en bruker til å sitte å mate programmet vårt. Her skal vi blant annet lære om hvordan vi kan lese informasjon fra filer, som vil la oss øke mengden data vi har å jobbe med dramatisk.
            <Db />
            Sannsynligvis har du allerede en formening om hva filer er i datasammenheng, ettersom hvert Python-program vi har skrevet må være lagret i en fil for å kunne kjøres. For denne postens formål kommer vi bare til å tenke på filer som en beholder med data som ligger på harddisken til maskinen og som har et eget navn. Filer kan inneholde data i et hvilket som helst format, for eksempel bilde, lyd eller regneark. Her kommer vi bare til å diskutere filer som inneholder ren tekst.

            <h2>Å lese en fil</h2>
            
            For å lese innholdet av en fil og bruke det i programmet vårt, trenger vi først en fil å jobbe med. I dette eksempelet kommer vi til å bruke sangteksten til en klassiker, som du kan <a href="/files/bæbæ_lille_lam.txt" download>laste ned her</a>. Legg denne filen i samme mappe som programkoden vi skal skrive under, ligger. Hvis du ikke vet hvor filen havnet da du lastet den ned, ligger den sannsynligvis i en mappe kalt <i>Nedlastninger</i> / <i>Downloads</i>. Legg merke til at filen kun inneholder ren tekst, uten noen form for formatering, skriftstørrelse, farger eller lignende, som man for eksempel ville hatt i en dokumentfil (f.eks. <Ic>.docx</Ic> eller <Ic>.pdf</Ic>). Dette er nemlig en <Ic>.txt</Ic>-fil, som ikke inneholder noe annet enn en rekke med menneskeleselige tegn og bokstaver. Denne enkle formen for filer egner seg godt for å demonstrere filoperasjoner i Python fordi innholdet kan behandles direkte som en streng.
            
            <Db />
            
            Når vi skal skrive til eller lese fra en fil, må vi først <i>åpne</i> den. Dette signaliserer til operativsystemet at den skal åpne en "kanal" til eller fra filen og inn til programmet vårt, og gir oss en referanse til denne kanalen. For å åpne en fil kan vi kalle <Ic>{`open(<filnavn>)`}</Ic>. Kallet returnerer et "filobjekt" som vi kan bruke senere til å lese fra eller skrive til filen. Dersom filen ikke finnes, vil Python passe på å kaste en feilmelding på deg.

            <Db />
            For å åpne fila vi lastet, kaller vi altså bruke
            <CodeBlock>{`fil = open('bæbæ_lille_lam.txt')`}</CodeBlock>
            Nå har vi sagt ifra til operativsystemet at vi vil lese filen <Ic>bæbæ_lille_lam.txt</Ic>, og mottatt et filobjekt som vi har lagt i variabelen <Ic>fil</Ic>. Herifra har vi flere muligheter for å lese innholdet i fila. 
            
            <h3>Les alt innholdet samtidig</h3>

            For å lese alt innholdet i filen på én gang og legge resultatet i en streng, kan vi bruke medlemsfunksjonen <Ic>read()</Ic> på filobjektet:

            <CodeBlock>{`filinnhold = fil.read()`}</CodeBlock>

            Vi kan sjekke at <Ic>filinnhold</Ic> nå inneholder all teksten i fila ved å skrive den til skjerm med f.eks. <Ic>print(filinnhold)</Ic>.
            <Db />
            Man bør være litt forsiktig når man bruker <Ic>read()</Ic>-funksjonen slik som vi har gjort over fordi det ber Python om å laste alt filinnholdet inn i minnet samtidig. Dersom filen tar mer plass enn du har tilgjengelig i minnet, kan du ende med at maskinen henger en stund før programmet til slutt krasjer. Det er ikke farlig, men kan være fryktelig irriterende. For moderne maskiner blir dette først et problem når jobber med filer på flere gigabyte, altså milliarder av tegn, noe som ikke skjer ofte.

            <h3>Les én og én linje</h3>

            En alternativ måte å lese gjennom tekst-filer på, er å bruke <Ic>for</Ic>-løkker. Når vi bruker <Ic>for</Ic>-løkker direkte på filobjekter for tekstfiler, vil iterasjonsvariabelen settes til én og én linje i fila. 
            
            <NoticeBlock>Obs: Du kan ikke bruke både <Ic>read()</Ic>-funksjonen og <Ic>for</Ic>-løkkeiterasjon på det samme filobjektet. Filobjektet "husker" hva som har blitt lest og fortsetter fra der den slapp i neste leseoperasjon. Derfor må du enten erstatte <Ic>read()</Ic>-kallet over med løkken, eller lukke fila og åpne en ny (se under).</NoticeBlock>

            Her er et eksempel hvor vi skriver filen over ut til skjerm ved hjelp av en <Ic>for</Ic>-løkke:
            <CodeBlock>{`for linje in fil:
    print(linje)`}</CodeBlock>
            Resultatet skal bli det samme som da vi skrev ut filinnholdet i eksempelet over.

            <h3>Lukk fila</h3>

            Når man er ferdig med operasjonene man skal gjøre på en fil, bør man <i>lukke</i> den. Dette gjør vi ved å kalle medlemsfunksjonen <Ic>close()</Ic> på filobjektet:
            <CodeBlock>{`fil.close()`}</CodeBlock>
            Dette er for å be operativsystemet om å stenge "kanalen" mellom fila og programmet vårt, og for å sørge for at alle operasjoner på fila er avsluttet. I moderne operativsystemer er det sjeldent at det fører til problemer når man glemmer å lukke en fil etter bruk ettersom den blir lukket med makt automatisk når programmet er ferdig. Det er likevel lurt å huske å lukke fila, spesielt etter skriveoperasjoner, for å sørge for at alt som skulle skrives til fila faktisk blir skrevet. 
            
            <h2>Å skrive til en fil</h2>

            Når vi kaller <Ic>open()</Ic> på en fil, må vi bestemme om fila skal åpnes for lesing eller skriving. Dette gjør vi ved å gi en verdi for det andre argumentet til <Ic>open()</Ic>, som spesifiserer <i>moduset</i> til fila. For å åpne fila for lesing, kan vi bruke <Ic>'r'</Ic> som andre argument. Dette er også standardverdien til dette argumentet, som er grunnen til at vi ikke trengte å bruke dette argumentet i eksempelet om fillesing over.
            <Db />
            For å åpne en fil for <i>skriving</i>, må vi bruke modusargumentet <Ic>'w'</Ic>. Dersom fila som er spesifisert i første argument ikke eksisterer, kommer programmet til å lage fila først, og så åpne den for skriving. Vær forsiktig når du bruker modusargumentet <Ic>'w'</Ic> på filer som allerede eksisterer, ettersom det vil fullstending overskrive innholdet i fila selv om du ikke gjør noen skriveoperasjoner!
            <Db />
            Når vi har åpnet en fil for skriving, kan vi bruke medlemsfunksjonen <Ic>write()</Ic>, med strengen vi vil skrive som argument. Merk at dette bare vil legge strengen direkte inn i filen, uten å legge til et linjeskift eller noe annet tegn på slutten. Om du vil ha med et linjeskift, kan du legge til <Ic>'\\n'</Ic> på slutten av strengen.
            <Db />
            Her er et eksempelprogram der vi leser fra fila vi brukte tidligere og lager en ny fil som inneholder annenhver linje fra den første fila:
            <CodeBlock>{`innfil = open('bæbæ_lille_lam.txt')
    </CodeBlock>
            
        </PostWrapper>
    </>
);

export default FilesNo;