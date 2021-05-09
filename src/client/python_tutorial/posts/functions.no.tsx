import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const FunctionsNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            I denne posten tar vi for oss <i>funksjoner</i>{","} som lar oss dele koden vår inn i gjenbrukbare, mindre deler. Vi har allerede brukt funksjoner mange ganger; for eksempel er både <Ic>print()</Ic> og <Ic>int()</Ic> funksjoner. I denne posten skal vi se hvordan vi kan lage våre egne funksjoner, og diskutere hvilke tilfeller det gir mening å bruke dem i.
            <Db />
            I bunn og grunn er en funksjon en blokk med kode som har et eget navn. På samme måte som vi kan bruke navnet på en variabel til å referere til variabelens verdi, kan vi bruke navnet på en funksjon til å kjøre koden i funksjonen. Vi lager en funksjon på denne måten:
            <CodeBlock>
                {`def <navn>(<argument0>, <argument1>, <...>):
    <funksjonsblokk>`}
            </CodeBlock>
            Vi kaller dette en <i>funksjonsdefinisjon</i>. Den starter med ordet <Ic>def</Ic> etterfulgt av navnet vi vil gi til funksjonen vår. Deretter følger en komma-separert liste av <i>argumenter</i> omsluttet av paranteser. Vi kommer tilbake til argumenter senere - vi kommer først til å se på funksjoner uten argumenter, slik at parantesene er tomme. Til slutt på første linje, i likhet med måten vi definerer hvis-setninger og løkker på, skriver vi et kolon.
            <Db />
            På neste linje starter <i>funksjonsblokken</i>. Dette er koden som funksjonen inneholder. Den skrives med innrykk, på samme måte som hvis-blokker og løkkeblokker, og tar slutt ved første linje uten innrykk.
            <Db />
            På samme måte som vi navngir variabler, kan vi velge selv hvilket navn funksjonen skal ha. Her gjelder de samme tommelfingerreglene om at navnet bør være beskrivende og si noe om hva koden i funksjonen gjør.
            <Db />
            Merk at koden <i>ikke</i> blir kjørt når Python leser funksjonsdefinisjonen. Funksjonsdefinisjonen bare gjøre funksjonen tilgjengelig, slik at koden kan kjøres på et senere tidspunkt.
            <Db />
            Vi begynner med å se på en veldig enkel funksjon:
            <CodeBlock>{`def si_hei():
    print('hei')

si_hei()`}
            </CodeBlock>
            Her har vi først definert funksjonen <Ic>si_hei</Ic>. Funksjonsblokken inneholder en linje som skriver "hei" til skjermen.
            <Db />
            <i>hey</i>
            Nederst i programmet over har vi skrevet <Ic>si_hei()</Ic>{","} altså navnet på funkjsonen vår, med tomme paranteser. Legg merke til at den ikke er en del av funksjonsblokken, ettersom den er skrevet uten innrykk. Når Python leser denne linja, kjører den koden i funksjonsblokken. Vi sier at vi <i>kaller</i> funksjonen, og <Ic>si_hei()</Ic> kaller vi et <i>funksjonskall</i>.
            <Db />
            Når vi kaller en funksjon, hopper Python fra funksjonskallet og til koden i funksjonen, og hopper så tilbake til der funksjonskallet skjedde når den er ferdig med koden i funksjonen.
            <Db />
            Dette er ikke et veldig interessant eksempel, og det er ganske liten gevinst i å skrive programmet på denne måten i motsetning til å bare skrive programmet som
            <CodeBlock>
                {`print('hei')`}
            </CodeBlock>
            {","} som gjør akkurat det samme. Vi skal se på eksempler hvor det gir mer mening å bruke funksjoner. Men først skal vi snakke om returverdier.

            <h2>Returverdier</h2>
            I tillegg til å utføre kode, kan funksjonskall også gi tilbake verdier. Verdier som sendes tilbake av en funksjon kaller vi <i>returrverdier</i>. For å sende en verdi tilbake fra en funksjon bruker vi ordet <Ic>return</Ic>. Her er for eksempel en funksjon som ber brukeren om å skriv inn navnet sitt og returnerer det brukeren skriver inn:
            <CodeBlock>{`def hent_brukernavn():
    print('Skriv inn navnet ditt:')
    navn = input()
    return navn`}
            </CodeBlock>
            Funksjonen <Ic>hent_brukernavn</Ic> ber brukeren om å skrive navnet sitt, deretter lagrer den hva enn brukeren skriver i en variabel, og til slutt returnerer den variabelen. Her kunne vi også skrevet <Ic>return input()</Ic> i stedet for de to siste linjene.
            <Db />
            Etter å ha definert funksjonen, kan vi (lenger ned i filen) bruke den f. eks. til å hilse på brukeren:
            <CodeBlock>{`navn = hent_brukernavn()
print('Hei, ' + navn)`}
            </CodeBlock>
            Her begynner Python med å lese første linje, og ser at variabelen <Ic>navn</Ic> skal settes til returverdien fra funksjonskallet <Ic>hent_brukernavn()</Ic>. Dermed hopper den inn i funksjonen <Ic>hent_brukernavn</Ic> og kjører koden der; den ber brukeren om et navn, får inn navnet, og returnerer det. <Ic>return</Ic>-linja gjør at Python hopper tilbake til linja <Ic>navn = hent_brukernavn()</Ic> med returverdien, som er navnet brukeren skrev inn. Navnet legges deretter inn i variabelen <Ic>navn</Ic>, og Python kan omsider gå til siste linje og hilse på brukeren.
            <Db />
            I koden over har vi definert to variabler som heter <Ic>navn</Ic>. De er helt uavhengige av hverandre; en variabel som defineres i en funksjon kan ikke brukes utenfor funksjonen, og påvirker ingen andre variabler. Det betyr at vi ikke trenger å bekymre oss for at variabelen <Ic>navn</Ic> som vi initialiserer i <Ic>hent_brukernavn</Ic> skal endre verdien på andre variabler med samme navn andre steder i programmet. 
            <Db />
                
            La oss se på et litt mer troverdig eksempel der en funksjon kan hjelpe oss. Her er et program som spør brukeren om fødselsår, og skriver hvor gammel brukeren blir i år (hvor vi gjør en forenklet antakelse om at "i år" er år 2021). Som en liten tvist har vi i tillegg brukt en løkke for å sikre at vi får et tall mellom 1900 og 2021 inklusiv - vi spør brukeren igjen og igjen til vi får et tall som oppfyller kravet. Her er koden:
            <CodeBlock>{`print('Skriv inn fødselsåret ditt:')
brukerinnputt = input()
fødselsår = int(brukerinnputt)

while fødselsår < 1900 or fødselsår > 2021:
    print('Fødselsåret er ugyldig!')

    print('Skriv inn fødselsåret ditt:')
    brukerinnputt = input()
    fødselsår = int(brukerinnputt)

alder_i_år = 2021 - fødselsår
print('Du fyller ' + str(alder_i_år) + ' år i år!')`}
            </CodeBlock>

            Denne koden fungerer helt fint, men den kan forbedres. Legg merke til at de tre øverste linjene i programmet og de tre nederste linjene i løkkeblokken er helt like. Det er her alarmen burde gå. Det er generelt regnet som dårlig praksis å ha bolker med identisk kode flere steder i programmet når man heller kan bruke løkker. Det gjør koden unødvendig lang, pluss at hvis du vil gjøre endringer ett sted, for å for eksempel korrigere en feil, vil du måtte gjøre tilsvarende endringer de andre stedene der koden er kopiert. Dette kan høres ut som et filleproblem, men det skjer langt oftere enn man skulle tro!
            <Db />
            Du har sikkert allerede gjettet hva løsningen er - vi legger linjene i en egen funksjon som returnerer fødselsåret! Programmet blir seende slik ut:
            <CodeBlock>{`def hent_fødselsår():
    print('Skriv inn fødselsåret ditt:')
    brukerinnputt = input()
    return int(brukerinnputt)
    

fødselsår = hent_fødselsår()
wile fødselsår < 1990 or fødselsår > 2021:
    print('Fødselsåret er ugyldig!')
    
    fødselsår = int(brukerinnputt)

alder_i_år = 2021 - fødselsår
print('Du fyller ' + str(alder_i_år) + ' år i år!')`}
            </CodeBlock>

            Sånn - nå er den repeterte koden samlet på ett sted. Når vi nå leser gjennom koden, er den også litt lettere å få oversikt over. Det er mer innlysende hva som foregår i <Ic>while</Ic>-løkken nå som det er færre linjer å konsentrere seg om.
            <Db />
            Legg merke til at vi i stedet for å lage variabelen <Ic>fødselsår</Ic> i funksjonen, bare returnerer verdien, og overlater ansvaret med å legge den i en variabel til koden som kalte funksjonen.
            <Db />
            Merk - vi kunne også gjort koden litt mindre ved å fjerne de første tre linjene i programmet og heller lage en uendelig <Ic>while</Ic>-løkke som spør brukeren om innputt igjen og igjen, og kjører <Ic>break</Ic> når brukeren gir et gyldig innputt. Framgangsmåten vi har brukt over viser tydeligere hvordan funksjoner kommer til nytte.

            <h2>Funksjoner som støyfjernere</h2>
            Det er ingenting i veien for å kalle en funksjon fra en annen funksjon. Det er faktisk akkurat det vi har gjort i eksempelet over, siden <Ic>print()</Ic> og <Ic>input()</Ic> er funksjoner.
            <Db />
            La oss kaste et nytt blikk på koden vi skrev over. Det er mye styr for et program som først og fremst bare skal regne ut alderen til brukeren, ettersom vi har brukt mye plass på å forsikre oss om at brukeren skriver inn noe fornuftig. Faktisk handler hele programmet, bortsett fra de to siste linjene, om å finne fødselsåret. Det er ikke noe i veien med programmet selv, men det kan være vanskelig å jobbe med når det er mye som foregår som ikke direkte har noe med målet med programmet å gjøre. 
            <Db />
            Dette er et problem som <i>også</i> kan løses med funksjoner. Helt overordnet kan vi tenke oss at programmet skal gjøre tre ting: Hente fornuftig innputt fra brukeren, regne ut alderen, og skrive alderen ut på skjermen. I koden vår tar det første steget uproporsjonalt mye plass. La oss legge all koden som utfører det første steget, inn i en ny funksjon:
            <CodeBlock>
                {`def hent_fødselsår():
    print('Skriv inn fødselsåret ditt:')
    brukerinnputt = input()
    return int(brukerinnputt)
    
def hent_validert_fødselsår():
    fødselsår = hent_fødselsår()
    while fødselsår < 1990 or fødselsår > 2021:
        print('Fødselsåret er ugyldig!')
        
        fødselsår = int(brukerinnputt)
    return fødselsår
        

fødselsår = hent_validert_fødselsår()
alder_i_år = 2021 - fødselsår
print('Du fyller ' + str(alder_i_år) + ' år i år!')`}
            </CodeBlock>
            
            Sånn, nå ligger hele essensen av programmet i de tre nederste linjene. For en som leser koden for første gang, er det mye lettere å få oversikt når de litt mer innfløkte delene av koden gjemmes i funksjonene. 
            <Db />
            Det å <i>abstrahere</i> bort deler av koden med funksjoner, slik som vi har gjort over, er regnet som en god skikk, nettopp fordi det gjør lettere å resonnere med koden. Det gjør det enkelt å fokusere på den delen av koden du er mest interessert i når du leser ny kode, skal legge til ny funksjonalitet, eller rette feil. I likhet med mange andre skikker programmerere er glad i, er det litt vanskelig å motivere skikkelig fordi de først og fremst gir mening når man jobber med mye kode. Det er fullt mulig å skrive programmer uten å definere funksjoner, men det er på ingen måte noen god idé. I tillegg til å potensielt inneholde mye repetert kode, blir det vanskelig å få oversikt og lete seg fram til de interessante delene av koden uten intim kjennskap til hvordan programmet fungerer. Og selv om du har skrevet programmet selv, har den intime kjennskapen lett for å forsvinne over tid - så funksjoner vil være til hjelp både for deg selv og dem du er glad i.
            
            <h2>Argumenter</h2>

            <i>Argumenter</i> er verdier vi kan sende <i>inn</i> i funksjonene. Funksjonsdefinisjonene vi har sett hittil, har ikke hatt noen argumenter - parantesene etter funksjonsnavnet har vært tomme. La oss se på en funksjon som <i>har</i> argumenter:
            <CodeBlock>
            {`def si_hei(navn):
    print('Hei, ' + navn + '!')`}
            </CodeBlock>
            Dette er en oppgradert versjon av <Ic>si_hei()</Ic>-funksjonen vi så i starten av posten. Som vi kan se, tar den ett argument; <Ic>navn</Ic>. Argumentene til en funksjon kan brukes som om de var vanlige variabler i funksjonen. I denne funksjonen bruker vi <Ic>navn</Ic> i <Ic>print()</Ic>-kallet for å gjøre hilsenen mer personlig. Vi kan kalle funksjonen slik:
            <CodeBlock>
                {`si_hei('Arne')`}
            </CodeBlock>

            Putter vi denne koden i samme fil og kjører den, får vi ut
            <CodeBlock>
                {`Hei, Arne!`}
            </CodeBlock>
            Her har vi skrevet strengen <Ic>'Arne'</Ic> direkte inne i parantesene til funksjonskallet. Vi kunne også lagt strengen i en variabel først og brukt variabelen i stedet.
            <Db />
            Navnene på argumentene er fullstendig valgfrie, men som vanlig er det lurt å gi dem meningsfulle navn. Det kan også være lurt å gjøre det åpenbart hvilken datatype argumentene har, dersom det ikke er åpenbart. Her er navnet på argumentet <Ic>navn</Ic>, som gjør det forholdsvis innlysende at argumentet må være en tekststreng. Koden ville for eksempel ha krasjet hvis vi hadde sendt inn et tall i stedet, ettersom vi ikke kan bruke <Ic>+</Ic>-operatoren på en streng og et tall direkte - som vi har sett før.
            <Db />
            En funksjon kan ha så mange argumenter vi vil. La oss ta en titt på oppgaven om Body Mass Index (BMI) fra posten om brukerinteraksjon. Formelen for BMI er <i>vekt / høyde<sup>2</sup></i>, hvor vekt og høyde måles i henholdsvis kilo og meter Slike matematiske formler er gode kandidater for egne funksjoner. Vi kan lage en funksjon som regner ut BMI:
            <CodeBlock>
                {`def regn_ut_bmi(vekt_i_kilo, høyde_i_meter):
    return vekt_i_kilo / (høyde_i_meter * høyde_i_meter)`}
            </CodeBlock>
            
            Vi kan f. eks. kalle denne funksjonen slik: 
            <CodeBlock>
                {`bmi = regn_ut_bmi(70, 1.80)`}
            </CodeBlock>
            Rekkefølgen på argumentene du sender inn i en funksjon er den samme rekkefølgen som de defineres i argumentlisten i funksjonsdefinisjonen. Det vil si at vi ikke kan bytte om rekkefølgen på argumentene i funksjonskallene våre. Her ser du også at vi har spesifisert enheten i argumentnavnene. Dette kan være lurt når de representerer fysiske størrelser, med mindre du har fastsatt en konvensjon om at f. eks. alle vekter skal oppgis i kilo.

            <h2>Standardargumenter og navngitte argumenter</h2>
            I en del tilfeller kan du støte på funksjoner som ikke påkrever at alle argumentene er satt - vi skal snakke litt om <i>standardargumenter</i> og <i>navngitte argumenter</i>. 
            <Db />
            Standardargumenter referer til argumenter som har en <i>standardverdi</i> som blir brukt hvis kalleren av funksjonen lar være å oppgi argumentet. 
            <Db />
            Vanligvis må man alltid bruke like mange argumenter i funksjonskallet som funksjonen har i argumentlisten i funksjonsdefinisjonen, men dette gjelder altså ikke for standardargumenter. La oss utvide <Ic>si_hei</Ic>-funksjonen fra tidligere med et nytt argument:
            <CodeBlock>
                {`def si_hei(navn, med_entusiasme):
    if med_entusiasme:
        print('HALLO ' + navn + ', SÅ HYGGELIG Å SE DEG DIN SUKKERKLUMP!!!')
    else:
        print('Hallo ' + navn + '!');`}
            </CodeBlock>
            Det nye argumentet er <Ic>med_entusiasme</Ic>, som er en boolsk variabel (altså må den inneholde enten <Ic>True</Ic> eller <Ic>False</Ic>). Dersom <Ic>med_entusiasme</Ic> er sann (<Ic>True</Ic>), kommer <Ic>si_hei</Ic> til å skrive en hakket mer entusiastisk hilsen til brukeren. Hvis argumentet er usant, får brukeren kun en moderat entusiastisk hilsen. For å kalle funksjonen må vi nå skrive f. eks.
            <CodeBlock>
                {`si_hei('Arne', False)`}
            </CodeBlock>

            <Db />
            La oss nå anta at de aller fleste brukerne foretrekker den mer entusiastiske hilsenen, altså at de aller fleste vil foretrekke å kalle funksjonen med <Ic>True</Ic> som siste argument. For å gjøre livet lettere for majoriteten av brukerne, kan vi gi <Ic>med_entusiasme</Ic> en standardverdi. Det gjør vi som følger:
            <CodeBlock>{`def si_hei(navn, med_entusiasme=True):
    if ...`}</CodeBlock>
            Vi har unnlatt å skrive resten av funksjonen, siden resten er det samme. Den eneste forskjellen her, er at vi har lagt på en <Ic>=True</Ic> etter <Ic>med_entusiasme</Ic>. Dette forteller Python at argumentet ikke er obligatorisk, og dersom det ikke er oppgitt, kan vi la den være <Ic>True</Ic>. Nå kan vi kalle funksjonen vår på begge disse måtene:
            <CodeBlock>
                {`si_hei('Arne')
si_hei('Arne', False)`}
            </CodeBlock>
            Her vil hilsenen til Arne skrives to ganger, den første gangen litt mer entusiastisk enn den andre.
            <Db />
            Vi leger på et standardargument til. Nå ser <Ic>si_hei</Ic>-funksjonen slik ut:
            <CodeBlock>
                {`def si_hei(navn, med_entusiasme=True, med_hjerter=True):
    if med_entusiasme:
        print('HALLO ' + navn + ', SÅ HYGGELIG Å SE DEG DIN SUKKERKLUMP!!!')
    else:
        print('Hallo ' + navn + '!');
    
    if med_hjerter:
        print('\\u2665\\u2665\\u2665')`}
            </CodeBlock>
            Det nye argumentet heter <Ic>med_hjerter</Ic>, og vi har satt standardverdien til <Ic>True</Ic>, under antakelsen om at mer er bedre. Hvis dette argumentet er sant, skrives tre hjerter til skjermen på linjen etter hilsenen. Hjertene kan skrus av og på uavhengig av entusiasme-parameteren. Her har vi brukt <i>unicode</i>-enkoding for å spesifisere hjertene. Unicode-enkoding lar deg putte spesialtegn inn i strenger ved å skrive <Ic>{`\\uxxxx`}</Ic>, hvor <Ic>x</Ic>-ene er koden for spesialtegnet du ønsker. For å finne koden for et tegn, kan du for eksempel søke på <a href="https://unicode-table.com/">unicode-table.com</a>. <Ic>2665</Ic> er koden for hjerte.
            <Db />
            Nå fungerer kallet slik som dette:

        </PostWrapper>
    </>
);

export default FunctionsNo;
