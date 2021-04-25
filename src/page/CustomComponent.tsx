import {Route} from '@react-navigation/core';
import React from 'react';

interface ComponentProps {
  route: Route<
    string,
    {
      component: React.FC;
    }
  >;
}

const CustomComponent: React.FC<ComponentProps> = ({route}) => {
  const {component: Component} = route.params;
  return <Component />;
};

export default CustomComponent;
