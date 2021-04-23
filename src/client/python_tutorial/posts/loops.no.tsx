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
    til betingelsen er usann når Python leser <Ic>while</Ic>-linja. Når dét skjer, fortsetter Python fra første linje
    <i>etter</i> løkkeblokken.
    <Db />
    Én kjøring av løkkeblokken kaller vi en <i>iterasjon</i>, og 
    vi kommer til å bruke dette begrepet framover.
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
    Det kan være litt lite intuitivt at vi ikke før ut verdien 5 her
    når vi har sagt at vi teller opp til 5, men om du leser forklaringen
    over nøye, blir du nok til slutt enig i at det er det koden skal
    gjøre. Når man tenker på løkker i programmering, er det fort
    gjort å gjøre en feilberegning rundt hvilke verdier som
    brukes i siste iterasjon av en løkke, på engelsk har
    det fått det egne begrepet <b>off-by-one-error</b>.
    <Db />
    En forholdsvis grei måte å unngå slike feil på, er å tenke 
    nøye gjennom hva som skjer i løkken i <i>første</i> og 
    i <i>siste</i> iterasjon, og passe på at det stemmer med 
    hensikten du har med koden.

    <NoticeBlock>
        Når du skriver egne <Ic>while</Ic>-løkker, er det 
        fort gjort å glemme å øke variabelen du bruker i
        løkkebetingelsen (ofte kalt <i>iterasjonsvariabelen</i>). 
        I slike tilfeller kan du ende opp
        med at Python kjøre løkken
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

    </>
);

export default LoopsNo;