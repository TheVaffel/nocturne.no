import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';

const PrefaceNo = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata}/>
    Det er mye å irritere seg over i denne verden.
    <Db />
    Noe jeg bruker mye tid på å irritere meg over, er hvor lite i denne verden jeg forstår. Og det er en del.
    <Db />
    Hvordan fungerer en bil, for eksempel? Drivstoff eller elektrisk energi går inn, eksos går ut og hjulene ruller - 
    men det er forstatt mange ubesvarte spørsmål. Er du heldig, kan du ett og annet om hvordan f. eks. en tradisjonell bil omdanner
    bensin til framdriftskraft, kanskje til og med har oversikt over de fysiske lovene som blir utnyttet i prosessen.
    <Db />
    Men når <i>forstår</i> man hvordan en bil fungerer? Selv med ekspertkunnskap om fysiske lover, motoranatomi
    og bilkjøring, vil det være spørsmål som står ubesvart, og som ligger et hakk utenfor hva vitenskapen tar for seg.
    <Db />
    <ul>
    <li>"Hvorfor er de fysiske lovene som de er?"</li> 
    <li>"Med hvilke incentiver ble (denne spesifikke) bilen konstruert?" </li>
    <li>"Hvordan har mennesket fått evnen til å forestille seg og lage slike doninger?" </li>
    </ul>
    <Db />
    Selvfølgelig vil de fleste si at det er unødvendig å kunne svare på disse spørsmålene for å <i>forstå</i> hvordan en bil fungerer.
    Men om man har svarene på ett eller flere av disse spørsmålene, har man også dykket lenger inn i sammenhengen bilen
    kommer fra og hører hjemme til. På samme måte vil kunnskap om de relevante fysiske formuleringene gi
    en <i>dypere forståelse</i> for hvordan bilen hører hjemme i den fysiske virkeligheten vi lever i.
    <Db />
    Men når <i>forstår</i> man hvordan en bil fungerer? Tydeligvis kan man bruke evigheter på å grave seg ned i kunnskap for å få en
    dypere <i>forståelse</i> for biler generelt, eller én bil spesielt. Det gir derfor mer mening å
    eksplisitt sette en grense for hvor mye - og hva slags - kunnskap man bør inneha for å ha <i>forstått</i> en bil.
    <Db />
    Hvor går grensen? 
    <Db />
    Trenger Jeg å <i>forstå</i> en bil for å snakke om den?
    <Db />
    Trenger jeg å <i>forstå</i> en bil for å kunne kjøre den? 
    <Db />
    Trenger jeg å <i>forstå</i> en bil for å kunne reparere den? 
    <Db />
    Trenger jeg å <i>forstå</i> en bil for å kunne lage den?
    <Db />
    Du har kanskje selv en formening om hvor du vil sette streken blant eksemplene over, men ordet
    <i>forstå</i> inneholder ikke noe eksakt kriterium som må være oppfylt for at noe skal være <i>forstått</i>.
    <Db />
    Hva vil vi egentlig formidle når vi sier at vi <i>forstår</i> hvordan biler fungerer? 
    Jeg kunne sagt det for å formidle at jeg vet hvordan drivstoffet forflytter seg i bilen, forbrennes og skaper
    skaper drivkraft i motoren (med andre ord, jeg ville løyet).
    <Db />
    Jeg kunne brukt samme setning til å formidle at jeg vet hvordan man skal trykke, tråkke og vri for å kjøre
    bilen (også en løgn, per skrivende stund).
    <Db />
    Hva det vil si at vi <i>forstår</i> hvordan biler fungerer er altså avhengig av hva vi vil formidle. 
    Det er konteksten som avgjør hva ordet <i>forstår</i> betyr. Jakten på <i>forståelse</i> kan altså være en
    et uendelig jag etter sammenhenger og kunnskap, men for enhver betydning av ordet finnes det et kunnskapsnivå som er <i>godt nok</i>.
    <Db />
    <Db />
    La oss snakke om programmering.
    <Db />
    Målet mitt med denne bloggserien er å gi deg, min kjære leser, en innføring i programmering i Python. 
    Jeg vil gi deg en forståelse for hvordan programmering fungerer, og hva det kan brukes til.

    <Db />
    Ordet <i>forståelse</i> i setningen over har jeg allerede brukt altfor mye plass på å definere, men det
    betyr altså at jeg vil gi deg en innføring som er <i>god nok</i> til å gjøre en del interessante ting
    med programmering <i>og</i> som er <i>god nok</i> til at du kan finne veien videre med andre
    ressurser for å lære mer om det du vil.
    <Db />
    Uavhengig om du har satt deg ned med denne bloggen med et konkret mål om å lære programmering for framtidig bruk,
    eller om du bare er nysgjerrig på hva programmering er (og om det er noe for deg?), håper jeg du finner det du leter etter
    her! 
    <Db />
    God fornøyelse!
    </>
);

export default PrefaceNo;