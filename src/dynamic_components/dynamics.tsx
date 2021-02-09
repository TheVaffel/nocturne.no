import * as React from 'react';
import { Suspense } from 'react';

const DynamicWrapper = function<T>(Component: React.FunctionComponent<T>): React.FunctionComponent<T> {
      return (props) => (<div>
             <Suspense fallback={<div>Loading...</div>}>
             <Component {...props} />
             </Suspense>
             </div>);
}

const getLazy = function<T>(str: string) : React.FunctionComponent<T> {

      const Component = React.lazy(() => import('./' + str + '.tsx'));

      return DynamicWrapper<T>(Component);
}

export const DynamicComponent0 = getLazy<{ param: string }> ('DynamicHello0');
export const DynamicComponent1 = getLazy<{ param: string }> ('DynamicHello1');
