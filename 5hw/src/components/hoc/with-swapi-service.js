import React from 'react';
import {Consumer} from '../swapi-context';

const withSwapiService = (Component, mapMethodsToProps) => {
  return (props) => {
    return (
      <Consumer>
        {
          (swapi) => {
            const necessaryMethods = mapMethodsToProps(swapi)
            return <Component {...necessaryMethods} {...props} />
          }
        }
      </Consumer>
    )
  }
}

export default withSwapiService;
