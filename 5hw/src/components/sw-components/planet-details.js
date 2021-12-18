import React from 'react'
import {ItemDetails, Record} from '../item-details';
import {withSwapiService} from '../hoc';


const PlanetDetails = withSwapiService(
  (props) => {
    return (
      <ItemDetails {...props}>
        <Record labelName='Population' fieldName='population' />
        <Record labelName='Rotation period' fieldName='rotationPeriod' />
        <Record labelName='Diameter' fieldName='diameter' />

      </ItemDetails>
    )
  },
  (swapi) => {
    return {
      getData: swapi.getPlanet,
      getImage: swapi.getPlanetImage
    }
  }
)

export default PlanetDetails;
