import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const HelloWorldNo = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    I denne posten skal vi sette opp alt som trengs for å jobbe med Python. Etter å ha jobbet oss
    gjennom denne posten, skal vi ha

    <ul>
    <li>Installert Python</li>
    <li>Valgt en passende teksteditor</li>
    <li>Skrevet vårt første program</li>
    <li>Kjørt vårt første program</li>
    </ul>
    
    Programmet vi kommer til å lage vil være veldig minimalt - alt det skal gjøre er å skrive "Hallo, verden!" til skjermen
    og så avsluttes. Det er en tradisjon at innføringer til programmeringsspråk
    starter med et slikt "hello world"-program. Programmet i seg selv vil ikke være veldig 
    spennende, men når du ser at programmet ditt printer "Hallo, verden!" på skjermen,
    vet du med sikkerhet at du har fullført alle stegene over og kan gå i gang med å lære Python i neste post.

    <Db />
    
    Det er dessverre forskjeller i framgangsmåten for installasjon og oppsett av Python som avhenger av operativsystem
    og andre faktorer. Derfor er det praktisk 
    umulig å få plass til detaljer om installasjon og oppsett for alle mulige datamaskiner. I tillegg 
    kan små feilsteg fort føre en uerfaren bruker på villspor. Hvis du sliter med å komme 
    deg forbi et av stegene under, vil jeg derfor anbefale at du enten prøver å gå gjennom stegene på nytt for å 
    forsikre deg om at du ikke mangler noen steg, eller søke på Internett etter løsninger
    på konkrete problemer du får.

    <h2>Installasjon</h2>
    
    Framgangnsmåten for å installere Python avhenger sterkt av hvilket operativsystem du bruker.
    Denne seksjonen vil derfor være delt etter operativsystemer - du trenger bare å lese den delen
    som svarer til det operativsystemet du bruker. Er du usikker på hvilket operativsystem du bruker,
    har jeg skrevet tommelfingerregler for å hjelpe deg med å finne ut av det i underoverskriftene.

    <h3>Windows (om du ikke har et bilde av et eple på maskinen din)</h3>
    Gå til <a href="https://python.org">python.org</a> og trykk
    på "Downloads" under Python-logoen. Her vil du finne en stor, gul (i skrivende stund, i det minste) knapp for å laste ned
    den nyeste versjonen av Python. Denne innføringen vil fokusere på Python 3, som er den nyeste versjonen
    i det jeg skriver dette. Om du leser dette langt inn i framtiden, kan det være lurt å dobbeltsjekke at
    det er Python 3 du laster ned.
    <Db />
    Trykk "Lagre fil", vent til den er lastet ned, og klikk på nedlastningen når den er ferdig. Hvor du klikker på nedlastningen,
    er avhengig av hvilken nettleser du bruker, men nedlastninger finner du som regel øverst til høyre eller i bunnen av nettleservinduet.
    Filen er en installasjonsfil, som vil hete noe sånt som python-3.X.X-XXX.exe hvor X-ene er avhengig av versjon og 
    operativsystemtype du har.
    <Db />
    Når du har klikket på installasjonsfilen, vil du få opp et vindu som hjelper deg med installasjonen. Merk at
    du trenger administratortillatelse for å installere Python. Dersom du vil tilpasse installasjonen ("Customize Installation"),
    bør du være obs på at senere kapitler i denne innføringen kommer til å bruke IDLE og Pip, slik at du bør passe på at disse er blant komponentene du installerer.
    Hvis du vil bruke Python fra kommandolinjen, må du passe på at "Add Python 3.X to PATH"-boksen nederst i vinduet er sjekket. 
    Dette er ikke nødvendig for å følge denne introduksjonen til Python. Du kan trykke
    "Install Now" dersom du ikke har noen sterk formening om hvor eller hvilke komponenter som skal installeres. 
    <Db />
    Etter å ha godkjent installasjonen som administrator, vil programmet utføre installasjonsprosessen på egen hånd.
    Du kan lukke programmet når det er ferdig. 

    <h3>MacOS (om du har bilde av et eple på maskinen)</h3>
    
    Før vi begynner, har jeg en innrømmelse å komme med: Det er flere år siden jeg rørte ved en Mac, og jeg har aldri
    eid en. Derfor vil disse instruksjonene være langt mindre detaljerte enn de for Windows, bare for å åpne opp for minst 
    mulig forvirring. Stegene vil grovt sett gå ut på å laste ned et installasjonsprogram, slik som på Windows.
 
    <Db />
    Igjen, gå til <a href="https://python.org">python.org</a> og trykk "Downloads". Under "Stable Releases", se under den
    øverste Python-versjonen, og last ned og lagre ett av installasjonsprogrammene ("Download macOS 64-bit XXX installer").
    Etter at programmet er lastet ned, finn nedlastningen i nettleseren (typisk på bunnen av vinduet, eller øverst til høyre), og åpne den.

    <Db />
    Herfra er du litt på egen hånd. Trolig vil installasjonsprogrammet hjelpe deg på vei. Dersom du sitter fast,
    anbefaler jeg å prøve å finne inspirasjon i Windows-seksjonen over, eller søke etter svar på Internett.

    <h3>Linux (om du er usikker på om du har Linux, er svaret antakeligvis nei)</h3>
    
    Disse instruksjonene vil gjelde for Debian-baserte distribusjoner (inkluderer Ubuntu og Linux Mint). Dersom du bruker 
    en distribusjon som ikke er Debian-basert, vil du sannsynligvis klare å installere Python gjennom det
    vanlige pakkesystemet for den distribusjonen (f. eks. <Ic>yum</Ic> i stedet for <Ic>apt</Ic>).
    <Db />
    Åpne en terminal og skriv 
    <CodeBlock>{`$ sudo apt install python`}</CodeBlock> 
    uten <Ic>$</Ic> i 
    starten. Skriv inn administratorpassordet, og vent til det er ferdig installert.

    <h2>Teksteditoren</h2>
    
    Teksteditoren er programmet vi bruker når vi skriver programmer med programmeringsspråk. Et kjennetegn ved teksteditorer er at de
    lar oss skrive ren tekst til en fil, i motsetning til f. eks. Microsoft Word, som i tillegg lagrer informasjon relatert til skriftstørrelse, 
    skrifttype, farger osv. Vi vil altså at filene vi lagrer koden vår i, skal inneholde utelukkende tekst, og 
    ingen tilleggsinformasjon om f. eks. formatering. 
    <Db />
    Et eksempel på et program som kan egne seg som en teksteditor, er Windows' Notepad, som kun opererer på ren tekst.
    Likevel er mer spesialiserte kodeeditorer ofte å foretrekke. De kan for eksempel inneholde "syntaks-farging"
    som viser visse ord i forskjellige farger for å hjelpe programmereren med å lese koden. Andre funksjoner som 
    er typiske for en kodeeditor, er innebygd navigasjon i filhierarkiet, feilsøking og ordforslag mens du skriver koden.
    <Db />
    <h3>IDLE</h3>
    For denne Python-introduksjonen kommer jeg til å anbefale IDLE, som er en enkel kode-editor beregnet på Python.
    Den inneholder ikke mange luksøriøse hjelpemidler. Årsaken til at jeg likevel vil begynne med denne editoren, er
    at det gjør det lettere å kun fokusere på koden. Av funksjonene IDLE <i>har</i>, vil syntaks-farging og filkjøring 
    være de vi kommer til å benytte oss mest av.
    <Db />
    IDLE installeres sammen med Python, så du skal allerede være klar for å ta det i bruk! Søk på "IDLE" i start-menyen på maskinen
    din, og du får opp et vindu med litt tekst i. Vi tar utgangspunkt i dette vinduet i neste seksjon.
    
    <h3>Andre editorer</h3>    
    Du står fritt til å bruke andre editorer enn IDLE, men instruksjonene for oppretting og lagring av kodefiler, 
    kommer til å ta utgangspunkt i IDLE. Det er mange editorer å velge mellom, og de fleste fungerer på alle populære operativsystemer:
    Visual Code, Atom Editor, Sublime er vanlige valg. De har blant annet filnavigasjon innebygget, samt diverse utvidelser for å kjøre
    Python-programmer. Et annet alternativ for å kjøre Python-programmer som er uavhengig av hvilken editor du bruker, er å kjøre <Ic>python {`<filnavn>`}</Ic> i
    terminalen, hvor <Ic>{`<filnavn>`}</Ic> er navnet på programfilen du vil kjøre. 

    <Db />
    Noen editorer inneholder funksjonalitet for å håndtere store prosjekter med mange filer, versjonshåndtering og feilsøking direkte i editoren. 
    Disse kalles gjerne IDEer (Integrated Development Environment), og kan gjøre livet enklere når du har mye kode
    å tenke på. 
    Et eksempel på en Python-IDE er Spyder.
    Jeg vil uansett gjenta anbefalingen om å holde deg til en enklere editor dersom du er en nybegynner, til du føler du har
    fått et godt grep om Python.

    <h2>Programmering - omsider</h2>
    
    Endelig er det på tide å gjøre det vi kom hit for! Det er på tide å lage vårt første program.
    <Db />
    Vi begynner med å lage en ny fil som skal inneholde koden vår. I IDLE gjøres  det ved å trykke "File"-&gt;"New File" 
    øverst til venstre i vinduet. Alternativt kan du trykke <kbd>ctrl+N</kbd> (<kbd>cmd+N</kbd> på Mac). Du får da opp et nytt vindu uten innhold.
    Det er her vi skriver programmet vårt.
    I vinduet skriver du følgende:
    <CodeBlock>
        print('Hallo, verden!')
    </CodeBlock>
    Dette er altså det første programmet vårt! Det er viktig at både parenteser og apostrofer er som vist over.
    Som nevnt er dette et minimalt program som kun har til hensikt å hjelpe deg med å forstå hvordan vi jobber
    når vi lager programmer. Jeg skal ikke bruke mye tid på forklare koden her ettersom det er dét resten av denne innføringen er til for,
    men kort fortalt vil den skrive teksten "Hallo, verden!" (uten hermetegn) til skjermen.
    <Db />
    Neste steg er å lagre filen. Trykk på "File"-&gt;"Save" øverst i vinduet, alternativt <kbd>ctrl+S</kbd> (<kbd>cmd+S</kbd>).
    Velg et sted å lagre filen. Det spiller ingen rolle hvor du lagrer filen, men det kan være lurt å legge den et sted der du klarer
    å finne den igjen. For eksempel kan du lage en ny mappe under Dokumenter som heter "Python", og lagre den der.
    Gi den et informativt navn, f. eks. <Ic>hallo_verden.py</Ic>, og lagre. Det er viktig at filen slutter på ".py" for 
    at den skal bli gjenkjent som en Python-fil.
    <Db />
    Da er det bare én ting som gjenstår...

    <h2>Kjør!</h2>
    For å kjøre programmet, trykker du på "Run"-&gt;"Run Module". Et nytt vindu vil dukke opp, med en del tekst. Nær bunnen
    av teksten finner du forhåpentligvis resultatet av kjøringen vår: 
    <CodeBlock>
        Hallo, verden!
    </CodeBlock>
    Og dermed har vi skrevet og kjørt vårt første program! Du kan lukke dette nye vinduet når du er ferdig med å se
    resultatet av kjøringen.
    <Db />
    Hvis du ikke får dette resultatet, pass på at du har skrevet programmet i det forrige vinduet akkurat slik som det
    er gjengitt over. Hvis du får en annen form for feilmelding, vil jeg igjen anbefale å ta Internett til hjelp for å finne
    en løsning.
    
    <h2>Oppsummering</h2>

    I løpet av denne posten har du fått installert Python, laget en Python-fil, kjørt Python-fila, og sett resultatet.
    Om du har fått til alt så langt, betyr det at vi er klare til å gå i gang med selve det å lære Python!
    <Db />
    I neste post skal vi se på interaktiv Python og bruke det til å lære om variabler.
    </>
);

export default HelloWorldNo;