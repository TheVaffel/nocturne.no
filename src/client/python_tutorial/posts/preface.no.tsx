import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';

const PrefaceNo = (props: TutorialPostProps) => (
    <>
    <PostWrapper  metadata={props.metadata}>
    Velkommen til en introduksjon til Python!
    <Db />
    Målet mitt med denne bloggserien er å gi deg en innføring i <b>programmering</b> (eller <b>koding</b>) i Python. 
    Etter å ha lest denne bloggen, vil jeg at du skal sitte igjen med en 
    forståelse for hvordan programmering fungerer og hva det kan brukes til.

    <Db />
    Ordet <i>forståelse</i> er tålelig vagt, og er i det hele tatt vanskelig å definere skikkelig. Her er en annen
    (og kanskje enda vagere) vinkling: Jeg vil gi deg en innføring som er god nok til at du blir i stand til å gjøre
    en rekke interessante ting med Python, <i>og</i> til at du kan finne veien videre med andre ressurser for å lære mer om
    akkurat det du er mest interessert i.
    <Db />
    I dét jeg skriver dette, har jeg ennå ikke startet på selve programmeringsinnholdet i bloggen (men jeg kommer til å begynne snart, lover!).
    Det er altså en sjanse for at bloggen ikke er ferdigskrevet når du starter lesingen.
    Jeg har per nå ingen fast plan for når nye innlegg skal bli skrevet eller lagt ut, eller hvor mange innlegg jeg vil ha, men
    målet er at nye innlegg i den grunnleggende delen av innføringen skal komme ut med noen dagers, maks én ukes mellomrom.
    Du kan følge med på <a href="https://github.com/TheVaffel/nocturne.no">Github-siden</a> til denne nettsiden
    for å få en idé om hvilken del av dette nettstedet jeg legger arbeid i til en hver tid (om jeg ikke satser all 
    tid på et helt annet plutselig innfall). Her kan du også komme med forslag til forbedringer dersom noe i
    bloggen er uklart eller ukomfortabelt. Det er en sjanse for at bloggen får sitt eget kommentarfelt en gang i framtiden,
    og i såfall kan diskusjonen flyttes hit.
    <Db />
    Til slutt i dette forordet vil jeg si noe litt mer konkret om programmering: Programmering består av to hovedkomponenter.
    Det første er å lære seg grunnkonseptene og "programmeringstenkemåten", som er helt nødvendig for å sette nye ideer ut i live med programmering. 
    Brorparten av denne bloggen er dedikert til å hjelpe deg med dette.
    Likevel, for å kunne jobbe med mer avanserte (og mer spennende?) konsepter som å lage og tegne til vinduer, spille av lyd,
    lage nettservere og mye annet du kan ha lyst til å lage, må du også kunne bruke andres kode som byggeklosser. Mange 
    ting (slik som nettopp vinduer) er enormt upraktiske å lage på egen hånd, spesielt i Python, slik at det å benytte seg av byggeklosser,
    ofte kalt <b>biblioteker</b>, er nødvendig. Det å søke opp og lese dokumentasjon for slike biblioteker er en treningssak, men
    en introduksjon til hvordan dette kan gjøres vil bli gitt mot slutten av denne innføringen. 
    <Db />
    Det at bruk av andres kode er en såpass fundamental del av all programmeringsvirksomhet,
    gjør at du bør være forberedt på å måtte lære mye nytt når du koder. De fleste (alle?) fagfelt
    pleier å skilte med at man "blir aldri utlært", og dette er i aller høyeste grad tilfellet for programmering også.
    Det å oppsøke ny kunnskap er rett og slett en viktig del av det å kode.
    <Db />
    Det får være nok svada for denne gang, det er på tide å få litt kode under neglene! 
    <Db />
    Uavhengig om du har satt deg ned med denne bloggen med et konkret mål om å lære programmering for framtidig bruk,
    eller om du bare er nysgjerrig på hva programmering er (og om det er noe for deg), håper jeg du finner det du leter etter
    i denne bloggen! 
    <Db />
    God fornøyelse og lykke til!
    </PostWrapper>
    </>
);

export default PrefaceNo;
