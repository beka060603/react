import React from 'react'
import ItemList from '../item-list';
import {withSwapiService} from '../hoc';


const PeopleList = withSwapiService(
  (props) => {
    return (
      <ItemList {...props}>
        {
          (item) => `${item.name} - (${item.gender})`
        }
      </ItemList>
    )
  },
  (swapi) => {
    return {
      getData: swapi.getAllPeople
    }
  }
)

const PlanetList = withSwapiService(
  (props) => {
    return (
      <ItemList {...props}>
        {
          (item) => `${item.name} - (${item.population})`
        }
      </ItemList>
    )
  },
  (swapi) => {
    return {
      getData: swapi.getAllPlanets
    }
  }
)

export {PeopleList, PlanetList}
