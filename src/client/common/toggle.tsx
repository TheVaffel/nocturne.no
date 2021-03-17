import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { LangContextStruct } from '../infrastructure/root';

import { LangContext } from '../infrastructure/root.tsx';

import { 
  replaceCurrentUrlLangPrefix } from '../infrastructure/root.tsx';

import './toggle.scss';

interface ToggleProps {
    state: boolean;
    name: string;
    onChange: (ev: boolean) => void;
    style?: Object;
    disabled?: boolean;
};

export const Toggle: React.FunctionComponent<ToggleProps> = (props) =>
    (<div className="toggle-switch" style={props.style}>
    <input
      type="checkbox"
      className="toggle-switch-checkbox"
      name={props.name}
      id={props.name}
      onChange={ev => props.onChange(ev.target.checked)}
      checked={props.state}
      disabled={props.disabled}
    />
    <label className={"toggle-switch-label " + (props.disabled ? "toggle-switch-label-disabled" : "")} htmlFor={props.name}>
      <span className={"toggle-switch-inner " + (props.disabled ? "toggle-switch-disabled" : "")} />
      <span className="toggle-switch-switch" />
    </label>
  </div>);

export const LangToggle: React.FunctionComponent<{style?: Object}> = (props) => {
  const langContext: LangContextStruct = React.useContext(LangContext);
  const history = useHistory();
  
  const onClick = (b: boolean) => {
      if (!langContext.canChange) {
        return;
      }

      langContext.setNorwegianAndCanChange({isNorwegian: !b, canChange: true});
      const newUrl = replaceCurrentUrlLangPrefix(b ? 'en' : 'no', history.location.pathname);
      history.push(newUrl);
  }

  return <Toggle state={!langContext.isNorwegian} name='oeunthoeu' style={props.style} 
            onChange={onClick} disabled={!langContext.canChange} />
};