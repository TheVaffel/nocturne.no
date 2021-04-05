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
    Men når <i>forstår</i> man hvordan en bil fungerer? 
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
    Uansett, la oss snakke om programmering.
    <Db />
    Målet mitt med denne bloggserien er å gi deg, min kjære leser, en innføring i programmering i Python. 
    Jeg vil gi deg en forståelse for hvordan programmering fungerer, og hva det kan brukes til.

    <Db />
    Ordet <i>forståelse</i> i setningen over har jeg allerede brukt altfor mye plass på å definere.
    I likhet med prosessen det er å <i>forstå</i> en bil, er det å <i>forstå</i> programmering et evighetsprosjekt,
    og du vil sannsynligvis ha mange spørsmål igjen etter å ha lest gjennom det jeg har å si.
    
    Målet er derfor å gi deg en innføring som er <i>god nok</i> til å gjøre en del interessante ting
    med programmering <i>og</i> som er <i>god nok</i> til at du kan finne veien videre med andre
    ressurser for å lære mer om det du vil.
    <Db />
    I dét jeg skriver dette, har jeg ennå ikke startet på selve programmeringsinnholdet i bloggen (men jeg kommer til å begynne snart, lover!).
    Det er altså en sjanse for at bloggen ikke ennå er ferdigskrevet når du starter lesingen.
    Jeg har per nå ingen fast plan for når nye innlegg skal bli skrevet eller lagt ut, men
    målet er at nye innlegg i den grunnleggende delen av innføringen skal komme ut med et par dagers, maks én ukes mellomrom.
    Du kan følge med på <a href="https://github.com/TheVaffel/nocturne.no">Github-siden</a> til denne bloggen
    for å få en idé om hvilken del av dette nettstedet jeg legger arbeid i til en hver tid.
    <Db />
    Til slutt vil jeg gjøre én ting klart om programmering: Det består av to hovedkomponenter.
    Det å lære seg grunnkonseptene og "programmeringstenkemåten" er helt nødvendig for å programmere, men for å 
    kunne jobbe med mer avanserte (og mer spennende?) konsepter som å lage og tegne til vinduer, spille av lyd,
    lage nettservere og mye annet du kan ha lyst til å lage, må du også kunne bruke andres kode som byggeklosser. Mange 
    ting (slik som nettopp vinduer) er enormt upraktiske å lage på egen hånd, spesielt i Python, slik at det å benytte seg av byggeklosser,
    ofte kalt <b>biblioteker</b>, er nødvendig. Det å søke opp og lese dokumentasjon for slike biblioteker er en treningssak, men
    en introduksjon til hvordan dette kan gjøres vil bli gitt mot slutten av denne innføringen.
    <Db />
    Uavhengig om du har satt deg ned med denne bloggen med et konkret mål om å lære programmering for framtidig bruk,
    eller om du bare er nysgjerrig på hva programmering er (og om det er noe for deg), håper jeg du finner det du leter etter
    framover i bloggen! 
    <Db />
    God fornøyelse og lykke til!
    </>
);

export default PrefaceNo;