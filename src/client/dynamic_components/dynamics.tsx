import * as React from 'react';
import { Suspense } from 'react';

const DynamicWrapper = function<T>(Component: React.FunctionComponent<T>): React.FunctionComponent<T> {
      return (props) => (<div>
             <Suspense fallback={<div>Loading...</div>}>
             <Component {...props} />
             </Suspense>
             </div>);
}

export const getLazy = function<T>(str: string) : React.FunctionComponent<T> {
      console.log("Lazy-getting dynamic file " + str);
      const Component = React.lazy(() => import('./' + str));

      return DynamicWrapper<T>(Component);
}

interface DynamicWrapperState<T> {
      component: React.FunctionComponent<T>;
}

export interface DWCExtraProps {
      _dcw_fileName: string;
};

export class DynamicComponentWrapper<T> 
extends React.Component<T & { _dcw_fileName: string }, DynamicWrapperState<T>> {
      constructor(props: T & { _dcw_fileName: string }) {
            super(props);
            this.state = {
                  component: undefined
            };
      }

      componentDidMount() {
            const lazyComp: React.FunctionComponent<T> = 
                  getLazy<T>(this.props._dcw_fileName);
            this.setState({ component: lazyComp})
      }

      render() {
            return this.state.component == undefined ? <></> : <this.state.component {...this.props} />;
      }
}

export const SiteIndex = getLazy<{}> ('site_index.tsx');
