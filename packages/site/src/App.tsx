import React from 'react';
import { withStore } from 'react-context-hook'
import Content from './components/Layout/Content/Component'

function Component() {
  return (
    <Content />
  );
}

export default withStore(Component);




