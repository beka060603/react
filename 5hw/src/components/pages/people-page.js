import React from 'react'
import {PeopleList, PlanetList, PersonDetails, PlanetDetails} from '../sw-components';
import {withRouter} from 'react-router-dom';
import Row from '../row';

class PeoplePage extends React.Component {
  onSelectItem = (id) => {
    this.props.history.push(id)
  }

  render() {
    const left = <PeopleList onSelectItem={this.onSelectItem} />
    const right = <PersonDetails selectedItem={this.props.selectedItem} />

    return (
      <Row
        leftElement={left}
        rightElement={right}
      />
    )
  }
}

export default withRouter(PeoplePage);
