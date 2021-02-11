import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './hello.tsx';
import { Root } from './root.tsx';

ReactDOM.render(
	(<Root />),
	document.getElementById('hello')
);
