import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader, NoticeBlock } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const LoopsNo = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    I denne posten skal vi se på løkker. Løkker er på mange måter den største grunnen
    til at programmering er nyttig til mange forskjellige formål. Løkker gjør det mulig 
    å kjøre den samme koden mange ganger, noe som gjør oss i stand til å prosessere store
    mengder data raskt.

    <h2><Ic>while</Ic>-løkker</h2>

    Helt spesifikt skal vi gå igjennom <Ic>while</Ic>-løkker i denne posten. Det er også en annen form for
    løkker, <Ic>for</Ic>-løkker, som vi kommer til å gå igjennom i en senere post.
    <Db />
    Løkker er ikke veldig vanskelige å forstå, men det kan ta lang tid å bli vant til å tenke
    og jobbe med løkker. Derfor introduseres de her i en egen post, så vi har plass til
    å vise en del tilfeller hvor løkker hører hjemme.
    <Db />
    En <Ic>while</Ic>-løkke er på formen
    <CodeBlock>
        {`while <betingelse>:
    <løkkeblokk>`}
    </CodeBlock>
    
    Den starter med en linje som begynner med <Ic>while</Ic> fulgt av en betingelse, og med et kolon på slutten. Deretter følger 
    en innrykket blokk, akkurat som i hvis-setningen vi så på i forrige post.
    <Db />
    <Ic>while</Ic>-løkken blir kjørt som følger: Når Python kommer til linjen som begynner på <Ic>while</Ic>, sjekker den om 
    betingelsen er sann. Hvis den er sann, kjører Python gjennom koden i løkkeblokken. Etter at den har nådd slutten 
    på den innrykkede blokken, hopper den <i>tilbake</i> til <Ic>while</Ic>-linja og sjekker betingelsen på nytt.
    Dersom betingelsen er sann, kjører den igjennom løkkeblokken på nytt, og fortsetter slik igjen og igjen helt
    til betingelsen er usann når Python leser <Ic>while</Ic>-linja. Når dét skjer, fortsetter Python fra første 
    linje <i>etter</i> løkkeblokken.
    <Db />
    Én kjøring av løkkeblokken kaller vi en <i>iterasjon</i>, som 
    er begrepet vi kommer til å bruke framover.
    <Db />
    Vi kan hoppe rett på et eksempel:
    <CodeBlock>
        {`i = 0
while i < 5:
    print('Nå er i = ' + str(i))
    
    i += 1`}
    </CodeBlock>
    
    Kjører vi denne koden, får vi følgende utputt:
    <CodeBlock>
        {`Nå er i = 0
Nå er i = 1
Nå er i = 2
Nå er i = 3
Nå er i = 4`}
    </CodeBlock>

    Så, hva skjedde her? 
    <Db />
    Først definerer vi en variabel <Ic>i</Ic> til å være 0. <Ic>i</Ic> er
    en variabel vi kommer til å øke for hver gang vi går igjennom løkken,
    og som vi bruker i betingelsen i <Ic>while</Ic>-linja.
    Deretter kommer vi til <Ic>while</Ic>-linja, og Python sjekker
    om <Ic>i</Ic> er mindre enn 5. Det er den såvisst, og vi går
    inn i løkkeblokken. Her kjøres en <Ic>print()</Ic>-setning,
    som gir opphav til den første linja vi ser i utputt, som
    forteller oss at <Ic>i</Ic> er 0.
    <Db />
    Til slutt i <Ic>while</Ic>-blokken er en linje vi ikke har sett 
    før: <Ic>i += 1</Ic>. Dette er bare en kortform for <Ic>i = i + 1</Ic>,
    som altså gjør at verdien til variabelen <Ic>i</Ic> økes med 1.
    <Db />
    Deretter fortsetter Python fra <Ic>while</Ic>-linja igjen, 
    men denne gangen har variabelen <Ic>i</Ic> verdien 1.
    <Db />
    Slik fortsetter Python kjøringen av løkkeblokken. Som vi ser
    i utputt, kjøres <Ic>print()</Ic>-linja hver gang
    Python går igjennom løkkeblokken, og vi ser også
    at <Ic>i</Ic> økes for hver iterasjon.
    <Db />
    Den siste gangen løkkeblokken kjøres, er <Ic>i</Ic> lik 4.
    Verdien skrives til skjerm og <Ic>i</Ic> økes til 5.
    Når Python så går tilbake til <Ic>while</Ic>-linja, finner
    den at betingelsen ikke lenger er oppfylt 
    (ulikhetsoperatoren <Ic>{`<`}</Ic> evalueres til usant hvis
    de to sidene har samme verdi. Hvis vi ville inkludert tilfellet
    hvor de var like, kunne vi brukt <Ic>{`<=`}</Ic>).
    Dermed hopper Python til etter løkkeblokken, og programmet avsluttes.
    <Db />
    Legg merke til at vi bare trenger å endre ett tall i programmet for å 
    bestemme hvor mange ganger programmet trenger å kjøre gjennom
    løkkeblokken. Dette er et gjennomgående mønster i programmering - 
    hvis du først klarer å gjøre noe én gang, er det veldig lett å 
    gjøre det mange ganger. Anstrengelsen for å gjøre ting mange ganger
    ligger ikke på programmererens skuldre, men
    blir tatt hånd om av datamaskinen. 
    Prøv f.eks. å endre 5-tallet i programmet over til tallet 100 og
    la Python gjøre resten av jobben!
    <Db />
    Det kan være litt lite intuitivt at vi ikke får ut verdien 5 her
    når vi har sagt at vi teller opp til 5, men om du leser forklaringen
    over nøye, blir du nok til slutt enig i at det er det koden skal
    gjøre. Når man tenker på løkker i programmering, er det fort
    gjort å gjøre en feilberegning rundt hvilke verdier som
    brukes i siste iterasjon av en løkke, på engelsk har
    det fått det egne begrepet <b>off-by-one-error</b>.
    <Db />
    En grei måte å unngå slike feil på, er å tenke 
    nøye gjennom hva som skjer i løkken i <i>første</i> og 
    i <i>siste</i> iterasjon, og passe på at det stemmer med 
    hensikten du har med koden.

    <NoticeBlock>
        Når du skriver egne <Ic>while</Ic>-løkker, er det 
        fort gjort å glemme å øke variabelen du bruker i
        løkkebetingelsen (ofte kalt <i>iterasjonsvariabelen</i>). 
        I slike tilfeller kan du ende opp
        med at Python kjører løkken
        i det uendelige, siden betingelsen aldri endrer seg og 
        forblir sann.
        Hvis du ser at programmet ditt bruker uforholdsmessig lang
        tid eller spyr ut ekstreme mengder utputt,
        er det sannsynligvis dette som har skjedd. Ikke få panikk,
        det er ikke farlig!
        <Db />
        Får å avslutte en slik uendelig løkke, kan du avbryte 
        programmet. I IDLE gjøres dette med <Ic>{`Shell -> Restart Shell`}</Ic>,
        eller <Ic>Ctrl+F6</Ic> (<Ic>Cmd+F6</Ic> på Mac) på tastaturet.
        Om du kjører programmet i en terminal, kan du ofte bruke <Ic>Ctrl+C</Ic>.
    </NoticeBlock>
    
    <h2>Vi legger en blokk inne i en blokk</h2>
    
    I det følgende eksempelet kommer vi til å bruke <Ic>%</Ic>-operatoren, også kalt 
    restoperatoren. Den brukes med heltall, og gir resten etter divisjon av venstresiden på høyresiden.
    Det betyr f. eks. at 5 % 3 gir 2 som svar, og 7 % 2 gir 1.
    <Db />
    Om du ikke føler deg hundre prosent sikker på hvordan restregning fungerer, så er ikke det veldig 
    viktig nå - det du trenger å vite, er at hvis <i>a</i> % <i>b</i> gir svaret 0, så er <i>a</i> delelig 
    på <i>b</i>, og spesielt betyr dette at hvis <i>a</i> er et partall, vil <i>a</i> % 2 gi 0 som resultat.
    <Db />
    Se på dette programmet:

    <CodeBlock>
        {`i = 0
while i <= 10:
    if i % 2 == 0:
        print(str(i) + ' er et partall')

    i += 1`}
    </CodeBlock>
    
    Her har vi slengt en hvis-setning inn i <Ic>while</Ic>-løkken vår, som gjør at koden vår 
    skriver alle partall fra og med null, til og med ti til skjermen:
    <CodeBlock>{`0 er et partall
2 er et partall
4 er et partall
6 er et partall
8 er et partall
10 er et partall`}</CodeBlock>

    Det er egentlig ikke noe mystisk med denne koden, vi må bare puste rolig
    og holde tunga rett i munnen for å passe på at vi 
    henger med på det som skjer:
    <Db />
    Når Python kommer inn i løkka for første gang, er <Ic>i</Ic> lik
    0. 0 er et partall, så <Ic>i % 2 == 0</Ic> evalueres til sant, slik
    at hvis-blokken kjøres og vi får en linje ut på skjermen.
    Deretter tar hvis-blokken slutt, fordi neste linje har mindre
    innrykk enn <Ic>print()</Ic>-linja. Dermed kjøres <Ic>i += 1</Ic> i
    hver iterasjon av løkka, uavhengig av om <Ic>i</Ic> er et partall eller 
    ikke: I neste iterasjon er <Ic>i</Ic> lik 1, som ikke er et partall, slik at
    hvis-blokken ikke kjøres, men verdien til <Ic>i</Ic> økes til 2 likevel.
    <Db />
    Legg merke til at vi har brukt <Ic>{`<=`}</Ic> i <Ic>while</Ic>-sjekken
    for å sørge for at tallet 10 blir tatt med.
    <Db />

    Som vi kan se over, er det ikke noe problem å kombinere <Ic>while</Ic>-løkker
    med en hvis-setning. Det er fritt for å legge flere hvis-setninger
    inn i løkkeblokken. Vi kan for eksempel skrive om programmet over
    til å gi særskilt behandling til tallet 2:

    <CodeBlock>
        {`i = 0
while i <= 10:
    er_partall = i % 2 == 0;
    if er_partall:
        if i == 2:
            print('2 er et partall, men det vet vi jo allerede')
        else:
            print(str(i) + ' er et partall')

    i += 1
        `}
    </CodeBlock>
    
    Her har vi lagt til en ny hvis-setning inne i den foregående 
    hvis-setningen. Denne hvis-setningen blir bare sjekket av 
    Python hvis betingelsen i den første hvis-setningen er
    sann. Det eneste den gjør, er å sjekke om <Ic>i</Ic> har
    verdien 2. Hvis ja, skriver den en tilpasset melding.
    Hvis ikke, skriver Python det samme som før. Utputt blir dermed:
    <CodeBlock>{`0 er et partall
2 er et partall, men det vet vi jo allerede
4 er et partall
6 er et partall
8 er et partall
10 er et partall`}</CodeBlock>
    
    En oppmerksom leser så kanskje også at vi laget en ny variabel 
    i denne koden over: <Ic>er_partall</Ic>, som vi har satt til
    å være lik betingelsen <Ic>i % 2 == 0</Ic>. Vi har deretter
    brukt variabelen <Ic>er_partall</Ic> direkte i hvis-setningen.
    Når vi lagrer en betingelse i en variabel, får variabelen
    datatypen <Ic>bool</Ic> fra engelsk <i>boolean</i>. En boolsk
    variabel er enten sann - i Python <Ic>True</Ic> - eller usann - <Ic>False</Ic>.
    Stor forbokstav er viktig i både <Ic>True</Ic> og <Ic>False</Ic>.
    <Db />
    Det gjør ingen forskjell i programmets oppførsel at vi
    legger betingelsen inn i en variabel først, men det kan
    gjøre koden lettere å lese. Med denne omskrivingen er det 
    klart for en leser at poenget med <Ic>i % 2 == 0</Ic> i koden
    er å sjekke om et tall er et partall. Vi kommer
    ikke til å bry oss så mye om lesbarhet i denne bloggserien, men
    det er noe som er veldig relevant om du vil gjøre det mulig
    for andre å kunne samarbeide på koden din.

    <h2><Ic>break</Ic> og <Ic>continue</Ic></h2>

    Noen ganger vet vi ikke hvor lenge løkken vår kommer 
    til å måtte kjøre, og noen ganger vil vi hoppe over iterasjoner.
    De to kommandoene <Ic>break</Ic> og <Ic>continue</Ic> kommer oss 
    til unnsetning - de er 
    laget for å gi oss mer kontroll over hvordan løkken kjøres.

    <h3><Ic>break</Ic></h3>
    
    Når du skriver <Ic>break</Ic> på en linje inne i en løkke,
    avsluttes løkken, og Python fortsetter kjøringen av programmet
    etter løkkeblokken. La oss si at vi vil finne det første tallet
    større enn null som er delelig på både 24 og 17. Da kan vi skrive koden
    slik:

    <CodeBlock>{`i = 1
while True:
    if i % 24 == 0 and i % 17 == 0:
        break
    i += 1

print('Tallet ' + str(i) + ' er delelig på 24 og 17')`}</CodeBlock>

    Det første du kanskje legger merke til, er at vi har 
    skrevet <Ic>True</Ic>, altså "sant" i stedet for en betingelse
    i <Ic>while</Ic>-setningen. Dette fungerer helt fint, 
    fordi <Ic>True</Ic> i seg selv er en betingelsesverdi (en
    boolsk verdi), som alltid evalueres til sann. I praksis betyr
    dette at hver gang Python leser <Ic>while</Ic>-setningen for 
    å finne ut om den skal kjøre løkkeblokken, finner den at svaret
    er <i>ja</i>. Hvis vi ikke er forsiktige, kan dette føre til at
    løkken aldri avsluttes - men det har vi naturligvis tenkt på:
    <Db />
    Hvis-setningen inne i løkkeblokken evalueres til sann
    dersom tallet vårt er delelig både på 24 og på 17 - som
    er akkurat det vi ser etter. Så når 
    denne betingelsen er sann, kjører vi umiddelbart <i>break</i> for
    å avslutte løkken. I dette tilfellet vet vi at <Ic>i</Ic> inneholder
    tallet vi er ute etter, slik at vi kan skrive det til 
    skjerm etter løkken.
    <Db />
    Utputt fra programmet over blir:
    <CodeBlock>{`Tallet 408 er delelig på 24 og 17`}</CodeBlock>
    Det er vel og bra - men nå lurer vi på; hva er det <i>neste</i> tallet
    som oppfyller samme betingelse? Vi skriver om programmet
    til å søke etter det neste tallet. Én måte å få til det 
    på, er å øke startverdien til 409, og begynne søket derfra,
    men vi skal også gjøre det med <Ic>continue</Ic>.

    <h3><Ic>continue</Ic></h3>
    
    Når vi skriver <Ic>continue</Ic> inne i en løkke,
    starter Python direkte på neste iterasjon, dvs. går tilbake
    til <Ic>while</Ic>-linja og evaluerer betingelsen igjen, og
    fortsetter derfra. Dette kan vi
    bruke til å <i>hoppe</i> over iterasjoner vi ikke er interesserte
    i. For å finne det <i>andre</i> tallet som er delelig på både
    24 og 17, etter å ha funnet ut at det første er 408, er som følger:

    <CodeBlock>
        {`i = 1
while True:
    if i == 408:
        i += 1
        continue
    
    if i % 24 == 0 and i % 17 == 0:
        break
    i += 1

print('Tallet ' + str(i) + ' er delelig på 24 og 17')`}
    </CodeBlock>
    Det eneste vi har gjort her, er å slenge inn en ny hvis-setning
    i starten av løkkeblokken. Formålet med denne hvis-setningen,
    er å hoppe over iterasjonen dersom <Ic>i</Ic> er 408, slik
    at ikke løkken stopper i hvis-setningen under.
    <Db />
    Det er fristende å bare skrive <Ic>continue</Ic> alene inne
    i hvis-blokken, men det vil føre til at neste iterasjon også 
    har <Ic>i</Ic> med verdi 408, og Python kommer til å 
    kjøre <Ic>continue</Ic> i all evighet til noen avslutter 
    programmet med makt. Når vi kjører <Ic>continue</Ic>, mister
    vi nemlig resten av løkkeblokken, inkludert 
    linja <Ic>i += 1</Ic>, som sørger for at vi starter hver nye
    iterasjon med en ny verdi i variabelen <Ic>i</Ic>. Vi må
    altså sørge for at effekten av denne linja er med 
    når vi bruker <Ic>continue</Ic>, og legger denne linja
    inn i hvis-blokken, <i>før</i> vi kjører <Ic>continue</Ic>.
    <Db />
    <Ic>continue</Ic> kan være litt risikabelt å bruke 
    med <Ic>while</Ic>-løkker, som vi kan se 
    over. <Ic>continue</Ic> er lettere å bruke med <Ic>for</Ic>-løkker,
    som vi skal se på om et par poster.

    <h2>Løkker i løkker</h2>
    Helt til slutt skal vi se på et enda mer komplisert eksempel
    hvor vi legger en løkke inn i en annen løkkeblokk.
    Hvis du allerede føler du har fått nok av løkker (og det er lov!), kan du
    hoppe over denne seksjonen og heller se
    på den senere, når du har fått mer trening i å resonnere
    med løkker.
    <Db />
    Vi skal lage et program som skriver ut alle primtall
    under 1000. Et primtall
    er et tall som bare er delelig på seg selv og tallet 1.
    Den enkleste måten å finne alle primtall under 1000 på,
    er å gå gjennom hvert tall opp til 1000, og for hvert
    tall, sjekke alle tall mellom 1 og tallet selv, for 
    å se om tallet er delelig på noen av dem.
    <Db />
    Koden ser slik ut:
    
    <CodeBlock>
        {`i = 2
while i < 1000:
    er_primtall = True
    j = 2
    while j < i:
        if i % j == 0:
            er_primtall = False
            break
        j += 1

    if er_primtall:
        print(str(i) + ' er et primtall')
        
    i += 1`}
    </CodeBlock>

    Her er det mye å sette tennene i:
    <Db />
    Først setter vi <Ic>i</Ic> lik 2. Dette er variabelen
    vi kommer til å øke for hver iterasjon, og sjekke hvorvidt
    den er et primtall. Vi starter på 2 fordi 1 ikke regnes 
    som et primtall. 
    <Db />
    Inne i løkken har vi laget en 
    variabel <Ic>er_primtall</Ic>, som vi har satt til å være sann.
    Ideen her er at vi starter med å "gjette" at <Ic>i</Ic> er et 
    primtall, men hvis vi finner ut i den indre løkken at <Ic>i</Ic> ikke
    kan være et primtall, setter vi denne variabelen til usann.
    I tillegg lager vi variabelen <Ic>j</Ic>, som vi skal
    bruke til å iterere gjennom den indre løkken. Vi skal 
    la <Ic>j</Ic> gå fra tallet 2 og opp til (men ikke med) 
    tallet <Ic>i</Ic>, og sjekke for hvert tall om det
    deler <Ic>i</Ic>.
    <Db />
    Denne delingssjekken foregår 
    i betingelsen til den indre hvis-setningen.
    Dersom det viser seg at <Ic>j</Ic> deler <Ic>i</Ic>, kan vi med
    sikkerhet si at <Ic>i</Ic> ikke kan være et primtall, og 
    vi setter <Ic>er_primtall</Ic> til usann og avslutter løkken.
    Vær obs på at <Ic>break</Ic> inne i en dobbel løkke bare
    går ut av den <i>innerste</i> løkken.
    <Db />
    Når vi til slutt er ferdig i den indre løkken, sjekker vi 
    variabelen <Ic>er_primtall</Ic>. Hvis <Ic>er_primtall</Ic> er
    sann, betyr det at vi ikke fant noe tall mellom 1 
    og <Ic>i</Ic> som deler <Ic>i</Ic>, slik at <Ic>i</Ic> må
    være et primtall. Ellers må vi ha funnet et tall som 
    deler <Ic>i</Ic>, slik at <Ic>i</Ic> ikke kan være et primtall.

    <Db />
    Det var en munnfull! Her er det lett å gå i baret på flere måter,
    for eksempel er det viktig at vi sjekker delelighet bare med
    tall fra og med 2 og til, men ikke med, <Ic>i</Ic>, ettersom
    primtall har lov til å være delelige på 1 og seg selv.
    Hvis du forsto alt i denne seksjonen, har du en veldig
    god forståelse av løkker, som er det desidert
    vanskeligste av de grunnleggende programmeringskonseptene.

    <h2>Oppsummering</h2>
    
    Løkker er et ekstremt kraftig verktøy som kan ta tid
    å mestre. Ikke vær redd hvis du føler du henger etter, 
    forståelsen av løkker er noe som modnes over tid. Jeg
    vil uansett anbefale å prøve deg på oppgavene 
    på slutten av denne posten, for å bli komfortabel med 
    å skrive løkker på egen hånd.
    <Db />

    Dette kan sies å være blant de mest utfordrende postene
    i denne bloggen. I neste post roer vi ned temopet litt for
    å lære om funksjoner.

    <h2>Oppgaver</h2>

    Før du går i gang med oppgavene, vil jeg bare minne om
    den gule notisen litt lenger opp i posten. Den gir deg
    tips til hvordan du avslutter uendelige løkker, dersom uhellet
    først er ute - og det er fort gjort.
    <Db />
    1. Lag et program som skriver kvadratet (dvs. tallet ganget med seg selv) 
    for  tallene fra 1 til 10.
    <Db />
    2. Lag et program som skriver alle kvadrattallene 
    som er under 1000.
    <Db />
    3. Lag et program som ber brukeren om å skrive inn et tall,
    og deretter skriver en setning så mange ganger til skjermen.
    <Db />
    4 (Vanskelig). Lag et gjetteprogram - sett en variabel
    til et tall mellom 0 og 100 som du velger selv. La brukeren prøve
    å gjette tallet, og fortell dem om tallet de gjettet er for høyt eller lavt.
    La brukeren gjette på nytt til de gjetter riktig, og avslutt programmet.
    </>
);

export default LoopsNo;