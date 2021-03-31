import * as React from 'react';

import { TopButtonRow } from './button_row.tsx';

import { LangToggle } from '../common/toggle.tsx';
import { LangContext, LangContextStruct } from './root.tsx';

const headerTexts = ['    - Hjemmet til en blogg, eller to',
                     '    - Home of a blog or two'];

export const Header : React.FunctionComponent<{}> = () =>
   {
      const langState : LangContextStruct = React.useContext(LangContext);
      return (<div>
       <h1>Nocturne.no</h1>
       <h2>{headerTexts[Math.max(0, langState.langIndex)]}</h2>
       <LangToggle style={{float: "right"}}/>
       <br/>
       <TopButtonRow />
       </div>);
   }