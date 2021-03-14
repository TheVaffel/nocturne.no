import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { getLangIsNorwegian, getLangCanChange, replaceCurrentUrlLangPrefix } from '../infrastructure/root.tsx';

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

  export const LangToggle: React.FunctionComponent<{style?: Object}> = (props) =>
  {
    const isNorw = getLangIsNorwegian();
    const canChange = getLangCanChange();
    const history = useHistory();
    const location = useLocation(); // To force update on url change

    const onClick = (b: boolean) => {
      const isNorw = getLangIsNorwegian();
      const canChange = getLangCanChange();

      if (!canChange) {
        return;
      }

      const newPref = (isNorw ? 'en' : 'no');
      const newUrl = replaceCurrentUrlLangPrefix(newPref);
      history.push(newUrl);
    };

    return <Toggle state={!isNorw} name='oentuho' style={props.style}
      onChange={onClick} disabled={!canChange} />
  };