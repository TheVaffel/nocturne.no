import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const DictionariesAndFilesNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Velkommen tilbake! Denne gangen tar vi for oss tabeller og filer. Vi hopper rett i det!
            <h2>Tupler og tabeller</h2>
            I forrige post så vi på lister, som lar oss legge mange verdier, eller <i>elementer</i> på rekke og rad. Lister er nyttige å bruke i mange tilfeller, men noen ganger kan de være upraktiske til formålene våre. La oss ta et eksempel:
            <Db />
            La oss si at vi vil representere alle verdens land assosiert med hver sin hovedstad i programmet vårt. Vi vil bruke denne representasjonen til å finne hovedstaden til et land som blir gitt oss av brukeren . Én måte å gjøre dette på, er å bruke to lister, én for land og én for hovedsteder. Programmet vårt blir seende omtrent slik ut:
            <Db />
            <CodeBlock>
                {`landliste = ['Norge', 'Sverige', 'England']
hovedsteder = ['Oslo', 'Stockholm', 'London']

land = input('Skriv inn et land: ')

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
            
            <h3>Tupler</h3>
        </PostWrapper>
    </>
);

export default DictionariesAndFilesNo;