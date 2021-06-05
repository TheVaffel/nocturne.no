import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const DictionariesAndFilesNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Velkommen tilbake! Dette blir en litt kortere post der vi fokuserer på to nye konsepter som ofte kommer til nytte når man er på kodeeventyr: Tupler og tabeller. Vi hopper rett i det!
            <h2>Tupler </h2>
            I forrige post så vi på lister, som lar oss legge mange verdier, eller <i>elementer</i> på rekke og rad. Lister er nyttige å bruke i mange tilfeller, men noen ganger kan de være upraktiske til formålene våre. La oss ta et eksempel:
            <Db />
            La oss si at vi vil representere alle verdens land assosiert med hver sin hovedstad i programmet vårt. Vi vil bruke denne representasjonen til å finne hovedstaden til et land som blir gitt oss av brukeren . Én måte å gjøre dette på, er å bruke to lister, én for land og én for hovedsteder. Programmet vårt blir seende omtrent slik ut:
            <Db />
            <CodeBlock>
                {`landliste = ['Norge', 'Sverige', 'England']
hovedsteder = ['Oslo', 'Stockholm', 'London']

land = input('Skriv inn et land:')

hovedstad = ''

for i in range(len(landliste)):
    if land == landliste[i]:
        hovedstad = hovedsteder[i]
        break

if len(hovedstad) == 0:
    print('Fant ikke hovedstaden til', land, ':(')
else:
    print('Hovedstaden i', land, 'er', hovedstad)`}
            </CodeBlock>

            Programmet begynner med å definere to lister, én som inneholder land og én som inneholder korresponderende hovedsteder. Vi har gjort en forenkling hvor vi antar at verden består av tre land. Vi tar inn navnet på et land fra brukeren, og definerer variabelen <Ic>hovedstad</Ic> som vi setter til <Ic>''</Ic>, altså en tom tekststreng. Deretter går vi igjennom indeksene til listen <Ic>landliste</Ic> og sammenligner hvert land i listen med landet vi fikk av brukeren. Når vi finner landet i <Ic>landliste</Ic> som stemmer overens med det brukeren skrev inn, setter vi variabelen vi definerte tidligere, <Ic>hovedstad</Ic>, til være strengen på korresponderende indeks i listen <Ic>hovedsteder</Ic> og avslutter løkken med <Ic>break</Ic>. Til slutt sjekker vi om lengden på strengen <Ic>hovedstad</Ic> er lik null med <Ic>len()</Ic>-funksjonen. Hvis lengden er null, vet vi at <Ic>hovedstad</Ic> ikke har endret seg siden vi initialiserte den til en tom liste, noe som betyr at vi ikke fant et land som matched brukerinnputtet fra listen <Ic>landliste</Ic> i løkken over. Dermed må vi, med halen mellom beina, fortelle brukeren at vi ikke fant noen hovedstad. Ellers, hvis <Ic>hovedstad</Ic> ikke er tom, betyr det at vi må ha funnet et matchende land, og dermed en hovedstad - som vi så skriver ut til brukeren.
            <Db />
            Koden over fungerer fint, men det er et par ting vi kan ta tak i:
            <Db />
            Det første vi kan se på, er de to listene våre. De er veldig tett knyttet opp mot hverandre. De er faktisk så tett knyttet at en endring i én av dem vil ødelegge den <i>implisitte</i> relasjonen de har til hverandre. Hvis vi f. eks. stokker om på, fjerner eller legger til nye land i <Ic>landliste</Ic>, vil det innføre potensielle feil i koden, ettersom korresponderende elementer i <Ic>hovedsteder</Ic>-listen ikke lenger nødvendigvis har riktig hovedstad til riktig land. 
            <Db />
            Nå kan det hende du tenker "men det skjønner jeg jo, jeg kommer jo aldri til å gjøre noe så dumt som å endre på én av listene uten å endre den andre?". Dette er et forholdsvis enkelt eksempel hvor det er lett å se at det går galt når man bare endrer én liste, men i større eksempler kan det være vanskeligere å huske på. Vi vil altså fjerne denne usynlige, implisitte relasjonen mellom de to listene, og heller gjøre den synlig, <i>eksplisitt</i>.
            <Db />
            Dette er et tilfelle der vi kan bruke <i>tupler</i>. Tupler ligner på lister - men skrives med vanlige paranteser <Ic>()</Ic> i stedet for klammeparanteser <Ic>[]</Ic>. En annen forskjell er at tupler ikke kan endres, man kan hverken legge til, endre eller fjerne elementer fra et tuppel. Eksempler på tupler er <Ic>(1, 3)</Ic> og <Ic>(3, True, 1)</Ic>. Tupler er bra for å holde på et lite antall verdier som er relatert til hverandre, men verdiene kan ha forskjellig mening. For eksempel kan et tuppel med tre elementer representere en person ved å inneholde en streng for navn, et heltall for alder, og et flyttall for høyde. Dette står i motsetning til lister som fungerer best for å inneholde mange verdier som ikke nødvendigvis har tilknytning til hverandre, men som har samme betydning, som en deltagerliste for et arrangement eller en liste av de ti første primtallene.
            <Db />
            Når vi har et tuppel, kan vi "splitte" det opp ved hjelp av <Ic>=</Ic>-operatoren slik:
            <CodeBlock>{`et_tuppel = (1, 2, 3)
a, b, c = et_tuppel`}</CodeBlock>
            Her vil variablene <Ic>a</Ic>, <Ic>b</Ic> og <Ic>c</Ic> inneholde henholdsvis verdiene 1, 2 og 3.
            <Db />
            Vi kan skrive om programmet over ved hjelp av tupler. Vi kommer til å bruke tupler med kun to elementer, som vi rett og slett kaller et <i>par</i>:
            <CodeBlock>{`land_og_hovedsteder = [('Norge', 'Oslo'), ('Sverige', 'Stockholm'), ('England', 'London')]

land = input('Skriv inn et land:')

hovedstad = ''

for i in range(len(land_og_hovedsteder)):
    if land == land_og_hovedsteder[i][0]:
        hovedstad = land_og_hovedsteder[i][1]
        break

if len(hovedstad) == 0:
    print('Fant ikke hovedstaden til', land, ':(')
else:
    print('Hovedstaden i', land, 'er', hovedstad)`}</CodeBlock>
            
            Her har vi erstattet de to listene med én liste bestående av par. Dette gjør relasjonen mellom elementene i hvert par mye tydeligere enn om de ligger i separate lister. 
            <Db />
            Legg merke til at vi bruker notasjonen <Ic>land_og_hovedsteder[i][0]</Ic> for å få ut land på indeks <Ic>i</Ic> i listen. Den første indeksen, <Ic>[i]</Ic> brukes til å velge paret på indeks <Ic>i</Ic>, mens <Ic>[0]</Ic> henter ut det første elementet, altså landet, i paret. Dette er en kortere måte å skrive f. eks.
            <CodeBlock>{`par = land_og_hovedsteder[i]
valgt_land = par[0]`}</CodeBlock>
            på.
            <Db />
            Tupler er også hendige for å returnere flere enn én verdi fra et funksjonskall. Her er en funksjon som tar inn både navn og skostørrelse fra brukeren, og returnerer begge:
            <CodeBlock>{`def hent_personalia():
    navn = input('Skriv navnet ditt:')
    skostørrelse = int(input('Skriv skostørrelsen din: '))
    return (navn, skostørrelse)`}
            </CodeBlock>
            Vi kan legge de to returverdiene fra funksjonskallet enten i én variabel (som et tuppel), eller i separate variabler slik:
            <CodeBlock>{`navn, skostørrelse = hent_personalia()`}</CodeBlock>

            <h2>Tabeller</h2>

            <i>Tabeller</i> (engelsk: <b>dictionaries</b>) er objekter som inneholder verdier og som tillater oss å bruke andre datatyper enn heltall som indekser. En tabell kan defineres med <Ic>{`{ <indeks0>: <verdi0>, <indeks1>: <verdi1>...}`}</Ic>. Altså en liste av kommaseparerte av indeks-verdi-par, hvor indeks og verdi er separert med kolon, omsluttet av krøllparanteser. I tabeller er datatypene til både indeksene og verdiene valgfrie, men det er vanligst at alle indekser har samme type, og alle verdier har samme type. Når man skal hente ut og legge inn elementer i en tabell, bruker man indekser med samme klammeparantesnotasjon som vi bruker med lister. Her er et eksempel:
            <CodeBlock>{`tabell = {}

tabell['a'] = 0
tabell['b'] = 1
tabell['c'] = 2

print(tabell['b'])
print(tabell)`}</CodeBlock>
            Først definerer vi variabelen <Ic>tabell</Ic> som settes til <Ic>{`{}`}</Ic>, som bare er en tom tabell. Deretter bruker vi notasjonen <Ic>{`tabell[<indeks>] = <verdi>`}</Ic> til å sette verdier inn på ulike indekser i tabellen. Legg merke til at indeksene ikke trenger å eksistere i tabellen fra før for at man skal kunne legge noe på dem, i motsetning til indekser i lister. Her legges verdien <Ic>0</Ic> på indeks <Ic>'a'</Ic> (som er en streng), <Ic>1</Ic> på indeks <Ic>'b'</Ic> og <Ic>2</Ic> på indeks <Ic>'c'</Ic>. Utskriften fra programmet blir:
            <CodeBlock>{`1
{'a': 0, 'b': 1, 'c': 2}`}</CodeBlock>
            Som forventet, får vi at elementet på indeks <Ic>'b'</Ic> er 1, og det siste <Ic>print()</Ic>-kallet viser at alle de tre indeks-verdi-parene ligger der som forventet.
            <Db />
            Merk at du kun kan ha én verdi assosiert med en indeks. Hvis du i koden etter eksempelet over hadde skrevet <Ic>tabell['a'] = 4</Ic>, ville du endt opp med tabellen <Ic>{`{'a': 4, 'b': 1, 'c': 2}`}</Ic>. Det er derimot ikke noe problem å ha flere like verdier i tabellen, så lenge indeksene er ulike.
            <Db />
            Vær også obs på at rekkefølgen på indeks/verdi-parene kan være annerledes når du skriver den til skjerm, enn rekkefølgen du la dem inn i. Rekkefølgen på elementene i tabellen skal ikke ha noen betydning, så du bør ikke belage deg på at elementene er i en bestemt rekkefølge.
            <Db />
            Vi kan gjøre det opprinnelige eksempelet vårt enda litt bedre ved å bruke en tabell.
            <CodeBlock>{`land_og_hovedsteder = { 'Norge': 'Oslo', 'Sverige': 'Stockholm', 'England': 'London' }

land = input('Skriv inn et land:')

if land in land_og_hovedsteder:
    print('Hovedstaden i', land, 'er', land_og_hovedsteder[land])
else:
    print('Fant ikke hovedstaden til', land, ':(')`}
</CodeBlock>

            Her har vi først konstruert tabellen <Ic>land_og_hovedsteder</Ic>, hvor vi assosierer hvert land med sin hovedstad. Dette gjør at f. eks. indeksoppslaget <Ic>land_og_hovedsteder['Norge']</Ic> gir <Ic>'Oslo'</Ic> som resultat. Deretter tar vi inn brukerinnputt som vanlig. 
            <Db />
            Deretter kommer en stor forskjell fra den tidligere framgangsmåten vår: Vi itererer ikke igjennom tabellen for å finne objektet, men bruker en betingelse på formen <Ic>{`<indeks> in <tabell>`}</Ic>, som evalueres til <Ic>True</Ic> dersom indeks-verdien er en gyldig indeks i tabellen. Dermed vil betingelsen <Ic>land in land_og_hovedsteder</Ic> evalueres til sant dersom landet brukeren skrev inn er en indeks i tabellen (altså enten <Ic>'Norge'</Ic>, <Ic>'Sverige'</Ic> eller <Ic>'England'</Ic>), og usant dersom landet ikke finnes i tabellen. Vær obs på at <Ic>in</Ic>-operatoren bare sjekker om verdien på venstre er en <i>indeks</i> i tabellen, ikke om den finnes i tabellen som en <i>verdi</i>.
            <Db />
            Dersom betingelsen er sann, vet vi at vi har en hovedstad vi kan gi tilbake til brukeren, nemlig strengen vi får av tabelloppslaget <Ic>land_og_hovedsteder[land]</Ic>. Dersom landet ikke finnes i tabellen, og dermed betingelsen evalueres til usann, innrømmer vi overfor brukeren an vi ikke klarte å finne noe godt svar.
            <Db />
            Sammenligner vi første og siste utkast av eksempelet over, ser vi at tabellen har hjulpet oss enormt med å gjøre koden enklere. Tabeller er gode å ha når vi har en én-til-én-korrespondanse mellom to mengder med verdier, og gjerne vil bruke elementer fra den ene mengden, for eksempel land, til å hente ut korresponderende element i den andre mengden, for eksempel hovedstad.

            <h2>Iterere gjennom en tabell</h2>

            Fra tid til annen kan det hende vi vil iterere gjennom en tabell, for eksempel for å liste opp innholdet. I Python kan vi bruke <Ic>for</Ic>-løkker til dette formålet.
            <Db />
            En standard <Ic>for</Ic>-løkke basert på en tabell ser ut som følger:
            <CodeBlock>{`for <indeksvariabel> in <tabell>:
    <løkkeblokk>`}</CodeBlock>
            Iterasjonsvariabelen vi får når vi itererer gjennom en tabell, er indeksene i tabellen. Dermed kan vi bruke indeksen for å skrive hvert element til skjerm, f. eks.
            <CodeBlock>{`for land in land_og_hovedsteder:
    print('Hovedstaden i', land, 'er', land_og_hovedsteder[land])`}</CodeBlock>
            Hvor <Ic>land_og_hovedsteder</Ic> er som i eksempelet over.
            <Db />
            Det finnes alternative måter å iterere gjennom en tabell på. Tabeller har medlemsfunksjonen <Ic>values()</Ic>, som gir oss en iterator med alle <i>verdiene</i> i tabellen, i motsetning til indeksene. Dermed kan vi liste opp alle hovedstedene i tabellen vår slik:
            <CodeBlock>{`for hovedstad in land_og_hovedsteder.values():
    print(hovedstad, 'er en hovedstad')`}</CodeBlock>
            <Ic>values()</Ic>-funksjonen kan være nyttig når vi kun er interessert i verdiene i tabellen, og ikke hvilke indekser de tilhører.
            <Db />
            En siste måte å iterere gjennom tabeller på, er å bruke medlemsfunksjonen <Ic>items()</Ic>. <Ic>items()</Ic> returnerer en iterator med par, hvor hvert par inneholder korresponderende indeks og verdi fra tabellen. Dermed kan vi liste opp land med hver sin hovedstad litt enklere på denne måten:
            <CodeBlock>{`for land,hovedstad in land_og_hovedsteder.items():
    print(hovedstad, 'er hovedstaden i', land)`}</CodeBlock>
            Iterasjonsvariabelen i denne løkken er et par, men vi kan splitte paret opp i to komponenter slik at vi skriver mindre og gjør koden klarere.

            <h2>Oppsummering</h2> 

            Det var alt for denne gang! Tupler og tabeller er ikke fryktelig avanserte konsepter, men kan gjøre koden din langt enklere om du bruker dem riktig.
            <Db />
            I neste post tar vi for oss skriving og lesing av filer, som vil gjøre oss i stand til å gjøre mer interessante operasjoner på større mengder data.

            <h2>Oppgaver</h2>

            1. Lag en <i>funksjon</i> som tar inn en liste og returnerer en tabell med de samme elementene, men hvor verdi/indeks er <i>reversert</i>. Altså skal elementene i lista være indekser i tabellen, og de korresponderende verdiene i tabellen blir indeksen elementet har i lista. Eksempel: Hvis funksjonen får inn lista <Ic>['a', 'b', 'c']</Ic>, skal den returnere tabellen <Ic>{`{'a': 0, 'b': 1, 'c': 2}`}</Ic>.
            <Db />
            2. Lag en funksjon som tar inn en streng og returnerer en tabell med tegnene i strengen som indekser, og antallet av hvert tegn som korresponderende verdier. Hvis funksjonen for eksempel får inn strengen <Ic>'hallo'</Ic>, skal den returnere tabellen <Ic>{`{'a': 1, 'h': 1, 'l': 2, 'o': 1}`}</Ic>. 
            <Db />
            3. Lag et program som lar brukeren øve på verdens hovedsteder: Programmet viser navnet til ett og ett land og tar i mot brukerens innputt, som er deres svar på hva hovedstaden er. Til slutt viser programmet hvor mange riktige brukeren hadde. Du kan begrense deg til landene vi har brukt i denne posten, om du synes det er stressende å komme på flere.
            <Db />
            4 (Vanskelig). Lag en liste med alle tupler av heltall <Ic>a</Ic>, <Ic>b</Ic> og <Ic>c</Ic> slik at <Ic>a * a + b * b == c * c</Ic>, der <Ic>a</Ic>, <Ic>b</Ic> og <Ic>c</Ic> er under 100. Slike tupler (inkludert dem som inneholder tall over 100) kalles <i>pytagoreiske tripler</i>. (Merk - dette er først og fremst en løkkeoppgave).
            

        </PostWrapper>
    </>
);

export default DictionariesAndFilesNo;