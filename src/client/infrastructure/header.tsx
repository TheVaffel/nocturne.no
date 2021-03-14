import * as React from 'react';
import { Route } from 'react-router-dom';

import { GlobalProps } from './root.tsx';
import { TopButtonRow } from './button_row.tsx';

import { Toggle, LangToggle } from '../common/toggle.tsx';

export const Header : React.FunctionComponent<GlobalProps> = (props) =>
   {
      return (<div>
       <h1>Nocturne.no</h1>
       <Route exact path={["/en*", "/"]}>
         <h2>    - Home of a blog or two</h2>
      </Route>
      <Route path="/no*">
         <h2>    - Hjemmet til en blogg, eller to</h2>
      </Route>
      <LangToggle style={{float: "right"}}/>
       <br/>
       <TopButtonRow />
       </div>);
   }