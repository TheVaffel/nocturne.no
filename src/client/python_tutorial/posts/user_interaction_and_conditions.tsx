import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const UserInteractionAndConditionsNo = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    I denne posten tar vi for oss hvordan vi kan interagere med en bruker
    av programmet vårt. Interaksjonen vil i dette tilfellet kun være tekstbasert,
    programmet skriver noe på skjermen, og brukeren skriver noe tilbake.
    Som en del av gjennomgangen av bruker interaksjon, skal vi også gå gjennom <i>betingelser</i>, 
    som er et viktig konsept i programmering generelt.

    <h2><Ic>print()</Ic> og <Ic>input()</Ic></h2>

    Som nevnt er målet vårt å lage et program som skriver tekst <i>til</i> brukeren, og som 
    tar imot tekst <i>fra</i> brukeren. Den første delen har vi sett tidligere, nemlig da vi skrev
    "Hallo, verden!"-programmet vårt. La oss ta en liten titt på dét programmet igjen:
    <CodeBlock>
    {`print('Hallo, verden!')`}
    </CodeBlock>
    
    Etter å ha lest forrige post, drar du kanskje kjensel på <Ic>'Hallo, verden!'</Ic> som 
    en streng. Strengen står inne i parantesene til <Ic>print()</Ic>. Her er <Ic>print()</Ic> en funksjon.
    Vi kommer til å gå nærmere inn på hvordan funksjoner fungerer i nær framtid, men det du trenger
    å vite nå, er at vi kan skrive en hvilken som helst verdi mellom parentesene til <Ic>print()</Ic>-funksjonen,
    og Python vil skrive verdien til skjermen. 
    
    <Db />
    Da vi brukte den interaktive konsollen i forrige kapittel,
    kunne vi bare skrive en verdi eller variabel alene på en linje for å skrive den til skjerm. I
    kjørende programmer vil ikke det fungere, og vi må bruke <Ic>print()</Ic>-funksjonen for å se verdiene.
    <Db />
    Hva med å ta imot informasjon fra brukeren? For dét formålet har vi en annen funksjon: <Ic>input()</Ic>.
    Når Python leser gjennom og kjører et program, og den kommer til en linje med <Ic>input()</Ic>-funksjonen,
    vil den stoppe opp og vente på at brukeren skal skrive noe. Idét brukeren har skrevet noe og trykket linjeskift,
    vil <Ic>input()</Ic> evalueres til tekststrengen som brukeren skrev. 

    <Db />
    Det vil si at for å lagre innputteksten i en variabel, trenger vi bare å skrive 
    <CodeBlock>tekst_fra_brukeren = input()</CodeBlock>
    og deretter gjøre hva vi vil med variabelen <Ic>tekst_fra_brukeren</Ic> som er av typen streng.

    <Db />
    La oss se hvordan vi kan bruke <Ic>print()</Ic> og <Ic>input()</Ic> i et program:
    <CodeBlock>
        {`print('Skriv noe!')
tekst = input()
print(tekst)`}
    </CodeBlock>
    Her legger vi altså innputteksten fra brukeren inn i variabelen <Ic>tekst</Ic>, og
    deretter skriver den rett tilbake til brukeren.
    Lag en ny fil, legg inn koden over, lagre under et fornuftig navn, og kjør!
    Resultatet blir noe á la dette:
<CodeBlock> {`Skriv noe!
Jeg er en potet
Jeg er en potet`}
</CodeBlock>
    Her er den andre linjen brukerens sofistikerte innputt, mens den siste linjen er 
    programmet som skriver innputtet tilbake, altså det som gjøres i siste del av programmet.
    <Db />
    Vi kan være litt mer kreative og endre programmet over til å lage en liten hilsen til brukeren:
    <CodeBlock> {`print('Skriv navnet ditt!')
navn = input()
print('Hei, ' + navn + '!')`}
</CodeBlock>

    som gir en kjøring som ser f.eks. slik ut:
    <CodeBlock>{`Skriv navnet ditt!
Dangfart Tønnesen
Hei, Dangfart Tønnesen!`}</CodeBlock>
    
    Her har vi brukt pluss-operatoren for å sette sammen svarteksten, og 
    gjort alle operasjonene direkte inne i <Ic>print()</Ic>-parantesene.
    
    <h2>Betingelser</h2>
    
    La oss si at du har lagret en hemmelighet, og vil beskytte den med 
    et passord. Vi lager et program der brukeren må skrive inn riktig passord
    for å kunne se hemmeligheten. Til dette trenger vi <i>betingelser</i>.
    <Db />
    Helt overordnet handler betingelser om å kjøre et stykke kode
    kun dersom en betingelse er oppfylt. I Python (og en del andre språk)
    er den viktigste betingelsesmekanismen hvis-setninger (engelsk: <b>if-statements</b>).
    <Db />
    En hvis-setning er på formen 
    <CodeBlock>
        {`if <betingelse>:
    <kode som skal kjøres hvis betingelse er oppfylt>
<kode etter betingelse>
        `}
    </CodeBlock>
    Det er flere ting å bite merke i her: En hvis-setning starter alltid med 
    ordet <Ic>if</Ic>, deretter følger en betingelse separert med mellomrom 
    fra ordet <Ic>if</Ic>. Vi skal forklare hvordan betingelser ser ut veldig snart.
    Linjen avsluttes med et kolon ":". 
    <Db />
    Koden som skal kjøres hvis betingelsen
    er oppfylt, kommer jeg til å referere til som hvis-blokken. Den kan 
    bestå av så mange linjer du vil, men minst én.
    Hvis-blokken må <i>indenteres</i>, altså skrives med innrykk. Den letteste
    måten å sette inn et innrykk på, er å trykke tab (tasten over Caps Lock til 
    venstre på tastaturet). Alternativt kan du sette inn 2 eller flere mellomrom.
    Det er viktig at du er konsekvent på hvorvidt du bruker tab eller mellomrom, 
    ellers vil du få en feilmeldingssalve fra Python.
    <Db />
    Hvis-blokken varer til vi kommer til en kodelinje der koden ikke lenger
    er innrykket. Hvis betingelsen var oppfylt, og Python dermed kjørte hvis-blokken,
    vil den fortsette å kjøre denne uinnrykkede koden rett etter at den er 
    ferdig med hvis-blokken. Dersom betingelsen ikke er oppfylt, kommer Python
    til å kjøre kode fra den uinnrykkede linjen direkte, og ignorere hele
    hvis-blokken.
    <Db />
    Så hvordan ser en betingelse ut? En typisk betingelse er hvorvidt
    to verdier er like. Vi kan sjekke om to verdier er like ved å 
    bruke <Ic>==</Ic>-operatoren: <Ic>a == 0</Ic>. Denne betingelsen er 
    sann dersom variabelen <Ic>a</Ic>er <Ic>0</Ic>, og usann hvis <Ic>a</Ic> er hva
    som helst annet (og koden krasjer hvis <Ic>a</Ic> ikke er definert).
    Det kan være forvirring mellom <Ic>=</Ic> og <Ic>==</Ic> i starten, men
    den første av de to brukes til å sette en variabel til en verdi, mens den
    siste brukes for å sjekke om to verdier er like.
    <Db />
    Et program som bruker en hvis-setning kan altså se slik ut:
    <CodeBlock>
        {`a = 1
if a == 1:
    print('a var lik 1!')
print('Programmet er ferdig, hadet!')`}
    </CodeBlock>
    Kjører vi dette, får vi:
    <CodeBlock>
    {`a var lik 1!
Programmet er ferdig, hadet!`}
    </CodeBlock>
    Dette er ikke et fryktelig spennende resultat, ettersom vi allerede
    vet hva <Ic>a</Ic> er på forhånd.
    <Db />
    Med dette kan vi lage et program som gir en betinget hilsen - 
    den hilser bare på en bestemt person:
    <CodeBlock>
{`print('Skriv navnet ditt:')
navn = input()
if navn == 'Arne':
    print('Hei, Arne!')`}
    </CodeBlock>
    I dette tilfellet vil programmet bare hilse på deg om du
    sier du heter <Ic>Arne</Ic>. Hvis du prøver å skrive inn noe annet,
    vil programmet avslutte uten å skrive ut noe mer. Vær også oppmerksom på at
    du heller ikke kan skrive <Ic>arne</Ic> med små bokstaver. Likhetsoperatoren
    krever at alle bokstavene matcher nøyaktig, og store og små bokstaver
    regnes som forskjellige.
    <Db />
    Det er litt uhøflig å avslutte programmet uten å si noe som helst, bare
    fordi man ikke heter Arne, eller hva? Vi kan fikse dette med en annen
    form av hvis-setningen:
    <CodeBlock>
        {`if <betingelse>:
    <hvis-blokk>
elif <en annen betingelse>:
    <en ellers-hvis-blokk>
else: 
    <en ellers-blokk>
        `}
    </CodeBlock>
    Her har vi lagt til to nye blokker på hvis-setnignen vår!
    Den første, <Ic>elif</Ic>-blokken, kan du lese som "ellers, hvis",
    som har sin egen betingelse.
    Denne "ellers, hvis"-setnignen vil bare bli evaluert hvis den
    første betingelsen ikke var oppfylt. Ellers fungerer denne
    setningen på samme måte som den første hvis-setningen: Den tilhørende
    blokken er markert med innrykk og blir bare kjørt om den tilhørende
    betingelsen er sann.
    <Db />
    Vi kan ha så mange <Ic>elif</Ic>-blokker på rad som vi vil etter den første
    hvis-blokken, inkludert null. Python kommer bare til å utføre koden i den første hvis-blokken 
    i rekken som har betingelsen sin oppfylt, resten blir hoppet over.
    <Db />
    Den siste blokken er en <Ic>else</Ic>-blokk, som ikke har noen tilhørende
    betingelse. <Ic>else</Ic>-blokken kjøres dersom ingen av de foregående <Ic>if</Ic>- og
    <Ic>elif</Ic>-setningene i rekken hadde betingelsen sin oppfylt. Det kan maksimalt være
    én <Ic>else</Ic>-blokk i en slik rekke av <Ic>if</Ic>- og <Ic>elif</Ic>-blokker.
    Av alle blokkene i en <Ic>if</Ic>-<Ic>elif</Ic>-<Ic>else</Ic>-rekke, er det kun 
    én som blir kjørt, og muligens ingen, dersom det ikke finnes noen <Ic>else</Ic>-blokk.
    <Db />
    La oss gjøre programmet vårt over litt mer responsivt for brukere
    som ikke heter Arne:
    <CodeBlock>
    {`print('Skriv navnet ditt:')
navn = input()
if navn == 'Arne':
    print('Hei, Arne!')
else:
    print('Du er ikke Arne, gå vekk!')`}
    </CodeBlock>
    Flott, nå får brukeren en respons uavhengig av hva de heter. Legg merke til 
    at vi ikke har noen <Ic>elif</Ic>-blokker her, kun en <Ic>else</Ic>-blokk
    som sørger for at vi printer noe i det tilfellet at betingelsen ikke er oppfylt.
    
    <h2>Innputt som tall</h2>

    Hva om vi spør om en alder
    </>);