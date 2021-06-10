import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const FilesNo = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hei igjen! I denne posten skal vi se på filer og hvordan vi kan lage og bruke dem med Python. Hittil har vi belaget oss på at brukeren har sendt inn ekstern informasjon til programmet, men det er grenser for hvor lenge vi klarer å få en bruker til å sitte å mate programmet vårt. Her skal vi blant annet lære om hvordan vi kan lese informasjon fra filer, som vil la oss øke mengden data vi har å jobbe med dramatisk.
            <Db />
            Sannsynligvis har du allerede en formening om hva filer er i datasammenheng, ettersom hvert Python-program vi har skrevet må være lagret i en fil for å kunne kjøres. For denne postens formål kommer vi bare til å tenke på filer som en beholder med data som ligger på harddisken til maskinen og som har et eget navn. Filer kan inneholde data i et hvilket som helst format, for eksempel bilde, lyd eller regneark, men her kommer vi bare til å diskutere filer som inneholder tekst.

            <h2>Lesing av fil</h2>


        </PostWrapper>
    </>
);

export default FilesNo;