import React from 'react'
import {ItemDetails, Record} from '../item-details';
import {withSwapiService} from '../hoc';


const PersonDetails = withSwapiService(
  (props) => {
    return (
      <ItemDetails {...props}>
        <Record labelName='Gender' fieldName='gender' />
        <Record labelName='Birth year' fieldName='birthYear' />
        <Record labelName='Eye color' fieldName='eyeColor' />
      </ItemDetails>
    )
  },
  (swapi) => {
    return {
      getData: swapi.getPerson,
      getImage: swapi.getPersonImage
    }
  }
)

export default PersonDetails;
